import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Result from '../entity/result';
import { Observable } from 'rxjs';
import { Tip } from '../entity/tip';
import { SubTip } from '../entity/subTip';
import { Course } from '../entity/course';
import Page from '../entity/page';
import { TipAndSub } from 'src/app/entity/tipAndSub';

/**
 * 课程服务
 */
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {
  }

  getTip(): Observable<Result<Array<Tip>>> {
    return this.http.get<Result<Array<Tip>>>('/tip/all');
  }

  getSubTipByTipId(tipId: number): Observable<Result<Array<SubTip>>> {
    return this.http.get<Result<Array<SubTip>>>(`/subtip/list/enable/${tipId}`);
  }

  /**
   * 通过类型获取课程
   * @param tipId 类型id
   * @param page 分页页数，首页值应该为 0
   * @param size 分页数量
   */
  getCourseByTip(tipId: number, page: number, size: number): Observable<Result<Page<Course>>> {
    return this.http.get<Result<Page<Course>>>(`/course/tip/${tipId}?page=${page}&size=${size}`);
  }


  getCourseById(courseId: number): Observable<Result<Course>> {
    return this.http.get<Result<Course>>(`/course/${courseId}`);
  }

  getAllCourse(page: number, size: number): Observable<Result<Page<Course>>> {
    return this.http.get<Result<Page<Course>>>(`/course/list?page=${page}&size=${size}`);
  }

  getTipsAndSub(): Observable<Result<Array<TipAndSub>>> {
    return this.http.get<Result<Array<TipAndSub>>>('/banner_tips');
  }

  /**
   * 保存一个课程
   * @param course 课程
   */
  saveOne(course: Course): Observable<Result<any>> {
    return this.http.post<Result<any>>('/course', course);
  }

  /**
   * 更新课程
   * @param course 课程
   */
  updateCourse(course: Course): Observable<Result<Course>> {
    return this.http.put<Result<Course>>('/course', course);
  }
}
