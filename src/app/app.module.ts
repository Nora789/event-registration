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
import { NgbdPopoverConfig } from './popover/popover-config';
import { EventSearchComponent } from './event/event-search.component';
import { RegistrationComponent } from './event/registration.component';
import { RegistrationService } from './event/registration.service';
import { UserService } from './login/user.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MatList, MatListItem } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventCreateComponent,
    GoogleSignInComponent,
    NgbdPopoverConfig,
    EventSearchComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [
    EventService,
    GoogleSignInComponent,
    RegistrationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
