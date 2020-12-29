import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { User } from '../../../entity/user';

interface Person {
    key: string;
    name: string;
    age: number;
    address: string;
}

@Component({
    selector: 'app-show',
    templateUrl: './show.component.html',
    styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
    listOfUser: User[] = [];
    listOfData: Person[] = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park'
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park'
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park'
        }
    ];

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.getAllUser();
    }

    getAllUser(): void {
        this.userService.getUserList(0, 10).subscribe(({data}) => {
            this.listOfUser = data;
        });
    }


}
