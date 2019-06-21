import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';
import { Paths } from 'src/app/utills/paths';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    constructor(public readonly authService: AuthService, private readonly router: Router) {}

    ngOnInit() {}
    public logout() {
        this.authService.logout();
        this.router.navigate([Paths.Login]);
    }
}
