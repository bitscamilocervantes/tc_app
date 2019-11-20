import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdicionesPageRoutingModule } from './ediciones-routing.module';

import { EdicionesPage } from './ediciones.page';
import { EdicionesComponent } from './components/ediciones/ediciones.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdicionesPageRoutingModule
  ],
  declarations: [
    EdicionesPage,
    EdicionesComponent
  ],
  exports: [
    EdicionesComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class EdicionesPageModule {}
