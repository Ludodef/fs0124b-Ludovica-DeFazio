import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './auto/home/home.component';
import { AudiComponent } from './auto/audi/audi.component';
import { FordComponent } from './auto/ford/ford.component';
import { FiatComponent } from './auto/fiat/fiat.component';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'audi',
    component:AudiComponent,
  },
  {
    path:'ford',
    component:FordComponent,
  },
  {
    path:'fiat',
    component:FiatComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
