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
    newRegistration: Registration;
    registrations: Registration[];
    selectedRegistration: Registration;
    submitted = false;
    //user_idr: string;
    constructor(private registrationService: RegistrationService, 
                private userService: UserService) { }

    ngOnInit() {
        this.userService.user_idr$.subscribe(user_idr$ => this.user_idr = user_idr$);
        this.registrationService.getAllRegistrations().then(registrations => this.registrations = registrations);
        this.newRegistration = new Registration();
        //this.newRegistration.event_id = 101;
     }

    @Input() event_idr: number;//pass this value to registration service
    @Input() user_idr: string;
    
    private handleError(error: any):
	Promise<any> {
        console.error('An error occurred', error);
        alert('An error occurred');
		return Promise.reject(error.message || error);
    }
    
    
    register(registration: Registration): void {
        //this.submitted = false;
        this.registrationService.register(registration)
        .then(registration => {
            this.registrations.push(registration);
            registration.event_id = this.event_idr;
            this.getRegisterInfo(registration);
            this.selectedRegistration = null;
            //alert(this.newRegistration.event_id);
        })
        .catch(this.handleError);
    }

    getRegisterInfo(registration: Registration): void {
        registration.user_id = this.user_idr;
        registration.event_id = this.event_idr;
        alert(registration.event_id);
    }

    testr(): void {
        alert(this.event_idr);
        //alert(this.user_idr);
    }


    /*
    onSubmit() {
        this.submitted = true;
        this.save();
    }
    */
}   