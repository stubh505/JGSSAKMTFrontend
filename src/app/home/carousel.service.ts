import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Carousel } from '../models/carousel';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private http:HttpClient) { }
    view():Observable<Carousel[]>{
      return this.http.get<Carousel[]>(environment.carouselapi+"getCarousels");
    }
}
