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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
