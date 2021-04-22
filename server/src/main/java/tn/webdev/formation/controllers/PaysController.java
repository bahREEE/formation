package tn.webdev.formation.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import tn.webdev.formation.dao.PaysRepository;
import tn.webdev.formation.entities.Pays;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("/pays")
public class PaysController {
    
    @Autowired
    private PaysRepository paysRepository;

    @GetMapping(value = "/")
    public List<Pays> getallpays(){
        return paysRepository.findAll();
    }

    @GetMapping(value = "/{id}")
    public Pays getpays(@PathVariable Long id){
        return paysRepository.findById(id).orElseThrow();
    }

    @PostMapping(value = "/")
    public Pays addpays(@RequestBody Pays pays){
        return paysRepository.save(pays);
    }

    @DeleteMapping(value = "/")
    public List<Pays> deleteallpays(){
        List<Pays> l = new ArrayList<>();
        l = paysRepository.findAll();
        paysRepository.deleteAll();
        return l;
    }

    @DeleteMapping(value = "/{id}")
    public Pays deletepays(@PathVariable Long id){
        Pays p = new Pays();
        p = paysRepository.findById(id).orElseThrow();
        paysRepository.deleteById(id);
        return p;
    }

}
