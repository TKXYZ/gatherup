package com.gatherup.app.service.impl;

import com.gatherup.app.dao.UserDAO;
import com.gatherup.app.model.User;
import com.gatherup.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDAO userDAO;

	// CREATE
	@Override
	public User register(User user) {
		User returnUser = null;

		try {
			if (getUserByEmail(user.getEmail()) == null) {
				System.out.println("Registration success.");
				returnUser = userDAO.save(user);
			} else {
				System.out.println("Registration failed; user already exists.");
				returnUser = null;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return returnUser;
	}

	@Override
	public User login(User user) {
		User returnUser = userDAO.findUserByEmail(user.getEmail());

		if (returnUser != null && returnUser.getPassword().equals(user.getPassword())) {
			System.out.println("Success.");
		} else {
			System.out.println("Unsuccessful.");
			returnUser = null;
		}
		return returnUser;
	}

	// READ
	@Override
	public List<User> getAllUsers() {
		List<User> userList = null;

		try {
			userList = userDAO.findAll();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return userList;
	}

	@Override
	public User getUserById(int id) {
		User returnUser = null;

		try {
			returnUser = userDAO.findById(id).get();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return returnUser;
	}

	@Override
	public User getUserByEmail(String email) {
		User returnUser = null;
		List<User> userList = userDAO.findAll();

		for (User user : userList) {
			if (user.getEmail().equals(email)) {
				returnUser = user;
				break;
			} else {
				System.out.println("No users exist.");
			}
		}
		return returnUser;
	}

	// UPDATE
	@Override
	public User updateUser(User user) {
		User returnUser = null;

		try {
			returnUser = userDAO.save(user);
		} catch (Exception e) {
			e.printStackTrace();
		}

		return returnUser;
	}

	// DELETE
	@Override
	public void deleteUserById(int id) {
		try {
			userDAO.deleteById(id);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
