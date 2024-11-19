package com.example.incorpr.controllers;

import com.example.incorpr.controllers.main.Main;
import com.example.incorpr.models.Event;
import com.example.incorpr.models.User;
import com.example.incorpr.repositories.EventsRepository;
import com.example.incorpr.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
public class MainController extends Main {

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    public EventsRepository eventsRepository;

    @GetMapping("/")
    public String mainPage() {
        return "Main page uploaded";
    }

    @GetMapping("/webinars")
    public ResponseEntity<List<Event>> getWebinars() {
        List<Event> webinars = eventsRepository.findAll().stream()
                .filter(event -> event.getType().equalsIgnoreCase("webinar"))
                .sorted((e1, e2) -> {
                    int compare = Integer.compare(e2.getRegistrations().size(), e1.getRegistrations().size());
                    if (compare == 0) {
                        return e2.getDateTime().compareTo(e1.getDateTime());
                    }
                    return compare;
                })
                .limit(5)
                .collect(Collectors.toList());
        return ResponseEntity.ok(webinars);
    }

    @GetMapping("/hackathons")
    public ResponseEntity<List<Event>> getHackathons() {
        List<Event> hackathons = eventsRepository.findAll().stream()
                .filter(event -> event.getType().equalsIgnoreCase("hackathon"))
                .sorted((e1, e2) -> {
                    int compare = Integer.compare(e2.getRegistrations().size(), e1.getRegistrations().size());
                    if (compare == 0) {
                        return e2.getDateTime().compareTo(e1.getDateTime());
                    }
                    return compare;
                })
                .limit(5)
                .collect(Collectors.toList());
        return ResponseEntity.ok(hackathons);
    }

    @GetMapping("/conferences")
    public ResponseEntity<List<Event>> getConferences() {
        List<Event> conferences = eventsRepository.findAll().stream()
                .filter(event -> event.getType().equalsIgnoreCase("conference"))
                .sorted((e1, e2) -> {
                    int compare = Integer.compare(e2.getRegistrations().size(), e1.getRegistrations().size());
                    if (compare == 0) {
                        return e2.getDateTime().compareTo(e1.getDateTime());
                    }
                    return compare;
                })
                .limit(5)
                .collect(Collectors.toList());
        return ResponseEntity.ok(conferences);
    }

    @GetMapping("/staff")
    public ResponseEntity<List<User>> getStaff() {
        List<User> staff = usersRepository.findAll();
        return ResponseEntity.ok(staff);
    }
}
