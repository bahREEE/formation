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

import tn.webdev.formation.dao.FormateurRepository;
import tn.webdev.formation.entities.Formateur;

@RestController
public class FormateurController {
    
    @Autowired
    private FormateurRepository formateurRepository;

    @GetMapping(value = "/formateurs")
    public List<Formateur> getformateurs(){
        return formateurRepository.findAll();
    }

    @GetMapping(value = "/formateur/{id}")
    public Formateur getAformateur(@PathVariable Long id){
        return formateurRepository.findById(id).orElseThrow();
    }

    @PostMapping(value = "/addFormateur")
    public ResponseEntity<String> addFormateur(@RequestBody Formateur formateur){
        formateurRepository.save(formateur);
        return new ResponseEntity<>("Formateur added successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/deleteAllFormateurs")
    public ResponseEntity<String> deleteallformateur(){
        formateurRepository.deleteAll();
        return new ResponseEntity<>("All formateurs deleted successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/deleteformateur/{id}")
    public ResponseEntity<String> deleteauformateur(@PathVariable Long id){
        formateurRepository.deleteById(id);
        return new ResponseEntity<>("User deleted successfully", HttpStatus.OK);
    }
}
