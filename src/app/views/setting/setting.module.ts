import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
// import { IndexComponent } from './index/index.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { SharedModule } from 'src/app/shared/shared.module';
import { IndexComponent } from 'src/app/views/setting/banner/index/index.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
    NzListModule,
    NzCarouselModule,
    SharedModule,
    ReactiveFormsModule
  ],
})
export class SettingModule {}
