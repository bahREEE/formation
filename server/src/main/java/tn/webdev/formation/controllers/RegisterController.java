package tn.webdev.formation.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import tn.webdev.formation.dto.RegisterRequest;
import tn.webdev.formation.services.AccountService;


@RestController
public class RegisterController {
    
    @Autowired
    private AccountService accountService;

    @PostMapping(value = "/signup")
    public String register(@RequestBody RegisterRequest registerRequest){

        accountService.saveUser(registerRequest.getUsername(), registerRequest.getPassword(), 
                                registerRequest.getConfirmedPassword(),registerRequest.getRole());

        return "User signed up successfully";

    }
    
}
