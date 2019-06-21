import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private sessionKey = 'loggedin';
    public isLoggedIn: boolean = this.isUserLoggedIn();
    constructor() {}

    public isUserLoggedIn(): boolean {
        return !!localStorage.getItem(this.sessionKey);
    }

    public login(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.isLoggedIn = true;
            localStorage.setItem(this.sessionKey, '1');
            resolve(true);
        });
    }

    public logout() {
        this.isLoggedIn = false;
        localStorage.removeItem(this.sessionKey);
    }
}
