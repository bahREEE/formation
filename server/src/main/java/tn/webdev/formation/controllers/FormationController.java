package tn.webdev.formation.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import tn.webdev.formation.dao.FormationRepository;
import tn.webdev.formation.entities.Formation;

@RestController
public class FormationController {
    
    @Autowired
    private FormationRepository formationRepository;

    @GetMapping(value = "/formations")
    public List<Formation> getformations(){
        return formationRepository.findAll();
    }

    @GetMapping(value = "/formation/{id}")
    public Formation getAformation(@PathVariable Long id){
        return formationRepository.findById(id).orElseThrow();
    }

    @PostMapping(value = "/addFormation")
    public Formation addformation(@RequestBody Formation formation){
        return formationRepository.save(formation);
    }

    @DeleteMapping(value = "/deleteAllFormations")
    public List<Formation> deleteallformations(){
        List<Formation> l = new ArrayList<>();
        l = formationRepository.findAll();
        formationRepository.deleteAll();
        return l;
    }

    @DeleteMapping(value = "/deleteformation/{id}")
    public Formation deleteaformation(@PathVariable Long id){
        Formation f = new Formation();
        f = formationRepository.findById(id).orElseThrow();
        formationRepository.deleteById(id);
        return f;
    }

}
