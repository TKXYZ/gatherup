import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Injectable({
	providedIn: 'root'
})
export class PasswordEncryptorService {

	constructor(private loggy: NGXLogger) { }

	encrypt(password: string) {
		var newPassword: string = "";
		var forwards: string = "ZYXWVUTSRQPONMLKJIHGFEDCBAabcdefghijklmnopqrstuvwxyz0987654321";
		var backwards: string = "1234567890zyxwvutsrqponmlkjihgfedcbaABCDEFGHIJKLMNOPQRSTUVWXYZ";
		var tempIndex: number = 0;

		for (var i: number = 0; i < password.length; i++) {
			tempIndex = forwards.indexOf(password[i]);
			newPassword += backwards[tempIndex];
		}

		this.loggy.info("New Password: " + newPassword);

		return newPassword;
	}
}
