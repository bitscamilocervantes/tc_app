import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { FcommentsPageRoutingModule } from './fcomments-routing.module';

import { FcommentsPage } from './fcomments.page';
import { CommentComponent } from '../../components/comment/comment.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FcommentsPageRoutingModule
  ],
  declarations: [
    FcommentsPage,
    CommentComponent
  ],
  exports: [CommentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class FcommentsPageModule {}
