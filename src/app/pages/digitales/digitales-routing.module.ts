import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigitalesPage } from './digitales.page';

const routes: Routes = [
  {
    path: '',
    component: DigitalesPage
  },
  {
    path: 'digitaldetalle',
    loadChildren: () => import('./pages/digitaldetalle/digitaldetalle.module').then( m => m.DigitaldetallePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigitalesPageRoutingModule {}
