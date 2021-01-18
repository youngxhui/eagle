import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../entity/comment';
import Page from '../entity/page';
import Result from '../entity/result';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  /**
   * 获取所有的评论
   */
  getAllComments(
    page: number,
    size: number
  ): Observable<Result<Page<Comment>>> {
    return this.http.get<Result<Page<Comment>>>(
      `/comment?page=${page}&size=${size}`
    );
  }

  getCommentById(id: number): Observable<Result<Comment>> {
    return this.http.get<Result<Comment>>(`/comment/${id}`);
  }

  deleteCommentById(id: number): Observable<Result<any>> {
    return this.http.delete<Result<any>>(`/comment/${id}`);
  }
}
