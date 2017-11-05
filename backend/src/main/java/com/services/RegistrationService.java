package com.services;

import java.util.List;
import java.util.stream.Stream;

import com.model.Event;
import com.model.Registration;
import com.model.User;

public interface RegistrationService {
	Registration register(Registration registration);
	void deleteRegistration(Integer registration_id);
	List<Registration> getAllRegistrations();
	Stream<Event> findByRuser_idReturnStream(String user_id);
	Stream<User> findByRevent_idReturnStream(Integer event_id);
}
