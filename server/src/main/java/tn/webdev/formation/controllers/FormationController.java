package tn.webdev.formation.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import tn.webdev.formation.dao.FormationRepository;
import tn.webdev.formation.entities.Formateur;
import tn.webdev.formation.entities.Formation;

@RestController
@RequestMapping("/formations")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FormationController {
    
    @Autowired
    private FormationRepository formationRepository;

    @GetMapping(value = "/")
    @PreAuthorize("hasRole('ADMINISTRATEUR')")
    public List<Formation> getformations(){
        return formationRepository.findAll();
    }

    @GetMapping(value = "/{id}")
    @PreAuthorize("hasRole('ADMINISTRATEUR')")
    public Formation getAformation(@PathVariable Long id){
        return formationRepository.findById(id).orElseThrow();
    }

    @PostMapping(value = "/")
    @PreAuthorize("hasRole('ADMINISTRATEUR')")
    public ResponseEntity<String> addformation(@RequestBody Formation formation){
        System.out.println(formation.getDomaine());
        formationRepository.save(formation);
        return new ResponseEntity<>("Formation added successfully", HttpStatus.OK);
    }


    @PutMapping(value = "/")
    @PreAuthorize("hasRole('ADMINISTRATEUR')")
    public ResponseEntity<String> updateFormateur(@RequestBody Formation formation){
        if(formation.getId()==null)
            return new ResponseEntity<>("No formation provided",HttpStatus.BAD_REQUEST);
        if(formationRepository.findById(formation.getId())==null)
            return new ResponseEntity<>("No formation with the provided id",HttpStatus.BAD_REQUEST);

        formationRepository.save(formation);
        return new ResponseEntity<>("formation updated successfully", HttpStatus.OK);
    }



    @DeleteMapping(value = "/")
    @PreAuthorize("hasRole('ADMINISTRATEUR')")
    public ResponseEntity<String> deleteallformations(){
        formationRepository.deleteAll();
        return new ResponseEntity<>("All formations deleted successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    @PreAuthorize("hasRole('ADMINISTRATEUR')")
    public ResponseEntity<String> deleteaformation(@PathVariable Long id){
        formationRepository.deleteById(id);
        return new ResponseEntity<>("Formation deleted successfully", HttpStatus.OK);
    }

}
