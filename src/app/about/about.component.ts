import { Component, OnInit } from '@angular/core';
import { AboutService } from './about.service';
import { Page } from '../models/page';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about:Page;
  errorMessage;

  constructor(private service:AboutService, private titleService:Title) {
    this.titleService.setTitle("About")
   }

  ngOnInit(): void {
    this.view();
  }

  view() {
    this.service.view().subscribe(
      (response)=>{ this.about=response },
      (error)=>{ this.errorMessage=error.error.message }
    )
  }
}
