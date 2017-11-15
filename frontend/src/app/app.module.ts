import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { EventCreateComponent } from './event/event-create.component';
import { EventService } from './event/event.service';
import { GoogleSignInComponent } from './login/google-sign-in.component';
import { RegistrationComponent } from './event/registration.component';
import { RegistrationService } from './event/registration.service';
import { MyEventsComponent } from './my-events/my-events.component';
import { UserService } from './login/user.service';
import { NavigatorComponent } from './navigator/navigator.component';
import { EventFilterPipe } from './my-events/event-filter.pipe';
import { EventSearchFilterPipe } from './event/event-search-filter.pipe';
import { AuthGuard } from './auth-guard.service';
import { SignInReminderComponent } from './login/sign-in-reminder.component';
import { EditMyEvent } from './my-events/edit-my-event.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventCreateComponent,
    GoogleSignInComponent,
    RegistrationComponent,
    NavigatorComponent,
    MyEventsComponent,
    EventFilterPipe,
    EventSearchFilterPipe,
    SignInReminderComponent,
    EditMyEvent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    EventService,
    GoogleSignInComponent,
    RegistrationService,
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
