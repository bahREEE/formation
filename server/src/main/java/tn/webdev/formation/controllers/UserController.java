package tn.webdev.formation.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import tn.webdev.formation.dao.RoleRepository;
import tn.webdev.formation.dao.UserRepository;
import tn.webdev.formation.entities.AppRole;
import tn.webdev.formation.entities.AppUser;
import tn.webdev.formation.entities.ERole;

@RestController
public class UserController {
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @GetMapping(value = "/users")
    public List<AppUser> getusers(){
        return userRepository.findAll();
    }

    @GetMapping(value = "/user/{id}")
    public AppUser getAuser(@PathVariable Long id){
        return userRepository.findById(id).orElseThrow();
    }

    @PostMapping(value = "/addUser")
    public ResponseEntity<String> addRole(@RequestBody AppUser user){
        addRoleToUser(user,"ADMINISTRATEUR");
        userRepository.save(user);
        return new ResponseEntity<>("User added successfully", HttpStatus.OK);
    }

    @PutMapping(value = "/updateuser/{id}")
    public ResponseEntity<String> updateuser(@PathVariable Long id, @RequestBody AppUser user){
        user.setId(id);
        userRepository.save(user);
        return new ResponseEntity<>("User updated successfully !", HttpStatus.OK);
    }

    @DeleteMapping(value = "/deleteallusers")
    public ResponseEntity<String> deleteallusers(){
        userRepository.deleteAll();
        return new ResponseEntity<>("All users deleted successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/deleteuser/{id}")
    public ResponseEntity<String> deleteauser(@PathVariable Long id){
        userRepository.deleteById(id);
        return new ResponseEntity<>("User deleted successfully", HttpStatus.OK);
    }

    private void addRoleToUser(AppUser user, String role) {

        List<AppRole>roles=new ArrayList<>();
        switch (role){
            case "SIMPLE_UTILISATEUR":roles.add(roleRepository.findByroleName(ERole.SIMPLE_UTILISATEUR));
                break;
            case "ADMINISTRATEUR":roles.add(roleRepository.findByroleName(ERole.ADMINISTRATEUR));
                break;
            default: new RuntimeException("Error: Role not found!");
        }
        user.setRoles(roles);

    }

}
