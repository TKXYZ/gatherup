import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

import { User } from '../classes/user/user';
import { UserService } from '../services/user/user.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	user: User;

	constructor(private router: Router, private loggy: NGXLogger, private userService: UserService) { }

	ngOnInit(): void {
		this.user = new User();
	}

	login() {
		this.loggy.info("--- login() button pressed ---");

		// Sanity check
		this.loggy.info("Sending user to backend: ");
		this.loggy.info(this.user);

		// Validates and routes accordingly
		this.userService.login(this.user).subscribe(result => {
			this.loggy.info("User from database: ");
			this.loggy.info(result);

			if (result != null) {
				this.loggy.info("Login success.");

				// Saves data (email) to a session
				sessionStorage.setItem("email", this.user.email);
				let sessionKey = sessionStorage.getItem("email");
				this.loggy.info("Storing key: " + sessionKey);

				// Route
				window.location.assign("/eventview")
			} else {
				alert("Invalid credentials!");
			}
		});
	}
}
