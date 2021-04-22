package tn.webdev.formation.controllers;

import tn.webdev.formation.dao.SessionFormationRepository;
import tn.webdev.formation.entities.SessionFormation;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sessions")
public class SessionController {
    
    @Autowired
    private SessionFormationRepository sessionFormationRepository;

    @GetMapping(value = "/")
    public List<SessionFormation> getusers(){
        return sessionFormationRepository.findAll();
    }

    @GetMapping(value = "/{id}")
    public SessionFormation getsession(@PathVariable Long id){
        return sessionFormationRepository.findById(id).orElseThrow();
    }

    @PostMapping(value = "/")
    public SessionFormation addsession(@RequestBody SessionFormation session){
        return sessionFormationRepository.save(session);
    }

    @DeleteMapping(value = "/")
    public List<SessionFormation> deleteallsessions(){
        List<SessionFormation> l = new ArrayList<>();
        l = sessionFormationRepository.findAll();
        sessionFormationRepository.deleteAll();
        return l;
    }

    @DeleteMapping(value = "/{id}")
    public SessionFormation deletesession(@PathVariable Long id){
        SessionFormation s = new SessionFormation();
        s = sessionFormationRepository.findById(id).orElseThrow();
        sessionFormationRepository.deleteById(id);
        return s;
    }
}
