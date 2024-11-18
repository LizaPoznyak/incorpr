package com.example.incorpr.models;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Future;
import java.time.LocalDateTime;
import java.util.Set;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Event {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "type")
    private String type;

    @Column(name = "description", length = 5000)
    private String description;

    @Column(name = "date_time")
    @Future
    private LocalDateTime dateTime;

    @OneToMany(mappedBy = "event")
    Set<EventRegistration> registrations;

    public Event(String title, String type, String description, LocalDateTime dateTime) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.dateTime = dateTime;
    }
}
