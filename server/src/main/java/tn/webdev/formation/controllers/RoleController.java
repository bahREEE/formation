package tn.webdev.formation.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import tn.webdev.formation.dao.RoleRepository;
import tn.webdev.formation.entities.AppRole;

@RestController
@RequestMapping("/role")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RoleController {
    
    @Autowired
    private RoleRepository roleRepository;

    @GetMapping(value = "/")
    public List<AppRole> getroles(){
        return roleRepository.findAll();
    }

    @GetMapping(value = "/{id}")
    public AppRole getArole(@PathVariable Long id){
        return roleRepository.findById(id).orElseThrow();
    }

    @PostMapping(value = "/")
    public ResponseEntity<String> addRole(@RequestBody AppRole role){
        roleRepository.save(role);
        return new ResponseEntity<>("Role added successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/")
    public ResponseEntity<String> deleteallroles(){
        roleRepository.deleteAll();
        return new ResponseEntity<>("All roles deleted successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<String> deletearole(@PathVariable Long id){
        roleRepository.deleteById(id);
        return new ResponseEntity<>("Role deleted successfully", HttpStatus.OK);
    }

}
