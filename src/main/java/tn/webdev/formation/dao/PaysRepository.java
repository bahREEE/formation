package tn.webdev.formation.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.webdev.formation.entities.Pays;

@Repository
public interface PaysRepository extends JpaRepository<Pays, Long> {
    
}
