export interface User {
    id: string;
    firstName: string;
    lastName: string;
    address: UserAddress;
    profileImage: string;
    orderTotal: UserOrder;
}

export interface UserAddress {
    street: string;
    apartment: string;
    city: string;
    state: string;
    zip: string;
}
export interface UserOrder {
    amount: number;
    currency: string;
}
