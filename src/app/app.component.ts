import { Component } from '@angular/core';
import { RaveOptions } from 'angular-rave';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  paymentInstance: any;
  raveOptions: RaveOptions = {
    customer_email: 'user@ravemail.com',
    customer_phone: '090848484843',
    amount: 3000,
    currency: "NGN",
    custom_title: 'Angular rave test payment',
    txref: `${Math.random() * 1000000}`,
  };

  paymentFailure() {
    console.log('Payment Failed');
  }

  paymentSuccess(res) {
    console.log('Payment complete', res);
    this.paymentInstance.close();
  }

  paymentInit(paymentInstance) {
    this.paymentFailure = paymentInstance;
    console.log('Payment about to begin', paymentInstance);
  }
}
