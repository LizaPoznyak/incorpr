package com.example.incorpr.controllers.main;

import com.example.incorpr.models.User;
import com.example.incorpr.repositories.EventsRepository;
import com.example.incorpr.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.ui.Model;

public class Main {

    @Autowired
    protected UsersRepository usersRepository;

    @Autowired
    protected EventsRepository eventsRepository;

    @Value("${upload.path}")
    protected String uploadPath;

    public User getUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if ((!(auth instanceof AnonymousAuthenticationToken)) && auth != null) {
            UserDetails userDetail = (UserDetails) auth.getPrincipal();
            return usersRepository.findByUsername(userDetail.getUsername());
        }
        return null;
    }

    public String getRole() {
        User users = getUser();
        if (users == null) return "NOT";
        return users.getRole().toString();
    }

    public String getUserId() {
        User users = getUser();
        if (users == null) return "NOT";
        return users.getId().toString();
    }

    public void AddAttributes(Model model) {
        model.addAttribute("role", getRole());
        model.addAttribute("user", getUser());
    }

}
