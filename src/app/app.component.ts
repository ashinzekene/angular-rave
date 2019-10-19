import { Component } from '@angular/core';
import { RaveOptions, PaymentInstance } from 'angular-rave';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  paymentInstance: PaymentInstance;
  raveOptions: RaveOptions = {
    customer_email: 'user@ravemail.com',
    customer_phone: '090848484843',
    amount: 3000,
    redirect_url: 'http://localhost:4200',
    currency: 'NGN',
    custom_title: 'Angular rave test payment',
    txref: `${Math.random() * 1000000}`,
  };

  paymentFailure() {
    console.log('Payment Failed');
    this.paymentInstance.close();
  }

  paymentSuccess(res) {
    console.log('Payment complete', res);
    this.paymentInstance.close();
  }

  paymentInit(paymentInstance) {
    this.paymentFailure = paymentInstance;
    console.log(paymentInstance);
    console.log('Payment about to begin', paymentInstance);
  }
}
