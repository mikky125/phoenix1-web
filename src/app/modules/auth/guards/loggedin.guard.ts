import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
    providedIn: 'root'
})
export class LoggedinGuard implements CanActivate {
    constructor(private readonly authService: AuthService) {}
    canActivate(): boolean {
        return this.authService.isUserLoggedIn();
    }
}
