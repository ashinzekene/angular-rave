/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export class RaveOptions {
}
function RaveOptions_tsickle_Closure_declarations() {
    /**
     * Your merchant public key provided when you create a button
     * @type {?}
     */
    RaveOptions.prototype.PBFPubKey;
    /**
     * Email of the customer
     * @type {?}
     */
    RaveOptions.prototype.customer_email;
    /**
     * Firstname of the customer
     * @type {?}
     */
    RaveOptions.prototype.customer_firstname;
    /**
     * firstname of the customer
     * @type {?}
     */
    RaveOptions.prototype.customer_lastname;
    /**
     * Text to be displayed as a short modal description
     * @type {?}
     */
    RaveOptions.prototype.custom_description;
    /**
     * Link to your custom image
     * @type {?}
     */
    RaveOptions.prototype.custom_logo;
    /**
     * Text to be displayed as the title of the payment modal
     * @type {?}
     */
    RaveOptions.prototype.custom_title;
    /**
     * Amount to charge
     * @type {?}
     */
    RaveOptions.prototype.amount;
    /**
     * phone number of the customer
     * @type {?}
     */
    RaveOptions.prototype.customer_phone;
    /**
     * URL to redirect to when transaction is completed.
     * @type {?}
     */
    RaveOptions.prototype.redirect_url;
    /**
     * route country. Default NG
     * @type {?}
     */
    RaveOptions.prototype.country;
    /**
     * currency to charge the card in. Default "NGN"
     * @type {?}
     */
    RaveOptions.prototype.currency;
    /**
     * This allows you select the payment option you want for your users, possible values are card, account or both
     * @type {?}
     */
    RaveOptions.prototype.payment_method;
    /**
     * Text to be displayed on the Rave Checkout Button
     * @type {?}
     */
    RaveOptions.prototype.pay_button_text;
    /**
     * Unique transaction reference provided by the merchant
     * @type {?}
     */
    RaveOptions.prototype.txref;
    /**
     * This is a sha256 hash of your getpaidSetup values, it is used for passing secured values to the payment gateway
     * @type {?}
     */
    RaveOptions.prototype.integrity_hash;
    /**
     * The value to be passed for this is 1. This is useful when customer is using an opera browser, it
     * would load the payment modal on a new page.
     * @type {?}
     */
    RaveOptions.prototype.hosted_payment;
    /**
     * Any other custom data you wish to pass.
     * @type {?}
     */
    RaveOptions.prototype.meta;
    /**
     * Subaccounts to split payment with
     * https://developer.flutterwave.com/v2.0/docs/split-payment
     * @type {?}
     */
    RaveOptions.prototype.subaccount;
}
export class PrivateRaveOptions extends RaveOptions {
}
function PrivateRaveOptions_tsickle_Closure_declarations() {
    /**
     * A function to be called on successful card charge. User’s can always be redirected to a successful or
     * failed page supplied by the merchant here based on response
     * \@param response?: The server response
     * @type {?}
     */
    PrivateRaveOptions.prototype.callback;
    /**
     * A function to be called when the pay modal is closed.
     * @type {?}
     */
    PrivateRaveOptions.prototype.onclose;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF2ZS1vcHRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1yYXZlLyIsInNvdXJjZXMiOlsibGliL3JhdmUtb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTTtDQStFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELE1BQU0seUJBQTBCLFNBQVEsV0FBVztDQVdsRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSYXZlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBZb3VyIG1lcmNoYW50IHB1YmxpYyBrZXkgcHJvdmlkZWQgd2hlbiB5b3UgY3JlYXRlIGEgYnV0dG9uXG4gICAqL1xuICBQQkZQdWJLZXk6IHN0cmluZztcbiAgLyoqXG4gICAqIEVtYWlsIG9mIHRoZSBjdXN0b21lclxuICAgKi9cbiAgY3VzdG9tZXJfZW1haWw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBGaXJzdG5hbWUgb2YgdGhlIGN1c3RvbWVyXG4gICAqL1xuICBjdXN0b21lcl9maXJzdG5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBmaXJzdG5hbWUgb2YgdGhlIGN1c3RvbWVyXG4gICAqL1xuICBjdXN0b21lcl9sYXN0bmFtZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFRleHQgdG8gYmUgZGlzcGxheWVkIGFzIGEgc2hvcnQgbW9kYWwgZGVzY3JpcHRpb25cbiAgICovXG4gIGN1c3RvbV9kZXNjcmlwdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIExpbmsgdG8geW91ciBjdXN0b20gaW1hZ2VcbiAgICovXG4gIGN1c3RvbV9sb2dvPzogc3RyaW5nO1xuICAvKipcbiAgICogVGV4dCB0byBiZSBkaXNwbGF5ZWQgYXMgdGhlIHRpdGxlIG9mIHRoZSBwYXltZW50IG1vZGFsXG4gICAqL1xuICBjdXN0b21fdGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBbW91bnQgdG8gY2hhcmdlXG4gICAqL1xuICBhbW91bnQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIHBob25lIG51bWJlciBvZiB0aGUgY3VzdG9tZXJcbiAgICovXG4gIGN1c3RvbWVyX3Bob25lPzogc3RyaW5nO1xuICAvKipcbiAgICogVVJMIHRvIHJlZGlyZWN0IHRvIHdoZW4gdHJhbnNhY3Rpb24gaXMgY29tcGxldGVkLlxuICAgKi9cbiAgcmVkaXJlY3RfdXJsPzogc3RyaW5nO1xuICAvKipcbiAgICogcm91dGUgY291bnRyeS4gRGVmYXVsdCBOR1xuICAgKi9cbiAgY291bnRyeT86IHN0cmluZztcbiAgLyoqXG4gICAqIGN1cnJlbmN5IHRvIGNoYXJnZSB0aGUgY2FyZCBpbi4gRGVmYXVsdCBcIk5HTlwiXG4gICAqL1xuICBjdXJyZW5jeT86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoaXMgYWxsb3dzIHlvdSBzZWxlY3QgdGhlIHBheW1lbnQgb3B0aW9uIHlvdSB3YW50IGZvciB5b3VyIHVzZXJzLCBwb3NzaWJsZSB2YWx1ZXMgYXJlIGNhcmQsIGFjY291bnQgb3IgYm90aFxuICAgKi9cbiAgcGF5bWVudF9tZXRob2Q/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUZXh0IHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgUmF2ZSBDaGVja291dCBCdXR0b25cbiAgICovXG4gIHBheV9idXR0b25fdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIFVuaXF1ZSB0cmFuc2FjdGlvbiByZWZlcmVuY2UgcHJvdmlkZWQgYnkgdGhlIG1lcmNoYW50XG4gICAqL1xuICB0eHJlZjogc3RyaW5nO1xuICAvKipcbiAgICogVGhpcyBpcyBhIHNoYTI1NiBoYXNoIG9mIHlvdXIgZ2V0cGFpZFNldHVwIHZhbHVlcywgaXQgaXMgdXNlZCBmb3IgcGFzc2luZyBzZWN1cmVkIHZhbHVlcyB0byB0aGUgcGF5bWVudCBnYXRld2F5XG4gICAqL1xuICBpbnRlZ3JpdHlfaGFzaD86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSB0byBiZSBwYXNzZWQgZm9yIHRoaXMgaXMgMS4gVGhpcyBpcyB1c2VmdWwgd2hlbiBjdXN0b21lciBpcyB1c2luZyBhbiBvcGVyYSBicm93c2VyLCBpdFxuICAgKiB3b3VsZCBsb2FkIHRoZSBwYXltZW50IG1vZGFsIG9uIGEgbmV3IHBhZ2UuXG4gICAqL1xuICBob3N0ZWRfcGF5bWVudD86IDE7XG4gIC8qKlxuICAgKiBBbnkgb3RoZXIgY3VzdG9tIGRhdGEgeW91IHdpc2ggdG8gcGFzcy5cbiAgICovXG4gIG1ldGE/OiBhbnk7XG4gIC8qKlxuICAgKiBTdWJhY2NvdW50cyB0byBzcGxpdCBwYXltZW50IHdpdGhcbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIuZmx1dHRlcndhdmUuY29tL3YyLjAvZG9jcy9zcGxpdC1wYXltZW50XG4gICAqL1xuICBzdWJhY2NvdW50PzogeyBpZDogc3RyaW5nLCB0cmFuc2FjdGlvbl9zcGxpdF9yYXRpbzogc3RyaW5nIH1bXTtcbn1cblxuZXhwb3J0IGNsYXNzIFByaXZhdGVSYXZlT3B0aW9ucyBleHRlbmRzIFJhdmVPcHRpb25zIHtcbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIHN1Y2Nlc3NmdWwgY2FyZCBjaGFyZ2UuIFVzZXLigJlzIGNhbiBhbHdheXMgYmUgcmVkaXJlY3RlZCB0byBhIHN1Y2Nlc3NmdWwgb3JcbiAgICogZmFpbGVkIHBhZ2Ugc3VwcGxpZWQgYnkgdGhlIG1lcmNoYW50IGhlcmUgYmFzZWQgb24gcmVzcG9uc2VcbiAgICogQHBhcmFtIHJlc3BvbnNlPzogVGhlIHNlcnZlciByZXNwb25zZVxuICAgKi9cbiAgY2FsbGJhY2s6IChyZXNwb25zZT86IGFueSkgPT4gdm9pZDtcbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHBheSBtb2RhbCBpcyBjbG9zZWQuXG4gICAqL1xuICBvbmNsb3NlOiAoKSA9PiB2b2lkO1xufVxuIl19