import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { User } from '../../../entity/user';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  listOfUser: User[] = [];
  pageIndex = 1;
  totalElements = 0;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(): void {
    this.userService.getUserList(this.pageIndex - 1, 10).subscribe((result) => {
      this.listOfUser = result.data.content;
      this.totalElements = result.data.totalElements;
    });
  }

  deleteUser(id: number): void { }
  
  changePage(): void {
    this.getAllUser();
  }
}
