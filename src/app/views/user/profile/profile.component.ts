import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from 'src/app/service/user.service';
import {User} from 'src/app/entity/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private id: number;
  user: User = new User();

  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      console.log('id =>', this.id);
      this.userService.getUserInfo(this.id).subscribe((result) => {
        console.log('result =>', result);
        this.user = result.data;
      });
    });
  }

}
