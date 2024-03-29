import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenti-principali/home/home.component';
import { CompletatiComponent } from './componenti-principali/completati/completati.component';
import { UtentiComponent } from './componenti-principali/utenti/utenti.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'completati',
    component:CompletatiComponent
  },
  {
    path:'utenti',
    component:UtentiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
