package tn.webdev.formation.services;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import tn.webdev.formation.dao.RoleRepository;
import tn.webdev.formation.dao.UserRepository;
import tn.webdev.formation.entities.AppRole;
import tn.webdev.formation.entities.AppUser;
import tn.webdev.formation.entities.ERole;

@Service
@Transactional
public class AccountServiceImpl implements AccountService{

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
 
    @Override
    public AppUser saveUser(String username, String password, String confirmedPassword) {
        AppUser user = userRepository.findByUsername(username);
        if(user != null) throw new RuntimeException("This user already exists !!!");
        if(!password.equals(confirmedPassword)) throw new RuntimeException("Please confirm your password");
        AppUser newUser = new AppUser();
        newUser.setUsername(username);
        newUser.setPassword(passwordEncoder.encode(password));
        userRepository.save(newUser);
        addRoleToUser(newUser,"SIMPLE_UTILISATEUR");
        return newUser;
    }

    @Override
    public AppRole save(AppRole role) {
        return roleRepository.save(role);
    }

    @Override
    public AppUser loadUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public void addRoleToUser(AppUser user, String role) {
        List<AppRole>roles=new ArrayList<>();
        switch (role){
            case "SIMPLE_UTILISATEUR":roles.add(roleRepository.findByroleName(ERole.SIMPLE_UTILISATEUR));
            break;
            case "ADMINISTRATEUR":roles.add(roleRepository.findByroleName(ERole.ADMINISTRATEUR));
            default: new RuntimeException("Error: Role not found!");
        }
        user.setRoles(roles);

    }
  
    
}
