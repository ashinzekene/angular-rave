import { TestBed, inject } from '@angular/core/testing';

import { AngularRaveService } from './angular-rave.service';
import { PUBKEY_TOKEN } from './angular-rave-token';
import { PrivateRaveOptions } from './private-rave-options';

interface MyWindow extends Window {
  FlutterwaveCheckout: (raveOptions: Partial<PrivateRaveOptions>) => void;
}
declare var window: MyWindow;

describe('AngularRaveService', () => {
  beforeEach(() => {
    window.FlutterwaveCheckout = undefined;

    TestBed.configureTestingModule({
      providers: [
        AngularRaveService,
        { provide: PUBKEY_TOKEN, useValue: 'PBFPubKey' },
      ]
    });
  });

  it('should be created', inject([AngularRaveService], (service: AngularRaveService) => {
    expect(service).toBeTruthy();
  }));

  it('should inject tokens', inject([AngularRaveService], (service: AngularRaveService) => {
    expect(service.publicKey).toEqual('PBFPubKey');
  }));

  it('should load the flutterwave script', inject([AngularRaveService], (service: AngularRaveService) => {
    expect(typeof window.FlutterwaveCheckout).toEqual('undefined');
    service.loadScript().then(() => {
      expect(typeof window.FlutterwaveCheckout).toEqual('function');
    });
  }));
});
