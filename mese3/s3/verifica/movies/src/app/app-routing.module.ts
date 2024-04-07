import { AuthGuard } from './pages/auth/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestGuard } from './pages/auth/guest.guard';

const routes: Routes = [
{ path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
{
  path: 'utenti', loadChildren: () => import('./pages/utenti/utenti.module').then(m => m.UtentiModule),
  canActivate: [AuthGuard]
},
{
  path: 'profilo', loadChildren: () => import('./pages/profilo/profilo.module').then(m => m.ProfiloModule),
  canActivate: [AuthGuard]
},
{
  path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
  canActivate:[GuestGuard],
  canActivateChild:[GuestGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
