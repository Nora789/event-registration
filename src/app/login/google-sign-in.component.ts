import { Component, OnInit, ElementRef, AfterViewInit, NgZone, Output } from '@angular/core';
import { AuthService, AppGlobals } from 'angular2-google-login';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { User } from './user';
import { UserService } from './user.service';

declare const gapi: any;

@Component({
    selector: 'google-signin',
    templateUrl: './google-sign-in.component.html',
    styleUrls: ['./google-sign-in.component.css'],
    providers: [NgbPopoverConfig]
})

export class GoogleSignInComponent implements AfterViewInit {
    constructor (private element: ElementRef, 
                config: NgbPopoverConfig, 
                private zone: NgZone,
                private userService: UserService) {
        console.log('ElementRef: ', this.element);
        config.placement = 'bottom';
        config.triggers = 'mouseenter';
        //this.userService.currentUser.subscribe(user_idr => this.user_idr);
        //alert(this.user_idr);
    }
    
    userProfile: User = {id: '',
                         name: '',
                         fname: 'bbb',
                         lname: '',
                         email: ''};

    fShowInfo = false;
    user_idr: string;
    users: User[];
    selectedUser: User = null;
    newUser: User;
    
    private clientId: string = '1082300110530-4aqfb1b6v42icls9n4f1jg4imvld5uu0.apps.googleusercontent.com';

    private scope = [
        'profile',
        'email',
        'https://www.googleapis.com/auth/plus.me',
        'https://www.googleapis.com/auth/contacts.readonly',
        'https://www.googleapis.com/auth/admin.directory.user.readonly'
    ].join(' ');

    public auth2: any;

    //public result: Result;

    public googleInit() {
        let that = this;
        gapi.load('auth2', function () {
            that.auth2 = gapi.auth2.init({
                client_id: that.clientId,
                cookiepolicy: 'single_host_origin',
                scope: that.scope
            });
            //that.attachSignin(that.element.nativeElement.firstChild);
        });
    }

    public attachSignin(element) {
        let that = this;
        this.auth2.attachClickHandler(element, {}, function (googleUser) {
            let profile = googleUser.getBasicProfile();
            console.log('Token || ' + googleUser.getAuthResponse.id_token);
            console.log('ID: ' + profile.getName());
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
            
            //Add something
            //Maybe there needs a user service to handle the information
            //Or just use return
            //this.isSignedIn = that.auth2.isSignedIn.get();
            

            //Result.token = googleUser.getAuthResponse.id_token;
            //Result.id = profile.getName();
            //Result.image_url = profile.getImageUrl();
            //result.setId(profile.getName());
        }, function onFailure (error) {
            console.log(JSON.stringify(error, undefined, 2));
        }
        //add function
        );
    }
    
    ngAfterViewInit(): void {
        this.googleInit();
        this.newUser = new User();
        //this.isSignedIn = this.auth2.isSignedIn.get();
        gapi.signin2.render('my-signin2', {    
            'onsuccess': param => this.onSignIn(param),
            
            
        });
        //alert('init');
        //alert(this.userProfile.email);
        //this.userService.currentUser.subscribe(user_idr => this.user_idr);
        //alert(this.user_idr);
    }

    public signOut(): void {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
          console.log('User signed out.');
        });
    }

    public onSignIn(googleUser) {
        //alert('text');
        this.fShowInfo = true;
        
        var profile = googleUser.getBasicProfile();
        // console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());
        this.zone.run(() => { this.userProfile.name = profile.getName(),
                                this.userProfile.fname = profile.getGivenName(),
                                this.userProfile.lname = profile.getFamilyName()
                                this.userProfile.email = profile.getEmail()
                                //this.userProfile.image_url = profile.getImageUrl()
                                //@Output() this.userProfile.email;
                            }) 
        this.userService.changeUserId(this.userProfile.email);
        //alert(this.user_idr);
        //alert(this.userProfile.email);
    };

    createUser(user: User): void {
        this.userService.createUser(user)
            .then(user => {
                this.users.push(user);
                user.id = this.userProfile.email;
                user.fname = this.userProfile.fname;
                user.lname = this.userProfile.lname;
                user.email = this.userProfile.email;
                this.selectedUser = null;
            });
    }

    
}