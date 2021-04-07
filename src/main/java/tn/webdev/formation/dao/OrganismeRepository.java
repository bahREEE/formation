package tn.webdev.formation.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.webdev.formation.entities.Organisme;

@Repository
public interface OrganismeRepository extends JpaRepository<Organisme, Long> {
    
}
