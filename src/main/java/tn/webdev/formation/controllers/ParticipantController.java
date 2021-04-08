package tn.webdev.formation.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import tn.webdev.formation.dao.ParticipantRepository;
import tn.webdev.formation.entities.Participant;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class ParticipantController {
    
    @Autowired
    private ParticipantRepository participantRepository;

    @GetMapping(value = "/participants")
    public List<Participant> getparticipants(){
        return participantRepository.findAll();
    }

    @GetMapping(value = "/participant/{id}")
    public Participant getparticipant(@PathVariable Long id){
        return participantRepository.findById(id).orElseThrow();
    }

    @PostMapping(value = "/addparticipant")
    public ResponseEntity<String> addparticipant(@RequestBody Participant participant){
        participantRepository.save(participant);
        return new ResponseEntity<>("Participant added successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/deleteAllparticipants")
    public ResponseEntity<String> deleteallparticipants(){
        participantRepository.deleteAll();
        return new ResponseEntity<>("All participants deleted successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/deleteparticipant/{id}")
    public ResponseEntity<String> deleteparticipant(@PathVariable Long id){
        participantRepository.deleteById(id);
        return new ResponseEntity<>("Participant deleted successfully", HttpStatus.OK);
    }

}
