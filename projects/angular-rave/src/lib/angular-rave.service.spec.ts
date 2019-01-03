import { TestBed, inject } from '@angular/core/testing';

import { AngularRaveService } from './angular-rave.service';

describe('AngularRaveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularRaveService]
    });
  });

  it('should be created', inject([AngularRaveService], (service: AngularRaveService) => {
    expect(service).toBeTruthy();
  }));
});
