import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
 
//import { AppComponent } from './app.component';
import { EventCreateComponent } from './event/event-create.component';
import { EventComponent } from './event/event.component';
import { GoogleSignInComponent } from './login/google-sign-in.component';
import { MyEventsComponent } from './my-events/my-events.component';
 
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  //{ path: 'home', component: AppComponent},
  //{ path: 'information/:id', component: EventInfoComponent },
  { path: 'home', component: EventComponent },
  //{ path: 'detail/:id', component: EventDetailComponent},
  { path: 'create', component: EventCreateComponent },
  { path: 'myevents/:id', component: MyEventsComponent}
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }