package tn.webdev.formation.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.webdev.formation.entities.Formateur;

@Repository
public interface FormateurRepository extends JpaRepository<Formateur, Long> {
    
}
