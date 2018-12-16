export class RaveOptions {
  /**
   * Your merchant public key provided when you create a button
   */
  PBFPubKey: string;
  /**
   * Email of the customer
   */
  customer_email?: string;
  /**
   * Firstname of the customer
   */
  customer_firstname?: string;
  /**
   * firstname of the customer
   */
  customer_lastname?: string;
  /**
   * Text to be displayed as a short modal description
   */
  custom_description?: string;
  /**
   * Link to your custom image
   */
  custom_logo?: string;
  /**
   * Text to be displayed as the title of the payment modal
   */
  custom_title?: string;
  /**
   * Amount to charge
   */
  amount: number;
  /**
   * phone number of the customer
   */
  customer_phone?: string;
  /**
   * URL to redirect to when transaction is completed.
   */
  redirect_url?: string;
  /**
   * route country. Default NG
   */
  country?: string;
  /**
   * currency to charge the card in. Default "NGN"
   */
  currency?: string;
  /**
   * This allows you select the payment option you want for your users, possible values are card, account or both
   */
  payment_method?: string;
  /**
   * Text to be displayed on the Rave Checkout Button
   */
  pay_button_text?: string;
  /**
   * Unique transaction reference provided by the merchant
   */
  txref: string;
  /**
   * This is a sha256 hash of your getpaidSetup values, it is used for passing secured values to the payment gateway
   */
  integrity_hash?: string;
  /**
   * The value to be passed for this is 1. This is useful when customer is using an opera browser, it
   * would load the payment modal on a new page.
   */
  hosted_payment?: 1;
  /**
   * Any other custom data you wish to pass.
   */
  meta?: any;
  /**
   * Subaccounts to split payment with
   * https://developer.flutterwave.com/v2.0/docs/split-payment
   */
  subaccount?: { id: string, transaction_split_ratio: string }[];
}

export class PrivateRaveOptions extends RaveOptions {
  /**
   * A function to be called on successful card charge. User’s can always be redirected to a successful or
   * failed page supplied by the merchant here based on response
   * @param response?: The server response
   */
  callback: (response?: any) => void;
  /**
   * A function to be called when the pay modal is closed.
   */
  onclose: () => void;
  /**
   * A function to be called when payment is about to begin
   */
  init: () => void;
}
