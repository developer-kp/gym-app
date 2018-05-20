import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';


@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    isCollapsed = true;

    rows = [];
    columns = [
        { prop: 'name' },
        { name: 'Email' },
        { name: 'PhoneNo' },
        { name: 'Address' }
    ];

    constructor(
        private _userService: UsersService
    ) { }

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this._userService.getUsers().subscribe(users => {
            (users as any).data.forEach(user => {
                let temp: {} = {
                    name: user.userName,
                    email: user.email,
                    phoneNo: user.phoneNo,
                    address: user.address
                };
                this.rows.push(temp);
            });
            this.rows = [...this.rows];
        });
    }

}
