import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

import { Event } from '../classes/event/event';
import { UserService } from '../services/user/user.service';
import { EventService } from '../services/event/event.service';

@Component({
	selector: 'app-add-event',
	templateUrl: './add-event.component.html',
	styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

	event: Event;
	sessionKey: string;

	constructor(private router: Router, private loggy: NGXLogger, private userService: UserService, private eventService: EventService) { }

	ngOnInit(): void {
		// Grabs key from current session
		this.sessionKey = sessionStorage.getItem("email");
		this.loggy.info("Current sessionKey: " + this.sessionKey)

		// Validates if key exists and routes accordingly
		if (this.sessionKey == null) {
			window.location.assign("/login");
		}
	}

	createEvent() {
		this.loggy.info("createEvent() clicked.");

		// Sanity check
		this.loggy.info(this.event);

		// POSTs event to endpoint and routes to event view
		this.eventService.createEvent(this.event).subscribe(data => this.router.navigate(["/eventview"]));
	}
}
