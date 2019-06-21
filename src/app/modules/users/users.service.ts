import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Apis } from 'src/app/utills/apis';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    constructor(private readonly http: HttpClient) {}

    public getUsers(): Observable<User[]> {
        return this.http.get<User[]>(Apis.Users);
    }
    public getUser(id: string): Observable<User> {
        return this.http.get<User>(`${Apis.Users}/${id}`);
    }
    public updateUser(id: string, user: User): Observable<User> {
        return this.http.put<User>(`${Apis.Users}/${id}`, { ...user });
    }
    public deleteUser(id: string): Observable<any> {
        return this.http.delete<any>(`${Apis.Users}/${id}`);
    }
}
