package tn.webdev.formation.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import tn.webdev.formation.dao.RoleRepository;
import tn.webdev.formation.dao.UserRepository;
import tn.webdev.formation.dto.UserRequest;
import tn.webdev.formation.entities.AppRole;
import tn.webdev.formation.entities.AppUser;
import tn.webdev.formation.entities.ERole;
import tn.webdev.formation.entities.SessionFormation;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {
    
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;


    @Autowired
    private RoleRepository roleRepository;


    @GetMapping(value = "/")
    @PreAuthorize("hasRole('ADMIN')")
    public List<AppUser> getusers(){
        return userRepository.findAll();
    }

    @GetMapping(value = "/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public AppUser getUser(@PathVariable Long id){
        return userRepository.findById(id).orElseThrow();
    }

    @PostMapping(value = "/")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> addUser(@RequestBody UserRequest user){
        System.out.println(user.getRole());
        AppUser newUser = new AppUser();
        newUser.setUsername((user.getUsername()));
        newUser.setPassword(passwordEncoder.encode(user.getPassword()));
        addRoleToUser(newUser,user.getRole());
        userRepository.save(newUser);
        return new ResponseEntity<>("User added successfully", HttpStatus.OK);
    }


    @PutMapping(value = "/")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> updateuser(@RequestBody  AppUser user){
        if(user.getId()==null)
            return new ResponseEntity<>("No user provided",HttpStatus.BAD_REQUEST);
        if(userRepository.findById(user.getId())==null)
            return new ResponseEntity<>("No user with the provided id",HttpStatus.BAD_REQUEST);

        userRepository.save(user);
        return new ResponseEntity<>("user updated successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> deleteallusers(){
        userRepository.deleteAll();
        return new ResponseEntity<>("All users deleted successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> deleteauser(@PathVariable Long id){
        userRepository.deleteById(id);
        return new ResponseEntity<>("User deleted successfully", HttpStatus.OK);
    }

    private void addRoleToUser(AppUser user, String role) {

        List<AppRole>roles=new ArrayList<>();
        switch (role){
            case "ROLE_USER":roles.add(roleRepository.findByroleName(ERole.ROLE_USER));
                break;
            case "ROLE_ADMIN":roles.add(roleRepository.findByroleName(ERole.ROLE_ADMIN));
                break;
            default: new RuntimeException("Error: Role not found!");
        }
        user.setRoles(roles);

    }

}
