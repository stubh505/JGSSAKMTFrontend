import { Component, OnInit } from '@angular/core';
import { EventsService } from './events.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Events } from '../models/events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
upComing:Events[];
past:Events[];
errorMessage:string;

  constructor(private service:EventsService, private title:Title, private router:Router) { 
    title.setTitle("Events")
  }

  ngOnInit(): void {
    this.viewUpComing()
  }

  viewUpComing() {
    this.service.viewAll().subscribe(
      (response)=>{ this.upComing=response },
      (error)=>{ this.errorMessage=error.error.message }
    )
  }

  link(eId) {
    this.router.navigate(['/','events',eId])
  }
}