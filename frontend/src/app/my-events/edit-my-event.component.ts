import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Event } from 'app/event/event';
import { EventService } from 'app/event/event.service';

@Component({
    selector: 'edit-my-event',
    templateUrl: './edit-my-event.component.html'
})

export class EditMyEvent implements OnInit {
    @Input() event: Event;

    constructor(
        private route: ActivatedRoute,
        private eventService: EventService,
        private location: Location
      ) {}
    
    ngOnInit(): void {
    this.getEvent();
    }

    getEvent(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.eventService.getEvent(id).then(event => this.event = event);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.eventService.updateEvent(this.event).then(() => this.goBack());
    }
}