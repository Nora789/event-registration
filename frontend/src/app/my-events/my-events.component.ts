import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'app/event/event';
import { Registration } from 'app/event/registration';
import { UserService } from 'app/login/user.service';
import { EventService } from 'app/event/event.service';
import { RegistrationService } from 'app/event/registration.service';

import { DatePipe } from '@angular/common';

@Component({
    selector: 'my-events',
    templateUrl: './my-events.component.html'
})

export class MyEventsComponent implements OnInit {
    events: Event[];    
    user_idr: string;
    registeredEvents: Event[];
    filter: Event = new Event();
    isEvent: boolean = true;

    constructor(private eventService: EventService,
        private router: Router,
        private userService: UserService,
        private registrationService: RegistrationService
    ) { }

    ngOnInit(): void {
        this.getEvents();
        this.userService.user_idr$.subscribe(user_idr$ => this.user_idr = user_idr$);
        this.userService.getEventsByUser(this.user_idr).then(events => this.registeredEvents = events);
        if (!this.registeredEvents) {
            this.isEvent = false;
        }

    }

    getEvents(): void {
        this.eventService.getAllEvents().then(events => this.events = events);
    }

    getUserId(): string {
        return this.user_idr;
    }

    unregister(registration: Registration): void {
        this.registrationService
            .deleteRegistration(registration)
            .then(() => {

            })
    }

    test(): void {
        alert(this.user_idr);
        //alert(this.filter.creator_id);
    }

}