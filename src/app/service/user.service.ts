import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Result from '../entity/result';
import {User} from '../entity/user';
import {Observable} from 'rxjs';
import RegisterUser from '../entity/registerUser';
import Page from '../entity/page';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  /**
   * 获取所有的用户列表
   * @param page 页数
   * @param size 数量
   */
  getUserList(page: number, size: number): Observable<Result<Page<User>>> {
    return this.http.get<Result<Page<User>>>(`/user/list/enable?page=${page}&size=${size}`);
  }

  /**
   * 添加用户
   */
  addUser(user: RegisterUser): Observable<Result<User>> {
    return this.http.post<Result<User>>('/user/add', user);
  }

  /**
   * 获取用户信息
   */
  getUserInfo(id: number): Observable<Result<User>> {
    return this.http.get<Result<User>>(`/user/${id}`);
  }

  /**
   * 更新用户
   * @param user 用户
   */
  updateUserInfo(user: User): Observable<Result<string>> {
    return this.http.put<Result<string>>('/user', user);
  }
}


