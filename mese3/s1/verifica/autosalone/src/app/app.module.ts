import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main-component/header/header.component';
import { FooterComponent } from './main-component/footer/footer.component';
import { HomeComponent } from './auto/home/home.component';
import { AudiComponent } from './auto/audi/audi.component';
import { FordComponent } from './auto/ford/ford.component';
import { FiatComponent } from './auto/fiat/fiat.component';
import { DettaglioAutoComponent } from './auto/dettaglio-auto/dettaglio-auto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AudiComponent,
    FordComponent,
    FiatComponent,
    DettaglioAutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
