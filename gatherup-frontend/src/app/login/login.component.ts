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

	user: User = new User(undefined, undefined, undefined, undefined, undefined, undefined);

	constructor(private router: Router, private loggy: NGXLogger, private userService: UserService) { }

	ngOnInit(): void {
	}

	login() {
		// Constructs a user object based on input values
		let email = (<HTMLInputElement>document.getElementById("inputEmail")).value;
		let password = (<HTMLInputElement>document.getElementById("inputPassword")).value;
		let user: User = new User(undefined, email, password, undefined, undefined, undefined);

		// Sanity check
		this.loggy.info("Sending user to backend: ");
		this.loggy.info(user);

		// Validates and routes accordingly
		this.userService.login(user).subscribe(result => {
			this.loggy.info("User from DB: ");
			this.loggy.info(result);

			if (result != null) {
				this.loggy.info("Login success.");

				// Saves data (email) to a session
				sessionStorage.setItem("email", email);
				let sessionKey = sessionStorage.getItem("email");
				this.loggy.info("Storing key: " + sessionKey);

				// Routes
				window.location.assign("/eventlist")
			} else {
				alert("Invalid credentials!");
			}
		});
	}
}
