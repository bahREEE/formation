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

import tn.webdev.formation.dao.OrganismeRepository;
import tn.webdev.formation.entities.Organisme;

@RestController
public class OrganismeController {
    
    @Autowired
    private OrganismeRepository organismeRepository;

    @GetMapping(value = "/organismes")
    public List<Organisme> getorganismes(){
        return organismeRepository.findAll();
    }

    @GetMapping(value = "/organisme/{id}")
    public Organisme getAnorganisme(@PathVariable Long id){
        return organismeRepository.findById(id).orElseThrow();
    }

    @PostMapping(value = "/addorganisme")
    public ResponseEntity<String> addOrganisme(@RequestBody Organisme organisme){
        organismeRepository.save(organisme);
        return new ResponseEntity<>("Organisme added successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/deleteAllorganismes")
    public ResponseEntity<String> deleteallorganismes(){
        organismeRepository.deleteAll();
        return new ResponseEntity<>("All organismes deleted successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/deleteorganisme/{id}")
    public ResponseEntity<String> deleteanorganisme(@PathVariable Long id){
        organismeRepository.deleteById(id);
        return new ResponseEntity<>("Organisme deleted successfully", HttpStatus.OK);
    }

}
