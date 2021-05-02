package tn.webdev.formation.config;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import tn.webdev.formation.dao.UserRepository;
import tn.webdev.formation.entities.AppUser;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{

    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser user = userRepository.findByUsername(username);
        if (user == null) throw new UsernameNotFoundException("User was not found !");

        Collection<GrantedAuthority> authorities = new ArrayList<>();
        user.getRoles().forEach(r->{
            authorities.add(new SimpleGrantedAuthority(r.getRoleName().toString()));
        });
        return new User(user.getUsername(), user.getPassword(), authorities);
    }
    
    
}
