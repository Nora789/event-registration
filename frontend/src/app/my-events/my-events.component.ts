import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'app/event/event';
import { EventService } from 'app/event/event.service';
import { UserService } from 'app/login/user.service';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'my-events',
    templateUrl: './my-events.component.html'
})

export class MyEventsComponent implements OnInit {
    events: Event[];    
    user_idr: string;
    constructor(private eventService: EventService,
        private router: Router,
        private userService: UserService
    ) { }

    ngOnInit(): void {
        this.userService.user_idr$.subscribe(user_idr$ => this.user_idr = user_idr$);
        //this.userService.getUserEvents(this.user_idr).then(events => this.events = events);
    }

}