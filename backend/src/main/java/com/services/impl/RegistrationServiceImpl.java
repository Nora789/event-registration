package com.services.impl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Event;
import com.model.Registration;
import com.model.User;
//import com.repositories.EventRepository;
import com.repositories.RegistrationRepository;
import com.services.RegistrationService;

@Service
public class RegistrationServiceImpl implements RegistrationService {
	@Autowired
	private RegistrationRepository registrationRepository;
	
	@Override
	public Registration register(Registration registration) {
		return registrationRepository.save(registration);
	}
	
	@Override
	public void deleteRegistration(Integer registration_id) {
		registrationRepository.delete(registration_id);
	}
	
	@Override
	public Stream<Event> findByRuser_idReturnStream(String user_id) {
		return registrationRepository.findByRuserIdReturnStream(user_id);
	}
	
	@Override
	public Stream<User> findByRevent_idReturnStream(Integer event_id) {
		return registrationRepository.findByReventIdReturnStream(event_id);
	}
	
	@Override
	public List<Registration> getAllRegistrations() {
		List<Registration> registrations = new ArrayList<Registration>();
		Iterator<Registration> iterator = registrationRepository.findAll().iterator();
		while(iterator.hasNext()) {
			registrations.add(iterator.next());
		}
		return registrations;
	}
}
