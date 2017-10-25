package com.services.impl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
 
import com.model.Event;
import com.repositories.EventRepository;
import com.services.EventService;

@Service
public class EventServiceImpl implements EventService {
	@Autowired
	private EventRepository eventRepository;
	
	@Override
	public List<Event> getAllEvents() {
		List<Event> events = new ArrayList<Event>();
		Iterator<Event> iterator = eventRepository.findAll().iterator();
		while(iterator.hasNext()) {
			events.add(iterator.next());
		}
		return events;
	}
	@Override
	public Event getEvent(Integer event_id) {
		return eventRepository.findOne(event_id);
	}
 
	@Override
	public Event createEvent(Event event) {
		return eventRepository.save(event);
	}
 
	@Override
	public Event updateEvent(Event event) {
		return eventRepository.save(event);
	}
 
	@Override
	public void deleteEvent(Integer event_id) {
		eventRepository.delete(event_id);
	}
}
