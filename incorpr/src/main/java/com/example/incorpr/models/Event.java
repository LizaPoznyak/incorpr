package com.example.incorpr.models;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Future;
import java.sql.Date;
import java.util.Set;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title, type;

    @Column(length = 5000)
    private String description;

    @Future
    private Date date;

    @OneToMany(mappedBy = "event")
    Set<EventRegistration> registrations;

    public Event(String title, String type, String description, Date date) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.date = date;
    }
}

