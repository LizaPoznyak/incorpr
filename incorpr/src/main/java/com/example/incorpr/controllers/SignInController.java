package com.example.incorpr.controllers;

import com.example.incorpr.controllers.main.Main;
import com.example.incorpr.models.User;
import com.example.incorpr.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class SignInController extends Main {

    @Autowired
    private UsersRepository usersRepository;

    @PostMapping("/sign-in")
    public ResponseEntity<Map<String, String>> signIn(@RequestBody Map<String, String> loginData) {
        String username = loginData.get("username");
        String password = loginData.get("password");

        User user = usersRepository.findByUsername(username);

        Map<String, String> response = new HashMap<>();
        if (user != null && user.getPassword().equals(password)) {
            response.put("message", "User logged in successfully");
            response.put("userId", String.valueOf(user.getId()));
            response.put("role", user.getRole().toString());
            return ResponseEntity.ok(response);
        } else {
            response.put("message", "Invalid username or password");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }
}
