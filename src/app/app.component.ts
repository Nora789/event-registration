import { Component, OnInit } from '@angular/core';
import { Event } from './event/event';
import { EventService } from './event/event.service';
import { GoogleSignInComponent } from './login/google-sign-in.component';
import { NgbdPopoverConfig } from './popover/popover-config';
import { EventSearchComponent } from './event/event-search.component';
import { RegistrationComponent } from './event/registration.component';
import { UserService } from './login/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  title = 'Event Registration';

  ngOnInit() {
    
  }
}
