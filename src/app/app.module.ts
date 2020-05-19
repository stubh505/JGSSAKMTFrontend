import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FootComponent } from './foot/foot.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ContactUsService } from './contactus/contactus.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutService } from './about/about.service';
import { BlogsService } from './blogs/blogs.service';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { EventsService } from './events/events.service';
import { EventDatePipe } from './pipe.date';
import { ViewEventComponent } from './view-event/view-event.component';
import { CarouselService } from './home/carousel.service';
import { HomeService } from './home/home.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FootComponent,
    HomeComponent,
    AboutComponent,
    EventsComponent,
    BlogsComponent,
    ContactusComponent,
    ViewBlogComponent,
    SidePanelComponent,
    ViewEventComponent,
    EventDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [ 
    ContactUsService,
    AboutService,
    BlogsService,
    EventsService,
    CarouselService,
    HomeService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
