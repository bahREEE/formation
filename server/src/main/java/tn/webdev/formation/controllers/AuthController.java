package tn.webdev.formation.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import tn.webdev.formation.config.UserDetailsServiceImpl;
import tn.webdev.formation.dto.AuthenticationResponse;
import tn.webdev.formation.dto.LoginRequest;
import tn.webdev.formation.services.AuthService;

@RestController
public class AuthController {
    
    @Autowired
    private AuthService authService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsServiceImpl userDetails;

    @PostMapping(value = "/login")
    public AuthenticationResponse login(@RequestBody LoginRequest loginRequest){

        Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(),loginRequest.getPassword()));
        User user = (User) userDetails.loadUserByUsername(loginRequest.getUsername());
        SecurityContextHolder.getContext().setAuthentication(authenticate);

        return authService.login(user);
    }
}
