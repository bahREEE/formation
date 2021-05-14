package tn.webdev.formation.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


import tn.webdev.formation.dao.ProfilRepository;
import tn.webdev.formation.entities.Pays;
import tn.webdev.formation.entities.Profil;

@RestController
@RequestMapping("/profils")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProfilController {
    
    @Autowired
    private ProfilRepository profilRepository;

    @GetMapping(value = "/")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public List<Profil> getprofils(){
        return profilRepository.findAll();
    }

    @GetMapping(value = "/{id}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public Profil getprofil(@PathVariable Long id){
        return profilRepository.findById(id).orElseThrow();
    }

    @PostMapping(value = "/")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> addprofil(@RequestBody Profil profil){
        profilRepository.save(profil);
        return new ResponseEntity<>("Profil added successfully", HttpStatus.OK);
    }

    @PutMapping(value = "/")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> updateprofil(@RequestBody Profil profil){
        if(profil.getId()==null)
            return new ResponseEntity<>("No profile provided",HttpStatus.BAD_REQUEST);
        if(profilRepository.findById(profil.getId())==null)
            return new ResponseEntity<>("No profile with the provided id",HttpStatus.BAD_REQUEST);

        profilRepository.save(profil);
        return new ResponseEntity<>("profile updated successfully", HttpStatus.OK);
    }



    @DeleteMapping(value = "/")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> deleteallprofils(){
        profilRepository.deleteAll();
        return new ResponseEntity<>("All profils deleted successfully", HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> deleteprofil(@PathVariable Long id){
        profilRepository.deleteById(id);
        return new ResponseEntity<>("Profil deleted successfully", HttpStatus.OK);
    }


}
