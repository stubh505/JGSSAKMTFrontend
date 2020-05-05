import { Component, OnInit } from '@angular/core';
import { Carousel } from '../models/carousel';
import { CarouselService } from './carousel.service';
import { Title } from '@angular/platform-browser';
import { HomeService } from './home.service';
import { Page } from '../models/page';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  carousels:Carousel[];
  page:Page;
  errorMessage:string;

  constructor(private service:CarouselService, private home:HomeService, private titleService:Title) { 
    this.titleService.setTitle("Joy Thakur")
  }

  ngOnInit(): void {
    this.showCarousels();
    this.loadPage();
  }

  showCarousels() {
    this.service.view().subscribe(
      (response)=>{ this.carousels=response },
      (error)=>{ this.errorMessage=error.error.message }
    )
  }

  loadPage() {
    this.home.view().subscribe(
      (response)=>{ this.page=response },
      (error)=>{ this.errorMessage=error.error.message }
    )
  }
}
