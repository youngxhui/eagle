import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../layout/login/login.component';
import { DefaultComponent } from '../layout/default/default.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../guard/auth.guard';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'user',
        loadChildren: () =>
          import('./user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'course',
        loadChildren: () =>
          import('./course/course.module').then((m) => m.CourseModule),
      },
      {
        path: 'note',
        loadChildren: () =>
          import('./note/note.module').then((m) => m.NoteModule),
      },
      {
        path: 'comment',
        loadChildren: () =>
          import('./comment/comment.module').then((m) => m.CommentModule),
      },
      {
        path: 'setting',
        loadChildren: () =>
          import('./setting/setting.module').then((m) => m.SettingModule),
      },
      // {path: 'roadmap', loadChildren: () => import('./roadmap/roadmap.module').then(m => m.RoadmapModule)},
      // {path: 'person', loadChildren: () => import('./person/person.module').then(m => m.PersonModule)},
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  // {path: 'register', component: RegisterComponent},
  { path: '403', component: Page404Component },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsRoutingModule {}
