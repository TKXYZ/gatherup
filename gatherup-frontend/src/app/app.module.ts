import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EventListComponent } from './event-list/event-list.component';
import { UserService } from './services/user/user.service';
import { EventService } from './services/event/event.service';

@NgModule({
	declarations: [
		AppComponent,
		RegisterComponent,
		LoginComponent,
		ProfileComponent,
		AddEventComponent,
		EventListComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		LoggerModule.forRoot({
			serverLoggingUrl: 'http://localhost:9999/api/logs', // URL to POST logs to
			level: NgxLoggerLevel.DEBUG, // only log messages of this level or higher (OFF disables logger for client)
			serverLogLevel: NgxLoggerLevel.ERROR, // only send log messages of this level or higher to the server (OFF disables logger for server)
			timestampFormat: 'long', // format for the timestamp displayed w/ each log message
			colorScheme: ['purple', 'teal', 'gray', 'gray', 'yellow', 'red', 'red'] // TRACE|DEBUG|INFO|LOG|WARN|ERROR|FATAL|OFF
		})
	],
	providers: [
		UserService,
		EventService,
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
