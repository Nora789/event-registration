import { Injectable, Input } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Registration } from './registration';
import { Event } from './event';
import { User } from 'app/login/user';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class RegistrationService {
    private registrationUrl = 'api/registration';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    @Input() event_idr: number;
    @Input() user_idr: number;

    register(registration: Registration): Promise<Registration> {
        const url = `${this.registrationUrl}/register/${this.event_idr} + ${this.user_idr}`;
        alert("event_idr");
        return this.http
                   .post(this.registrationUrl + "/register", JSON.stringify(registration), { headers: this.headers })
                   .toPromise()
                   .then(res => res.json() as Registration)
                   .catch(this.handleError);
    }

    /*
    updateRegisatration(registration: Registration): Promise<Registration> {
        return this.http
                   .post(this.registrationUrl + "/updateRegistration", JSON.stringify(registration), { headers: this.headers })
                   .toPromise()
                   .then(() => registration)
                   .catch(this.handleError);
    }*/

    private handleError(error: any):
	Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
    }

}