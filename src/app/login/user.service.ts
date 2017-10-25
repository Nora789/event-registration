import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Headers, Http } from '@angular/http';
import { User } from './user';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService { 
    private user_idrSource = new BehaviorSubject<string>("");
    //This "default message can not send to other components"
    user_idr$ = this.user_idrSource.asObservable();

    //public user_idr = "default";

    constructor(private http: Http) { }

    changeUserId(id: string) {
        this.user_idrSource.next(id);
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
    
    getUser(UserId: number): Promise<User> {
        const url = `${this.usersUrl}/getUser/${UserId}`;
        return this.http.get(url)
                        .toPromise()
                        .then(response => response.json() as User)
                        .catch(this.handleError);
    }
    
    createUser(user: User): Promise<User> {
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
        const url = `${this.usersUrl}/deleteUser/${user.id}`;
        return this.http.get(url, { headers: this.headers })
                        .toPromise()
                        .then(() => null)
                        .catch(this.handleError);
    }
}