package tn.webdev.formation.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import tn.webdev.formation.config.UserDetailsServiceImpl;
import tn.webdev.formation.dto.AuthenticationResponse;
import tn.webdev.formation.dto.RegisterRequest;
import tn.webdev.formation.services.AccountService;
import tn.webdev.formation.services.AuthService;


@RestController
public class RegisterController {

    @Autowired
    private AuthService authService;

    @Autowired
    private AccountService accountService;

    @Autowired
    private UserDetailsServiceImpl userDetails;
    
    @PostMapping(value = "/signup/")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public AuthenticationResponse register(@RequestBody RegisterRequest registerRequest){

        accountService.saveUser(registerRequest.getUsername(), registerRequest.getPassword(), 
                                registerRequest.getConfirmedPassword(),registerRequest.getRole());
        User user = (User) userDetails.loadUserByUsername(registerRequest.getUsername());
        return authService.login(user);

    }
    
}
