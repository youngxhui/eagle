import {Component, OnInit} from '@angular/core';
import {CourseService} from 'src/app/service/course.service';
import {Course} from 'src/app/entity/course';


interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  listOfCourse: Course[] = [];

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.courseService.getAllCourse(0, 10).subscribe((result) => {
      this.listOfCourse = result.data.content;
      // console.log(page.content);
    });
  }

}
