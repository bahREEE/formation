package tn.webdev.formation.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import tn.webdev.formation.dao.DomaineRepository;
import tn.webdev.formation.entities.Domaine;

@RestController
@RequestMapping("/domaines")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class DomaineController {
    
    @Autowired
    private DomaineRepository domaineRepository;

    @GetMapping(value = "/")
    public List<Domaine> getdomaines(){
        return domaineRepository.findAll();
    }

    @GetMapping(value = "/{id}")
    public Domaine getAdomaine(@PathVariable Long id){
        return domaineRepository.findById(id).orElseThrow();
    }

    @PostMapping(value = "/")
    public ResponseEntity<String> adddomaine(@RequestBody Domaine domaine){
        domaineRepository.save(domaine);
        return new ResponseEntity<>("Domaine added successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/")
    public ResponseEntity<String> deletealldomaines(){
        domaineRepository.deleteAll();
        return new ResponseEntity<>("All domaines deleted successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<String> deleteadomaine(@PathVariable Long id){
        domaineRepository.deleteById(id);
        return new ResponseEntity<>("Domaine deleted successfully", HttpStatus.OK);
    }

}
