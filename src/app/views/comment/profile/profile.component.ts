import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/entity/comment';
import { Course } from 'src/app/entity/course';
import { User } from 'src/app/entity/user';
import { CommentService } from 'src/app/service/comment.service';
import { CourseService } from 'src/app/service/course.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  private commentId: number = 0;
  user: User = new User();
  comment: Comment = new Comment();
  course: Course = new Course();
  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute,
    private userSerivce: UserService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.commentId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('id', this.commentId);

    this.commentService.getCommentById(this.commentId).subscribe((result) => {
      this.comment = result.data;
      this.userSerivce
        .getUserInfo(this.comment.userId)
        .subscribe((userResult) => {
          this.user = userResult.data;
        });
      this.courseService
        .getCourseById(this.comment.courseId)
        .subscribe((courseResult) => {
          this.course = courseResult.data;
        });
    });
  }

  delete(id: number): void {
    this.commentService.deleteCommentById(id).subscribe((result) => {
      this.comment.enable = !this.comment.enable;
    });
  }
}
