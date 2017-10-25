import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { EventSearchService } from './event-search.service';
import { Event} from './event';

@Component({
    selector: 'event-search',
    templateUrl: './event-search.component.html',
    //styleUrls: [ './hero-search.component.css' ],
    providers: [EventSearchService]
})

export class EventSearchComponent implements OnInit {
    events: Observable<Event[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private eventSearchService: EventSearchService,
        private router: Router) {}
    
      // Push a search term into the observable stream.
      search(term: string): void {
        this.searchTerms.next(term);
    }
    
    ngOnInit(): void {
        this.events = this.searchTerms
        .debounceTime(300)        // wait 300ms after each keystroke before considering the term
        .distinctUntilChanged()   // ignore if next search term is same as previous
        .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.eventSearchService.search(term)
        // or the observable of empty events if there was no search term
        : Observable.of<Event[]>([]))
        .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Event[]>([]);
        });
    }
}