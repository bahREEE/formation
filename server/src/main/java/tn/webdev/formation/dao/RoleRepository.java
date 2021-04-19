package tn.webdev.formation.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.webdev.formation.entities.AppRole;
import tn.webdev.formation.entities.ERole;

@Repository
public interface RoleRepository extends JpaRepository<AppRole, Long>{

    AppRole findByroleName(ERole simpleUtilisateur);
    
}
