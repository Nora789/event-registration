import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from 'app/login/user.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private userService: UserService) {}
    private isLoggedInSource = new BehaviorSubject<boolean>(false);
    isLoggedIn: boolean;
    isLoggedIn$ = this.isLoggedInSource.asObservable();
    
    changeLogInStatus(isLoggedIn: boolean) {
      this.isLoggedInSource.next(isLoggedIn);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      this.isLoggedIn$.subscribe(isLoggedIn$ => this.isLoggedIn = isLoggedIn$);
      console.log(this.isLoggedIn);
      if (!this.isLoggedIn) {
        this.router.navigate(['reminder']);
      }
      return true;
    }
}