import { Component, OnInit } from '@angular/core';
import Result from 'src/app/entity/result';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  page: number = 1;

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.getNotes();
  }

  /**
   * 
   * 获取笔记
   */
  getNotes() {
    this.noteService.getNote(this.page, 10).subscribe((result) => {
      console.log(result);
    });
  }
}
