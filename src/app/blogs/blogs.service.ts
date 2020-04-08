import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blogs } from '../models/blogs';
import { Injectable } from '@angular/core';

@Injectable()
export class BlogsService {

    constructor(private http:HttpClient) { }

    viewAll():Observable<Blogs[]>{
        return this.http.get<Blogs[]>("http://localhost:8080/app-0.0.1-SNAPSHOT/BlogsAPI/getAllBlogs");
    }

    view(b:number):Observable<Blogs>{
      return this.http.get<Blogs>("http://localhost:8080/app-0.0.1-SNAPSHOT/BlogsAPI/getBlog/"+b);
    }
}
  