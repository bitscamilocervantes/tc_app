import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentbrowserComponent } from './commentbrowser/commentbrowser.component';



@NgModule({
  declarations: [CommentbrowserComponent],
  imports: [
    CommonModule
  ],
  exports: [CommentbrowserComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SharedModule { }
