package tn.webdev.formation.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.webdev.formation.entities.Formation;

@Repository
public interface FormationRepository extends JpaRepository<Formation, Long> {
    
}
