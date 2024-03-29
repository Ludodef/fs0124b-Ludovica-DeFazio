import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main-component/header/header.component';
import { HomeComponent } from './componenti-principali/home/home.component';
import { CompletatiComponent } from './componenti-principali/completati/completati.component';
import { UtentiComponent } from './componenti-principali/utenti/utenti.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CompletatiComponent,
    UtentiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
