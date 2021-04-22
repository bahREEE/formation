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

import tn.webdev.formation.dao.DomaineRepository;
import tn.webdev.formation.entities.Domaine;

@RestController
@RequestMapping("/domaines")
public class DomaineController {
    
    @Autowired
    private DomaineRepository domaineRepository;

    @GetMapping(value = "/")
    public List<Domaine> getdomaines(){
        return domaineRepository.findAll();
    }

    @GetMapping(value = "/{id}")
    public Domaine getAdomaine(@PathVariable Long id){
        return domaineRepository.findById(id).orElseThrow();
    }

    @PostMapping(value = "/")
    public Domaine adddomaine(@RequestBody Domaine domaine){
        return domaineRepository.save(domaine);   
    }

    @DeleteMapping(value = "/")
    public List<Domaine> deletealldomaines(){
        List<Domaine> l = new ArrayList<>();
        l = domaineRepository.findAll();
        domaineRepository.deleteAll();
        return l;
    }

    @DeleteMapping(value = "/{id}")
    public Domaine deleteadomaine(@PathVariable Long id){
        Domaine d = new Domaine();
        d = domaineRepository.findById(id).orElseThrow();
        domaineRepository.deleteById(id);
        return d;
    }

}
