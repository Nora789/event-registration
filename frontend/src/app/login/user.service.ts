import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Headers, Http } from '@angular/http';
import { User } from './user';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService { 
    private user_idrSource = new BehaviorSubject<string>("");
    private user_fnameSource = new BehaviorSubject<string>("");
    private user_lnameSource = new BehaviorSubject<string>("");
    //This "default message can not send to other components"
    user_idr$ = this.user_idrSource.asObservable();
    user_fname$ = this.user_fnameSource.asObservable();
    user_lname$ = this.user_lnameSource.asObservable();
    user_email$ = this.user_idrSource.asObservable();

    //public user_idr = "default";

    constructor(private http: Http) { }

    changeUserId(id: string) {
        this.user_idrSource.next(id);
    }

    changeUserfname(fname: string) {
        this.user_fnameSource.next(fname);
    }

    changeUserlname(lname: string) {
        this.user_lnameSource.next(lname);
    }

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private usersUrl = 'api/users';

    getAllUsers(): Promise<User[]> {
        return this.http.get(this.usersUrl + "/allUsers")
                        .toPromise()
                        .then(response => response.json() as User[])
                        .catch(this.handleError);
    }

    private handleError(error: any):
	Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
    }
    
    getUser(UserId: string): Promise<User> {
        const url = `${this.usersUrl}/getUser/${UserId}`;
        return this.http.get(url)
                        .toPromise()
                        .then(response => response.json() as User)
                        .catch(this.handleError);
    }
    
    createUser(user: User): Promise<User> {
        this.user_idr$.subscribe(user_idr$ => user.user_id = user_idr$);
        this.user_fname$.subscribe(user_fname$ => user.fname = user_fname$);
        this.user_lname$.subscribe(user_lname$ => user.lname = user_lname$);
        this.user_email$.subscribe(user_email$ => user.email = user_email$);
        return this.http
                   .post(this.usersUrl + "/createUser", JSON.stringify(user), { headers: this.headers })
                   .toPromise()
                   .then(res => res.json() as User)
                   .catch(this.handleError);
    }

    updateUser(user: User): Promise<User> {
        return this.http
                   .post(this.usersUrl + "/updateUser", JSON.stringify(User), { headers: this.headers })
                   .toPromise()
                   .then(() => user)
                   .catch(this.handleError);
    }

    deleteUser(user: User): Promise<void> {
        const url = `${this.usersUrl}/deleteUser/${user.user_id}`;
        return this.http.get(url, { headers: this.headers })
                        .toPromise()
                        .then(() => null)
                        .catch(this.handleError);
    }

    getEventsByUser(userId: string): Promise<Event[]> {
        const url = `${this.usersUrl}/events/${userId}`;
        return this.http.get(url)
                   .toPromise()
                   .then(response => response.json() as Event[])
                   .catch(this.handleError);
    }
}