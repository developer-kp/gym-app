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
    editing = {};
    selected = [];

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

    updateValue(event, cell, rowIndex) {
        console.log('inline editing rowIndex', rowIndex)
        this.editing[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
        console.log('UPDATED!', this.rows[rowIndex][cell]);
    }

    onSelect({ selected }) {
        console.log('Select Event', selected, this.selected);

        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
    }

    onActivate(event) {
        console.log('Activate Event', event);
    }Í
}
