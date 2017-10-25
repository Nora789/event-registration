import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
 
//import { AppComponent } from './app.component';
import { EventCreateComponent } from './event/event-create.component';
import { EventComponent } from './event/event.component';
import { GoogleSignInComponent } from './login/google-sign-in.component';
 
const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full'},
  //{ path: 'home', component: AppComponent},
  //{ path: 'information/:id', component: EventInfoComponent },
  { path: 'event', component: EventComponent },
  //{ path: '**', component: AppComponent}
  { path: 'create', component: EventCreateComponent }
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