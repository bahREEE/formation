package tn.webdev.formation.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import tn.webdev.formation.dao.PaysRepository;
import tn.webdev.formation.entities.Pays;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


@RestController
@RequestMapping("/pays")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PaysController {
    
    @Autowired
    private PaysRepository paysRepository;

    @GetMapping(value = "/")
    public List<Pays> getallpays(){
        return paysRepository.findAll();
    }

    @GetMapping(value = "/{id}")
    public Pays getpays(@PathVariable Long id){
        return paysRepository.findById(id).orElseThrow();
    }

    @PostMapping(value = "/")
    public ResponseEntity<String> addpays(@RequestBody Pays pays){
        paysRepository.save(pays);
        return new ResponseEntity<>("Pays added successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/")
    public ResponseEntity<String> deleteallpays(){
        paysRepository.deleteAll();
        return new ResponseEntity<>("All pays deleted successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<String> deletepays(@PathVariable Long id){
        paysRepository.deleteById(id);
        return new ResponseEntity<>("Pays deleted successfully", HttpStatus.OK);
    }

}
