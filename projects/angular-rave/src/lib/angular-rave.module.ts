import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRaveComponent } from './angular-rave.component';
import { AngularRaveDirective } from './angular-rave.directive';
import { AngularRaveService } from './angular-rave.service';
import { PUBKEY_TOKEN } from './angular-rave-token';

@NgModule({
  imports: [CommonModule],
  declarations: [AngularRaveDirective, AngularRaveComponent],
  exports: [AngularRaveDirective, AngularRaveComponent],
})
export class AngularRaveModule {
  static forRoot(publicKey: string): ModuleWithProviders<AngularRaveModule> {
    return {
      ngModule: AngularRaveModule,
      providers: [
        AngularRaveService,
        { provide: PUBKEY_TOKEN, useValue: publicKey },
      ]
    };
  }
}
