import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
 
import { EventCreateComponent } from './event/event-create.component';
import { EventComponent } from './event/event.component';
import { GoogleSignInComponent } from './login/google-sign-in.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { AuthGuard } from './auth-guard.service';
import { SignInReminderComponent } from './login/sign-in-reminder.component';
import { EditMyEvent } from './my-events/edit-my-event.component';
 
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: EventComponent },
  { path: 'create', component: EventCreateComponent, canActivate:[AuthGuard] },
  { path: 'myevents/:id', component: MyEventsComponent, canActivate:[AuthGuard] },
  { path: 'login', component: GoogleSignInComponent },
  { path: 'reminder', component: SignInReminderComponent },
  { path: 'edit/:id', component: EditMyEvent, canActivate:[AuthGuard] }
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