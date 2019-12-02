# ANGULAR-RAVE

> Easily intergrate the [rave](https://ravepay.co/) payment gateway in your angular2+ project

## HOW TO USE

You can checkout the demo [here](https://ashinzekene.github.io/angular-rave)

### 1. INSTALL THE MODULE

  Run
  ```bash
  npm install --save angular-rave
  ```
  in the your angular project

### 2. Import the module into your project like so

  ```ts
  import { NgModule } from '@angular/core';
  import { AngularRaveModule } from 'angular-rave';
  ...

  @NgModlule({
    imports: [
      AngularRaveModule.forRoot({
        key: 'FLWPUBK-XXXXXXXXXXXXXXXXXXX',
        isTest: true,
      }),
    ]
  })
  ```

### 3. Implementing Angular-rave

There are two option available

- The `angular-rave` component:
```html
<angular-rave
  [customer_email] = "'user@example.com'"
  [customer_phone] = "'08090909090'"
  [amount]="500000"
  [custom_title]="'Bill Payment'"
  [txref]="'USR1295950'"
  (callback)="paymentSuccess($event)"
  (close)="paymentFailure()"
  (close)="paymentInit()"
></angular-rave>
```

2. The `angular-rave` directive:
```html
<button
  angular-rave
  [customer_email] = "'user@example.com'"
  [customer_phone] = "'08090909090'"
  [amount]="500000"
  [custom_title]="'Bill Payment'"
  [txref]="'USR1295950'"
  (callback)="paymentSuccess($event)"
  (onclose)="paymentFailure()"
  (init)="paymentInit($event)"
>PAY NOW</button>
```
And then in your `component.ts` file:

```ts
import { Component } from '@angular/core';
import { PaymentInstance } from 'angular-rave';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paymentInstance: PaymentInstance;
  token :string

  paymentFailure() {
    console.log('Payment Failed');
  }

  paymentSuccess(res) {
    console.log('Payment complete', res);
    this.paymentInstance.close();
  }

  paymentInit(paymentInstance) {
    this.paymentInstance = paymentInstance;
    console.log('Payment about to begin', paymentInstance);
  }
}

```

### Rave Options
You can also pass in an object containing your rave options like so

```html
<button
  angular-rave
  [raveOptions]="paymentOptions"
>
  PAY NOW
</button>
```
And then you can import the `RaveOptions` class for help in typing
```ts
import { RaveOptions } from 'angular-rave';

...
paymentOptions: RaveOptions = {
  PBFPubKey: 'FLWPUBK-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  customer_email: 'mailexample@mail.com',
  customer_firstname: 'Ashinze',
  customer_lastname: 'Ekene',
  custom_description: 'Payment for goods',
  amount: 500000,
  customer_phone: '09026464646',
  txref: 'a-unique-reference',
}
```

### Autoclose
By default, you would have to call `paymentInstance.close()` to close the modal after a transaction is complete. You can pass in the `autoClose` boolean input to close the modal automatically after a transaction is completed. Use like so

```html
<button
  angular-rave
  [autoClose]="true"
  [raveOptions]="paymentOptions"
>PAY NOW</button>
```

### Rave Key Specificity
Also, you can pass in a key in the component and the directive, in such situation,
this key is given a higher preference over the global `forRoot` key.
For example, if you have this is your module file

```ts
@NgModule({
  imports: [
    AngularRaveModule.forRoot({
      key: 'FLWPUBK-1000',
      isTest: true,
    }),
  ]
})
```
and this in your component
```html
<button
  angular-rave
  [PBFPubKey]="FLWPUBK-2000"
  [raveOptions]="paymentOptions"
>
  PAY NOW
</button>
```
Then `FLWPUBK-2000` would be used instead

**NOTE:**

- When using the component, the rave's payment popup shows once the component is rendered while using the directive the popup shows on click
- Always generate a unique reference for every transaction
- After successful payment always perform server verification

## OPTIONS

| Name                  | Type        | Required         | Default Value | Description                                      |
|-----------------------|------------ |------------------|:-------------:|--------------------------------------------------|
PBFPubKey               | string      |  true            | -             | Your merchant public key provided when you create a button.
customer_email          | string      |  true            | -             | ( if customer phone number is not passed ) Email of the customer.
customer_phone          | string      |  true            | -             | phone number of the customer.
txref                   | string      |  true            | -             | Unique transaction reference provided by the merchant.
amount                  | number      |  true            | -             | Amount to charge.
integrity_hash          | string      |  false           | -             | (temporarily) This is a sha256 hash of your getpaidSetup values, it is used for passing secured values to the payment gateway.
payment_method          | string      |  false           | "both"        | This allows you select the payment option you want for your users, possible values are card, account or both.
payment_options         | string      |  false           | -             | This allows you to select the payment option you want for your users. Possible values are: `'card'`, `'account'`, `'ussd'`. To use more than one option just add them as comma separated values without spaces e.g. `'card,account'`, `'card,account,qr'` etc.
currency                | string      |  false           | "NGN"         | currency to charge the card in.
country                 | string      |  false           | "NG"          | route country.
customer_firstname      | string      |  false           | -             | firstname of the customer.
customer_lastname       | string      |  false           | -             | lastname of the customer.
pay_button_text         | string      |  false           | -             | Text to be displayed on the Rave Checkout Button.
custom_title            | string      |  false           | -             | Text to be displayed as the title of the payment modal.
custom_description      | string      |  false           | -             | Text to be displayed as a short modal description.
redirect_url            | string      |  false           | -             | URL to redirect to when transaction is completed.
custom_logo             | string      |  false           | -             | Link to your custom image.
meta                    | object      |  false           | -             | Any other custom data you wish to pass. Eg- `[{ metaname: ‘flightid’, metavalue: ‘93849-MK5000’}]`
onclose                 | function()  |  false           | -             | A function to be called when the pay modal is closed.
callback                | function(res) |  true          | -             | A function to be called on successful card charge. User’s can always be redirected to a successful or failed page supplied by the merchant here based on response.
subaccounts             | []{id: string, transaction_split_ratio: string} |  true          | -             | Subaccounts to add for split payments https://developer.flutterwave.com/v2.0/docs/split-payment
init                    | function(res) |  false         | -             | A function to be called when payment is about to begin
autoClose               | boolean      |  false         | -             | If true, the payment modal closes automatically after a transaction is completed

> You can get more information from [rave's documentation](https://flutterwavedevelopers.readme.io/)

## CONTRIBUTING

  This is an open source project, feel free to create issues and submit pull requests to make corrections or enhance functionality

## How can I thank you

Why not star the github repo? I'd love the attention! Why not share the link for this repository on Twitter or anywhere? Spread the word!

Don't forget to [follow me on twitter](https://twitter.com/ashinzekene)!

Thanks!
Ashinze Ekene.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
