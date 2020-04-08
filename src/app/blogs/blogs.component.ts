import { Component, OnInit } from '@angular/core';
import { BlogsService } from './blogs.service';
import { Title } from '@angular/platform-browser';
import { Blogs } from '../models/blogs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs:Blogs[];
  errorMessage:string;

  constructor(private service:BlogsService, private title:Title, private route:Router) { 
    title.setTitle("Blogs")
  }

  ngOnInit(): void {
    this.viewAll();
  }

  viewAll() {
    this.service.viewAll().subscribe(
      (response)=>{ this.blogs=response },
      (error)=>{ this.errorMessage=error.error.message }
    )
  }

  link(bId) {
    this.route.navigate(['/','blogs',bId])
  }
}
