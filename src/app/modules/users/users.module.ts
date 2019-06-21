import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { LayoutModule } from '../../modules/layout/layout.module';
import { AddressPipe } from './pipes/address.pipe';
import { FullnamePipe } from './pipes/fullname.pipe';

@NgModule({
    declarations: [UserListComponent, UserEditComponent, AddressPipe, FullnamePipe],
    imports: [LayoutModule, UsersRoutingModule]
})
export class UsersModule {}
