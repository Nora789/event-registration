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


    getAllRegistrations(): Promise<Registration[]> {
        return this.http.get(this.registrationUrl + "/allRegistrations")
                        .toPromise()
                        .then(response => response.json() as Registration[])
                        .catch(this.handleError);
    }

    register(registration: Registration): Promise<Registration> {
        //alert(this.event_idr);
        return this.http
                   .post(this.registrationUrl + "/register", JSON.stringify(registration), { headers: this.headers })
                   .toPromise()
                   .then(res => res.json() as Registration)
                   .catch(this.handleError);
    }

    deleteRegistration(registration: Registration): Promise<void> {
        const url = `${this.registrationUrl}/deleteMyRegistration/${registration.registration_id}`;
        return this.http.get(url, { headers: this.headers })
                        .toPromise()
                        .then(() => null)
                        .catch(this.handleError);
    }

    getEventByUser(userId: string): Promise<Event[]> {
        const url = `${this.registrationUrl}/getEventByUser/${userId}`;
        return this.http.get(url)
                   .toPromise()
                   .then(response => response.json() as Event[])
                   .catch(this.handleError);
    }

    getUserByEvent(eventId: number): Promise<User[]> {
        const url = `${this.registrationUrl}/getUserByEvent/${eventId}`;
        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as User[])
        .catch(this.handleError);
    }

    private handleError(error: any):
	Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
    }

}