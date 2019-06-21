import { Component } from '@angular/core';
import { AuthService } from './modules/auth/auth.service';
import { Router } from '@angular/router';
import { Paths } from './utills/paths';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private readonly authService: AuthService, private readonly router: Router) {
        this.navigate();
    }

    navigate() {
        const isUserLoggedIn = this.authService.isUserLoggedIn();
        if (!isUserLoggedIn) {
            this.router.navigate(['auth/login']);
        }
    }
}
