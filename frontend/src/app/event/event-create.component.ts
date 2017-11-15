import 'rxjs/add/operator/switchMap'
import { Component, OnInit, Input } from '@angular/core';
import { Router, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Event } from './event';
import { EventService } from './event.service';
import { UserService } from 'app/login/user.service';
import { User } from 'app/login/user';

@Component({
    selector: 'app-event-create',
    templateUrl: './event-create.component.html'
})

export class EventCreateComponent implements OnInit {
    events: Event[];
    selectedEvent: Event;
    newEvent: Event;
    users: User[];
    selectedUser: User;
    newUser: User
    submitted = false;
    user_idr: string;
    user_fname: string;
    user_lname: string;

    constructor(
        private eventService: EventService,
        private router: Router,
        private location: Location,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.eventService.getAllEvents().then(events => this.events = events);
        this.userService.getAllUsers().then(users => this.users = users);
        this.newEvent = new Event();
        this.newUser = new User();
        this.userService.user_idr$.subscribe(user_idr$ => this.user_idr = user_idr$);
        this.userService.user_fname$.subscribe(user_fname$ => this.user_fname = user_fname$);
        this.userService.user_lname$.subscribe(user_lname$ => this.user_lname = user_lname$);
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


    createEventUser(event: Event, user: User): void {
        //alert(this.newEvent.creator_id);
        this.createUser(user);
        this.createEvent(event);
        this.goBack();
    }

    goBack(): void {
        this.location.back();
        //alert(this.user_idr);
    }

    onSubmit() {
        this.submitted = true;
    }

    createEvent(event: Event): void {
        this.eventService.createEvent(event)
        .then(event => {
            this.events.push(event);
            this.getCreator(event);
            this.selectedEvent = null;
            alert('Create successfully');
        })
        .catch(this.handleError);
    }

    getUserInfo(user: User): void {
        user.user_id = this.user_idr;
        user.fname = this.user_fname;
        user.lname = this.user_lname;
        user.email = this.user_idr;
        //alert(user.fname);
    }

    createUser(user: User): void {
        this.userService.createUser(user)
        .then(user => {
            //this.getUserInfo(user);
            this.users.push(user);
            this.getUserInfo(user);
            //alert(user.user_id+user.fname+user.lname+user.email);
            //alert(this.newUser.user_id+this.newUser.fname+this.newUser.lname+this.newUser.email);
            this.selectedEvent = null;
            //alert(this.newUser.user_id);
        })
        .catch(this.handleError);
    }
}