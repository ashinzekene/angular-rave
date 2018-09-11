/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
var RaveOptions = /** @class */ (function () {
    function RaveOptions() {
    }
    return RaveOptions;
}());
export { RaveOptions };
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
var PrivateRaveOptions = /** @class */ (function (_super) {
    tslib_1.__extends(PrivateRaveOptions, _super);
    function PrivateRaveOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PrivateRaveOptions;
}(RaveOptions));
export { PrivateRaveOptions };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF2ZS1vcHRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1yYXZlLyIsInNvdXJjZXMiOlsibGliL3JhdmUtb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQUE7OztzQkFBQTtJQStFQyxDQUFBO0FBL0VELHVCQStFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELElBQUE7SUFBd0MsOENBQVc7Ozs7NkJBakZuRDtFQWlGd0MsV0FBVyxFQVdsRCxDQUFBO0FBWEQsOEJBV0MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUmF2ZU9wdGlvbnMge1xuICAvKipcbiAgICogWW91ciBtZXJjaGFudCBwdWJsaWMga2V5IHByb3ZpZGVkIHdoZW4geW91IGNyZWF0ZSBhIGJ1dHRvblxuICAgKi9cbiAgUEJGUHViS2V5OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBFbWFpbCBvZiB0aGUgY3VzdG9tZXJcbiAgICovXG4gIGN1c3RvbWVyX2VtYWlsPzogc3RyaW5nO1xuICAvKipcbiAgICogRmlyc3RuYW1lIG9mIHRoZSBjdXN0b21lclxuICAgKi9cbiAgY3VzdG9tZXJfZmlyc3RuYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICogZmlyc3RuYW1lIG9mIHRoZSBjdXN0b21lclxuICAgKi9cbiAgY3VzdG9tZXJfbGFzdG5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUZXh0IHRvIGJlIGRpc3BsYXllZCBhcyBhIHNob3J0IG1vZGFsIGRlc2NyaXB0aW9uXG4gICAqL1xuICBjdXN0b21fZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBMaW5rIHRvIHlvdXIgY3VzdG9tIGltYWdlXG4gICAqL1xuICBjdXN0b21fbG9nbz86IHN0cmluZztcbiAgLyoqXG4gICAqIFRleHQgdG8gYmUgZGlzcGxheWVkIGFzIHRoZSB0aXRsZSBvZiB0aGUgcGF5bWVudCBtb2RhbFxuICAgKi9cbiAgY3VzdG9tX3RpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICogQW1vdW50IHRvIGNoYXJnZVxuICAgKi9cbiAgYW1vdW50OiBudW1iZXI7XG4gIC8qKlxuICAgKiBwaG9uZSBudW1iZXIgb2YgdGhlIGN1c3RvbWVyXG4gICAqL1xuICBjdXN0b21lcl9waG9uZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFVSTCB0byByZWRpcmVjdCB0byB3aGVuIHRyYW5zYWN0aW9uIGlzIGNvbXBsZXRlZC5cbiAgICovXG4gIHJlZGlyZWN0X3VybD86IHN0cmluZztcbiAgLyoqXG4gICAqIHJvdXRlIGNvdW50cnkuIERlZmF1bHQgTkdcbiAgICovXG4gIGNvdW50cnk/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBjdXJyZW5jeSB0byBjaGFyZ2UgdGhlIGNhcmQgaW4uIERlZmF1bHQgXCJOR05cIlxuICAgKi9cbiAgY3VycmVuY3k/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGlzIGFsbG93cyB5b3Ugc2VsZWN0IHRoZSBwYXltZW50IG9wdGlvbiB5b3Ugd2FudCBmb3IgeW91ciB1c2VycywgcG9zc2libGUgdmFsdWVzIGFyZSBjYXJkLCBhY2NvdW50IG9yIGJvdGhcbiAgICovXG4gIHBheW1lbnRfbWV0aG9kPzogc3RyaW5nO1xuICAvKipcbiAgICogVGV4dCB0byBiZSBkaXNwbGF5ZWQgb24gdGhlIFJhdmUgQ2hlY2tvdXQgQnV0dG9uXG4gICAqL1xuICBwYXlfYnV0dG9uX3RleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBVbmlxdWUgdHJhbnNhY3Rpb24gcmVmZXJlbmNlIHByb3ZpZGVkIGJ5IHRoZSBtZXJjaGFudFxuICAgKi9cbiAgdHhyZWY6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoaXMgaXMgYSBzaGEyNTYgaGFzaCBvZiB5b3VyIGdldHBhaWRTZXR1cCB2YWx1ZXMsIGl0IGlzIHVzZWQgZm9yIHBhc3Npbmcgc2VjdXJlZCB2YWx1ZXMgdG8gdGhlIHBheW1lbnQgZ2F0ZXdheVxuICAgKi9cbiAgaW50ZWdyaXR5X2hhc2g/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgdG8gYmUgcGFzc2VkIGZvciB0aGlzIGlzIDEuIFRoaXMgaXMgdXNlZnVsIHdoZW4gY3VzdG9tZXIgaXMgdXNpbmcgYW4gb3BlcmEgYnJvd3NlciwgaXRcbiAgICogd291bGQgbG9hZCB0aGUgcGF5bWVudCBtb2RhbCBvbiBhIG5ldyBwYWdlLlxuICAgKi9cbiAgaG9zdGVkX3BheW1lbnQ/OiAxO1xuICAvKipcbiAgICogQW55IG90aGVyIGN1c3RvbSBkYXRhIHlvdSB3aXNoIHRvIHBhc3MuXG4gICAqL1xuICBtZXRhPzogYW55O1xuICAvKipcbiAgICogU3ViYWNjb3VudHMgdG8gc3BsaXQgcGF5bWVudCB3aXRoXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLmZsdXR0ZXJ3YXZlLmNvbS92Mi4wL2RvY3Mvc3BsaXQtcGF5bWVudFxuICAgKi9cbiAgc3ViYWNjb3VudD86IHsgaWQ6IHN0cmluZywgdHJhbnNhY3Rpb25fc3BsaXRfcmF0aW86IHN0cmluZyB9W107XG59XG5cbmV4cG9ydCBjbGFzcyBQcml2YXRlUmF2ZU9wdGlvbnMgZXh0ZW5kcyBSYXZlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBzdWNjZXNzZnVsIGNhcmQgY2hhcmdlLiBVc2Vy4oCZcyBjYW4gYWx3YXlzIGJlIHJlZGlyZWN0ZWQgdG8gYSBzdWNjZXNzZnVsIG9yXG4gICAqIGZhaWxlZCBwYWdlIHN1cHBsaWVkIGJ5IHRoZSBtZXJjaGFudCBoZXJlIGJhc2VkIG9uIHJlc3BvbnNlXG4gICAqIEBwYXJhbSByZXNwb25zZT86IFRoZSBzZXJ2ZXIgcmVzcG9uc2VcbiAgICovXG4gIGNhbGxiYWNrOiAocmVzcG9uc2U/OiBhbnkpID0+IHZvaWQ7XG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBwYXkgbW9kYWwgaXMgY2xvc2VkLlxuICAgKi9cbiAgb25jbG9zZTogKCkgPT4gdm9pZDtcbn1cbiJdfQ==