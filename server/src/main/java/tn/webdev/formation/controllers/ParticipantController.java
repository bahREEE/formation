package tn.webdev.formation.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import tn.webdev.formation.dao.ParticipantRepository;
import tn.webdev.formation.entities.Participant;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("/participants")
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
    public Participant addparticipant(@RequestBody Participant participant){
        return participantRepository.save(participant);
    }

    @DeleteMapping(value = "/")
    public List<Participant> deleteallparticipants(){
        List<Participant> l = new ArrayList<>();
        l = participantRepository.findAll();
        participantRepository.deleteAll();
        return l;
    }

    @DeleteMapping(value = "/{id}")
    public Participant deleteparticipant(@PathVariable Long id){
        Participant p = new Participant();
        p = participantRepository.findById(id).orElseThrow();
        participantRepository.deleteById(id);
        return p;
    }

}
