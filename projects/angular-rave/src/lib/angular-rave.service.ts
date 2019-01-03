import { Injectable, Inject } from '@angular/core';
import { PrivateRaveOptions } from './rave-options';
import { PBFPUBKEY_TOKEN } from './angular-rave-token';

interface MyWindow extends Window {
  getpaidSetup: (raveOptions: Partial<PrivateRaveOptions>) => void;
}

declare var window: MyWindow;


@Injectable({
  providedIn: 'root',
})
export class AngularRaveService {

  constructor(@Inject(PBFPUBKEY_TOKEN) private PBFPubKey: string) { }

  createRaveOptionsObject(obj): Partial<PrivateRaveOptions> {
    const raveOptions: Partial<PrivateRaveOptions> = {};
    raveOptions.amount = obj.amount;
    raveOptions.PBFPubKey = obj.PBFPubKey || this.PBFPubKey;
    if (obj.payment_method) { raveOptions.payment_method = obj.payment_method; }
    if (obj.redirect_url) { raveOptions.redirect_url = obj.redirect_url; }
    if (obj.integrity_hash) { raveOptions.integrity_hash = obj.integrity_hash; }
    if (obj.pay_button_text) { raveOptions.pay_button_text = obj.pay_button_text; }
    if (obj.country) { raveOptions.country = obj.country; }
    if (obj.currency) { raveOptions.currency = obj.currency; }
    if (obj.custom_description) { raveOptions.custom_description = obj.custom_description; }
    if (obj.customer_email) { raveOptions.customer_email = obj.customer_email; }
    if (obj.custom_logo) { raveOptions.custom_logo = obj.custom_logo; }
    if (obj.custom_title) { raveOptions.custom_title = obj.custom_title; }
    if (obj.customer_firstname) { raveOptions.customer_firstname = obj.customer_firstname; }
    if (obj.subaccount) { raveOptions.subaccount = obj.subaccount; }
    if (obj.customer_lastname) { raveOptions.customer_lastname = obj.customer_lastname; }
    if (obj.txref) { raveOptions.txref = obj.txref; }
    if (obj.customer_phone) { raveOptions.customer_phone = obj.customer_phone; }
    return raveOptions;
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
      script.setAttribute('src', 'https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-inline.js');
    });
  }

  isInvalidOptions(obj): string|false {
    if (!obj.PBFPubKey && !this.PBFPubKey) {
      return 'ANGULAR-RAVE: Merchant public key is required';
    }
    if (!(obj.customer_email || obj.customer_phone)) {
      return 'ANGULAR-RAVE: Customer email or phone number is required';
    }
    if (!obj.txref) {
      return 'ANGULAR-RAVE: A unique transaction reference is required';
    }
    if (!obj.amount) {
      return 'ANGULAR-RAVE: Amount to charge is required';
    }
    return false;
  }

}
