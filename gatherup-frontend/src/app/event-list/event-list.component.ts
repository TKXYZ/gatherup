import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

import { Event } from '../classes/event/event';
import { EventService } from '../services/event/event.service';

@Component({
	selector: 'app-event-list',
	templateUrl: './event-list.component.html',
	styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

	event: Event;
	events: Event[] = [];
	eventID: string;
	tempID: any;
	sessionKey: string;

	constructor(private router: Router, private loggy: NGXLogger, private eventService: EventService) {
		this.event = new Event();
	}

	ngOnInit(): void {
		// Grabs key from current session
		this.sessionKey = sessionStorage.getItem("email");
		this.loggy.info("Current sessionKey: " + this.sessionKey);

		// Validates if key exists and routes accordingly
		if (this.sessionKey == null) {
			window.location.assign("/login");
		} else {
			this.eventService.getAllEvents().subscribe(data => {
				this.loggy.info("ALL EVENTS FROM DATABASE: ");
				for (let i in data) {
					this.loggy.info(data[i]);
					if (data[i].userEmail == sessionStorage.getItem("email")) {
						this.events.push(data[i]);
					}
				}
			});
		}
	}

	isHidden = false;
	deleteEvent(index: number) {
		// NOTE: be careful ordering things around in here; may break method

		this.loggy.info("--- deleteEvent() clicked ---");

		// Assigns to local variable and passes it as an argument to backend
		this.tempID = this.events[index].eventID;
		this.loggy.info("Current index's eventID: " + this.events[index].eventID);
		this.eventService.deleteEventById(this.tempID).subscribe(data => this.event = data)

		// Removes from local array (to hide from user immediately)
		this.events.splice(index, 1);
	}
}
