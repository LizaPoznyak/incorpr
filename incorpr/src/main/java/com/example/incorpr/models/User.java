package com.example.incorpr.models;

import com.example.incorpr.models.enums.Role;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Collection;
import java.util.Collections;
import java.util.Set;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User implements UserDetails {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @JsonProperty("username")
    @Column(name = "username")
    @Size(min = 4, max = 25)
    private String username;

    @JsonProperty("password")
    @Column(name = "password")
    @Size(min = 4, max = 25)
    private String password;

    @JsonProperty("position")
    @Column(name = "position")
    @Size(min = 3, max = 150)
    private String position;

    @JsonProperty("avatar_url")
    @Column(name = "avatar_url")
    private String avatarUrl;

    @JsonProperty("role")
    @Column(name = "role")
    @Enumerated(EnumType.STRING)
    private Role role;

    @OneToMany(mappedBy = "user")
    Set<EventRegistration> registrations;

    public User(String username, String password, String position, String avatarUrl, Role role) {
        this.username = username;
        this.password = passwordEncoder().encode(password);
        this.position = position;
        this.avatarUrl = avatarUrl;
        this.role = role;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.username;
    }

    protected PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12);
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singleton(getRole());
    }

}