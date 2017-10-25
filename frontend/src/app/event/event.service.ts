import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Event } from './event';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class EventService {
    //private server = 'http://localhost:8080/';
    private eventsUrl = 'api/events';
    private headers = new Headers({'Content-Type': 'application/json'});
    
    constructor(private http: Http) { }
    getAllEvents(): Promise<Event[]> {
        return this.http.get(this.eventsUrl + "/allEvents")
                        .toPromise()
                        .then(response => response.json() as Event[])
                        .catch(this.handleError);
    }

    private handleError(error: any):
	Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
    }
    
    getEvent(eventId: number): Promise<Event> {
        const url = `${this.eventsUrl}/getEvent/${eventId}`;
        return this.http.get(url)
                        .toPromise()
                        .then(response => response.json() as Event)
                        .catch(this.handleError);
    }
    
    createEvent(event: Event): Promise<Event> {
        return this.http
                   .post(this.eventsUrl + "/createEvent", JSON.stringify(event), { headers: this.headers })
                   .toPromise()
                   .then(res => res.json() as Event)
                   .catch(this.handleError);
    }

    updateEvent(event: Event): Promise<Event> {
        return this.http
                   .post(this.eventsUrl + "/updateEvent", JSON.stringify(event), { headers: this.headers })
                   .toPromise()
                   .then(() => event)
                   .catch(this.handleError);
    }

    deleteEvent(event: Event): Promise<void> {
        const url = `${this.eventsUrl}/deleteEvent/${event.event_id}`;
        return this.http.get(url, { headers: this.headers })
                        .toPromise()
                        .then(() => null)
                        .catch(this.handleError);
    }
}