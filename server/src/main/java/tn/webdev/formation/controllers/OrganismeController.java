package tn.webdev.formation.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import tn.webdev.formation.dao.OrganismeRepository;
import tn.webdev.formation.entities.Formation;
import tn.webdev.formation.entities.Organisme;

@RestController
@RequestMapping("/organismes")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class OrganismeController {
    
    @Autowired
    private OrganismeRepository organismeRepository;

    @GetMapping(value = "/")
    public List<Organisme> getorganismes(){
        return organismeRepository.findAll();
    }

    @GetMapping(value = "/{id}")
    public Organisme getAnorganisme(@PathVariable Long id){
        return organismeRepository.findById(id).orElseThrow();
    }

    @PostMapping(value = "/")
    public ResponseEntity<String> addOrganisme(@RequestBody Organisme organisme){
        organismeRepository.save(organisme);
        return new ResponseEntity<>("Organisme added successfully", HttpStatus.OK);
    }

    @PutMapping(value = "/")
    public ResponseEntity<String> updateFormateur(@RequestBody Organisme organisme){
        if(organisme.getId()==null)
            return new ResponseEntity<>("No organisme provided",HttpStatus.BAD_REQUEST);
        if(organismeRepository.findById(organisme.getId())==null)
            return new ResponseEntity<>("No organisme with the provided id",HttpStatus.BAD_REQUEST);

        organismeRepository.save(organisme);
        return new ResponseEntity<>("organisme updated successfully", HttpStatus.OK);
    }




    @DeleteMapping(value = "/")
    public ResponseEntity<String> deleteallorganismes(){
        organismeRepository.deleteAll();
        return new ResponseEntity<>("All organismes deleted successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<String> deleteanorganisme(@PathVariable Long id){
        organismeRepository.deleteById(id);
        return new ResponseEntity<>("Organisme deleted successfully", HttpStatus.OK);
    }

}
