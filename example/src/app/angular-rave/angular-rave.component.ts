import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { RaveOptions } from "./rave-options";

interface myWindow extends Window {
  getpaidSetup: (raveOptions: Partial<RaveOptions>) => void
}

declare var window: myWindow

@Component({
  selector: 'angular-rave',
  template: `<div></div>`
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
  @Input() pay_button_text: string;
  @Input() custom_title: string;
  @Input() custom_description: string;
  @Input() redirect_url: string;
  @Input() custom_logo: string;
  @Input() meta: any;
  @Output() onclose: EventEmitter<void> = new EventEmitter<void>();
  @Output() callback: EventEmitter<Object> = new EventEmitter<Object>();
  public raveOptions: Partial<RaveOptions> = {}

  constructor() { }

  pay() {
    if (!this.validateInput()) {
      return
    }
    if (typeof window.getpaidSetup !== "function") {
      return console.error("Please verify that you imported rave's script into your index.html")
    }
    this.insertRaveOptions()
    window.getpaidSetup(this.raveOptions)
  }
  
  insertRaveOptions() {
    this.amount ? this.raveOptions.amount = this.amount : null
    this.PBFPubKey ? this.raveOptions.PBFPubKey = this.PBFPubKey : null
    this.payment_method ? this.raveOptions.payment_method = this.payment_method : null
    this.redirect_url ? this.raveOptions.redirect_url = this.redirect_url : null
    this.integrity_hash ? this.raveOptions.integrity_hash = this.integrity_hash : null
    this.pay_button_text ? this.raveOptions.pay_button_text = this.pay_button_text : null
    this.country ? this.raveOptions.country = this.country : null
    this.currency ? this.raveOptions.currency = this.currency : null
    this.custom_description ? this.raveOptions.custom_description = this.custom_description : null
    this.customer_email ? this.raveOptions.customer_email = this.customer_email : null
    this.custom_logo ? this.raveOptions.custom_logo = this.custom_logo : null
    this.custom_title ? this.raveOptions.custom_title = this.custom_title : null
    this.customer_firstname ? this.raveOptions.customer_firstname = this.customer_firstname : null
    this.customer_lastname ? this.raveOptions.customer_lastname = this.customer_lastname : null
    this.customer_phone ? this.raveOptions.customer_phone = this.customer_phone : null
    this.onclose ? this.raveOptions.onclose = () => this.onclose.emit(): null
    this.callback ? this.raveOptions.callback = (res) => this.onclose.emit(res): null
  }
  validateInput(){
    if (!this.PBFPubKey) return console.error("Merchant public key is required");
    if (!(this.customer_email || this.customer_phone)) return console.error("Customer email or phone number is required");
    if (!this.txref) return console.error("A unique tranaction reference is required")
    if (!this.amount) return console.error("Amount to charge is required")
    if (!this.callback) return console.error("You should attach to callback to verify your transaction")
    return true
  }

  ngOnInit() { 
    this.pay()
  }
}