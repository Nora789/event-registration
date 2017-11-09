import { Component } from '@angular/core';
import { Event } from './event/event';
import { EventService } from './event/event.service';
import { GoogleSignInComponent } from './login/google-sign-in.component';
import { RegistrationComponent } from './event/registration.component';
import { UserService } from './login/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  title = 'Event Registration';

  public onActivate(event: any) {
    console.log(event);
  }
}
