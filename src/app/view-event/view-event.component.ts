import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../events/events.service';
import { Title } from '@angular/platform-browser';
import { Events } from '../models/events';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {
event:Events;
errorMessage:string;
eventId:number;

  constructor(private route:ActivatedRoute, private service:EventsService, private title:Title) { 
    title.setTitle("Event")
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      param=>this.eventId=param['id']
    );
    this.view();
  }

  view() {
    this.service.view(this.eventId).subscribe(
      (response)=>{ this.event=response },
      (error)=>{ this.errorMessage=error.error.message }
    )
  }
}
