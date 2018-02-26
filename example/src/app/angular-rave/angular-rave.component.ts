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
  @Input() raveOptions: Partial<RaveOptions>
  @Output() onclose: EventEmitter<void> = new EventEmitter<void>();
  @Output() callback: EventEmitter<Object> = new EventEmitter<Object>();
  private _raveOptions: Partial<RaveOptions> = {}

  constructor() { }


  pay() {
    if (typeof window.getpaidSetup !== "function") {
      return console.error("Please verify that you imported rave's script into your index.html")
    }
    // If the raveoptions Input is present then use
    if (this.raveOptions && Object.keys(this.raveOptions).length > 3) {
      console.log("Options present")
      if (!this.validateOptions()) {
        return
      }
      window.getpaidSetup(this.raveOptions)
    } else {
      console.log("Options absent")
      if (!this.validateInput()) {
        return
      }
      this.insertRaveOptions()
      window.getpaidSetup(this._raveOptions)
    }
  }

  insertRaveOptions() {
    this.amount ? this._raveOptions.amount = this.amount : null
    this.PBFPubKey ? this._raveOptions.PBFPubKey = this.PBFPubKey : null
    this.payment_method ? this._raveOptions.payment_method = this.payment_method : null
    this.redirect_url ? this._raveOptions.redirect_url = this.redirect_url : null
    this.integrity_hash ? this._raveOptions.integrity_hash = this.integrity_hash : null
    this.pay_button_text ? this._raveOptions.pay_button_text = this.pay_button_text : null
    this.country ? this._raveOptions.country = this.country : null
    this.currency ? this._raveOptions.currency = this.currency : null
    this.custom_description ? this._raveOptions.custom_description = this.custom_description : null
    this.customer_email ? this._raveOptions.customer_email = this.customer_email : null
    this.custom_logo ? this._raveOptions.custom_logo = this.custom_logo : null
    this.custom_title ? this._raveOptions.custom_title = this.custom_title : null
    this.customer_firstname ? this._raveOptions.customer_firstname = this.customer_firstname : null
    this.customer_lastname ? this._raveOptions.customer_lastname = this.customer_lastname : null
    this.customer_phone ? this._raveOptions.customer_phone = this.customer_phone : null
    this.onclose ? this._raveOptions.onclose = () => this.onclose.emit() : null
    this.callback ? this._raveOptions.callback = (res) => this.onclose.emit(res) : null
  }

  validateOptions() {
    if (!this.raveOptions.PBFPubKey) return console.error("Merchant public key is required");
    if (!(this.raveOptions.customer_email || this.raveOptions.customer_phone)) return console.error("Customer email or phone number is required");
    if (!this.raveOptions.txref) return console.error("A unique tranaction reference is required")
    if (!this.raveOptions.amount) return console.error("Amount to charge is required")
    if (!this.callback) return console.error("You should attach to callback to verify your transaction")
    return true
  }

  validateInput() {
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