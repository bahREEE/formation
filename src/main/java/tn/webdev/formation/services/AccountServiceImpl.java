package tn.webdev.formation.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import tn.webdev.formation.dao.RoleRepository;
import tn.webdev.formation.dao.UserRepository;
import tn.webdev.formation.entities.AppRole;
import tn.webdev.formation.entities.AppUser;

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
        addRoleToUser(username,"USER");
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
    public void addRoleToUser(String username, String rolename) {
        AppUser user = userRepository.findByUsername(username);
        AppRole role = roleRepository.findByNomRole(rolename);

        user.setRole(role);
    }

    
}
