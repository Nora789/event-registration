package com.controllers;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.model.User;
//import com.repositories.UserRepository;
import com.model.Event;
import com.services.UserService;

@RestController
@RequestMapping("api/users")
public class UserController {
	@Autowired
	private UserService userService;
	//private UserRepository userRepository;
	
	@RequestMapping(value = "/allUsers", method = RequestMethod.GET)
	public List<User> getAllUsers() {
		return userService.getAllUsers();
	}
	
	@RequestMapping(value = "/getUser/{user_id:.+com}", method = RequestMethod.GET)
	public User getUser(@PathVariable("user_id") String user_id) {
		return userService.getUser(user_id);
	}
	
	/*
	@RequestMapping(value = "/getUser/{user_id}", method = RequestMethod.GET)
	public User getUser1(@PathVariable("user_id") String user_id) {
		return userService.getUser(user_id);
	}*/
	
	@RequestMapping(value = "/createUser", method = RequestMethod.POST)
	public User createUser(@RequestBody User user) {
		return userService.createUser(user);
	}
	
	@RequestMapping(value = "/deleteUser/{user_id:.+com}", method = RequestMethod.GET)
	public void deleteUser(@PathVariable("user_id") String user_id) {
		userService.deleteUser(user_id);
	}
	
	@RequestMapping(value = "/events/{user_id:.+com}", method = RequestMethod.GET)
	public ResponseEntity<Collection<Event>> getUserEvents(@PathVariable String user_id) {
		//System.out.println(user_id);
		User user = userService.getUser(user_id);
		
		if (user != null) {
			return new ResponseEntity<>(user.getEvents(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
	}

}
