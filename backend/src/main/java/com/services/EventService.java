package com.services;

import java.util.List;
import com.model.Event;
public interface EventService {
	List<Event> getAllEvents();
	Event getEvent(Integer event_id);
	Event createEvent(Event event);
	Event updateEvent(Event event);
	void deleteEvent(Integer event_id);
}
