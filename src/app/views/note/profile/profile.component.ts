import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from 'src/app/entity/note';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  private noteId: number;

  note: Note = new Note();

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService
  ) {}

  ngOnInit(): void {
    this.noteId = Number(this.route.snapshot.paramMap.get('id'));
    this.getNote();
  }

  getNote() {
    this.noteService.getNote(this.noteId).subscribe((result) => {
      console.log(result);

      this.note = result.data;
    });
  }
  /**
   * 修改状态
   */
  changeEnable(): void {
    this.noteService
      .updateEnable(this.noteId, !this.note.enable)
      .subscribe((result) => {
        this.note.enable = result.data;
      });
  }
}
