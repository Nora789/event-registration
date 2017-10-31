package com.services;
import java.util.stream.Stream;

import com.model.Event;
import com.model.Registration;
import com.model.RegistrationId;
import com.model.User;

public interface RegistrationService {
	Registration register(Registration registration);
	void deleteRegistration(Integer event_id, String user_id);
}
