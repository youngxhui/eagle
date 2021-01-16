import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../entity/note';
import Page from '../entity/page';
import Result from '../entity/result';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private http: HttpClient) {}

  /**
   * 获取所有的note
   */
  getAllNote(page: number, size: number): Observable<Result<Page<Note>>> {
    return this.http.get<Result<Page<Note>>>(`/note?page=${page}&size=${size}`);
  }

  saveNote(note: Note): Observable<Result<any>> {
    return this.http.post<Result<any>>('/note', note);
  }

  getNote(id: number): Observable<Result<Note>> {
    return this.http.get<Result<Note>>(`/note/${id}`);
  }
  /**
   * 更新状态
   */
  updateEnable(id: number, enable: boolean): Observable<Result<boolean>> {
    return this.http.patch<Result<boolean>>(`/note/enable/${id}/${enable}`, {});
  }

  /**
   * 更新笔记
   * @param note note
   */
  updatNote(note: Note): Observable<Result<Note>> {
    return this.http.post<Result<Note>>(`/note/update`, note);
  }
}
