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
    ViewBlogComponent
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
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
