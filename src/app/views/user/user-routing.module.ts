import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AddComponent} from './add/add.component';
import {UpdateComponent} from './update/update.component';
import {ShowComponent} from './show/show.component';
import {ProfileComponent} from 'src/app/views/user/profile/profile.component';

const routes: Routes = [
  {path: 'show', component: ShowComponent},
  {path: 'add', component: AddComponent},
  {path: 'update/:id', component: UpdateComponent},
  {path: 'profile/:id', component: ProfileComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
