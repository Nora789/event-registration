import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from './event';
import { EventService } from './event.service';
import { UserService } from 'app/login/user.service';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-events',
    templateUrl: './event.component.html'
})

export class EventComponent implements OnInit {
    events: Event[];
    selectedEvent: Event = null;
    newEvent: Event;
    event_idr: number;
    user_idr: string;

    constructor(private eventService: EventService,
                private router: Router,
                private userService: UserService
    ) { 
        //userService.user_idr$.subscribe(user_idr$ => this.user_idr);
    }

    onSelect(event: Event): number {
        this.selectedEvent = event;
        this.event_idr = this.selectedEvent.event_id;
        return this.selectedEvent.event_id;
    }
    
    ngOnInit(): void {
        this.eventService.getAllEvents().then(events => this.events = events);
        this.newEvent = new Event();
        //this.userService.currentUser.subscribe(user_idr => this.user_idr);
        this.userService.user_idr$.subscribe(user_idr$ => this.user_idr = user_idr$);
    }

    //event_idr = this.selectedEvent.event_id;//pass this value to child component "registration"
    //This causes problem

    newMessage() {
        this.userService.changeUserId("Hello");
    }

    test(): void {
        //alert(this.event_idr);//This works! It means we can pass event_idr to register.
        alert(this.user_idr);
    }
    /*
    registered = false;
    register(user_id: string, event_id: number) {
        this.onRegisteredEvent.emit(event_id);
        this.onRegisteredUser.emit(user_id);
        this.registered = true;
    }//then we let another function call register() here to determine user_id
    */

    

    showInfo(event: Event): void {
        this.selectedEvent = event;
        this.router.navigate(['/information', this.selectedEvent.event_id]);
    }
}