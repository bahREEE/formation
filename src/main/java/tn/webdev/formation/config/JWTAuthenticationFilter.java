package tn.webdev.formation.config;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import tn.webdev.formation.entities.AppUser;

import static tn.webdev.formation.config.SecurityConstants.EXPIRATION_TIME;
import static tn.webdev.formation.config.SecurityConstants.HEADER_STRING;
import static tn.webdev.formation.config.SecurityConstants.SECRET;
import static tn.webdev.formation.config.SecurityConstants.TOKEN_PREFIX;


public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter{

    private AuthenticationManager authenticationManager;

    public JWTAuthenticationFilter(AuthenticationManager authenticationManager){
        this.authenticationManager = authenticationManager;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
            throws AuthenticationException {
        
        try{
            AppUser user = new ObjectMapper().readValue(request.getInputStream(), AppUser.class);
            return authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
        } catch(IOException exception){
            exception.printStackTrace();
            throw new RuntimeException(exception);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
            Authentication authResult) throws IOException, ServletException {
        
                User user = (User) authResult.getPrincipal();

                List<String> roles = new ArrayList<>();
                authResult.getAuthorities().forEach(r->{
                    roles.add(r.getAuthority());
                });

                String jwt = JWT.create()
                .withSubject(user.getUsername())
                .withIssuer(request.getRequestURI())
                .withArrayClaim("roles", roles.toArray(new String[roles.size()]))
                .withExpiresAt(new Date(System.currentTimeMillis()+ EXPIRATION_TIME))
                .sign(Algorithm.HMAC512(SECRET.getBytes()));

                response.addHeader(HEADER_STRING, TOKEN_PREFIX+jwt);
                System.out.println("Authentication successful, here is your token \n" + jwt);
    }

    

}
