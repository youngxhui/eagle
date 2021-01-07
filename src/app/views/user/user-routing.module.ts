import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AddComponent} from './add/add.component';
import {UpdateComponent} from './update/update.component';
import {ShowComponent} from './show/show.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {path: 'show', component: ShowComponent},
  {path: 'add', component: AddComponent},
  {path: 'update', component: UpdateComponent},
  {path: 'profile/:id', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
