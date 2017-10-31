import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/login/user.service';
import { User } from 'app/login/user';

@Component({
    selector: 'my-navigator',
    templateUrl: './navigator.component.html'
})

export class NavigatorComponent implements OnInit {
    user_idr: string;
    
    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.userService.user_idr$.subscribe(user_idr$ => this.user_idr = user_idr$);
    }
}