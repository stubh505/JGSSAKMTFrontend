import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

    @Pipe({
        name: 'eventDate'
    })
    export class EventDatePipe extends DatePipe implements PipeTransform {
        transform(value: any, args?: any): any {
        return super.transform(value, "MMMM d, y h:mm a");
    }
}