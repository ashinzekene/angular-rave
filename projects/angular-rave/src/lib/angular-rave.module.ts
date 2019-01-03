import { NgModule, ModuleWithProviders } from '@angular/core';

import { AngularRaveComponent } from './angular-rave.component';
import { AngularRaveDirective } from './angular-rave.directive';
import { AngularRaveService } from './angular-rave.service';
import { PBFPUBKEY_TOKEN } from './angular-rave-token';

@NgModule({
  declarations: [AngularRaveDirective, AngularRaveComponent],
  exports: [AngularRaveDirective, AngularRaveComponent],
})
export class AngularRaveModule {
  static forRoot(PBFPubKey ?: string): ModuleWithProviders {
    return {
      ngModule: AngularRaveModule,
      providers: [
        AngularRaveService,
        { provide: PBFPUBKEY_TOKEN, useValue: PBFPubKey }
      ]
    };
  }
}
