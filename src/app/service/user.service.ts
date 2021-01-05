import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Result from '../entity/result';
import {User} from '../entity/user';
import {Observable} from 'rxjs';
import RegisterUser from '../entity/registerUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUserList(page: number, size: number): Observable<Result<Array<User>>> {
    return this.http.get<Result<Array<User>>>(`/user/list/enable?page=${page}&size=${size}`);
  }

  /**
   * 添加用户
   */
  addUser(user: RegisterUser): Observable<Result<User>> {
    return this.http.post<Result<User>>('/user/add', user);
  }
}
