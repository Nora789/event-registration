import 'rxjs/add/operator/switchMap'
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Event } from './event';
import { EventService } from './event.service';
import { User } from 'app/login/user';
import { Registration } from './registration';
import { RegistrationService } from './registration.service';
import { GoogleSignInComponent } from 'app/login/google-sign-in.component';
import { UserService } from 'app/login/user.service';

@Component({
    selector: 'register-event',
    templateUrl: './registration.component.html'
})

export class RegistrationComponent implements OnInit {
    registration = new Registration;
    submitted = false;
    user_idr: string;
    constructor(private registrationService: RegistrationService, 
                private userService: UserService ) { }

    ngOnInit() {
        //this.route.paramMap.switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
        //.subscribe(hero => this.hero = hero);
        this.userService.user_idr$.subscribe(user_idr$ => this.user_idr = user_idr$);
     }

    @Input() event_idr: number;//pass this value to registration service

    newRegistration(): void {
        this.submitted = false;
        this.registration = new Registration();
    }

    testr(): void {
        //alert(this.event_idr);
        alert(this.user_idr);
    }

    private save(): void {
        this.registrationService.register(this.registration);
    }

    /*
    onSubmit() {
        this.submitted = true;
        this.save();
    }
    */
}   