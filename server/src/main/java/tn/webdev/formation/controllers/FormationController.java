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
    public ResponseEntity<String> addformation(@RequestBody Formation formation){
        formationRepository.save(formation);
        return new ResponseEntity<>("Formation added successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/deleteAllFormations")
    public ResponseEntity<String> deleteallformations(){
        formationRepository.deleteAll();
        return new ResponseEntity<>("All formations deleted successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/deleteformation/{id}")
    public ResponseEntity<String> deleteaformation(@PathVariable Long id){
        formationRepository.deleteById(id);
        return new ResponseEntity<>("Formation deleted successfully", HttpStatus.OK);
    }

}
