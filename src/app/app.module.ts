import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularRaveModule } from 'angular-rave';

@NgModule({
  imports: [
    BrowserModule,
    AngularRaveModule.forRoot(
      'FLWPUBK_TEST-ccf7c01dd5d4e69db74608b8c3a09499-X'
    ),
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
