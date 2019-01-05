import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRaveComponent } from './angular-rave.component';
import { AngularRaveService } from './angular-rave.service';
import { PBFPUBKEY_TOKEN } from './angular-rave-token';
import { PrivateRaveOptions, PaymentSetup } from './rave-options';

interface MyWindow extends Window {
  getpaidSetup: (raveOptions: Partial<PrivateRaveOptions>) => PaymentSetup | undefined;
}
declare var window: MyWindow;

describe('AngularRaveComponent', () => {
  let component: AngularRaveComponent;
  let fixture: ComponentFixture<AngularRaveComponent>;
  let globalKey: string;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ AngularRaveComponent ],
      providers: [
        AngularRaveService,
        { provide: PBFPUBKEY_TOKEN, useValue: globalKey }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularRaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    component = null;
    window.getpaidSetup = undefined;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return validation errors when no input is present', () => {
    expect(component.checkInvalidOptions()).toContain('ANGULAR-RAVE');
    expect(window.getpaidSetup).toBeUndefined();
  });

  it('should return validation errors when no amount is present', () => {
    component.PBFPubKey = 'PBFPubKey-testkey';
    component.customer_phone = '090405500667';
    component.txref = `ref-${(Math.random() * 10000).toFixed(0)}`;
    expect(component.checkInvalidOptions()).toContain('Amount to charge');
    expect(window.getpaidSetup).toBeUndefined();
  });

  it('should return validation errors when no transaction reference is present', () => {
    component.PBFPubKey = 'PBFPubKey-testkey';
    component.customer_phone = '090405500667';
    component.amount = 600000;
    expect(component.checkInvalidOptions()).toContain('unique transaction reference');
    expect(window.getpaidSetup).toBeUndefined();
  });

  it('should return validation errors when no email or phone_number is present', () => {
    component.PBFPubKey = 'PBFPubKey-testkey';
    component.amount = 600000;
    component.txref = `ref-${(Math.random() * 10000).toFixed(0)}`;
    expect(component.checkInvalidOptions()).toContain('email');
    expect(window.getpaidSetup).toBeUndefined();
  });

  it('should return validation errors when no callback is present', () => {
    component.PBFPubKey = 'PBFPubKey-testkey';
    component.amount = 600000;
    component.customer_phone = '090405500667';
    component.txref = `ref-${(Math.random() * 10000).toFixed(0)}`;
    expect(component.checkInvalidOptions()).toContain('callback');
    expect(window.getpaidSetup).toBeUndefined();
  });

  it('should return validation error when public key is absent in raveOptions object', async () => {
    const options = {
      customer_phone: '0805566711',
      amount: 5000,
      txref: `ref-${(Math.random() * 10000).toFixed(0)}`,
    };
    globalKey = undefined;
    component.raveOptions = options;
    expect(component.paymentOptions).toEqual(options);
    expect(component.checkInvalidOptions()).toContain('key');
    expect(window.getpaidSetup).toBeUndefined();
  });

  it('should return validation error when text reference is absent in raveOptions object', async () => {
    component.raveOptions = {
      PBFPubKey: 'PBFPubKey-testkey',
      amount: 6000,
      customer_phone: '090405500667',
    };
    expect(component.checkInvalidOptions()).toContain('reference');
    expect(window.getpaidSetup).toBeUndefined();
  });

  it('should return validation error when cutomer contact is absent in raveOptions object', async () => {
    component.raveOptions = {
      PBFPubKey: 'PBFPubKey-testkey',
      amount: 600000,
      txref: `ref-${(Math.random() * 10000).toFixed(0)}`,
    };
    expect(component.checkInvalidOptions()).toContain('Customer');
    expect(window.getpaidSetup).toBeUndefined();
  });

  it('should return validation error when sucess callback', async () => {
    component.PBFPubKey = 'PBFPubKey-testkey';
    component.amount = 600000;
    component.customer_phone = '090405500667';
    component.txref = `ref-${(Math.random() * 10000).toFixed(0)}`;
    await component.pay();
    expect(component.checkInvalidOptions()).toContain('callback');
    expect(window.getpaidSetup).toBeUndefined();
  });

  it('should auto import rave script when all required options and success callback is present', async () => {
    component.PBFPubKey = 'PBFPubKey-testkey';
    component.amount = 600000;
    component.customer_phone = '090405500667';
    component.txref = `ref-${(Math.random() * 10000).toFixed(0)}`;
    component.callback.subscribe(res => {
      console.log(res);
    });
    component.init.subscribe(modal => {
      modal.close();
    });
    await component.pay();
    expect(component.checkInvalidOptions()).toBeFalsy();
    expect(window.getpaidSetup).toBeDefined();
  });

});
