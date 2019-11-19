import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LnewsPageRoutingModule } from './lnews-routing.module';

import { LnewsPage } from './lnews.page';
import { PostsComponent } from '../../components/posts/posts.component';
import { SharedModule } from '../../shared/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LnewsPageRoutingModule,
    SharedModule
  ],
  declarations: [
    LnewsPage,
    PostsComponent
  ],
  exports: [
    PostsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class LnewsPageModule {}
