import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Banner from '../entity/banner';
import Page from '../entity/page';
import Result from '../entity/result';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  constructor(private http: HttpClient) {}

  /**
   * 获取所有的banner
   */
  getAllBanner(page: number, size: number): Observable<Result<Page<Banner>>> {
    return this.http.get<Result<Page<Banner>>>(
      `/banner/list?page=${page}&size=${size}`
    );
  }

  /**
   * 添加 banner
   */
  addBanner(banner: Banner): Observable<Result<Banner>> {
    return this.http.post<Result<Banner>>(`/banner`, banner);
  }
}
