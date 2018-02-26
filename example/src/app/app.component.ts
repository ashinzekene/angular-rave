import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  paymentOptions:any = {}
  ref: string
  constructor() {
    this.paymentOptions.PBFPubKey = 'FLWPUBK-9eaca37f9eb70d3fe927bfda5e306e07-X'
    this.paymentOptions.customer_email = 'mailexample@mail.com'
    this.paymentOptions.customer_firstname = '0907477588'
    this.paymentOptions.customer_lastname = 'ekene'
    this.paymentOptions.custom_description = 'Payment for iPhone X'
    this.paymentOptions.custom_title = 'Angular Rave'
    this.paymentOptions.custom_logo = 'https://angular.io/assets/images/logos/angular/angular.svg'
    this.paymentOptions.amount = "510000"
    this.paymentOptions.customer_phone = '0902646464646' 
    this.paymentOptions.txref = this.generateRef()
    // this.paymentOptions.custom_logo = 
    // this.paymentOptions.custom_title = 
    // this.paymentOptions.redirect_url = 
    // this.paymentOptions.country = 
    // this.paymentOptions.currency = 
    // this.paymentOptions.payment_method = 
    // this.paymentOptions.pay_button_text = 
    // this.paymentOptions.integrity_hash = 
    this.generateRef()
  }
  paymentDone(ref) {
    console.log(ref)
    this.title = `Payment Complete ${ref}`
  }

  paymentCancel() {
    this.title = `Payment Cancelled`
  }

  generateRef() {
    var arr = "abcdefghijklmnopqrstuvwxyz1234567890".split("")
    var x = 12
    var res = ""
    while (x) {
      res += arr[Math.ceil(Math.random()*arr.length)]
      x--
    }
    return res
  }
}
