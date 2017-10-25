package com.services.impl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.User;
import com.repositories.UserRepository;
import com.services.UserService;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public List<User> getAllUsers() {
		List<User> users = new ArrayList<User>();
		Iterator<User> iterator = userRepository.findAll().iterator();
		while(iterator.hasNext()) {
			users.add(iterator.next());
		}
		return users;
	}
	
	@Override
	public User getUser(String user_id) {
		return userRepository.findOne(user_id);
	}
	
	@Override
	public User createUser(User user) {
		return userRepository.save(user);
	}
	
	@Override
	public void deleteUser(String user_id) {
		userRepository.delete(user_id);
	}
}
