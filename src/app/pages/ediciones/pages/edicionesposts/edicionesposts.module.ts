import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdicionespostsPageRoutingModule } from './edicionesposts-routing.module';

import { EdicionespostsPage } from './edicionesposts.page';
import { SharedModule } from 'src/app/shared/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdicionespostsPageRoutingModule,
    SharedModule
  ],
  declarations: [EdicionespostsPage]
})
export class EdicionespostsPageModule {}
