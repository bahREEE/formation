package tn.webdev.formation.controllers;

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

import tn.webdev.formation.dao.OrganismeRepository;
import tn.webdev.formation.entities.Organisme;

@RestController
@RequestMapping("/organismes")
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
    public Organisme addOrganisme(@RequestBody Organisme organisme){
        return organismeRepository.save(organisme);
    }

    @DeleteMapping(value = "/")
    public List<Organisme> deleteallorganismes(){
        List<Organisme> l = new ArrayList<>();
        l = organismeRepository.findAll();
        organismeRepository.deleteAll();
        return l;
    }

    @DeleteMapping(value = "/{id}")
    public Organisme deleteanorganisme(@PathVariable Long id){
        Organisme o = new Organisme();
        o = organismeRepository.findById(id).orElseThrow();
        organismeRepository.deleteById(id);
        return o;
    }

}
