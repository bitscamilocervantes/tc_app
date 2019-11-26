import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdicionesPage } from './ediciones.page';

const routes: Routes = [
  {
    path: '',
    component: EdicionesPage
  },
  {
    path: 'edicionesposts',
    loadChildren: () => import('./pages/edicionesposts/edicionesposts.module').then( m => m.EdicionespostsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdicionesPageRoutingModule {}
