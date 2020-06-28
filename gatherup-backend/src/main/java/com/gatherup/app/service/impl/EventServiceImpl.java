package com.gatherup.app.service.impl;

import com.gatherup.app.dao.EventDAO;
import com.gatherup.app.model.Event;
import com.gatherup.app.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventServiceImpl implements EventService {

	@Autowired
	private EventDAO eventDAO;

	// CREATE
	@Override
	public Event createEvent(Event event) {
		Event returnEvent = null;

		try {
			returnEvent = eventDAO.save(event);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return returnEvent;
	}

	// READ
	@Override
	public List<Event> getAllEvents() {
		List<Event> eventList = null;

		try {
			eventList = eventDAO.findAll();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return eventList;
	}

	@Override
	public Event getEventById(int id) {
		Event returnEvent = null;

		try {
			returnEvent = eventDAO.findById(id).get();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return returnEvent;
	}

	// UPDATE
	@Override
	public Event updateEvent(Event event) {
		Event returnEvent = null;

		try {
			returnEvent = eventDAO.save(event);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return returnEvent;
	}

	// DELETE
	@Override
	public void deleteEventById(int id) {
		try {
			eventDAO.deleteById(id);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
