import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'featured_comments',
    loadChildren: () => import('./pages/fcomments/fcomments.module').then( m => m.FcommentsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/lnews/lnews.module').then( m => m.LnewsPageModule)
  },
  {
    path: 'ediciones',
    loadChildren: () => import('./pages/ediciones/ediciones.module').then( m => m.EdicionesPageModule)
  },
  {
    path: 'ediciones/:id',
    loadChildren: () => import('./pages/ediciones/pages/edicionesposts/edicionesposts.module').then( m => m.EdicionespostsPageModule)
  },
  {
    path: 'digitales',
    loadChildren: () => import('./pages/digitales/digitales.module').then( m => m.DigitalesPageModule)
  },
  {
    path: 'digitales/:id',
    loadChildren: () => import('./pages/digitales/pages/digitaldetalle/digitaldetalle.module').then( m => m.DigitaldetallePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
