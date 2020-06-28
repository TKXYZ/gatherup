package com.gatherup.app.dao;

import com.gatherup.app.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventDAO extends JpaRepository<Event, Integer> {
	
}
