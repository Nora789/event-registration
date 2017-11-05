package com.controllers;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.model.Event;
import com.model.Registration;
import com.model.User;
import com.services.RegistrationService;

@RestController
@RequestMapping("api/registration")
public class RegistrationController {
	@Autowired
	private RegistrationService registrationService;
	
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public Registration newRegister(@RequestBody Registration registration) {
		return registrationService.register(registration);
	}
	
	@RequestMapping(value = "/allRegistrations", method = RequestMethod.GET)
	public List<Registration> getAllRegistrations() {
		return registrationService.getAllRegistrations();
	}
	
	@RequestMapping(value = "/deleteMyRegistration/{registration_id}", method = RequestMethod.GET)
	public void deleteRegistration(@PathVariable("registration_id") Integer registration_id) {
		registrationService.deleteRegistration(registration_id);
	}
	
	@Transactional(readOnly = true)
	@RequestMapping(value = "/getEventByUser/{user_id:.+com}", method = RequestMethod.GET)
	public String getEventByUser(@PathVariable("user_id") String user_id) {
		List<String> mapstream = Collections.emptyList();
		try(Stream<Event> stream = registrationService.findByRuser_idReturnStream(user_id)) {
			mapstream = stream.map(event -> event.toString()).collect(Collectors.toList());
		}
		
		return mapstream.toString();
	}
	
	@Transactional(readOnly = true)
	@RequestMapping(value = "/getUserByEvent/{event_id}", method = RequestMethod.GET)
	public String getUserByEvent(@PathVariable("event_id") Integer event_id) {
		List<String> mapstream = Collections.emptyList();
		try(Stream<User> stream = registrationService.findByRevent_idReturnStream(event_id)) {
			mapstream = stream.map(user -> user.toString()).collect(Collectors.toList());
		}
		return mapstream.toString();
	}
}
