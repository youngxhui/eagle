import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/entity/course';
import { Note } from 'src/app/entity/note';
import { AuthService } from 'src/app/service/auth.service';
import { CourseService } from 'src/app/service/course.service';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  isVisible = false;
  isSubmitted = 0;
  mdText = '';
  courseId = 0;
  value?: string;
  courses: Course[] = [];

  constructor(
    private noteItemService: NoteService,
    private authService: AuthService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse() {
    this.courseService.getAllCourse(0, 100).subscribe((result) => {
      this.courses = result.data.content;
      console.log(this.courses);
    });
  }

  /**
   * 模态框
   */
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    const note: Note = new Note();
    note.content = this.mdText;
    note.courseId = this.courseId;
    note.userId = this.authService.getUser().id;
    note.title = this.value;
    this.noteItemService.saveNote(note).subscribe((data) => {
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
