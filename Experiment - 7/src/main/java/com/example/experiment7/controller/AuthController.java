package com.example.experiment7.controller;

import com.example.experiment7.dto.LoginRequest;
import com.example.experiment7.dto.LoginResponse;
import com.example.experiment7.entity.User;
import com.example.experiment7.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        Optional<User> user = authService.findByUsername(loginRequest.getUsername());
        
        if (user.isPresent() && user.get().getPassword().equals(loginRequest.getPassword())) {
            // Note: This is an optional manual login for demonstration. 
            // Most tests in this project use Spring Security's automated Basic Auth.
            return ResponseEntity.ok(new LoginResponse(null, user.get().getUsername(), user.get().getRole()));
        }
        
        return ResponseEntity.status(401).body("Invalid credentials");
    }
}
