import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentbrowserComponent } from './commentbrowser/commentbrowser.component';
import { PostsComponent } from './posts/posts.component';
import { EdicionesComponent } from './ediciones/ediciones.component';



@NgModule({
  declarations: [
    CommentbrowserComponent,
    PostsComponent,
    EdicionesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommentbrowserComponent,
    PostsComponent,
    EdicionesComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SharedModule { }
