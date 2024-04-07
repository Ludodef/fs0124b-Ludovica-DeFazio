import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtentiComponent } from './utenti.component';

const routes: Routes = [
  {
  path: '',
  component: UtentiComponent,
  title:'Utenti'
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtentiRoutingModule { }
