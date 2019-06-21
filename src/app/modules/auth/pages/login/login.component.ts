import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { Paths } from 'src/app/utills/paths';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    constructor(private readonly fb: FormBuilder, private readonly authService: AuthService, private router: Router) {}

    ngOnInit() {
        this.loginForm = this.fb.group({
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        });
    }

    login() {
        this.authService.login().then(() => {
            this.router.navigate([Paths.Users]);
        });
    }
}
