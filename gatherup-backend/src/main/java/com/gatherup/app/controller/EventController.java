package com.gatherup.app.controller;

import com.gatherup.app.model.Event;
import com.gatherup.app.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class EventController {

	@Autowired
	private EventService eventService;

	// CREATE
	@PostMapping("/event") // localhost:9999/event
	public Event createEvent(@RequestBody Event event) {
		return eventService.createEvent(event);
	}

	// READ
	@GetMapping("/event/all") // localhost:9999/event/all
	public List<Event> getAllEvents() {
		return eventService.getAllEvents();
	}

	@GetMapping("/event/id/{id}") // localhost:9999/event/id/{id}
	public Event getEventById(@PathVariable("id") int id) {
		return eventService.getEventById(id);
	}

	// UPDATE
	@PutMapping("/event") // localhost:9999/event
	public Event updateEvent(@RequestBody Event event) {
		return eventService.updateEvent(event);
	}

	// DELETE
	@DeleteMapping("/event/id/{id}") // localhost:9999/event/delete/id/{id}
	public void deleteEventById(@PathVariable("id") int id) {
		eventService.deleteEventById(id);
	}
}
