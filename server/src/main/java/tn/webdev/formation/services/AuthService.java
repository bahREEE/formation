package tn.webdev.formation.services;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import tn.webdev.formation.dto.AuthenticationResponse;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static tn.webdev.formation.config.SecurityConstants.SECRET;
import static tn.webdev.formation.config.SecurityConstants.EXPIRATION_TIME;

@Service
public class AuthService {
    
    public AuthenticationResponse login(User user){
        List<String> roles = new ArrayList<>();
        user.getAuthorities().forEach(r->{
            roles.add(r.toString());
        });
        String jwt = JWT.create()
                    .withSubject(user.getUsername())
                    .withExpiresAt(new Date(System.currentTimeMillis()+EXPIRATION_TIME))
                    .withArrayClaim("roles", roles.toArray(new String[0]))
                    .sign(Algorithm.HMAC512(SECRET.getBytes()));

        return new AuthenticationResponse(user, jwt);

    }

}
