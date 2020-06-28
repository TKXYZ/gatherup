package com.gatherup.app.model;

import javax.persistence.*;

@Entity(name = "Event_Table")
@Table
public class Event {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int eventID;
	private String userEmail;
	private String eventName;
	private String eventDescription;
	private String eventLocation;
	private String dateTime;
	private String eventType;

	// Constructors
	public Event() {
	}

	public Event(int eventID, String userEmail, String eventName, String eventDescription, String eventLocation, String dateTime, String eventType) {
		this.eventID = eventID;
		this.userEmail = userEmail;
		this.eventName = eventName;
		this.eventDescription = eventDescription;
		this.eventLocation = eventLocation;
		this.dateTime = dateTime;
		this.eventType = eventType;
	}

	// Getters & Setters
	public int getEventID() {
		return eventID;
	}

	public void setEventID(int eventID) {
		this.eventID = eventID;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getEventName() {
		return eventName;
	}

	public void setEventName(String eventName) {
		this.eventName = eventName;
	}

	public String getEventDescription() {
		return eventDescription;
	}

	public void setEventDescription(String eventDescription) {
		this.eventDescription = eventDescription;
	}

	public String getEventLocation() {
		return eventLocation;
	}

	public void setEventLocation(String eventLocation) {
		this.eventLocation = eventLocation;
	}

	public String getDateTime() {
		return dateTime;
	}

	public void setDateTime(String dateTime) {
		this.dateTime = dateTime;
	}

	public String getEventType() {
		return eventType;
	}

	public void setEventType(String eventType) {
		this.eventType = eventType;
	}

	// toString()
	@Override
	public String toString() {
		return "Event {" +
				"eventID=" + eventID +
				", userEmail='" + userEmail + '\'' +
				", eventName='" + eventName + '\'' +
				", eventDescription='" + eventDescription + '\'' +
				", eventLocation='" + eventLocation + '\'' +
				", dateTime='" + dateTime + '\'' +
				", eventType='" + eventType + '\'' +
				'}';
	}
}
