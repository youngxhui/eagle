import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../layout/login/login.component';
import { DefaultComponent } from '../layout/default/default.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
    {
        path: '', component: DefaultComponent, children: [
            {path: '', redirectTo: 'index', pathMatch: 'full'},
            {path: 'index', component: IndexComponent},
            {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
            {path: 'course', loadChildren: () => import('./course/course.module').then(m => m.CourseModule)},
            // {path: 'roadmap', loadChildren: () => import('./roadmap/roadmap.module').then(m => m.RoadmapModule)},
            // {path: 'person', loadChildren: () => import('./person/person.module').then(m => m.PersonModule)},
        ]
    },
    {
        path: 'login', component: LoginComponent
    },
    // {path: 'register', component: RegisterComponent},
    // {path: '403', component: Page403Component},
    // {path: '**', component: Page404Component}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewsRoutingModule {
}
