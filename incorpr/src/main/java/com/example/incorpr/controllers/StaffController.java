package com.example.incorpr.controllers;

import com.example.incorpr.controllers.main.Main;
import com.example.incorpr.models.EventRegistration;
import com.example.incorpr.models.User;
import com.example.incorpr.repositories.EventRegistrationRepository;
import com.example.incorpr.repositories.UsersRepository;
import com.example.incorpr.service.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

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
    public ResponseEntity<List<UserDTO>> staff() {
        List<User> users = usersRepository.findAll();
        List<UserDTO> userDTOs = users.stream()
                .map(user -> new UserDTO(user.getId(), user.getUsername(), user.getPosition(), user.getAvatarUrl()))
                .collect(Collectors.toList());
        return ResponseEntity.ok(userDTOs);
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
    public ResponseEntity<String> editProfilePost(@PathVariable(value = "id") Long id, @RequestPart("user") User user, @RequestPart(value = "avatar", required = false) MultipartFile avatar) {
        User existingUser = usersRepository.findById(id).orElseThrow();

        if (!existingUser.getUsername().equals(user.getUsername())) {
            User userWithSameUsername = usersRepository.findByUsername(user.getUsername());
            if (userWithSameUsername != null) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Введите уникальный логин");
            }
        }

        existingUser.setUsername(user.getUsername());
        existingUser.setPosition(user.getPosition());

        // Обработка файла аватара, если он есть
        if (avatar != null && !avatar.isEmpty()) {
            String avatarUrl = SignUpController.saveAvatar(avatar); // Реализуйте метод saveAvatar для сохранения файла и получения URL
            existingUser.setAvatarUrl(avatarUrl);
        } else if (existingUser.getAvatarUrl() == null || existingUser.getAvatarUrl().isEmpty()) {
            // Устанавливаем аватар по умолчанию, если аватар не был передан и отсутствует текущий аватар
            existingUser.setAvatarUrl("/uploads/avatars/default avatar.jpg");
        }

        usersRepository.save(existingUser);
        return ResponseEntity.ok("Пользователь обновлен");
    }

    @PostMapping("/{id}/delete")
    public ResponseEntity<String> deleteUserPost(@PathVariable(value = "id") Long id) {
        User user = usersRepository.findById(id).orElseThrow();
        List<EventRegistration> userRegistrations = eventRegistrationRepository.findByUser(user);
        eventRegistrationRepository.deleteAll(userRegistrations);
        usersRepository.delete(user);
        return ResponseEntity.ok("Пользователь удален");
    }

}
