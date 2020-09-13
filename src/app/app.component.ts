import { Component } from '@angular/core';
import { RaveOptions, PaymentData } from 'angular-rave';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-rave-lib';
  raveOptions: RaveOptions = {
    amount: 3000,
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
