package com.example.incorpr.controllers;

import com.example.incorpr.controllers.main.Main;
import com.example.incorpr.models.Event;
import com.example.incorpr.models.EventRegistration;
import com.example.incorpr.models.User;
import com.example.incorpr.models.enums.Type;
import com.example.incorpr.repositories.EventRegistrationRepository;
import com.example.incorpr.repositories.EventsRepository;
import com.example.incorpr.repositories.UsersRepository;
import com.lowagie.text.*;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.stream.Stream;

@RestController
@RequestMapping("/events")
@CrossOrigin(origins = "http://localhost:3000")
public class EventsController extends Main {

    @Autowired
    private UsersRepository usersRepository;

    @Setter
    @Autowired
    public EventsRepository eventsRepository;

    @Autowired
    public EventRegistrationRepository eventRegistrationRepository;

    @GetMapping("/types")
    public ResponseEntity<List<String>> getEventTypes() {
        List<String> types = Stream.of(Type.values()).map(Enum::name).collect(Collectors.toList());
        return ResponseEntity.ok(types);
    }

    @GetMapping("/popular")
    public ResponseEntity<List<Event>> getPopularEvents() {
        List<Event> events = eventsRepository.findAll();
        List<Event> popularEvents = events.stream().sorted((e1, e2) -> {
            int compare = Integer.compare(e2.getRegistrations().size(), e1.getRegistrations().size());
            if (compare == 0) {
                return e2.getDateTime().compareTo(e1.getDateTime());
            }
            return compare; })
                .limit(5)
                .collect(Collectors.toList());
        return ResponseEntity.ok(popularEvents);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Event>> events() {
        List<Event> events = eventsRepository.findAll();
        return ResponseEntity.ok(events);
    }

    @GetMapping("/add")
    public ResponseEntity<String> addEvent() {
        return ResponseEntity.ok("Add event page uploaded");
    }

    @PostMapping("/add")
    public ResponseEntity<String> addEventPost(@RequestBody Event event) {
        Event existingEvent = eventsRepository.findByTitle(event.getTitle());
        if (existingEvent != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Enter a unique title");
        }
        LocalDateTime currentDate = LocalDateTime.now();
        if (event.getDateTime().isBefore(currentDate)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Choose future date");
        }
        try {
            eventsRepository.save(event);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving event: " + e.getMessage());
        }
        return ResponseEntity.status(HttpStatus.CREATED).body("Event was added");
    }

    @GetMapping("/{id}")
    public ResponseEntity<Event> eventDetails(@PathVariable(value = "id") Long id) {
        if (!eventsRepository.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        Optional<Event> event = eventsRepository.findById(id);
        return event.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @GetMapping("/{id}/edit")
    public ResponseEntity<Event> editEvent(@PathVariable(value = "id") Long id) {
        if (!eventsRepository.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        Optional<Event> event = eventsRepository.findById(id);
        return event.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @PostMapping("/{id}/edit")
    public ResponseEntity<String> editEventPost(@PathVariable(value = "id") Long id, @RequestParam String title, @RequestParam String description, @RequestParam String type, @RequestParam LocalDateTime dateTime) {
        Event event = eventsRepository.findById(id).orElseThrow();
        if (!event.getTitle().equals(title)) {
            Event existingEvent = eventsRepository.findByTitle(title);
            if (existingEvent != null) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Enter a unique title");
            }
        }
        if (!event.getDateTime().equals(dateTime)) {
            LocalDateTime currentDate = LocalDateTime.now();
            if (dateTime.isBefore(currentDate)) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Choose future date");
            }
        }
        event.setTitle(title);
        event.setDescription(description);
        event.setType(type);
        event.setDateTime(dateTime);
        eventsRepository.save(event);
        return ResponseEntity.ok("Event was updated");
    }

    @PostMapping("/{id}/delete")
    public ResponseEntity<String> deleteEventPost(@PathVariable(value = "id") Long id) {
        Event event = eventsRepository.findById(id).orElseThrow();
        List<EventRegistration> registrations = eventRegistrationRepository.findByEvent(event);
        eventRegistrationRepository.deleteAll(registrations);
        eventsRepository.delete(event);
        return ResponseEntity.ok("Event was deleted");
    }

    @PostMapping("/{id}/register")
    public ResponseEntity<String> registerUserForEvent(@PathVariable(value = "id") Long id, @RequestParam(required = false) Long userId) {
        Event event = eventsRepository.findById(id).orElseThrow();
        if (userId != null) {
            User user = usersRepository.findById(userId).orElseThrow();
            EventRegistration existingRegistration = eventRegistrationRepository.findByUserAndEvent(user, event);
            if (existingRegistration == null) {
                EventRegistration eventRegistration = new EventRegistration(user, event);
                eventRegistrationRepository.save(eventRegistration);
            }
        }
        return ResponseEntity.ok("User registered for event");
    }

    @PostMapping("/{id}/cancel-registration")
    public ResponseEntity<String> cancelEventRegistration(@PathVariable(value = "id") Long id, @RequestParam Long userId) {
        Event event = eventsRepository.findById(id).orElseThrow();
        User user = usersRepository.findById(userId).orElseThrow();
        EventRegistration existingRegistration = eventRegistrationRepository.findByUserAndEvent(user, event);
        if (existingRegistration != null) {
            eventRegistrationRepository.delete(existingRegistration);
        }
        return ResponseEntity.ok("User registration was cancelled");
    }

    @GetMapping("/{id}/isRegistered")
    public ResponseEntity<Boolean> isUserRegistered(@PathVariable("id") Long eventId, @RequestParam("userId") Long userId) {
        Event event = eventsRepository.findById(eventId).orElseThrow();
        User user = usersRepository.findById(userId).orElseThrow();
        EventRegistration existingRegistration = eventRegistrationRepository.findByUserAndEvent(user, event);
        return ResponseEntity.ok(existingRegistration != null);
    }

    @GetMapping("/{id}/users")
    public ResponseEntity<List<User>> viewRegisteredUsers(@PathVariable(value = "id") Long id) {
        Event event = eventsRepository.findById(id).orElseThrow();
        List<EventRegistration> eventRegistrations = eventRegistrationRepository.findByEvent(event);
        List<User> users = eventRegistrations.stream().map(EventRegistration::getUser).collect(Collectors.toList());
        return ResponseEntity.ok(users);
    }

    @GetMapping("/{id}/attendance-report")
    public void generateAttendanceReport(@PathVariable(value = "id") Long id, HttpServletResponse response) throws IOException, DocumentException {
        Event event = eventsRepository.findById(id).orElseThrow();
        response.setContentType("application/pdf");
        response.setHeader("Content-Disposition", "attachment; filename=\"AttendanceReport.pdf\"");
        Document document = new Document();
        PdfWriter.getInstance(document, response.getOutputStream());
        document.open();
        Paragraph title = new Paragraph("Attendance report of " + event.getTitle());
        title.setAlignment(Element.ALIGN_CENTER);
        document.add(title);
        document.add(new Paragraph("\n"));
        PdfPTable table = new PdfPTable(2);
        table.addCell("Id");
        table.addCell("Username");
        List<EventRegistration> eventRegistrations = eventRegistrationRepository.findByEvent(event);
        for (EventRegistration registration : eventRegistrations) {
            User user = registration.getUser();
            String userId = String.valueOf(user.getId());
            String userName = user.getUsername();
            table.addCell(userId);
            table.addCell(userName);
        }
        document.add(table);
        document.add(new Paragraph("\n"));
        int totalParticipants = eventRegistrations.size();
        document.add(new Paragraph("Total registered participants: " + totalParticipants));
        document.close();
    }

}
