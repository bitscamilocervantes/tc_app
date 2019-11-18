import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LnewsPage } from './lnews.page';

const routes: Routes = [
  {
    path: '',
    component: LnewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LnewsPageRoutingModule {}
