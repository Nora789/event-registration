package com.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.model.Event;
import com.services.EventService;

@RestController
@RequestMapping("api/events")
public class EventController {
	@Autowired
	private EventService eventService;
	
	@RequestMapping(value = "/allEvents", method = RequestMethod.GET)
	public List<Event> getAllEvents() {
		return eventService.getAllEvents();
	}
	
	@RequestMapping(value = "/getEvent/{event_id}", method = RequestMethod.GET)
	public Event getEvent(@PathVariable("event_id") Integer eventId) {
		return eventService.getEvent(eventId);
	}
	
	@RequestMapping(value = "/createEvent", method = RequestMethod.POST)
	public Event createEvent(@RequestBody Event event) {
		return eventService.createEvent(event);
	}
	
	@RequestMapping(value = "/updateEvent", method = RequestMethod.POST)
	public Event updateEvent(@RequestBody Event event) {
		return eventService.updateEvent(event);
	}
	
	@RequestMapping(value = "/deleteEvent/{event_id}", method = RequestMethod.GET)
	public void deleteEvent(@PathVariable("event_id") Integer eventId) {
		eventService.deleteEvent(eventId);
	}
}
