import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AngularRaveService } from './angular-rave.service';
import { PUBKEY_TOKEN } from './angular-rave-token';
import { AngularRaveDirective } from './angular-rave.directive';
import { RaveOptions } from './rave-options';

@Component({
  template: `
   <sample-component>
  `
})
class TestComponent { }

describe('AngularRaveDirective', () => {
  let component: any;
  let fixture: ComponentFixture<any>;
  let inputEl: DebugElement;
  const paymentOptions: RaveOptions = {
    customer: {
      email:   'someuser@email.com',
      phonenumber:   '09209209309090'
    },
    customizations: {
      title: 'My title'
    },
    currency: 'NGN',
    amount:  8000,
    tx_ref:  'A unique transaction reference',
    paymentOptions: ['account', 'banktransfer', 'card'],
  };

  beforeEach(waitForAsync(() => {
    @Component({
      template: `
       <button
        angular-rave
        [raveOptions]="options"
        (init)="paymentInit()"
       >
       </button>
      `
    })
    class SampleComponent {
      options = paymentOptions;
      paymentInit() {}
    }

    TestBed.configureTestingModule({
      declarations: [ TestComponent, AngularRaveDirective, SampleComponent ],
      providers: [
        AngularRaveService,
        { provide: PUBKEY_TOKEN, useValue: 'public_key' },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('button'));
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show modal', () => {
    spyOn(component, 'paymentInit');
    expect(component).toBeTruthy();
    setTimeout(() => {
      expect(component.paymentInit).toHaveBeenCalled();
    }, 2000);
  });

});
