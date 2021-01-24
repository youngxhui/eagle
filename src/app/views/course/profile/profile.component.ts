import {Component, OnInit} from '@angular/core';
import {CourseService} from 'src/app/service/course.service';
import {ActivatedRoute} from '@angular/router';
import {Course} from 'src/app/entity/course';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private id: number;

  course: Course = new Course();
  cataList = [];

  constructor(private courseService: CourseService, private route: ActivatedRoute, public sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(_ => {
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      this.courseService.getCourseById(this.id).subscribe((result) => {
        this.course = result.data;
        console.log(this.course);
        const temp = this.course.catalog.split('】【');
        this.cataList = temp.slice(0, temp.length - 2);
      });
    });
  }

}
