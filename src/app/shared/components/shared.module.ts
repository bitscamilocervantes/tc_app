import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentbrowserComponent } from './commentbrowser/commentbrowser.component';
import { PostsComponent } from './posts/posts.component';



@NgModule({
  declarations: [
    CommentbrowserComponent,
    PostsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommentbrowserComponent,
    PostsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SharedModule { }
