import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/entity/note';
import { AuthService } from 'src/app/service/auth.service';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  private noteId: number;
  note: Note = new Note();
  isVisible = false;
  isSubmitted = 0;
  mdText = this.note.content;
  courseId = 0;

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.noteId = Number(this.route.snapshot.paramMap.get('id'));
    this.getNote();
  }

  getNote() {
    this.noteService.getNote(this.noteId).subscribe((result) => {
      this.note = result.data;
    });
  }
  /**
   * 模态框
   */
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.note.content = this.mdText;
    this.noteService.updatNote(this.note).subscribe((data) => {
      this.isSubmitted += 1;
      console.log('after sub', data);
    });
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  /**
   * 获取md编辑器内容
   */
  receive(event: string): void {
    this.mdText = event;
  }
}
