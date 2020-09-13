import { Directive, Input, Output, HostListener, EventEmitter } from '@angular/core';

import { RaveOptions, RaveSubAcccount } from './rave-options';
import { AngularRaveService } from './angular-rave.service';
import { RavePaymentData, PrivateRaveOptions } from './private-rave-options';

@Directive({
  selector: '[angular-rave]', // tslint:disable-line
})
export class AngularRaveDirective {
  @Input() amount: number;
  @Input() public_key: string;
  @Input() currency: string;
  @Input() customer: object;
  @Input() customizations: object;
  @Input() integrity_hash: string;
  @Input() meta: object;
  @Input() payment_options: string;
  @Input() payment_plan: string;
  @Input() redirect_url: string;
  @Input() subaccounts: RaveSubAcccount[];
  @Input() tx_ref: string;
  @Input() raveOptions: RaveOptions;
  @Output() onclose: EventEmitter<void> = new EventEmitter<void>();
  @Output() callback: EventEmitter<RavePaymentData> = new EventEmitter<RavePaymentData>();
  @Output() init: EventEmitter<object> = new EventEmitter<object>();
  private _raveOptions: PrivateRaveOptions;
  private paymentSetup: any;

  constructor(private raveService: AngularRaveService) { }

  @HostListener('click')
  buttonClick() {
    this.pay();
  }

  async pay() {
    let raveOptionsError = '';
    if (this.raveOptions && Object.keys(this.raveOptions).length > 1) {
      raveOptionsError = this.raveService.isInvalidOptions(this.raveOptions);
      this.insertRaveOptions(this.raveOptions);
    } else {
      raveOptionsError = this.raveService.isInvalidOptions(this as RaveOptions);
      this.insertRaveOptions(this as RaveOptions);
    }
    if (!!raveOptionsError) {
      console.error(raveOptionsError);
      return;
    }
    await this.raveService.loadScript();
    this.raveService.checkout(this._raveOptions);
    if (this.init.observers.length > 0) {
      this.init.emit(this.paymentSetup);
    }
  }

  insertRaveOptions(object: Partial<RaveOptions>) {
    const onclose = () => {
      if (this.onclose.observers.length) {
        this.onclose.emit();
      }
    };

    const callback = (res: RavePaymentData) => {
      this.callback.emit(res);
    };

    this._raveOptions = this.raveService.createRaveOptionsObject(object, callback, onclose);
  }


}
