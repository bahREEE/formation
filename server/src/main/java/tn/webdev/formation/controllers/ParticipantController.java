package tn.webdev.formation.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import tn.webdev.formation.dao.ParticipantRepository;
import tn.webdev.formation.entities.Organisme;
import tn.webdev.formation.entities.Participant;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


@RestController
@RequestMapping("/participants")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ParticipantController {
    
    @Autowired
    private ParticipantRepository participantRepository;

    @GetMapping(value = "/")
    public List<Participant> getparticipants(){
        return participantRepository.findAll();
    }

    @GetMapping(value = "/{id}")
    public Participant getparticipant(@PathVariable Long id){
        return participantRepository.findById(id).orElseThrow();
    }

    @PostMapping(value = "/")
    public ResponseEntity<String> addparticipant(@RequestBody Participant participant){
        participantRepository.save(participant);
        return new ResponseEntity<>("Participant added successfully", HttpStatus.OK);
    }

    @PutMapping(value = "/")
    public ResponseEntity<String> updateFormateur(@RequestBody Participant participant){
        if(participant.getId()==null)
            return new ResponseEntity<>("No participant provided",HttpStatus.BAD_REQUEST);
        if(participantRepository.findById(participant.getId())==null)
            return new ResponseEntity<>("No participant with the provided id",HttpStatus.BAD_REQUEST);

        participantRepository.save(participant);
        return new ResponseEntity<>("participant updated successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/")
    public ResponseEntity<String> deleteallparticipants(){
        participantRepository.deleteAll();
        return new ResponseEntity<>("All participants deleted successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<String> deleteparticipant(@PathVariable Long id){
        participantRepository.deleteById(id);
        return new ResponseEntity<>("Participant deleted successfully", HttpStatus.OK);
    }

}
