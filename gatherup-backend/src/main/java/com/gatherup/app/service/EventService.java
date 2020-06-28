package com.gatherup.app.service;

import com.gatherup.app.model.Event;

import java.util.List;

public interface EventService {

	// CREATE
	public Event createEvent(Event event);

	// READ
	public List<Event> getAllEvents();

	public Event getEventById(int id);

	// UPDATE
	public Event updateEvent(Event event);

	// DELETE
	public void deleteEventById(int id);
}