package com.services;

import java.util.List;
import com.model.User;

public interface UserService {
	List<User> getAllUsers();
	User getUser(String user_id);
	User createUser(User user);
	void deleteUser(String user_id);
}
