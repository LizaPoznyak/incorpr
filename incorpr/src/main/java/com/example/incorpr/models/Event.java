package com.example.incorpr.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
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
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Entity
public class Event {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @JsonProperty("title")
    @Column(name = "title")
    private String title;

    @JsonProperty("type")
    @Column(name = "type")
    private String type;

    @JsonProperty("description")
    @Column(name = "description", length = 5000)
    private String description;

    @JsonProperty("date_time")
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
