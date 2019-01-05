import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { PrivateRaveOptions, PaymentSetup, RaveOptions } from './rave-options';
import { AngularRaveService } from './angular-rave.service';

interface MyWindow extends Window {
  getpaidSetup: (raveOptions: Partial<PrivateRaveOptions>) => PaymentSetup;
}

declare var window: MyWindow;

@Component({
  selector: 'angular-rave', // tslint:disable-line
  template: `<ng-content></ng-content>`
})

export class AngularRaveComponent implements OnInit {
  @Input()
  set PBFPubKey(v: string) {
    this._raveOptions.PBFPubKey = v;
  }
  @Input()
  set integrity_hash(v: string) {
    this._raveOptions.integrity_hash = v;
  }
  @Input()
  set txref(v: string) {
    this._raveOptions.txref = v;
  }
  @Input()
  set payment_method(v: string) {
    this._raveOptions.payment_method = v;
  }
  @Input()
  set amount(v: number) {
    this._raveOptions.amount = v;
  }
  @Input()
  set currency(v: string) {
    this._raveOptions.currency = v;
  }
  @Input()
  set country(v: string) {
    this._raveOptions.country = v;
  }
  @Input()
  set customer_email(v: string) {
    this._raveOptions.customer_email = v;
  }
  @Input()
  set customer_phone(v: string) {
    this._raveOptions.customer_phone = v;
  }
  @Input()
  set customer_firstname(v: string) {
    this._raveOptions.customer_firstname = v;
  }
  @Input()
  set customer_lastname(v: string) {
    this._raveOptions.customer_lastname = v;
  }
  @Input()
  set subaccount(v: { id: string, transaction_split_ratio: string }[]) {
    this._raveOptions.subaccount = v;
  }
  @Input()
  set pay_button_text(v: string) {
    this._raveOptions.pay_button_text = v;
  }
  @Input()
  set custom_title(v: string) {
    this._raveOptions.custom_title = v;
  }
  @Input()
  set custom_description(v: string) {
    this._raveOptions.custom_description = v;
  }
  @Input()
  set redirect_url(v: string) {
    this._raveOptions.redirect_url = v;
  }
  @Input()
  set custom_logo(v: string) {
    this._raveOptions.custom_logo = v;
  }
  @Input()
  set meta(v: any) {
    this._raveOptions.meta = v;
  }
  @Input()
  set raveOptions(v: Partial<PrivateRaveOptions>) {
    this._raveOptions = v;
  }
  @Output() onclose: EventEmitter<void> = new EventEmitter<void>();
  @Output() callback: EventEmitter<Object> = new EventEmitter<Object>();
  @Output() init: EventEmitter<Object> = new EventEmitter<Object>();
  private _raveOptions: Partial<PrivateRaveOptions> = {};
  private paymentSetup: PaymentSetup;
  private isvalidOptions = false;

  constructor(private raveService: AngularRaveService) { }

  async pay() {
    this.checkInvalidOptions();
    if (this.isvalidOptions) {
      await this.raveService.loadScript();
      this.paymentSetup = window.getpaidSetup(this._raveOptions);
      if (this.init.observers.length > 0) {
        this.init.emit(this.paymentSetup);
      }
    }
  }

  checkInvalidOptions(): string | void {
    const optionsInvalid = this.raveService.isInvalidOptions(this._raveOptions);
    if (optionsInvalid) {
      console.error(optionsInvalid);
      return optionsInvalid;
    }
    if (this.callback.observers.length === 0) {
      const errorText = 'ANGULAR-RAVE: A success callback is required';
      console.log(errorText);
      return errorText;
    }
    this.isvalidOptions = true;
  }

  insertRaveOptions(object) {
    this._raveOptions = this.raveService.createRaveOptionsObject(object);
    if (this.onclose) { this._raveOptions.onclose = () => this.onclose.emit(); }
    this._raveOptions.callback = (res) => {
      this.onclose.emit(res);
      this.paymentSetup.close();
    };
  }

  ngOnInit() {
    this.pay();
  }

  get paymentOptions(): Partial<RaveOptions> {
    return this._raveOptions;
  }
}
