import { Pipe, PipeTransform } from '@angular/core';
import { UserAddress } from '../user';

@Pipe({
    name: 'address'
})
export class AddressPipe implements PipeTransform {
    transform(address: UserAddress, args?: any): any {
        return `${address.apartment}, ${address.street}, ${address.city}, ${address.state} ${address.zip}`;
    }
}
