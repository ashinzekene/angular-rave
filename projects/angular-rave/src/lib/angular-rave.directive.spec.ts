import { Component } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AngularRaveService } from './angular-rave.service';
import { PUBKEY_TOKEN } from './angular-rave-token';
import { AngularRaveDirective } from './angular-rave.directive';
import { RaveOptions } from './rave-options';
import { RavePaymentData } from './private-rave-options';

class MockRaveService {
  publicKey = 'TEST_KEY';
  isInvalidOptions() { return ''; }
  loadScript() { return Promise.resolve(); }
  checkout() {}
  createRaveOptionsObject(opts: Partial<RaveOptions>, callback: (res: RavePaymentData) => void, onclose: () => void) {
    return { callback, onclose } as any;
  }
}

@Component({
  template: `
    <button angular-rave [raveOptions]="options" (init)="onInit()" (callback)="onCallback($event)" (onclose)="onClose()">
      Pay
    </button>
  `
})
class TestHostComponent {
  options: RaveOptions = {
    customer: { email: 'test@test.com', phonenumber: '08012345678' },
    customizations: { title: 'Test' },
    currency: 'NGN',
    amount: 1000,
    tx_ref: 'TXREF123',
  };
  onInit() {}
  onCallback(res: RavePaymentData) {}
  onClose() {}
}

describe('AngularRaveDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;
  let service: MockRaveService;
  let buttonEl: HTMLButtonElement;
  let directive: AngularRaveDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, AngularRaveDirective],
      providers: [
        { provide: AngularRaveService, useClass: MockRaveService },
        { provide: PUBKEY_TOKEN, useValue: 'TEST_KEY' },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    service = TestBed.inject(AngularRaveService);
    buttonEl = fixture.debugElement.query(By.css('button')).nativeElement;
    directive = fixture.debugElement.query(By.directive(AngularRaveDirective)).injector.get(AngularRaveDirective);
  });

  it('should create directive', () => {
    expect(directive).toBeTruthy();
  });

  it('should call pay on click', fakeAsync(() => {
    spyOn(directive, 'pay');
    buttonEl.click();
    tick();
    expect(directive.pay).toHaveBeenCalled();
  }));

  it('should emit init event on valid options', fakeAsync(() => {
    spyOn(hostComponent, 'onInit');
    buttonEl.click();
    tick();
    fixture.detectChanges();
    expect(hostComponent.onInit).toHaveBeenCalled();
  }));

  it('should not call checkout if options are invalid', fakeAsync(() => {
    hostComponent.options = { ...hostComponent.options, amount: null } as any;
    fixture.detectChanges();
    (service as any).isInvalidOptions = () => 'Invalid amount';
    spyOn(service, 'checkout');
    buttonEl.click();
    tick();
    expect(service.checkout).not.toHaveBeenCalled();
  }));

  it('should emit callback event when triggered', fakeAsync(() => {
    spyOn(hostComponent, 'onCallback');
    buttonEl.click();
    tick();
    const mockData = { status: 'successful' } as RavePaymentData;
    directive.callback.emit(mockData);
    fixture.detectChanges();
    expect(hostComponent.onCallback).toHaveBeenCalledWith(mockData);
  }));

  it('should emit onclose event when triggered', fakeAsync(() => {
    spyOn(hostComponent, 'onClose');
    buttonEl.click();
    tick();
    directive.onclose.emit();
    fixture.detectChanges();
    expect(hostComponent.onClose).toHaveBeenCalled();
  }));
});
