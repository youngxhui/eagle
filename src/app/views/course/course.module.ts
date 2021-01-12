import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CourseRoutingModule} from './course-routing.module';
import {IndexComponent} from './index/index.component';
import {UpdateComponent} from './update/update.component';
import {AddComponent} from './add/add.component';
import {SharedModule} from 'src/app/shared/shared.module';


@NgModule({
  declarations: [IndexComponent, UpdateComponent, AddComponent],
  imports: [
    SharedModule,
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule {
}
