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

import tn.webdev.formation.dao.FormateurRepository;
import tn.webdev.formation.entities.Formateur;

@RestController
@RequestMapping("/formateurs")
public class FormateurController {
    
    @Autowired
    private FormateurRepository formateurRepository;

    @GetMapping(value = "/")
    public List<Formateur> getformateurs(){
        return formateurRepository.findAll();
    }

    @GetMapping(value = "/{id}")
    public Formateur getAformateur(@PathVariable Long id){
        return formateurRepository.findById(id).orElseThrow();
    }

    @PostMapping(value = "/")
    public Formateur addFormateur(@RequestBody Formateur formateur){
        return formateurRepository.save(formateur);
    }

    @DeleteMapping(value = "/")
    public List<Formateur> deleteallformateur(){
        List<Formateur> f = new ArrayList<>();
        f = formateurRepository.findAll();
        formateurRepository.deleteAll();
        return f;
    }

    @DeleteMapping(value = "/{id}")
    public Formateur deleteauformateur(@PathVariable Long id){
        Formateur f = new Formateur();
        f = formateurRepository.findById(id).orElseThrow();
        formateurRepository.deleteById(id);
        return f;
    }
}
