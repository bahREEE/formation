package tn.webdev.formation.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import tn.webdev.formation.dao.PaysRepository;
import tn.webdev.formation.entities.Pays;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class PaysController {
    
    @Autowired
    private PaysRepository paysRepository;

    @GetMapping(value = "/pays")
    public List<Pays> getallpays(){
        return paysRepository.findAll();
    }

    @GetMapping(value = "/pays/{id}")
    public Pays getpays(@PathVariable Long id){
        return paysRepository.findById(id).orElseThrow();
    }

    @PostMapping(value = "/addpays")
    public ResponseEntity<String> addpays(@RequestBody Pays pays){
        paysRepository.save(pays);
        return new ResponseEntity<>("Pays added successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/deleteallpays")
    public ResponseEntity<String> deleteallpays(){
        paysRepository.deleteAll();
        return new ResponseEntity<>("All pays deleted successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/deletepays/{id}")
    public ResponseEntity<String> deletepays(@PathVariable Long id){
        paysRepository.deleteById(id);
        return new ResponseEntity<>("Pays deleted successfully", HttpStatus.OK);
    }

}
