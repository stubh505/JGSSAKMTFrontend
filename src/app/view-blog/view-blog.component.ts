import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from '../blogs/blogs.service';
import { Blogs } from '../models/blogs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {
  blogId:number;
  blog:Blogs;
  errorMessage:string;

  constructor(private route:ActivatedRoute, private service:BlogsService, private title:Title) { 
    title.setTitle("Blog");
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      param=>this.blogId=param['id']
    );
    this.view();
  }

  view() {
    this.service.view(this.blogId).subscribe(
      (response)=>{ this.blog=response },
      (error)=>{ this.errorMessage=error.error.message }
    )
  }
}
