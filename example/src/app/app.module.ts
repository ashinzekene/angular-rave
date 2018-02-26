import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularRaveModule } from 'angular-rave'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularRaveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
