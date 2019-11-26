import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdicionesPageRoutingModule } from './ediciones-routing.module';

import { EdicionesPage } from './ediciones.page';
import { SharedModule } from 'src/app/shared/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdicionesPageRoutingModule,
    SharedModule
  ],
  declarations: [
    EdicionesPage,
    
  ],
  exports: [
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class EdicionesPageModule {}
