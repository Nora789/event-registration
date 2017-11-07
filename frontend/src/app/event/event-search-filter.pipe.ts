import { Pipe, PipeTransform } from '@angular/core';

import { Event } from 'app/event/event';

@Pipe({
    name: 'eventSearchFilter',
    pure: false
})

export class EventSearchFilterPipe implements PipeTransform {
    transform(events: Event[], filter: string): Event[] {
        return events.filter(event => event.event_name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    }
}