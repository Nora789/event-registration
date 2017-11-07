import { Pipe, PipeTransform } from '@angular/core';

import { Event } from 'app/event/event';

@Pipe({
    name: 'eventfilter',
    pure: false
})

export class EventFilterPipe implements PipeTransform {
    transform(events: Event[], filter: string): Event[] {
        return events.filter(event => event.creator_id.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    }
}