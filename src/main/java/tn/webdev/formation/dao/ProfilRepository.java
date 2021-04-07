package tn.webdev.formation.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.webdev.formation.entities.Profil;

@Repository
public interface ProfilRepository extends JpaRepository<Profil, Long> {
    
}
