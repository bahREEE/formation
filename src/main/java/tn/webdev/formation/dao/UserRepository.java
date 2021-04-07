package tn.webdev.formation.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.webdev.formation.entities.AppUser;

@Repository
public interface UserRepository extends JpaRepository<AppUser, Long>{
    
}
