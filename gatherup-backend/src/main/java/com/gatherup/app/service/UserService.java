package com.gatherup.app.service;

import com.gatherup.app.model.User;

import java.util.List;

public interface UserService {

	// CREATE
	public User register(User user);

	public User login(User user);

	// READ
	public List<User> getAllUsers();

	public User getUserById(int id);

	public User getUserByEmail(String email);

	// UPDATE
	public User updateUser(User user);

	// DELETE
	public void deleteUserById(int id);
}
