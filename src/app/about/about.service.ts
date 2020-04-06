import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../models/page';
import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {

    constructor(private http:HttpClient) { }
    view():Observable<Page>{
      return this.http.get<Page>("http://localhost:8080/app-0.0.1-SNAPSHOT/PagesAPI/getPage/1001");
    }
  }
  