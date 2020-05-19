import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ContactUs } from '../models/contactus';
import { environment } from 'src/environments/environment';

@Injectable() 
export class ContactUsService {

  constructor(private http:HttpClient) { }

  contactUs(data: ContactUs):Observable<ContactUs> {
    return this.http.post<ContactUs>(environment.contactapi+"contactUs", data);
  }

  private errorHandler(err:any){
    return throwError(err.error || 'Server error');
  }

}

