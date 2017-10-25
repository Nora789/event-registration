import 'rxjs/add/operator/switchMap'
import { Component, OnInit, Input } from '@angular/core';
import { Router, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Event } from './event';
import { EventService } from './event.service';
import { UserService } from 'app/login/user.service';

@Component({
    selector: 'app-event-create',
    templateUrl: './event-create.component.html'
})

export class EventCreateComponent implements OnInit {
    events: Event[];
    selectedEvent: Event;
    newEvent: Event;
    submitted = false;
    user_idr: string;

    constructor(
        private eventService: EventService,
        private router: Router,
        private location: Location,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.eventService.getAllEvents().then(events => this.events = events);
        this.newEvent = new Event();
        this.userService.user_idr$.subscribe(user_idr$ => this.user_idr = user_idr$);
        this.newEvent.creator_id = this.user_idr;
    }

    private handleError(error: any):
	Promise<any> {
        console.error('An error occurred', error);
        alert('An error occurred');
		return Promise.reject(error.message || error);
    }

    getCreator(event: Event): void {
        event.creator_id = this.user_idr;
    }

    createEvent(event: Event): void {
        this.eventService.createEvent(event)
            .then(event => {
                this.events.push(event);
                this.getCreator(event);
                this.selectedEvent = null;
                //alert(this.newEvent.creator_id);
            })
            .catch(this.handleError);
        //alert(this.newEvent.creator_id);
        this.goBack();
    }

    showInfo(event: Event): void {
        this.selectedEvent = event;
        //this.router.navigate(['/information'], this.selectedEvent.event_id); 
    }

    goBack(): void {
        this.location.back();
        //alert(this.user_idr);
    }

    onSubmit() {
        this.submitted = true;
    }
}