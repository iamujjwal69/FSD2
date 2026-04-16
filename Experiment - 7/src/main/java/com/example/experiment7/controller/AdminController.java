package com.example.experiment7.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @GetMapping("/dashboard")
    public Map<String, String> adminDashboard() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Welcome, admin");
        return response;
    }
}
