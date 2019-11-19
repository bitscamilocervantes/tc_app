import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LnewsPageRoutingModule } from './lnews-routing.module';

import { LnewsPage } from './lnews.page';
import { PostsComponent } from '../../components/posts/posts.component';
import { CommentbrowserComponent } from 'src/app/components/commentbrowser/commentbrowser.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LnewsPageRoutingModule
  ],
  declarations: [
    LnewsPage,
    PostsComponent,
    CommentbrowserComponent
  ],
  exports: [
    PostsComponent,
    CommentbrowserComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class LnewsPageModule {}
