import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SummaryComponent } from './summary/summary.component';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';


@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    CountryComponent,
    AllCountriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
