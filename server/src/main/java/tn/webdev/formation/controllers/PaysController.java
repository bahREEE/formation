package tn.webdev.formation.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import tn.webdev.formation.dao.PaysRepository;
import tn.webdev.formation.entities.Participant;
import tn.webdev.formation.entities.Pays;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;


@RestController
@RequestMapping("/pays")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PaysController {
    
    @Autowired
    private PaysRepository paysRepository;

    @GetMapping(value = "/")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public List<Pays> getallpays(){
        return paysRepository.findAll();
    }

    @GetMapping(value = "/{id}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public Pays getpays(@PathVariable Long id){
        return paysRepository.findById(id).orElseThrow();
    }

    @PostMapping(value = "/")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> addpays(@RequestBody Pays pays){
        paysRepository.save(pays);
        return new ResponseEntity<>("Pays added successfully", HttpStatus.OK);
    }

    @PutMapping(value = "/")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> updatepays(@RequestBody Pays pays){
        if(pays.getId()==null)
            return new ResponseEntity<>("No country provided",HttpStatus.BAD_REQUEST);
        if(paysRepository.findById(pays.getId())==null)
            return new ResponseEntity<>("No country with the provided id",HttpStatus.BAD_REQUEST);

        paysRepository.save(pays);
        return new ResponseEntity<>("country updated successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> deleteallpays(){
        paysRepository.deleteAll();
        return new ResponseEntity<>("All pays deleted successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> deletepays(@PathVariable Long id){
        paysRepository.deleteById(id);
        return new ResponseEntity<>("Pays deleted successfully", HttpStatus.OK);
    }

}
