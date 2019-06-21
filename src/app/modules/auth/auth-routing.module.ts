import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NotLoggedinGuard } from './guards/not-loggedin.guard';

const routes: Routes = [{ path: 'login', component: LoginComponent, canActivate: [NotLoggedinGuard] }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
