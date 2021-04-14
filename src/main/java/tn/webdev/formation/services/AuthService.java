package tn.webdev.formation.services;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import tn.webdev.formation.dto.AuthenticationResponse;

import java.util.Date;

import static tn.webdev.formation.config.SecurityConstants.SECRET;
import static tn.webdev.formation.config.SecurityConstants.EXPIRATION_TIME;

@Service
public class AuthService {
    
    public AuthenticationResponse login(User user){

        String jwt = JWT.create()
        .withSubject(user.getUsername())
        .withExpiresAt(new Date(System.currentTimeMillis()+EXPIRATION_TIME))
        .sign(Algorithm.HMAC512(SECRET.getBytes()));

        return new AuthenticationResponse(user, jwt);

    }

}
