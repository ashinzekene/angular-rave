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

### 2. Reference the the rave script into the main `index.html` like so

  ```html
  <script src="//rave-api-v2.herokuapp.com/flwv3-pug/getpaidx/api/flwpbf-inline.js"></script>
  ```

### 3. Import the module into your project like so

  ```ts
  import { NgModule } from '@angular/core';
  import { AngularRaveModule } from 'angular-rave';
  ...

  @NgModlule({
    imports: [
      AngularRave,
    ]
  })
  ```

### 4. Implementing Angular-rave

 Either by using the component
  ```html
  <angular-rave
    [PBFPubKey] = "'FLWPUBK-XXXXXXXXXXXX'"
    [customer_email] = "'user@example.com'"
    [customer_phone] = "'08090909090'"
    [amount]="500000"
    [custom_title]="'Bill Payment'"
    [txref]="'USR1295950'"
    (callback)="paymentSuccess($event)"
    (close)="paymentFailure()"
  ><angular-rave>
  ```
  or the directive

```html
<button
  angular-rave
  [PBFPubKey] = "'FLWPUBK-XXXXXXXXXXXX'"
  [customer_email] = "'user@example.com'"
  [customer_phone] = "'08090909090'"
  [amount]="500000"
  [custom_title]="'Bill Payment'"
  [txref]="'USR1295950'"
  (callback)="paymentSuccess($event)"
  (close)="paymentFailure()"
>PAY NOW</button>
```

You can also pass in an object containing your rave options like so

```html
<button
  angular-rave
  [raveOptions]="paymentOptions"
>PAY NOW</button>
```

```ts
import { RaveOptions } from 'angular-rave';

...

paymentOptions: RaveOptions = {
  PBFPubKey: 'FLWPUBK-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  customer_email: 'mailexample@mail.com'
  customer_firstname: 'Ashinze'
  customer_lastname: 'Ekene'
  custom_description: 'Payment for goods'
  amount: 500000
  customer_phone: '09026464646'
  txref: this.generateRef()
}

```

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
currency                | string      |  false           | "NGN"         | currency to charge the card in.
country                 | string      |  false           | "NG"          | route country.
customer_firstname      | string      |  false           | -             | firstname of the customer.
customer_lastname       | string      |  false           | -             | lastname of the customer.
pay_button_text         | string      |  false           | -             | Text to be displayed on the Rave Checkout Button.
custom_title            | string      |  false           | -             | Text to be displayed as the title of the payment modal.
custom_description      | string      |  false           | -             | Text to be displayed as a short modal description.
redirect_url            | string      |  false           | -             | URL to redirect to when transaction is completed.
custom_logo             | string      |  false           | -             | Link to your custom image.
meta                    | object      |  false           | -             | Any other custom data you wish to pass. Eg- [{   metaname:‘flightid’,metavalue:‘93849-MK5000’}]
onclose                 | function()  |  false           | -             | A function to be called when the pay modal is closed.
callback                | function(res) |  true          | -             | A function to be called on successful card charge. User’s can always be redirected to a successful or failed page supplied by the merchant here based on response.

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