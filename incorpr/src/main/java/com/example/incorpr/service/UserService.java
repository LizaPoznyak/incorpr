package com.example.incorpr.service;

import com.example.incorpr.models.User;
import com.example.incorpr.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UsersRepository usersRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = usersRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found: " + username);
        }
        return user; // убедитесь, что ваш класс User реализует интерфейс UserDetails }

    /*@Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        return usersRepository.findByUsername(s);*/
    }
}
