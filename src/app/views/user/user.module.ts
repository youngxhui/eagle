import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
    declarations: [IndexComponent, AddComponent, UpdateComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        SharedModule
    ]
})
export class UserModule {
}
