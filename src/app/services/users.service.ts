import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './../class/user.class';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(
        private _http: HttpClient
    ) { }

    addUser(user: User) {
        return this._http.post("http://tyxsteamz.com:8080/gm/v1/user", user, httpOptions);
    }

}
