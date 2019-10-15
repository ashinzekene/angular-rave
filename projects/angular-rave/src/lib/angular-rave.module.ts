import { NgModule, ModuleWithProviders } from '@angular/core';

import { AngularRaveComponent } from './angular-rave.component';
import { AngularRaveDirective } from './angular-rave.directive';
import { AngularRaveService } from './angular-rave.service';
import { PBFPUBKEY_TOKEN, ENVIRONMENT_TOKEN } from './angular-rave-token';
import { raveRootOptions } from './rave-options';

@NgModule({
  declarations: [AngularRaveDirective, AngularRaveComponent],
  exports: [AngularRaveDirective, AngularRaveComponent],
})
export class AngularRaveModule {
  static forRoot(options: raveRootOptions): ModuleWithProviders {
    return {
      ngModule: AngularRaveModule,
      providers: [
        AngularRaveService,
        { provide: PBFPUBKEY_TOKEN, useValue: options.key },
        { provide: ENVIRONMENT_TOKEN, useValue: options.isTest }
      ]
    };
  }
}
