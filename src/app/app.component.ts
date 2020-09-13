import { Component } from '@angular/core';
import { RaveOptions } from 'angular-rave';
import { PaymentData } from 'projects/angular-rave/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  raveOptions: RaveOptions = {
    currency: 'NGN',
    amount: 3000,
    payment_options: 'card',
    customer: {
      email: 'user@ravemail.com',
      phonenumber: '09010910901',
      name: 'Ekene Ashinze',
    },
    customizations: {
      description: 'This is a flutterwave modal implemented using angular rave',
      title: 'Angular Rave',
      logo: 'https://angular.io/assets/images/logos/angular/angular.svg',
    },
    tx_ref: `${Math.random() * 1000000}`,
  };

  paymentFailure() {
    console.log('Payment Failed');
  }

  paymentSuccess(res: PaymentData) {
    console.log('Payment complete', res);
  }

  paymentInit() {
    console.log('Payment about to begin');
  }
}
