import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Event } from './event';

@Injectable()
export class EventSearchService {
    
    private eventsUrl = 'api/events';

    constructor(private http: Http) {}

    search(id: string): Observable<Event[]> {
        alert('message');
        const url = `${this.eventsUrl}/getEvent/${id}`;
        return this.http
                   .get(`api/heroes/?name=${id}`)
                   .map(response => response.json().data as Event[]);
    }
}