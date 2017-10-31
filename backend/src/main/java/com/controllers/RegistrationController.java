package com.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.model.Event;
import com.model.Registration;
import com.model.RegistrationId;
import com.services.RegistrationService;
import com.model.User;

@RestController
@RequestMapping("api/registration")
public class RegistrationController {
	@Autowired
	private RegistrationService registrationService;
	
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public Registration newRegister(@RequestBody Registration registration) {
		return registrationService.register(registration);
	}
	
	@RequestMapping(value = "/deleteMyRegistration/{event_id}/{user_id:.+com}", method = RequestMethod.GET)
	public void deleteRegistration(@PathVariable("event_id") Integer event_id, @PathVariable("user_id") String user_id) {
		registrationService.deleteRegistration(event_id, user_id);
	}
}
