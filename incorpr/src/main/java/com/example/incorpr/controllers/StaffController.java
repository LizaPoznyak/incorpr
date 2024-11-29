package com.example.incorpr.controllers;

import com.example.incorpr.controllers.main.Main;
import com.example.incorpr.models.EventRegistration;
import com.example.incorpr.models.User;
import com.example.incorpr.repositories.EventRegistrationRepository;
import com.example.incorpr.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/staff")
@CrossOrigin
public class StaffController extends Main {

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    public EventRegistrationRepository eventRegistrationRepository;

    @GetMapping("/getUserDetails")
    public ResponseEntity<Map<String, String>> getUserDetails() {
        User user = getUser(); // Метод получения текущего пользователя
        Map<String, String> userDetails = new HashMap<>();
        if (user == null) {
            userDetails.put("role", "NOT");
            userDetails.put("id", "0"); // Или другой идентификатор для неавторизованных пользователей
        } else {
            userDetails.put("role", user.getRole().toString());
            userDetails.put("id", user.getId().toString());
        }
        return ResponseEntity.ok(userDetails);
    }

    public User getUser() { // Логика получения текущего аутентифицированного пользователя // Например, используя Spring Security:
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            return null;
        }
        String username = authentication.getName();
        return usersRepository.findByUsername(username);
    }

    @GetMapping("/all")
    public ResponseEntity<List<User>> staff() {
        List<User> users = usersRepository.findAll();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> profile(@PathVariable(value = "id") Long id) {
        if (!usersRepository.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        Optional<User> user = usersRepository.findById(id);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @GetMapping("/{id}/edit")
    public ResponseEntity<User> editProfile(@PathVariable(value = "id") Long id) {
        if (!usersRepository.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        Optional<User> user = usersRepository.findById(id);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @PostMapping("/{id}/edit")
    public ResponseEntity<String> editProfilePost(@RequestBody User user) { //(@PathVariable(value = "id") Long id, @RequestParam String username, @RequestParam String position, @RequestParam String avatarUrl) {
        //User user = usersRepository.findById(id).orElseThrow();
        String username = user.getUsername();
        String position = user.getPosition();
        String avatarUrl = user.getAvatarUrl();
        if (!user.getUsername().equals(username)) {
            User existingUser = usersRepository.findByUsername(username);
            if (existingUser != null) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Enter a unique username");
            }
        }
        user.setUsername(username);
        user.setPosition(position);
        user.setAvatarUrl(avatarUrl);
        usersRepository.save(user);
        return ResponseEntity.ok("User was updated");
    }

    @PostMapping("/{id}/delete")
    public ResponseEntity<String> deleteUserPost(@PathVariable(value = "id") Long id) {
        User user = usersRepository.findById(id).orElseThrow();
        List<EventRegistration> userRegistrations = eventRegistrationRepository.findByUser(user);
        eventRegistrationRepository.deleteAll(userRegistrations);
        usersRepository.delete(user);
        return ResponseEntity.ok("User was deleted");
    }

}
