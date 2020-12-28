import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';

import { UserModule } from './user/user.module';
import { Page403Component } from './page403/page403.component';
import { Page404Component } from './page404/page404.component';
import { NzResultModule } from 'ng-zorro-antd/result';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
    declarations: [Page403Component, Page404Component, DashboardComponent],
    imports: [
        UserModule,
        CommonModule,
        ViewsRoutingModule,
        NzResultModule
    ]
})
export class ViewsModule {
}
