import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NGXLogger } from 'ngx-logger';

import { User } from 'src/app/classes/user/user';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	private baseUrl: string;

	constructor(private http: HttpClient, private loggy: NGXLogger) {
		this.baseUrl = "http://localhost:9999/"; // development endpoint
		// this.baseUrl = "http://ec2-18-217-122-210.us-east-2.compute.amazonaws.com:9999/"; // production endpoint
	}

	// CREATE
	public createUser(user: User) {
		try {
			return this.http.post<User>(this.baseUrl + "user", user); // localhost:9999/user
		} catch (error) {
			this.loggy.error("ConfigService createUser() error: " + error);
		}
	}

	// READ
	public getAllUsers(): Observable<User[]> {
		try {
			return this.http.get<User[]>(this.baseUrl + "user/all"); // localhost:9999/user/all
		} catch (error) {
			this.loggy.error("ConfigService getAllUsers() error: " + error);
		}
	}

	public getUserById(id: number): Observable<User> {
		try {
			return this.http.get<User>(this.baseUrl + "user/id/" + id); // localhost:9999/user/id/{id}
		} catch (error) {
			this.loggy.error("ConfigService getUserById() error: " + error);
		}
	}

	public getUserByEmail(email: string): Observable<User> {
		try {
			return this.http.get<User>(this.baseUrl + "user/email/" + email); // localhost:9999/user/email/{email}
		} catch (error) {
			this.loggy.error("ConfigService getUserByEmail() error: " + error)
		}
	}

	// UPDATE | TODO: ALLOW USERS TO UPDATE THEIR INFORMATION
	public updateUser(user: User) {
		try {
			return this.http.put<User>(this.baseUrl + "user", user); // localhost:9999/user
		} catch (error) {
			this.loggy.error("ConfigService updateUser() error: " + error);
		}
	}

	// DELETE
	public deleteUserById(id: number) {
		try {
			return this.http.delete<User>(this.baseUrl + "user/id/" + id) // localhost:9999/user/id/{id}
		} catch (error) {
			this.loggy.error("ConfigService deleteUserById() error: " + error)
		}
	}

	// LOGIN | TODO: CHANGE TO JUST GETUSER(user: User)
	public login(user: User): Observable<User> {
		try {
			return this.http.post<User>(this.baseUrl + "user/verify", user); // localhost:9999/user/verify
		} catch (error) {
			this.loggy.error("ConfigService login() error: " + error)
		}
	}
}
