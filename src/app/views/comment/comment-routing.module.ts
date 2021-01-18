import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'profile/:id', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentRoutingModule {}
