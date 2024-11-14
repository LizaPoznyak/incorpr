package com.example.incorpr.repositories;


import com.example.incorpr.models.Event;
import com.example.incorpr.models.EventRegistration;
import com.example.incorpr.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EventRegistrationRepository extends JpaRepository<EventRegistration, Long> {
    List<EventRegistration> findByEvent(Event event);

    List<EventRegistration> findByUser(User user);

    EventRegistration findByUserAndEvent(User user, Event event);

}

