import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {NzPageHeaderModule} from 'ng-zorro-antd/page-header';
import {AddComponent} from './add/add.component';
import {UpdateComponent} from './update/update.component';
import {SharedModule} from '../../shared/shared.module';
import {ShowComponent} from './show/show.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProfileComponent} from './profile/profile.component';
import {NzDescriptionsModule} from 'ng-zorro-antd/descriptions';


@NgModule({
  declarations: [AddComponent, UpdateComponent, ShowComponent, ProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NzPageHeaderModule,
    NzDescriptionsModule
  ]
})
export class UserModule {
}
