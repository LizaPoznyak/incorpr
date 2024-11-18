package com.example.incorpr.controllers;

import com.example.incorpr.controllers.main.Main;
import com.example.incorpr.models.User;
import com.example.incorpr.models.enums.Role;
import com.example.incorpr.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/")
public class SignUpController extends Main {

    @Autowired
    private UsersRepository usersRepository;

    @GetMapping("/sign-up")
    public ResponseEntity<Map<String, String>> signUp() {
        Map<String, String> response = new HashMap<>();
        response.put("role", getRole());
        return ResponseEntity.ok(response);
    }

    @PostMapping("/sign-up")
    public ResponseEntity<Map<String, String>> signUpPost(@RequestParam String username, @RequestParam String password) {
        Map<String, String> response = new HashMap<>();
        if (usersRepository.findAll().size() == 0 || usersRepository.findAll().isEmpty()) {
            usersRepository.save(new User(username, password, Role.ADMIN));
            response.put("message", "User registered as ADMIN. Please sign in.");
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        }
        User userFromDB = usersRepository.findByUsername(username);
        if (userFromDB != null) {
            response.put("message", "Please enter a unique username.");
            return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
        }
        usersRepository.save(new User(username, password, Role.USER));
        response.put("message", "User registered successfully. Please sign in.");
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

}
