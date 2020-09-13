export interface RaveOptions {
  /* *
   * Merchant public key
   */
  public_key?: string;

  /**
   * Your transaction reference. This MUST be unique for every transaction
   */
  tx_ref: string;

  /**
   * Amount to charge the customer.
   */
  amount: number;

  /**
   * currency to charge in
   */
  currency: string;

  /**
   * This is a sha256 hash of your FlutterwaveCheckout values, it is used for passing secured values to the payment gateway.
   */
  integrity_hash?: string;

  /**
   * This specifies the payment options to be displayed e.g - card, mobilemoney, ussd and so on.
   */
  payment_options: PaymentOptionsEnum;

  /**
   * This is the payment plan ID used for Recurring billing
   */
  payment_plan?: string;

  /**
   * URL to redirect to when a transaction is completed.
   * This is useful for 3DSecure payments so we can redirect your customer back to a custom page you want to show them.
   */
  redirect_url?: string;

  /**
   * This is an object that can contains your customer details: e.g - 'customer':
   *  ```json
   * {
   *  'email': 'example@example.com',
   *  'phonenumber': '08012345678',
   *  'name': 'Takeshi Kovacs'
   * }
   * ```
   */
  customer: RaveCustomer;

  /**
   * This is an array of objects containing the subaccount IDs to split the payment into. Check our Split Payment page for more info
   */
  subaccounts?: RaveSubAcccount[];

  /**
   * This is an object that helps you include additional payment information to your request
   * E.g:
   * ```json
   *  {
   *   'consumer_id': 23,
   *   'consumer_mac': '92a3-912ba-1192a'
   * }
   * ```
   */
  meta?: { [key: string]: any };

  /**
   * This is an object that contains title, logo, and description you want to display on the modal e.g
   * ```json
   * {
   *   'title': 'Pied Piper Payments',
   *   'description': 'Middleout isn't free. Pay the price',
   *   'logo': 'https://assets.piedpiper.com/logo.png'
   * }
   * ```
   */
  customizations: {
    title: string;
    description?: string;
    logo?: string
  };
}

export type PaymentOptionsEnum =
  'account' |
  'card' |
  'banktransfer' |
  'mpesa' |
  'mobilemoneyrwanda' |
  'mobilemoneyzambia' |
  'qr' |
  'mobilemoneyuganda' |
  'ussd' |
  'credit' |
  'barter' |
  'mobilemoneyghana' |
  'payattitude' |
  'mobilemoneyfranco' |
  'paga' |
  '1voucher' |
  'mobilemoneytanzania';

export interface RaveCustomer {
  email: string;
  phonenumber: string;
  name?: string;
}

export interface RaveSubAcccount {
  id: string;
  transaction_split_ratio: number;
}
