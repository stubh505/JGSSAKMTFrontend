import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { EventsComponent } from './events/events.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
  { path : 'home', component : HomeComponent },
  { path : 'about', component : AboutComponent },
  { path : 'blogs', component : BlogsComponent },
  { path : 'events', component : EventsComponent },
  { path : 'contactus', component : ContactusComponent},

  { path: '', component : HomeComponent },
  { path: "**", redirectTo : "", pathMatch : 'full' 
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
