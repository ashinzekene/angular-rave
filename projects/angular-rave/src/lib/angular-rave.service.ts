import { Injectable, Inject } from '@angular/core';
import { RaveOptions } from './rave-options';
import { PUBKEY_TOKEN } from './angular-rave-token';
import { PrivateRaveOptions, RaveCallback } from './private-rave-options';

interface MyWindow extends Window {
  FlutterwaveCheckout: (raveOptions: Partial<PrivateRaveOptions>) => void;
}
declare var window: MyWindow;

const CHECKOUT_SCRIPT_URL = 'https://checkout.flutterwave.com/v3.js';

@Injectable({
  providedIn: 'root',
})
export class AngularRaveService {

  constructor(
    @Inject(PUBKEY_TOKEN) private publicKey: string,
  ) { }

  createRaveOptionsObject(obj: Partial<PrivateRaveOptions>, callback: RaveCallback, onclose: () => void): PrivateRaveOptions {
    const raveOptions: Partial<PrivateRaveOptions> = {};
    raveOptions.amount = obj.amount;
    raveOptions.public_key = obj.public_key || this.publicKey;
    if (obj.currency) { raveOptions.currency = obj.currency; }
    if (obj.customer) { raveOptions.customer = obj.customer; }
    if (obj.customizations) { raveOptions.customizations = obj.customizations; }
    if (obj.integrity_hash) { raveOptions.integrity_hash = obj.integrity_hash; }
    if (obj.meta) { raveOptions.meta = obj.meta; }
    if (obj.payment_options) { raveOptions.payment_options = obj.payment_options; }
    if (obj.payment_plan) { raveOptions.payment_plan = obj.payment_plan; }
    if (obj.redirect_url) { raveOptions.redirect_url = obj.redirect_url; }
    if (obj.subaccounts) { raveOptions.subaccounts = obj.subaccounts; }
    if (obj.tx_ref) { raveOptions.tx_ref = obj.tx_ref; }
    raveOptions.callback = callback;
    raveOptions.onclose = onclose;
    return raveOptions as PrivateRaveOptions;
  }

  loadScript(): Promise<void> {
    return new Promise(resolve => {
      if (typeof window.FlutterwaveCheckout === 'function') {
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
      const url = CHECKOUT_SCRIPT_URL;
      script.setAttribute('src', url);
    });
  }

  isInvalidOptions(obj: Partial<RaveOptions>): string {
    if (!obj.public_key && !this.publicKey) {
      return 'ANGULAR-RAVE: Merchant public key is required';
    }
    if (!(obj.customer.email || obj.customer.phonenumber)) {
      return 'ANGULAR-RAVE: Customer email or phone number is required';
    }
    if (!obj.payment_options) {
      return 'ANGULAR-RAVE: Customer email or phone number is required';
    }
    if (!obj.currency) {
      return 'ANGULAR-RAVE: Currency is used. Use "NGN" for Naira';
    }
    if (!obj.tx_ref) {
      return 'ANGULAR-RAVE: A unique transaction reference is required';
    }
    if (!obj.amount) {
      return 'ANGULAR-RAVE: Amount to charge is required';
    }
    return '';
  }

  checkout(options: PrivateRaveOptions) {
    return window.FlutterwaveCheckout(options);
  }

}
