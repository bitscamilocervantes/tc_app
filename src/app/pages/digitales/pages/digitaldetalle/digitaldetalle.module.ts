import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DigitaldetallePageRoutingModule } from './digitaldetalle-routing.module';

import { DigitaldetallePage } from './digitaldetalle.page';
import { EdiciondigitalComponent } from '../../componentes/ediciondigital/ediciondigital.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DigitaldetallePageRoutingModule
  ],
  declarations: [
    DigitaldetallePage,
    EdiciondigitalComponent
  ],
  exports: [
    EdiciondigitalComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class DigitaldetallePageModule {}
