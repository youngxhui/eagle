import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { SharedModule } from '../../shared/shared.module';
import { ShowComponent } from './show/show.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProfileComponent } from './profile/profile.component';


@NgModule({
    declarations: [ AddComponent, UpdateComponent, ShowComponent, ProfileComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class UserModule {
}
