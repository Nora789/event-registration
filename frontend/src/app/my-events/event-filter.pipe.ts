import { Pipe, PipeTransform } from '@angular/core';

import { Event } from 'app/event/event';

@Pipe({
    name: 'eventfilter',
    pure: false
})

export class EventFilterPipe implements PipeTransform {
    transform(items: any[], callback: (item: any) => boolean): any {
        if (!items || !callback) {
            return items;
        }
        return items.filter(item => callback(item));
    }
}