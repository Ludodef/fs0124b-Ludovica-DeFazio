import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
{ path: 'utenti', loadChildren: () => import('./pages/utenti/utenti.module').then(m => m.UtentiModule) },
{ path: 'profilo', loadChildren: () => import('./pages/profilo/profilo.module').then(m => m.ProfiloModule) },
{ path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
