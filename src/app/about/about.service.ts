import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../models/page';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class AboutService {

    constructor(private http:HttpClient) { }
    view():Observable<Page>{
      return this.http.get<Page>(environment.pagesapi+"getPage/1001");
    }
  }
  