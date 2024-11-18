package com.example.incorpr.controllers;

import com.example.incorpr.controllers.main.Main;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/")
@CrossOrigin
public class SignInController extends Main {

    @GetMapping("/sign-in")
    public ResponseEntity<Map<String, String>> signIn() {
        Map<String, String> response = new HashMap<>();
        response.put("role", getRole());
        return ResponseEntity.ok(response);
    }

}
