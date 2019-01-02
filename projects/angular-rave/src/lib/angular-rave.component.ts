import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { PrivateRaveOptions } from './rave-options';

interface MyWindow extends Window {
  getpaidSetup: (raveOptions: Partial<PrivateRaveOptions>) => void;
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

  constructor() { }

  async pay() {
    if (this.init) {
      this.init.emit();
    }
    await this.loadScript();
    if (typeof window.getpaidSetup !== 'function') {
      return console.error('ANGULAR-RAVE: Please verify that you imported rave\'s script into your index.html');
    }
    // If the raveoptions Input is present then use it
    if (this.raveOptions && Object.keys(this.raveOptions).length > 3) {
      if (this.validateOptions()) {
        window.getpaidSetup(this.raveOptions);
      }
    } else {
      if (this.validateInput()) {
        this.insertRaveOptions();
        window.getpaidSetup(this._raveOptions);
      }
    }
  }

  insertRaveOptions() {
    if (this.amount) { this._raveOptions.amount = this.amount; }
    if (this.PBFPubKey) { this._raveOptions.PBFPubKey = this.PBFPubKey; }
    if (this.payment_method) { this._raveOptions.payment_method = this.payment_method; }
    if (this.redirect_url) { this._raveOptions.redirect_url = this.redirect_url; }
    if (this.integrity_hash) { this._raveOptions.integrity_hash = this.integrity_hash; }
    if (this.pay_button_text) { this._raveOptions.pay_button_text = this.pay_button_text; }
    if (this.country) { this._raveOptions.country = this.country; }
    if (this.currency) { this._raveOptions.currency = this.currency; }
    if (this.custom_description) { this._raveOptions.custom_description = this.custom_description; }
    if (this.customer_email) { this._raveOptions.customer_email = this.customer_email; }
    if (this.custom_logo) { this._raveOptions.custom_logo = this.custom_logo; }
    if (this.custom_title) { this._raveOptions.custom_title = this.custom_title; }
    if (this.customer_firstname) { this._raveOptions.customer_firstname = this.customer_firstname; }
    if (this.subaccount) { this._raveOptions.subaccount = this.subaccount; }
    if (this.customer_lastname) { this._raveOptions.customer_lastname = this.customer_lastname; }
    if (this.txref) { this._raveOptions.txref = this.txref; }
    if (this.customer_phone) { this._raveOptions.customer_phone = this.customer_phone; }
    if (this.onclose) { this._raveOptions.onclose = () => this.onclose.emit(); }
    if (this.init) { this._raveOptions.init = () => this.init.emit(); }
    if (this.callback) { this._raveOptions.callback = (res) => this.onclose.emit(res); }
  }

  loadScript(): Promise<void> {
    return new Promise(resolve => {
      if (typeof window.getpaidSetup === 'function') {
        resolve();
        return;
      }
      const script = window.document.createElement('script');
      window.document.head.appendChild(script);
      const onLoadFunc = () => {
        script.removeEventListener('load', onLoadFunc);
        resolve();
      };
      script.addEventListener('load', onLoadFunc);
      script.setAttribute('src', 'https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js');
    });
  }

  validateOptions() {
    if (!this.raveOptions.PBFPubKey) { return console.error('ANGULAR-RAVE: Merchant public key is required'); }
    if (!(this.raveOptions.customer_email || this.raveOptions.customer_phone)) {
      return console.error('ANGULAR-RAVE: Customer email or phone number is required');
    }
    if (!this.raveOptions.txref) { return console.error('ANGULAR-RAVE: A unique transaction reference is required'); }
    if (!this.raveOptions.amount) { return console.error('ANGULAR-RAVE: Amount to charge is required'); }
    if (!this.callback.observers.length) { return console.error('ANGULAR-RAVE: You should attach to callback to verify your transaction'); }
    this.raveOptions.callback = res => this.callback.emit(res);
    return true;
  }

  validateInput() {
    if (!this.PBFPubKey) { return console.error('ANGULAR-RAVE: Merchant public key is required'); }
    if (!(this.customer_email || this.customer_phone)) { return console.error('ANGULAR-RAVE: Customer email or phone number is required'); }
    if (!this.txref) { return console.error('ANGULAR-RAVE: A unique transaction reference is required'); }
    if (!this.amount) { return console.error('ANGULAR-RAVE: Amount to charge is required'); }
    if (!this.callback) { return console.error('ANGULAR-RAVE: You should attach to callback to verify your transaction'); }
    return true;
  }

  ngOnInit() {
    this.pay();
  }
}
