import { NgModule, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteRoutingModule } from './note-routing.module';
import { IndexComponent } from './index/index.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { NzResultModule } from 'ng-zorro-antd/result';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexComponent,
    UpdateComponent,
    AddComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    NoteRoutingModule,
    SharedModule,
    ComponentsModule,
    MarkdownModule,
    NzResultModule,
    FormsModule,
  ],
})
export class NoteModule {}
