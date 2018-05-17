import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularRaveModule } from 'angular-rave';
import { FormatCodeComponent } from './format-code/format-code.component';

@NgModule({
  declarations: [
    AppComponent,
    FormatCodeComponent
  ],
  imports: [
    BrowserModule,
    AngularRaveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
