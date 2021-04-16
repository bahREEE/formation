package tn.webdev.formation.controllers;

import tn.webdev.formation.dao.SessionFormationRepository;
import tn.webdev.formation.entities.SessionFormation;

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

@RestController
public class SessionController {
    
    @Autowired
    private SessionFormationRepository sessionFormationRepository;

    @GetMapping(value = "/sessions")
    public List<SessionFormation> getusers(){
        return sessionFormationRepository.findAll();
    }

    @GetMapping(value = "/session/{id}")
    public SessionFormation getsession(@PathVariable Long id){
        return sessionFormationRepository.findById(id).orElseThrow();
    }

    @PostMapping(value = "/addsession")
    public ResponseEntity<String> addsession(@RequestBody SessionFormation session){
        sessionFormationRepository.save(session);
        return new ResponseEntity<>("Session added successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/deleteallsessions")
    public ResponseEntity<String> deleteallsessions(){
        sessionFormationRepository.deleteAll();
        return new ResponseEntity<>("All sessions deleted successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/deletesession/{id}")
    public ResponseEntity<String> deletesession(@PathVariable Long id){
        sessionFormationRepository.deleteById(id);
        return new ResponseEntity<>("Session deleted successfully", HttpStatus.OK);
    }
}
