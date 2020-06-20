import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

import { User } from '../classes/user/user';
import { UserService } from '../services/user/user.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	user: User;

	constructor(private router: Router, private loggy: NGXLogger, private userService: UserService) { }

	ngOnInit(): void {
		this.user = new User();
	}

	register() {
		this.loggy.info("--- register() button pressed ---");

		// Sanity check
		this.loggy.info("Sending user to backend: ");
		this.loggy.info(this.user);

		// Validates and routes accordingly
		this.userService.createUser(this.user).subscribe(result => {
			this.loggy.info("User from DB: ");
			this.loggy.info(result);

			if (result != null) {
				this.loggy.info("Registration success.");

				// Saves data (email) to a session
				sessionStorage.setItem("email", this.user.email);
				let sessionKey = sessionStorage.getItem("email");
				this.loggy.info("Storing key: " + sessionKey);

				// Routes
				window.location.assign("/profile");
			} else {
				alert("User already exists. Try logging in instead?");
			}
		});
	}
}
