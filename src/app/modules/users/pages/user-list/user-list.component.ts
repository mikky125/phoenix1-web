import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { User } from '../../user';
import { MatTableDataSource } from '@angular/material';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
    loading = true;
    usersNotLoaded = false;
    users: MatTableDataSource<User> = new MatTableDataSource();
    usersGridColumns: string[] = ['profileImage', 'name', 'address', 'orderTotal'];

    constructor(private readonly service: UsersService) {
        this.configureFilter();
    }

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this.service.getUsers().subscribe(
            res => {
                this.users.data = res;
                this.loading = false;
            },
            err => {
                this.loading = false;
                this.usersNotLoaded = true;
            }
        );
    }

    configureFilter() {
        this.users.filterPredicate = (data: User, filter: string) => {
            return (
                data.firstName.toLowerCase().indexOf(filter) !== -1 ||
                data.lastName.toLowerCase().indexOf(filter) !== -1 ||
                data.orderTotal.amount.toString().indexOf(filter) !== -1
            );
        };
    }

    search(keyword: string) {
        this.users.filter = keyword.trim().toLowerCase();
    }
}
