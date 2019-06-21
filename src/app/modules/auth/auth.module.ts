import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
    declarations: [LoginComponent],
    imports: [LayoutModule, AuthRoutingModule, ReactiveFormsModule]
})
export class AuthModule {}
