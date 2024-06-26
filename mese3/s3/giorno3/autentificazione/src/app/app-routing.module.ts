import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
{ path: 'chi-siamo',
loadChildren: () => import('./chi-siamo/chi-siamo.module').then(m => m.ChiSiamoModule) },
{ path: 'auth',
loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
