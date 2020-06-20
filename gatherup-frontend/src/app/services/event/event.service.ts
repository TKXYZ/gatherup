import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NGXLogger } from 'ngx-logger';

import { Event } from '../../classes/event/event';

@Injectable({
	providedIn: 'root'
})
export class EventService {

	private baseUrl: string;

	constructor(private http: HttpClient, private loggy: NGXLogger) {
		this.baseUrl = "http://localhost:9999/"; // development endpoint
		// this.baseUrl = "http://ec2-18-217-122-210.us-east-2.compute.amazonaws.com:9999/"; // production endpoint
	}

	// CREATE
	public createEvent(event: Event) {
		try {
			return this.http.post<Event>(this.baseUrl + "event", event); // localhost:9999/event
		} catch (error) {
			this.loggy.error("EventService createEvent() error: " + error)
		}
	}

	// READ
	public getAllEvents(): Observable<Event[]> {
		try {
			return this.http.get<Event[]>(this.baseUrl + "event/all"); // localhost:9999/event/all
		} catch (error) {
			this.loggy.error("EventService getAllEvents() error: " + error)
		}
	}

	public getEventById(id: number): Observable<Event> {
		try {
			return this.http.get<Event>(this.baseUrl + "event/id/" + id); // localhost:9999/event/id/{id}
		} catch (error) {
			this.loggy.error("EventService getEventById() error: " + error)
		}
	}

	// UPDATE | TODO: ALLOW USERS TO UPDATE EXISTING EVENTS
	public updateEvent(event: Event) {
		try {
			return this.http.put<Event>(this.baseUrl + "event", event); // localhost:9999/event
		} catch (error) {
			this.loggy.error("EventService updateEvent() error: " + error)
		}
	}

	// DELETE
	public deleteEventById(id: number) {
		try {
			return this.http.delete<Event>(this.baseUrl + "/event/id/" + id) // localhost:9999/event/id/{id}
		} catch (error) {
			this.loggy.error("EventService deleteEventById() error: " + error)
		}
	}
}
