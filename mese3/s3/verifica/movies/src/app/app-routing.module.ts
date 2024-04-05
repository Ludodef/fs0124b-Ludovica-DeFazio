import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./page/home/home.module').then(m => m.HomeModule) }, { path: 'utenti', loadChildren: () => import('./page/utenti/utenti.module').then(m => m.UtentiModule) }, { path: 'profilo', loadChildren: () => import('./page/profilo/profilo.module').then(m => m.ProfiloModule) }, { path: 'auth', loadChildren: () => import('./page/auth/auth.module').then(m => m.AuthModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
