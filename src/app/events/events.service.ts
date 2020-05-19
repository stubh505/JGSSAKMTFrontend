import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Events } from '../models/events';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class EventsService {

    constructor(private http:HttpClient) { }

    viewAll():Observable<Events[]>{
        return this.http.get<Events[]>(environment.eventsapi+"getAllEvents");
    }

    view(b:number):Observable<Events>{
      return this.http.get<Events>(environment.eventsapi+"getEvent/"+b);
    }

    viewPast():Observable<Events[]>{
        return this.http.get<Events[]>(environment.eventsapi+"getPastEvents");
    }

    viewUpcoming():Observable<Events[]>{ 
        return this.http.get<Events[]>(environment.eventsapi+"getUpComingEvents");
    }
}
  