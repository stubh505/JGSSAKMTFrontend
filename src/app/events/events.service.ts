import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Events } from '../models/events';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventsService {

    constructor(private http:HttpClient) { }

    viewAll():Observable<Events[]>{
        return this.http.get<Events[]>("http://localhost:8080/app-0.0.1-SNAPSHOT/EventsAPI/getAllEvents");
    }

    view(b:number):Observable<Events>{
      return this.http.get<Events>("http://localhost:8080/app-0.0.1-SNAPSHOT/EventsAPI/getEvent/"+b);
    }

    viewPast():Observable<Events[]>{
        return this.http.get<Events[]>("http://localhost:8080/app-0.0.1-SNAPSHOT/EventsAPI/getPastEvents");
    }

    viewUpcoming():Observable<Events[]>{
        return this.http.get<Events[]>("http://localhost:8080/app-0.0.1-SNAPSHOT/EventsAPI/getUpComingEvents");
    }
}
  