import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { EventsComponent } from './events/events.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { ViewEventComponent } from './view-event/view-event.component';


const routes: Routes = [
  { path : 'home', component : HomeComponent },
  { path : 'about', component : AboutComponent },
  { path : 'blogs', component : BlogsComponent },
  { path : 'blogs/:id', component : ViewBlogComponent },
  { path : 'events', component : EventsComponent },
  { path : 'events/:id', component : ViewEventComponent },
  { path : 'contactus', component : ContactusComponent},
  { path : 'events/:id', component : ViewEventComponent },
  { path: '', component : HomeComponent },
  { path: "**", redirectTo : "", pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
