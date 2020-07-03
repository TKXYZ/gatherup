export class User {

	id: number;
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	contact: string;

	constructor(id: number, email: string, password: string, firstName: string, lastName: string, contact: string) {
		this.id = id;
		this.email = email;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.contact = contact;
	}
}
