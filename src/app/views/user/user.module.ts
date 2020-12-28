import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [IndexComponent, AddComponent, UpdateComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
