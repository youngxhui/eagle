import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/entity/note';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  page: number = 1;
  listOfNote: Note[] = [];
  totalElements = 0;
 
  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.getNotes();
  }

  /**
   *
   * 获取笔记
   */
  getNotes() {
    this.noteService.getAllNote(this.page - 1, 10).subscribe((result) => {
      this.listOfNote = result.data.content;
    });
  }

  changePage() {
    this.getNotes()
  }
}
