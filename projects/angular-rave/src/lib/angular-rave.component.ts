import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { PrivateRaveOptions, PaymentSetup } from './rave-options';
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
  @Input() PBFPubKey: string;
  @Input() integrity_hash: string;
  @Input() txref: string;
  @Input() payment_method: string;
  @Input() amount: number;
  @Input() currency: string;
  @Input() country: string;
  @Input() customer_email: string;
  @Input() customer_phone: string;
  @Input() customer_firstname: string;
  @Input() customer_lastname: string;
  @Input() subaccount: { id: string, transaction_split_ratio: string }[];
  @Input() pay_button_text: string;
  @Input() custom_title: string;
  @Input() custom_description: string;
  @Input() redirect_url: string;
  @Input() custom_logo: string;
  @Input() meta: any;
  @Input() raveOptions: Partial<PrivateRaveOptions>;
  @Output() onclose: EventEmitter<void> = new EventEmitter<void>();
  @Output() callback: EventEmitter<Object> = new EventEmitter<Object>();
  @Output() init: EventEmitter<Object> = new EventEmitter<Object>();
  private _raveOptions: Partial<PrivateRaveOptions> = {};
  private paymentSetup: PaymentSetup;

  constructor(private raveService: AngularRaveService) { }

  async pay() {
    await this.raveService.loadScript();
    if (this.raveOptions && Object.keys(this.raveOptions).length > 1) {
      this.checkInvalidOptions(this.raveOptions);
      this.insertRaveOptions(this.raveOptions);
    } else {
      this.checkInvalidOptions(this);
      this.insertRaveOptions(this);
    }
    this.paymentSetup = window.getpaidSetup(this._raveOptions);
    if (this.init.observers.length > 0) {
      this.init.emit(this.paymentSetup);
    }
  }

  checkInvalidOptions(object) {
    const optionsInvalid = this.raveService.isInvalidOptions(object);
    if (optionsInvalid) {
      console.error(optionsInvalid);
    }
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
}
