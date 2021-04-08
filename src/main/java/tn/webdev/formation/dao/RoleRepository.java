package tn.webdev.formation.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.webdev.formation.entities.AppRole;

@Repository
public interface RoleRepository extends JpaRepository<AppRole, Long>{

    AppRole findByNomRole(String rolename);
    
}
