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

import tn.webdev.formation.dao.DomaineRepository;
import tn.webdev.formation.entities.Domaine;

@RestController
public class DomaineController {
    
    @Autowired
    private DomaineRepository domaineRepository;

    @GetMapping(value = "/domaines")
    public List<Domaine> getdomaines(){
        return domaineRepository.findAll();
    }

    @GetMapping(value = "/domaine/{id}")
    public Domaine getAdomaine(@PathVariable Long id){
        return domaineRepository.findById(id).orElseThrow();
    }

    @PostMapping(value = "/addDomaine")
    public ResponseEntity<String> adddomaine(@RequestBody Domaine domaine){
        domaineRepository.save(domaine);
        return new ResponseEntity<>("Domaine added successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/deleteAllDomaines")
    public ResponseEntity<String> deletealldomaines(){
        domaineRepository.deleteAll();
        return new ResponseEntity<>("All domaines deleted successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/deletedomaine/{id}")
    public ResponseEntity<String> deleteadomaine(@PathVariable Long id){
        domaineRepository.deleteById(id);
        return new ResponseEntity<>("Domaine deleted successfully", HttpStatus.OK);
    }

}
