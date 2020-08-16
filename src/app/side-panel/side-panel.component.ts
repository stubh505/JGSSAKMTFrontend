import { Component, OnInit } from '@angular/core';
import { Blogs } from '../models/blogs';
import { Events } from '../models/events';
import { BlogsService } from '../blogs/blogs.service';
import { EventsService } from '../events/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {
  blogs:Blogs[];
  pastEvents:Events[];
  upComingEvents:Events[];
  blogsError:string;
  peError:string;
  ueError:string;

  constructor(private bService:BlogsService, private eService:EventsService, private route:Router) { }

  ngOnInit(): void {
    this.bService.viewAll().subscribe(
      (response)=>{ this.blogs=response },
      (error)=>{ this.blogsError=error.error.message }
    );
    this.eService.viewPast().subscribe(
      (response)=>{ this.pastEvents=response },
      (error)=>{ this.peError=error.error.message }
    );
    this.eService.viewUpcoming().subscribe(
      (response)=>{ this.upComingEvents=response },
      (error)=>{ this.ueError=error.error.message }
    );
  }

  blogsClicked(id) {
    this.route.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate(['/blogs', id])
  }

  eventsClicked(id) {
    this.route.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate(['/events', id])
  }
}