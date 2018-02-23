import { NgModule } from '@angular/core';

import { AngularRaveComponent } from './angular-rave.component';
import { AngularRaveDirective } from "./angular-rave.directive";

@NgModule({
  imports: [],
  exports: [AngularRaveComponent, AngularRaveDirective],
  declarations: [AngularRaveComponent, AngularRaveDirective],
  providers: [],
})
export class AngularRaveModule { }
