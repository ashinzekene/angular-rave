import { TestBed, inject } from '@angular/core/testing';

import { AngularRaveService } from './angular-rave.service';
import { PBFPUBKEY_TOKEN } from './angular-rave-token';

describe('AngularRaveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AngularRaveService,
        { provide: PBFPUBKEY_TOKEN, useValue: 'PBFPubKey' }
      ]

    });
  });

  it('should be created', inject([AngularRaveService], (service: AngularRaveService) => {
    expect(service).toBeTruthy();
  }));
});
