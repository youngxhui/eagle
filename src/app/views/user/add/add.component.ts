import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import RegisterUser from '../../../entity/registerUser';
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  validateForm!: FormGroup;

  submitForm(): void {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    // 更新添加
    const user = new RegisterUser();
    user.name = this.validateForm.get('nickname').value;
    user.password = this.validateForm.get('password').value;
    // console.log('nickname', nickname);
    user.account = this.validateForm.get('email').value;
    user.telephone = this.validateForm.get('phoneNumber').value;
    user.sex = this.validateForm.get('sex').value;
    console.log(user);
    this.userService.addUser(user).subscribe((data) => {
      console.log(data);
    });

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

  constructor(private fb: FormBuilder, private userService: UserService) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      nickname: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      sex: [null, [Validators.required]],
      agree: [false]
    });
  }
}
