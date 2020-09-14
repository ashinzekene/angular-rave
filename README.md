# ANGULAR-RAVE

> Easily intergrate the [rave](https://ravepay.co/) payment gateway in your angular2+ project

## HOW TO USE

You can checkout the demo [here](https://ashinzekene.github.io/angular-rave)

### 1. Install the module

  Run this in the root of your angular project
  ```bash
  npm install --save angular-rave
  ```

### 2. Import the module into your project like so

  ```ts
  import { NgModule } from '@angular/core';
  import { AngularRaveModule } from 'angular-rave';
  ...

  @NgModlule({
    imports: [
      AngularRaveModule.forRoot('FLWPUBK-XXXXXXXXXXXXXXXXXXX'),
    ]
  })
  ```
  where `FLWPUBK-XXXXXXXXXXXXXXXXXXX` is your public key which can be found on the flutterwave dashboard

### 3. Implementing Angular-rave

There are two option available

- The `angular-rave` component:
```html
<angular-rave
  [customer]="{ email: 'user@example.com', phonenumber: '0809808800900' }"
  [amount]="500000"
  [customizations]="{ title: 'Bill Payment' }"
  [tx_ref]="'USR1295950'"
  (callback)="paymentSuccess($event)"
  (close)="paymentFailure()"
  (init)="paymentInit()"
></angular-rave>
```

2. The `angular-rave` directive:
```html
<button
  angular-rave
  [customer]="{ email: 'user@example.com', phonenumber: '0809808800900' }"
  [amount]="500000"
  [customizations]="{ title: 'Bill Payment'}"
  [tx_ref]="'USR1295950'"
  (callback)="paymentSuccess($event)"
  (close)="paymentFailure()"
  (init)="paymentInit()"
>PAY NOW</button>
```
And then in your `component.ts` file:

```ts
import { Component } from '@angular/core';
import { RavePaymentData } from 'angular-rave';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paymentFailure() {
    console.log('Payment Failed');
  }

  paymentSuccess(res: RavePaymentData) {
    console.log('Payment complete', res);
    // Verify the transaction
  }

  paymentInit() {
    console.log('Payment about to begin');
  }
}

```

### Rave Options
You can also pass in an object containing your rave options like so

```html
<button
  angular-rave
  [raveOptions]="raveOptions"
  (init)="paymentInit()"
  (callback)="paymentSuccess($event)"
  (onclose)="paymentFailure()"
>
  Pay with Rave Directive
</button>

```
And then you can import the `RaveOptions` class for help in typing
```ts
import { RaveOptions } from 'angular-rave';

...
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
```
And then in the template
```html
<button
  angular-rave
  [autoClose]="true"
  [raveOptions]="raveOptions"
>PAY NOW</button>
```

### Rave Key Specificity
Also, you can pass in a key in the component and the directive, in such situation,
this key is given a higher preference over the global `forRoot` key.
For example, if you have this is your module file

```ts
@NgModule({
  imports: [
    AngularRaveModule.forRoot('FLWPUBK-1000'),
  ]
})
```
and this in your component
```html
<button
  angular-rave
  [public_key]="FLWPUBK-2000"
  [raveOptions]="paymentOptions"
>
  PAY NOW
</button>
```
Then `FLWPUBK-2000` would be used instead

**NOTE:**

- When using the component, the rave's payment popup shows once the component is rendered while using the directive the popup shows on click
- Always generate a sensible unique reference for every transaction (unlike what I did up there 😉)
- After successful payment always perform server verification

## OPTIONS

| Name                    | Type                      | Required          | Default Value   | Description                                      |
|-------------------------|---------------------------|-------------------|:---------------:|:--------------------------------------------------|
| public_key              | string                    | true              | -               | Merchant public key
| tx_ref                  | string                    | true              | -               | Your transaction reference. This MUST be unique for every transaction
| amount                  | number                    | true              | -               | Amount to charge the customer.
| currency                | string                    | false             | 'NGN'           | currency to charge in. Defaults to 'NGN'
| integrity_hash          | string                    | false             | -               | This is a sha256 hash of your FlutterwaveCheckout values, it is used for passing secured values to the payment gateway.
| paymentOptions          | `PaymentOptionsEnum[]`    | false             | -               |This specifies the payment options to be displayed e.g - card, mobilemoney, ussd and so on.
| payment_plan            | string                    | false             | -               | This is the payment plan ID used for Recurring billing
| subaccounts             | `RaveSubAcccount[]`       | false             | -               |This is an array of objects containing the subaccount IDs to split the payment into. Check our Split Payment page for more info
| redirect_url            | string                    | false             | -               | URL to redirect to when a transaction is completed. This is useful for 3DSecure payments so we can redirect your customer back to a custom page you want to show them.
| customer                | RaveCustomer              | true              | -               | This is an object that can contains your customer details: e.g: `{ 'email': 'example@example.com', 'phonenumber': '08012345678', 'name': 'Takeshi Kovacs'}`
| meta                    | `{[key: string]: any}`    | false             | -               | This is an object that helps you include additional payment information to your request `{'consumer_id': 23,'consumer_mac': '92a3-912ba-1192a'}`
| customizations          | `RaveCustomization`       | true              | -               | This is an object that contains title, logo, and description you want to display on the modal e.g `{'title': 'Pied Piper Payments', 'description': 'Middleout isn't free. Pay the price', 'logo': 'https://assets.piedpiper.com/logo.png'}`
| init                    | `() => void`              | false             | -               | A function to be called when payment is about to begin
| onclose                 | function()                | false             | -               | A function to be called when the pay modal is closed before a transaction is completed.
| callback                | (res: RavePaymentData) => void     | true              | -               | A function to be called on successful card charge. Users can always be redirected to a successful or failed page supplied by the merchant here based on response.

> You can get more information from [rave's documentation](https://flutterwavedevelopers.readme.io/)  
> Type definitions can be found [here](./projects/angular-rave/src/lib/rave-options.ts)

## CONTRIBUTING

Feel free to create issues and submit pull requests to make corrections or enhance functionality

Two projects exist in this repository
- The `Angular-rave` package: [`./projects/angular-rave`](./projects/angular-rave)
- The `Angular-rave-lib` demo: [`./src`](./src)

### Angular-rave project
- Found at `./projects/angular-rave/src/lib`.
- The artifacts ([README.md](./projects/angular-rave/README.md), [CHANGELOG.md](./projects/angular-rave/CHANGELOG.md) and [LICENSE.md](./projects/angular-rave/LICENSE.md)) in the `./projects/angular-rave/` folder are overwritten on [build](./package.json#L7)
- Running `npm run build` on the main folder builds this project by [default](./angular.json#L155)

### Demo
- To serve this project run `npm start`/`ng serve`.
- This project makes use of the [built package](./tsconfig.json#L23) from the `angular-rave` library for quick testing and real-life debugging. So it's **important** to initially run `npm run build`/`ng build` before serving this project
- To build this project, run `npm run build angular-rave-lib`. The compiled files are built to the `docs` folder for GitHub Pages.
- This project is also served on github pages at https://ashinzekene.github.io/angular-rave/

## Release
- Checkout to a new release branch `release/new-version` eg `release/3.0.0`
- cd into `projects/angular-rave` 
- Run `npm version patch|minor|major`
- cd into the main directory and run `npm build`
- Run `git add . && git commit -m new-version`
- Run `git tag -a new-version "release notes..."`
- cd into `dist/angular-rave` and run `npm publish`

Thanks!
Ashinze Ekene.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
