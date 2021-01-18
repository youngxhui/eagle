import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { IndexComponent } from './index/index.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
@NgModule({
  declarations: [IndexComponent, ProfileComponent],
  imports: [
    CommonModule,
    CommentRoutingModule,
    SharedModule,
    NzDescriptionsModule,
  ],
})
export class CommentModule {}
