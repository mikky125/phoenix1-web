import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
    providedIn: 'root'
})
export class NotLoggedinGuard implements CanActivate {
    constructor(private readonly authService: AuthService) {}
    canActivate(): boolean {
        return !this.authService.isUserLoggedIn();
    }
}
