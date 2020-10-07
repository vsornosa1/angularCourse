import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ColorchangerDirective } from './colorchanger.directive';
import { MyIfDirective } from './my-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ColorchangerDirective,
    MyIfDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
