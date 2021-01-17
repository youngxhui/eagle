import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/service/comment.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  listOfComment = [];

  pageIndex = 1;
  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.getAllComment();
  }

  getAllComment() {
    this.commentService
      .getAllComments(this.pageIndex - 1, 10)
      .subscribe((result) => {
        this.listOfComment = result.data.content;
      });
  }
}
