import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ContactUs } from '../models/contactus';

@Injectable()
export class ContactUsService {

  constructor(private http:HttpClient) { }

  contactUs(data: ContactUs):Observable<ContactUs> {
    return this.http.post<ContactUs>("http://localhost:8080/app-0.0.1-SNAPSHOT/ContactUsAPI/contactUs", data);
  }

  private errorHandler(err:any){
    return throwError(err.error || 'Server error');
  }

}

