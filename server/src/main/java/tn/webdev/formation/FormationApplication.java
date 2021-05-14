package tn.webdev.formation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


import org.springframework.web.bind.annotation.CrossOrigin;
import tn.webdev.formation.dao.RoleRepository;
import tn.webdev.formation.entities.AppRole;
import tn.webdev.formation.entities.ERole;


@SpringBootApplication
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FormationApplication implements CommandLineRunner{

	@Autowired
	private RoleRepository roleRepository;

	public static void main(String[] args) {
		SpringApplication.run(FormationApplication.class, args);
		
	}

	@Override
	public void run(String... args) throws Exception {
		if(roleRepository.findByroleName(ERole.ROLE_USER)==null){
			roleRepository.save(new AppRole(null,ERole.ROLE_ADMIN));
			roleRepository.save(new AppRole(null,ERole.ROLE_USER));
		}

	}

}
