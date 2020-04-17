import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blogs } from '../models/blogs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class BlogsService {

    constructor(private http:HttpClient) { }

    viewAll():Observable<Blogs[]>{
        return this.http.get<Blogs[]>(environment.blogsapi+"getAllBlogs");
    }

    view(b:number):Observable<Blogs>{
      return this.http.get<Blogs>(environment.blogsapi+"getBlog/"+b);
    }
}
  