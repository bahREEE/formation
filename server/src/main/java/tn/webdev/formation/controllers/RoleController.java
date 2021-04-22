package tn.webdev.formation.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tn.webdev.formation.dao.RoleRepository;
import tn.webdev.formation.entities.AppRole;

@RestController
@RequestMapping("/roles")
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
    public AppRole addRole(@RequestBody AppRole role){
        return roleRepository.save(role);
    }

    @DeleteMapping(value = "/")
    public List<AppRole> deleteallroles(){
        List<AppRole> r = new ArrayList<>();
        r = roleRepository.findAll();
        roleRepository.deleteAll();
        return r;
    }

    @DeleteMapping(value = "/{id}")
    public AppRole deletearole(@PathVariable Long id){
        AppRole r = new AppRole();
        r = roleRepository.findById(id).orElseThrow();
        roleRepository.deleteById(id);
        return r;
    }

}
