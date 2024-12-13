package com.example.incorpr.controllers;

import com.example.incorpr.models.User;
import com.example.incorpr.models.enums.Role;
import com.example.incorpr.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
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
@RequestMapping("/auth")
@CrossOrigin
public class SignUpController {

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/sign-up")
    public ResponseEntity<Map<String, String>> signUpPost(
            @RequestParam String username,
            @RequestParam String password,
            @RequestParam String confirmPassword,
            @RequestParam String position,
            @RequestParam(value = "avatar", required = false) MultipartFile avatar) {

            Map<String, String> response = new HashMap<>();

            if (!Objects.equals(password, confirmPassword)) {
                response.put("message", "Пароли не совпадают");
                return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
            }

            if (usersRepository.findByUsername(username) != null) {
                response.put("message", "Пользователь с таким именем уже существует");
                return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
            }

            String avatarUrl = (avatar != null && !avatar.isEmpty()) ? saveAvatar(avatar) : "/uploads/avatars/default avatar.jpg";
            String encodedPassword = passwordEncoder.encode(password);

            User user = new User(username, encodedPassword, position, avatarUrl, Role.USER);
            usersRepository.save(user);

            response.put("message", "Пользователь успешно зарегистрирован");
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    public static String saveAvatar(MultipartFile avatar) {
        String uploadDir = "src/main/resources/static/uploads/avatars/";
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
