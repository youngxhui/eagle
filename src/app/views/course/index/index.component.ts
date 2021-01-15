import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';
import { Course } from 'src/app/entity/course';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  listOfCourse: Course[] = [];

  pageIndex: number = 1;

  courseCount: number = 1;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse(): void {
    this.courseService
      .getAllCourse(this.pageIndex - 1, 10)
      .subscribe((result) => {
        this.listOfCourse = result.data.content;
        this.courseCount = result.data.totalElements;
        console.log('couse Count', this.courseCount);
      });
  }

  changePage(): void {
    this.getCourse();
  }
}
