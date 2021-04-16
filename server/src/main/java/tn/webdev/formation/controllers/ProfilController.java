package tn.webdev.formation.controllers;

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


import tn.webdev.formation.dao.ProfilRepository;
import tn.webdev.formation.entities.Profil;

@RestController
public class ProfilController {
    
    @Autowired
    private ProfilRepository profilRepository;

    @GetMapping(value = "/profils")
    public List<Profil> getprofils(){
        return profilRepository.findAll();
    }

    @GetMapping(value = "/profil/{id}")
    public Profil getprofil(@PathVariable Long id){
        return profilRepository.findById(id).orElseThrow();
    }

    @PostMapping(value = "/addprofil")
    public ResponseEntity<String> addprofil(@RequestBody Profil profil){
        profilRepository.save(profil);
        return new ResponseEntity<>("Profil added successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/deleteallprofils")
    public ResponseEntity<String> deleteallprofils(){
        profilRepository.deleteAll();
        return new ResponseEntity<>("All profils deleted successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/deleteprofil/{id}")
    public ResponseEntity<String> deleteprofil(@PathVariable Long id){
        profilRepository.deleteById(id);
        return new ResponseEntity<>("Profil deleted successfully", HttpStatus.OK);
    }


}
