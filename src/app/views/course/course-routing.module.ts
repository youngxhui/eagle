import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import {ProfileComponent} from 'src/app/views/course/profile/profile.component';

const routes: Routes = [
    {path: '', component: IndexComponent},
    {path: 'add', component: AddComponent},
    {path: 'update/:id', component: UpdateComponent},
    {path: 'profile/:id', component: ProfileComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CourseRoutingModule {
}
