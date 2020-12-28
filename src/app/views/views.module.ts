import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { IndexComponent } from './index/index.component';
import { UserModule } from './user/user.module';


@NgModule({
    declarations: [IndexComponent],
    imports: [
        UserModule,
        CommonModule,
        ViewsRoutingModule
    ]
})
export class ViewsModule {
}
