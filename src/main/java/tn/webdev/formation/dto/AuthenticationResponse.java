package tn.webdev.formation.dto;

import org.springframework.security.core.userdetails.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
    
    private User user;
    private String token;

}
