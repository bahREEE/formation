package tn.webdev.formation.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.webdev.formation.entities.Domaine;

@Repository
public interface DomaineRepository extends JpaRepository<Domaine, Long>{
    
}
