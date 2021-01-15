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
  getNote(page: number, size: number): Observable<Page<Note>> {
    return this.http.get<Page<Note>>(`/note?page=${page}&size=${size}`);
  }

  saveNote(note: Note): Observable<Result<any>> {
    return this.http.post<Result<any>>('/', {});
  }
}
