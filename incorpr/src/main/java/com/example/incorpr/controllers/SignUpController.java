package com.example.incorpr.controllers;

import com.example.incorpr.controllers.main.Main;
import com.example.incorpr.models.User;
import com.example.incorpr.models.enums.Role;
import com.example.incorpr.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@RestController
@RequestMapping("/")
public class SignUpController extends Main {

    @Autowired
    private UsersRepository usersRepository;

    @GetMapping("/sign-up")
    public String signUp() {
        return "Sign up page uploaded";
    }

    @PostMapping("/sign-up")
    public ResponseEntity<Map<String, String>> signUpPost(
            @RequestParam String username,
            @RequestParam String password,
            @RequestParam String confirmPassword,
            @RequestParam String position,
            @RequestParam("avatar") MultipartFile avatar) {

        Map<String, String> response = new HashMap<>();

        if (!Objects.equals(password, confirmPassword)) {
            response.put("message", "Enter a right password");
            return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
        }

        if (usersRepository.findAll().size() == 0 || usersRepository.findAll().isEmpty()) {
            String avatarUrl = saveAvatar(avatar);
            usersRepository.save(new User(username, password, position, avatarUrl, Role.ADMIN));
            response.put("message", "User registered as ADMIN");
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        }

        User userFromDB = usersRepository.findByUsername(username);
        if (userFromDB != null) {
            response.put("message", "Enter a unique username");
            return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
        }

        String avatarUrl = saveAvatar(avatar);
        usersRepository.save(new User(username, password, position, avatarUrl, Role.USER));
        response.put("message", "User registered successfully");
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    private String saveAvatar(MultipartFile avatar) {
        String uploadDir = "uploads/avatars/";
        File directory = new File(uploadDir);
        if (!directory.exists()) {
            directory.mkdirs();
        }
        String fileName = System.currentTimeMillis() + "_" + avatar.getOriginalFilename();
        Path filePath = Paths.get(uploadDir + fileName);
        try {
            Files.write(filePath, avatar.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
        return "/uploads/avatars/" + fileName;
    }

}
