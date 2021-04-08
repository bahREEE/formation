package tn.webdev.formation.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import tn.webdev.formation.dao.RoleRepository;
import tn.webdev.formation.entities.AppRole;

@RestController
public class RoleController {
    
    @Autowired
    private RoleRepository roleRepository;

    @GetMapping(value = "/roles")
    public List<AppRole> getroles(){
        return roleRepository.findAll();
    }

    @GetMapping(value = "/role/{id}")
    public AppRole getArole(@PathVariable Long id){
        return roleRepository.findById(id).orElseThrow();
    }

    @PostMapping(value = "/addRole")
    public ResponseEntity<String> addRole(@RequestBody AppRole role){
        roleRepository.save(role);
        return new ResponseEntity<>("Role added successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/deleteAllRoles")
    public ResponseEntity<String> deleteallroles(){
        roleRepository.deleteAll();
        return new ResponseEntity<>("All roles deleted successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/deleterole/{id}")
    public ResponseEntity<String> deletearole(@PathVariable Long id){
        roleRepository.deleteById(id);
        return new ResponseEntity<>("Role deleted successfully", HttpStatus.OK);
    }

}
