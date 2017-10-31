package com.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Registration;
import com.model.RegistrationId;
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
	public void deleteRegistration(Integer event_id, String user_id) {
		RegistrationId id = new RegistrationId(event_id, user_id);
		registrationRepository.delete(id);
	}
}
