import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { User } from './../../class/user.class';
import { UsersService } from './../../services/users.service';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

    public model: User;

    constructor(
        private _location: Location,
        private _router: Router,
        private _userService: UsersService
    ) { }

    ngOnInit() {
        this.model = new User(0, '', '', '', null, null, 1, 1, null);
    }

    goBack() {
        this._location.back();
    }

    addUser() {
        this._userService.addUser(this.model).subscribe(user => {
            console.log(user);
            this._router.navigate(['/users']);
        });
    }

}
