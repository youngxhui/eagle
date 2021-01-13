import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CourseRoutingModule} from './course-routing.module';
import {IndexComponent} from './index/index.component';
import {UpdateComponent} from './update/update.component';
import {AddComponent} from './add/add.component';
import {SharedModule} from 'src/app/shared/shared.module';
import { ProfileComponent } from 'src/app/views/course/profile/profile.component';
import {ComponentsModule} from 'src/app/components/components.module';
import {NzCascaderModule} from 'ng-zorro-antd/cascader';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzResultModule} from 'ng-zorro-antd/result';


@NgModule({
  declarations: [IndexComponent, UpdateComponent, AddComponent, ProfileComponent],
  imports: [
    SharedModule,
    CommonModule,
    CourseRoutingModule,
    ComponentsModule,
    NzCascaderModule,
    FormsModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzResultModule
  ]
})
export class CourseModule {
}
