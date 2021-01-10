import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from 'src/app/service/user.service';
import {ActivatedRoute} from '@angular/router';
import {User} from 'src/app/entity/user';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  private id: number;

  validateForm!: FormGroup;
  date = null;

  submitForm(): void {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    // 更新添加
    const user = new User();
    user.id = this.id;
    user.name = this.validateForm.get('nickname').value;
    // console.log('nickname', nickname);
    user.account = this.validateForm.get('email').value;
    user.telephone = this.validateForm.get('phoneNumber').value;
    user.sex = this.validateForm.get('sex').value;
    user.birth = this.validateForm.get('birth').value;

    this.userService.updateUserInfo(user).subscribe((data) => {
      console.log('console', data);
    });
  }


  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return {required: true};
    } else if (control.value !== this.validateForm.controls.password.value) {
      return {confirm: true, error: true};
    }
    return {};
  }

  constructor(private fb: FormBuilder, private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      nickname: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      sex: [null, [Validators.required]],
      birth: ['2021-01-01', [Validators.required]],
    });
    this.route.queryParams.subscribe(params => {
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      this.userService.getUserInfo(this.id).subscribe(
        (result) => {
          this.validateForm.get('email').setValue(result.data.account);
          this.validateForm.get('nickname').setValue(result.data.name);
          this.validateForm.get('phoneNumber').setValue(result.data.telephone);
          this.validateForm.get('sex').setValue(result.data.sex === 1 ? '男' : '女');
          this.validateForm.get('birth').setValue(result.data.birth);
        }
      );
    });


  }
}
