package com.example.experiment7.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @GetMapping("/profile")
    public Map<String, String> userProfile() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Welcome, authenticated user");
        return response;
    }
}
