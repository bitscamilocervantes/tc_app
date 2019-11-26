import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigitaldetallePage } from './digitaldetalle.page';

const routes: Routes = [
  {
    path: '',
    component: DigitaldetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigitaldetallePageRoutingModule {}
