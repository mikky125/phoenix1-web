import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { LoggedinGuard } from '../auth/guards/loggedin.guard';
import { UserEditComponent } from './pages/user-edit/user-edit.component';

const routes: Routes = [
    { path: '', component: UserListComponent, canActivate: [LoggedinGuard] },
    { path: ':id', component: UserEditComponent, canActivate: [LoggedinGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {}
