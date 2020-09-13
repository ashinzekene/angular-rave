import { TestBed, inject } from '@angular/core/testing';

import { AngularRaveService } from './angular-rave.service';
import { PUBKEY_TOKEN } from './angular-rave-token';

describe('AngularRaveService', () => {
  beforeEach(() => {
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

  it('should inject tokens', inject([AngularRaveService], (service: any) => {
    expect(service.PBFPubKey).toEqual('PBFPubKey');
    expect(service.isDev).toBeTruthy();
  }));
});
