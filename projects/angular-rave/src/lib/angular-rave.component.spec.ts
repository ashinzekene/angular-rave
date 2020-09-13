import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AngularRaveComponent } from './angular-rave.component';
import { AngularRaveService } from './angular-rave.service';
import { PUBKEY_TOKEN } from './angular-rave-token';
import { RaveOptions } from './rave-options';

describe('AngularRaveComponent', () => {
  let component: AngularRaveComponent;
  let fixture: ComponentFixture<AngularRaveComponent>;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      declarations: [ AngularRaveComponent ],
      providers: [
        AngularRaveService,
        { provide: PUBKEY_TOKEN, useValue: 'public_key' },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularRaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not load the modal when the amount is not provided', async () => {
    spyOn(component.init, 'emit');
    component.customer = {
      email: 'someuser@email.com',
      phonenumber: '09209209309090',
    };
    component.tx_ref = 'tx-reference-val';
    component.currency = 'NGN';
    component.callback.subscribe(() => {});
    const error = await component.pay();

    fixture.detectChanges();
    expect(error).toEqual('ANGULAR-RAVE: Amount to charge is required');
    expect(component.init.emit).not.toHaveBeenCalled();
  });

  it('should not load the modal when the currency is not provided', async () => {
    spyOn(component.init, 'emit');
    component.customer = {
      email: 'someuser@email.com',
      phonenumber: '09209209309090',
    };
    component.tx_ref = 'tx-reference-val';
    component.amount = 8000;
    component.callback.subscribe(() => {});
    const error = await component.pay();

    fixture.detectChanges();
    expect(error).toEqual('ANGULAR-RAVE: Currency is required. Use "NGN" for Naira');
    expect(component.init.emit).not.toHaveBeenCalled();
  });

  it('should not load the modal when the transaction reference is not provided', async () => {
    spyOn(component.init, 'emit');
    component.customer = {
      email: 'someuser@email.com',
      phonenumber: '09209209309090',
    };
    component.currency = 'NGN';
    component.amount = 8000;
    component.callback.subscribe(() => {});
    const error = await component.pay();

    fixture.detectChanges();
    expect(error).toEqual('ANGULAR-RAVE: A unique transaction reference is required');
    expect(component.init.emit).not.toHaveBeenCalled();
  });

  it('should not load the modal when the payment options is not provided', async () => {
    spyOn(component.init, 'emit');
    component.customer = {
      email: 'someuser@email.com',
      phonenumber: '09209209309090',
    };
    component.currency = 'NGN';
    component.amount = 8000;
    component.tx_ref = 'A unique transaction reference';
    component.callback.subscribe(() => {});
    const error = await component.pay();

    fixture.detectChanges();
    expect(error).toEqual('ANGULAR-RAVE: At least one payment option is required');
    expect(component.init.emit).not.toHaveBeenCalled();
  });

  it('should not load the modal when the payment options is empty', async () => {
    spyOn(component.init, 'emit');
    component.customer = {
      email: 'someuser@email.com',
      phonenumber: '09209209309090',
    };
    component.currency = 'NGN';
    component.amount = 8000;
    component.tx_ref = 'A unique transaction reference';
    component.paymentOptions = [];
    component.callback.subscribe(() => {});
    const error = await component.pay();

    fixture.detectChanges();
    expect(error).toEqual('ANGULAR-RAVE: At least one payment option is required');
    expect(component.init.emit).not.toHaveBeenCalled();
  });

  it('should load the modal when valid payment options are passed', async () => {
    spyOn(component.init, 'emit');
    component.customer = {
      email: 'someuser@email.com',
      phonenumber: '09209209309090',
    };
    component.currency = 'NGN';
    component.amount = 8000;
    component.tx_ref = 'A unique transaction reference';
    component.paymentOptions = ['account', 'banktransfer', 'card'];
    component.callback.subscribe(() => {});
    component.init.subscribe(() => {});
    const error = await component.pay();

    fixture.detectChanges();
    expect(error).not.toBeDefined();
    expect(component.init.emit).toHaveBeenCalled();
  });

  it('should load the modal when a valid payment options object is passed', async () => {
    spyOn(component.init, 'emit');

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

    component.raveOptions = paymentOptions;
    component.callback.subscribe(() => {});
    component.init.subscribe(() => {});
    const error = await component.pay();

    fixture.detectChanges();
    expect(error).not.toBeDefined();
    expect(component.init.emit).toHaveBeenCalled();
  });

});
