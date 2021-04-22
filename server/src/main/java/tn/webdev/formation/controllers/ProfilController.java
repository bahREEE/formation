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


import tn.webdev.formation.dao.ProfilRepository;
import tn.webdev.formation.entities.Profil;

@RestController
@RequestMapping("/profils")
public class ProfilController {
    
    @Autowired
    private ProfilRepository profilRepository;

    @GetMapping(value = "/")
    public List<Profil> getprofils(){
        return profilRepository.findAll();
    }

    @GetMapping(value = "/{id}")
    public Profil getprofil(@PathVariable Long id){
        return profilRepository.findById(id).orElseThrow();
    }

    @PostMapping(value = "/")
    public Profil addprofil(@RequestBody Profil profil){
        return profilRepository.save(profil);
    }

    @DeleteMapping(value = "/")
    public List<Profil> deleteallprofils(){
        List<Profil> l = new ArrayList<>();
        l = profilRepository.findAll();
        profilRepository.deleteAll();
        return l;
    }

    @DeleteMapping(value = "/{id}")
    public Profil deleteprofil(@PathVariable Long id){
        Profil p = new Profil();
        p = profilRepository.findById(id).orElseThrow();
        profilRepository.deleteById(id);
        return p;
    }


}
