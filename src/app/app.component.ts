import { Component } from '@angular/core';
import { RaveOptions } from 'angular-rave';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  raveOptions: RaveOptions = {
    PBFPubKey: '',
    customer_email: 'user@ravemail.com',
    customer_phone: '090848484843',
    amount: 3000,
    custom_title: 'No true title',
    txref: `${Math.random() * 1000000}`,
  };

  paymentFailure() {
    console.log('Payment Failed');
  }

  paymentSuccess(res) {
    console.log('Payment complete', res);
  }

  paymentInit(paymentInstance) {
    setTimeout(() => {
      console.log('Closing!!!');
      paymentInstance.close();
    }, 10000);
    console.log('Payment about to begin', paymentInstance);
  }
}
