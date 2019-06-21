import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Paths } from './utills/paths';

const routes: Routes = [
    { path: '', redirectTo: Paths.Users, pathMatch: 'full' },
    { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
    { path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
