import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularRaveModule } from 'angular-rave';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AngularRaveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
