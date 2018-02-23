import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  paymentOptions:any = {}
  constructor() {
    this.paymentOptions.PBFPubKey = 'FLWPUBK-9eaca37f9eb70d3fe927bfda5e306e07-X'
    this.paymentOptions.customer_email = 'mailexample@mail.com'
    this.paymentOptions.customer_firstname = '0907477588'
    this.paymentOptions.customer_lastname = 'ekene'
    this.paymentOptions.custom_description = 'payment for somehtons'
    // this.paymentOptions.custom_logo = 
    // this.paymentOptions.custom_title = 
    this.paymentOptions.amount = 500000
    this.paymentOptions.customer_phone = '0902646464646' 
    // this.paymentOptions.redirect_url = 
    // this.paymentOptions.country = 
    // this.paymentOptions.currency = 
    // this.paymentOptions.payment_method = 
    // this.paymentOptions.pay_button_text = 
    this.paymentOptions.txref = 'uisiusiduisui'
    // this.paymentOptions.integrity_hash = 
  }
  paymentDone(ref) {
    console.log(ref)
    this.title = `Payment Complete ${ref}`
  }

  paymentCancel() {
    this.title = `Payment Cancelled`
  }
}
