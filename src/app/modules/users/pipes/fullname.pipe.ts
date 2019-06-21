import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user';

@Pipe({
    name: 'fullname'
})
export class FullnamePipe implements PipeTransform {
    transform(user: User, args?: any): any {
        return user && `${user.firstName} ${user.lastName}`;
    }
}
