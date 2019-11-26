import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DigitalesPageRoutingModule } from './digitales-routing.module';

import { DigitalesPage } from './digitales.page';
import { SharedModule } from 'src/app/shared/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DigitalesPageRoutingModule,
    SharedModule
  ],
  declarations: [DigitalesPage]
})
export class DigitalesPageModule {}
