package com.example.incorpr.controllers;

import com.example.incorpr.models.User;
import com.example.incorpr.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class SignInController {

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/sign-in")
    public ResponseEntity<Map<String, String>> signIn(@RequestBody User user) {
        Map<String, String> response = new HashMap<>();
        try {
            User userCheck = usersRepository.findByUsername(user.getUsername());
            if (userCheck != null) {
                if (passwordEncoder.matches(user.getPassword(), userCheck.getPassword())) {
                    Authentication authentication = authenticationManager.authenticate(
                            new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
                    SecurityContextHolder.getContext().setAuthentication(authentication);

                    response.put("message", "Пользователь успешно вошел");
                    response.put("userId", String.valueOf(userCheck.getId()));
                    response.put("role", userCheck.getRole().toString());
                    return ResponseEntity.ok(response);
                } else {
                    response.put("message", "Неправильный логин или пароль");
                    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
                }
            } else {
                response.put("message", "Неправильный логин или пароль");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
            }
        } catch (BadCredentialsException e) {
            response.put("message", "Неправильный логин или пароль");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        } catch (Exception e) {
            response.put("message", "Ошибка входа");
            response.put("error", e.getMessage());
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}
