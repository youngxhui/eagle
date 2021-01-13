import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Result from '../entity/result';
import {Observable} from 'rxjs';
import {Tip} from '../entity/tip';
import {SubTip} from '../entity/subTip';
import {Course} from '../entity/course';
import Page from '../entity/page';
import {TipAndSub} from 'src/app/entity/tipAndSub';

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

  saveOne(course: Course): Observable<Result<any>> {
    return this.http.post<Result<any>>('/course', course);
  }
}
