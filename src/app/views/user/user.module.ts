import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { SharedModule } from '../../shared/shared.module';
import { ShowComponent } from './show/show.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [ AddComponent, UpdateComponent, ShowComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class UserModule {
}
