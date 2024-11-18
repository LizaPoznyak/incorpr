package com.example.incorpr.controllers;

import com.example.incorpr.controllers.main.Main;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class MainController extends Main {

    @GetMapping("/")
    public String mainPage() {
        return "{\"role\": \"" + getRole() + "\", \"user\": \"" + getUser() + "\"}";
    }

}
