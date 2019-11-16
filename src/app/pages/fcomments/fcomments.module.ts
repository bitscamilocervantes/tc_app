import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FcommentsPageRoutingModule } from './fcomments-routing.module';

import { FcommentsPage } from './fcomments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FcommentsPageRoutingModule
  ],
  declarations: [FcommentsPage]
})
export class FcommentsPageModule {}
