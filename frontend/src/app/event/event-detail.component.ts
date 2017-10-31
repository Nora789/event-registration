import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Event } from './event';
import { EventService } from './event.service';
import { UserService } from 'app/login/user.service';
import { DatePipe, Location } from '@angular/common';

@Component({
    selector: 'event-detail',
    templateUrl: './event-detail.component.html'
})

export class EventDetailComponent implements OnInit {
    user_idr: string;

    constructor(private eventService: EventService,
        private route: ActivatedRoute,
        private userService: UserService,
        private location: Location
    ) { }

    ngOnInit(): void {
        //this.eventService.getEvent(this.event_idr).then(event => this.event = event);
        this.route.params.switchMap((params: Params) => this.eventService.getEvent(+params['id']))
            .subscribe(event => this.event = event);
        this.userService.user_idr$.subscribe(user_idr$ => this.user_idr = user_idr$);

    }

    @Input() event: Event;

    goBack(): void {
        this.location.back();
    }

}