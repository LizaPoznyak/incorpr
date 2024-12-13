package com.example.incorpr.service;

public class UserDTO {
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getAvatarUrl() {
        return avatarUrl;
    }

    public void setAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
    }

    private String username;
    private String position;
    private String avatarUrl;

    public UserDTO(Long id, String username, String position, String avatarUrl) {
        this.id = id;
        this.username = username;
        this.position = position;
        this.avatarUrl = avatarUrl;
    }
}
