import { TestBed, inject } from '@angular/core/testing';

import { Angular4PaystackService } from './angular4-paystack.service';

describe('Angular4PaystackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Angular4PaystackService]
    });
  });

  it('should be created', inject([Angular4PaystackService], (service: Angular4PaystackService) => {
    expect(service).toBeTruthy();
  }));
});
