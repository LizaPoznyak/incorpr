package com.example.incorpr.repositories;


import com.example.incorpr.models.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventsRepository extends JpaRepository<Event, Long> {

    Event findByTitle(String title);

}
