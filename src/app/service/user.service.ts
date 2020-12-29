import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Result from '../entity/result';
import { User } from '../entity/user';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient) {
    }

    getUserList(page: number, size: number): Observable<Result<Array<User>>> {
        return this.httpClient.get<Result<Array<User>>>(`/user/list/enable?page=${page}&size=${size}`);
    }

}
