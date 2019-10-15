import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularRaveModule } from 'angular-rave';

@NgModule({
  imports: [
    BrowserModule,
    AngularRaveModule.forRoot({
      key: 'FLWPUBK-9eaca37f9eb70d3fe927bfda5e306e07-X',
      isTest: false,
    }),
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
