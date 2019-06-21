import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from '../../user';
import { UsersService } from '../../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Paths } from 'src/app/utills/paths';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/modules/layout/component/confirm-dialog/confirm-dialog.component';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
    user: User;
    userLoading = true;
    userForm: FormGroup;
    currencies: string[] = ['USD', 'AED', 'INR'];

    constructor(
        private readonly fb: FormBuilder,
        private readonly usersService: UsersService,
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        private readonly matDialog: MatDialog
    ) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.getUser(params.id);
        });
    }
    getUser(id: string) {
        this.usersService.getUser(id).subscribe(res => {
            this.user = res;
            this.userLoading = false;
            this.initializeForm();
        });
    }

    initializeForm() {
        const {
            firstName,
            lastName,
            address: { apartment, street, city, state, zip },
            profileImage,
            orderTotal: { amount, currency }
        } = this.user;
        this.userForm = this.fb.group({
            firstName: new FormControl(firstName, [Validators.required]),
            lastName: new FormControl(lastName, [Validators.required]),
            profileImage: new FormControl(profileImage, [Validators.required]),
            address: this.fb.group({
                street: new FormControl(street, [Validators.required]),
                apartment: new FormControl(apartment, [Validators.required]),
                city: new FormControl(city, [Validators.required]),
                state: new FormControl(state, [Validators.required]),
                zip: new FormControl(zip, [Validators.required])
            }),
            orderTotal: this.fb.group({
                amount: new FormControl(amount, [Validators.required]),
                currency: new FormControl({ value: currency, disabled: true }, [Validators.required])
            })
        });
    }
    public save() {
        const { value } = this.userForm;
        const data = { ...value, orderTotal: { ...value.orderTotal, currency: this.user.orderTotal.currency } };
        this.usersService.updateUser(this.user.id, data).subscribe(res => {
            this.router.navigate([Paths.Users]);
        });
    }

    delete(): void {
        this.matDialog.open(ConfirmDialogComponent, {
            data: {
                title: 'Delete',
                desc: 'Are you sure, you want to delete the user.',
                onConfirm: () => this.usersService.deleteUser(this.user.id),
                afterConfirm: () => {
                    this.router.navigate([Paths.Users]);
                }
            }
        });
    }
}
