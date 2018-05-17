/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
/**
 * @record
 */
function myWindow() { }
function myWindow_tsickle_Closure_declarations() {
    /** @type {?} */
    myWindow.prototype.getpaidSetup;
}
var AngularRaveComponent = /** @class */ (function () {
    function AngularRaveComponent() {
        this.onclose = new EventEmitter();
        this.callback = new EventEmitter();
    }
    /**
     * @return {?}
     */
    AngularRaveComponent.prototype.pay = /**
     * @return {?}
     */
    function () {
        if (typeof window.getpaidSetup !== "function") {
            return console.error("Please verify that you imported rave's script into your index.html");
        }
        // If the raveoptions Input is present then use
        if (this.raveOptions && Object.keys(this.raveOptions).length > 3) {
            if (!this.validateOptions()) {
                return;
            }
            window.getpaidSetup(this.raveOptions);
        }
        else {
            if (!this.validateInput()) {
                return;
            }
            this.insertRaveOptions();
            window.getpaidSetup(this._raveOptions);
        }
    };
    /**
     * @return {?}
     */
    AngularRaveComponent.prototype.insertRaveOptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.amount ? this._raveOptions.amount = this.amount : null;
        this.PBFPubKey ? this._raveOptions.PBFPubKey = this.PBFPubKey : null;
        this.payment_method ? this._raveOptions.payment_method = this.payment_method : null;
        this.redirect_url ? this._raveOptions.redirect_url = this.redirect_url : null;
        this.integrity_hash ? this._raveOptions.integrity_hash = this.integrity_hash : null;
        this.pay_button_text ? this._raveOptions.pay_button_text = this.pay_button_text : null;
        this.country ? this._raveOptions.country = this.country : null;
        this.currency ? this._raveOptions.currency = this.currency : null;
        this.custom_description ? this._raveOptions.custom_description = this.custom_description : null;
        this.customer_email ? this._raveOptions.customer_email = this.customer_email : null;
        this.custom_logo ? this._raveOptions.custom_logo = this.custom_logo : null;
        this.custom_title ? this._raveOptions.custom_title = this.custom_title : null;
        this.customer_firstname ? this._raveOptions.customer_firstname = this.customer_firstname : null;
        this.customer_lastname ? this._raveOptions.customer_lastname = this.customer_lastname : null;
        this.txref ? this._raveOptions.txref = this.txref : null;
        this.customer_phone ? this._raveOptions.customer_phone = this.customer_phone : null;
        this.onclose ? this._raveOptions.onclose = function () { return _this.onclose.emit(); } : null;
        this.callback ? this._raveOptions.callback = function (res) { return _this.onclose.emit(res); } : null;
    };
    /**
     * @return {?}
     */
    AngularRaveComponent.prototype.validateOptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.raveOptions.PBFPubKey)
            return console.error("Merchant public key is required");
        if (!(this.raveOptions.customer_email || this.raveOptions.customer_phone))
            return console.error("Customer email or phone number is required");
        if (!this.raveOptions.txref)
            return console.error("A unique transaction reference is required");
        if (!this.raveOptions.amount)
            return console.error("Amount to charge is required");
        // Remove callback and onClose from options
        if (typeof this.raveOptions.callback === "function") {
            delete this.raveOptions.callback;
        }
        if (typeof this.raveOptions.onclose === "function") {
            delete this.raveOptions.onclose;
        }
        this.raveOptions.onclose = function () { return _this.onclose.emit(); };
        this.raveOptions.callback = function (res) { return _this.onclose.emit(res); };
        if (!this.callback)
            return console.error("You should attach to callback to verify your transaction");
        return true;
    };
    /**
     * @return {?}
     */
    AngularRaveComponent.prototype.validateInput = /**
     * @return {?}
     */
    function () {
        if (!this.PBFPubKey)
            return console.error("Merchant public key is required");
        if (!(this.customer_email || this.customer_phone))
            return console.error("Customer email or phone number is required");
        if (!this.txref)
            return console.error("A unique transaction reference is required");
        if (!this.amount)
            return console.error("Amount to charge is required");
        if (!this.callback)
            return console.error("You should attach to callback to verify your transaction");
        return true;
    };
    /**
     * @return {?}
     */
    AngularRaveComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.pay();
    };
    AngularRaveComponent.decorators = [
        { type: Component, args: [{
                    selector: 'angular-rave',
                    template: "<div></div>"
                },] },
    ];
    /** @nocollapse */
    AngularRaveComponent.ctorParameters = function () { return []; };
    AngularRaveComponent.propDecorators = {
        "PBFPubKey": [{ type: Input },],
        "integrity_hash": [{ type: Input },],
        "txref": [{ type: Input },],
        "payment_method": [{ type: Input },],
        "amount": [{ type: Input },],
        "currency": [{ type: Input },],
        "country": [{ type: Input },],
        "customer_email": [{ type: Input },],
        "customer_phone": [{ type: Input },],
        "customer_firstname": [{ type: Input },],
        "customer_lastname": [{ type: Input },],
        "pay_button_text": [{ type: Input },],
        "custom_title": [{ type: Input },],
        "custom_description": [{ type: Input },],
        "redirect_url": [{ type: Input },],
        "custom_logo": [{ type: Input },],
        "meta": [{ type: Input },],
        "raveOptions": [{ type: Input },],
        "onclose": [{ type: Output },],
        "callback": [{ type: Output },],
    };
    return AngularRaveComponent;
}());
export { AngularRaveComponent };
function AngularRaveComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AngularRaveComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AngularRaveComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    AngularRaveComponent.propDecorators;
    /** @type {?} */
    AngularRaveComponent.prototype.PBFPubKey;
    /** @type {?} */
    AngularRaveComponent.prototype.integrity_hash;
    /** @type {?} */
    AngularRaveComponent.prototype.txref;
    /** @type {?} */
    AngularRaveComponent.prototype.payment_method;
    /** @type {?} */
    AngularRaveComponent.prototype.amount;
    /** @type {?} */
    AngularRaveComponent.prototype.currency;
    /** @type {?} */
    AngularRaveComponent.prototype.country;
    /** @type {?} */
    AngularRaveComponent.prototype.customer_email;
    /** @type {?} */
    AngularRaveComponent.prototype.customer_phone;
    /** @type {?} */
    AngularRaveComponent.prototype.customer_firstname;
    /** @type {?} */
    AngularRaveComponent.prototype.customer_lastname;
    /** @type {?} */
    AngularRaveComponent.prototype.pay_button_text;
    /** @type {?} */
    AngularRaveComponent.prototype.custom_title;
    /** @type {?} */
    AngularRaveComponent.prototype.custom_description;
    /** @type {?} */
    AngularRaveComponent.prototype.redirect_url;
    /** @type {?} */
    AngularRaveComponent.prototype.custom_logo;
    /** @type {?} */
    AngularRaveComponent.prototype.meta;
    /** @type {?} */
    AngularRaveComponent.prototype.raveOptions;
    /** @type {?} */
    AngularRaveComponent.prototype.onclose;
    /** @type {?} */
    AngularRaveComponent.prototype.callback;
    /** @type {?} */
    AngularRaveComponent.prototype._raveOptions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1yYXZlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcmF2ZS8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLXJhdmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7O0lBcUM3RTt1QkFKd0MsSUFBSSxZQUFZLEVBQVE7d0JBQ3JCLElBQUksWUFBWSxFQUFVO0tBR3BEOzs7O0lBR2pCLGtDQUFHOzs7SUFBSDtRQUNFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLFlBQVksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLG9FQUFvRSxDQUFDLENBQUE7U0FDM0Y7O1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLE1BQU0sQ0FBQTthQUNQO1lBQ0QsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7U0FDdEM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMUIsTUFBTSxDQUFBO2FBQ1A7WUFDRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtZQUN4QixNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtTQUN2QztLQUNGOzs7O0lBRUQsZ0RBQWlC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QUFJLENBQUMsUUFBUSxDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsMERBQTBELENBQUMsQ0FBQTtRQUNwRyxNQUFNLENBQUMsSUFBSSxDQUFBO0tBQ1o7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUE7S0FDWDs7Z0JBcEdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLGFBQWE7aUJBQ3hCOzs7Ozs4QkFHRSxLQUFLO21DQUNMLEtBQUs7MEJBQ0wsS0FBSzttQ0FDTCxLQUFLOzJCQUNMLEtBQUs7NkJBQ0wsS0FBSzs0QkFDTCxLQUFLO21DQUNMLEtBQUs7bUNBQ0wsS0FBSzt1Q0FDTCxLQUFLO3NDQUNMLEtBQUs7b0NBQ0wsS0FBSztpQ0FDTCxLQUFLO3VDQUNMLEtBQUs7aUNBQ0wsS0FBSztnQ0FDTCxLQUFLO3lCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs0QkFDTCxNQUFNOzZCQUNOLE1BQU07OytCQWxDVDs7U0FjYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBfUmF2ZU9wdGlvbnMgfSBmcm9tIFwiLi9yYXZlLW9wdGlvbnNcIjtcblxuaW50ZXJmYWNlIG15V2luZG93IGV4dGVuZHMgV2luZG93IHtcbiAgZ2V0cGFpZFNldHVwOiAocmF2ZU9wdGlvbnM6IFBhcnRpYWw8X1JhdmVPcHRpb25zPikgPT4gdm9pZFxufVxuXG5kZWNsYXJlIHZhciB3aW5kb3c6IG15V2luZG93XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FuZ3VsYXItcmF2ZScsXG4gIHRlbXBsYXRlOiBgPGRpdj48L2Rpdj5gXG59KVxuXG5leHBvcnQgY2xhc3MgQW5ndWxhclJhdmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBQQkZQdWJLZXk6IHN0cmluZztcbiAgQElucHV0KCkgaW50ZWdyaXR5X2hhc2g6IHN0cmluZztcbiAgQElucHV0KCkgdHhyZWY6IHN0cmluZztcbiAgQElucHV0KCkgcGF5bWVudF9tZXRob2Q6IHN0cmluZztcbiAgQElucHV0KCkgYW1vdW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIGN1cnJlbmN5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvdW50cnk6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tZXJfZW1haWw6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tZXJfcGhvbmU6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tZXJfZmlyc3RuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbWVyX2xhc3RuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBheV9idXR0b25fdGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21fdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tX2Rlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlZGlyZWN0X3VybDogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21fbG9nbzogc3RyaW5nO1xuICBASW5wdXQoKSBtZXRhOiBhbnk7XG4gIEBJbnB1dCgpIHJhdmVPcHRpb25zOlBhcnRpYWw8X1JhdmVPcHRpb25zPlxuICBAT3V0cHV0KCkgb25jbG9zZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgY2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxPYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3Q+KCk7XG4gIHByaXZhdGUgX3JhdmVPcHRpb25zOiBQYXJ0aWFsPF9SYXZlT3B0aW9ucz5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG5cbiAgcGF5KCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93LmdldHBhaWRTZXR1cCAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcihcIlBsZWFzZSB2ZXJpZnkgdGhhdCB5b3UgaW1wb3J0ZWQgcmF2ZSdzIHNjcmlwdCBpbnRvIHlvdXIgaW5kZXguaHRtbFwiKVxuICAgIH1cbiAgICAvLyBJZiB0aGUgcmF2ZW9wdGlvbnMgSW5wdXQgaXMgcHJlc2VudCB0aGVuIHVzZVxuICAgIGlmICh0aGlzLnJhdmVPcHRpb25zICYmIE9iamVjdC5rZXlzKHRoaXMucmF2ZU9wdGlvbnMpLmxlbmd0aCA+IDMpIHtcbiAgICAgIGlmICghdGhpcy52YWxpZGF0ZU9wdGlvbnMoKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHdpbmRvdy5nZXRwYWlkU2V0dXAodGhpcy5yYXZlT3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlSW5wdXQoKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHRoaXMuaW5zZXJ0UmF2ZU9wdGlvbnMoKVxuICAgICAgd2luZG93LmdldHBhaWRTZXR1cCh0aGlzLl9yYXZlT3B0aW9ucylcbiAgICB9XG4gIH1cblxuICBpbnNlcnRSYXZlT3B0aW9ucygpIHtcbiAgICB0aGlzLmFtb3VudCA/IHRoaXMuX3JhdmVPcHRpb25zLmFtb3VudCA9IHRoaXMuYW1vdW50IDogbnVsbFxuICAgIHRoaXMuUEJGUHViS2V5ID8gdGhpcy5fcmF2ZU9wdGlvbnMuUEJGUHViS2V5ID0gdGhpcy5QQkZQdWJLZXkgOiBudWxsXG4gICAgdGhpcy5wYXltZW50X21ldGhvZCA/IHRoaXMuX3JhdmVPcHRpb25zLnBheW1lbnRfbWV0aG9kID0gdGhpcy5wYXltZW50X21ldGhvZCA6IG51bGxcbiAgICB0aGlzLnJlZGlyZWN0X3VybCA/IHRoaXMuX3JhdmVPcHRpb25zLnJlZGlyZWN0X3VybCA9IHRoaXMucmVkaXJlY3RfdXJsIDogbnVsbFxuICAgIHRoaXMuaW50ZWdyaXR5X2hhc2ggPyB0aGlzLl9yYXZlT3B0aW9ucy5pbnRlZ3JpdHlfaGFzaCA9IHRoaXMuaW50ZWdyaXR5X2hhc2ggOiBudWxsXG4gICAgdGhpcy5wYXlfYnV0dG9uX3RleHQgPyB0aGlzLl9yYXZlT3B0aW9ucy5wYXlfYnV0dG9uX3RleHQgPSB0aGlzLnBheV9idXR0b25fdGV4dCA6IG51bGxcbiAgICB0aGlzLmNvdW50cnkgPyB0aGlzLl9yYXZlT3B0aW9ucy5jb3VudHJ5ID0gdGhpcy5jb3VudHJ5IDogbnVsbFxuICAgIHRoaXMuY3VycmVuY3kgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXJyZW5jeSA9IHRoaXMuY3VycmVuY3kgOiBudWxsXG4gICAgdGhpcy5jdXN0b21fZGVzY3JpcHRpb24gPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21fZGVzY3JpcHRpb24gPSB0aGlzLmN1c3RvbV9kZXNjcmlwdGlvbiA6IG51bGxcbiAgICB0aGlzLmN1c3RvbWVyX2VtYWlsID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tZXJfZW1haWwgPSB0aGlzLmN1c3RvbWVyX2VtYWlsIDogbnVsbFxuICAgIHRoaXMuY3VzdG9tX2xvZ28gPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21fbG9nbyA9IHRoaXMuY3VzdG9tX2xvZ28gOiBudWxsXG4gICAgdGhpcy5jdXN0b21fdGl0bGUgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21fdGl0bGUgPSB0aGlzLmN1c3RvbV90aXRsZSA6IG51bGxcbiAgICB0aGlzLmN1c3RvbWVyX2ZpcnN0bmFtZSA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX2ZpcnN0bmFtZSA9IHRoaXMuY3VzdG9tZXJfZmlyc3RuYW1lIDogbnVsbFxuICAgIHRoaXMuY3VzdG9tZXJfbGFzdG5hbWUgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9sYXN0bmFtZSA9IHRoaXMuY3VzdG9tZXJfbGFzdG5hbWUgOiBudWxsXG4gICAgdGhpcy50eHJlZiA/IHRoaXMuX3JhdmVPcHRpb25zLnR4cmVmID0gdGhpcy50eHJlZiA6IG51bGwgICAgXG4gICAgdGhpcy5jdXN0b21lcl9waG9uZSA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX3Bob25lID0gdGhpcy5jdXN0b21lcl9waG9uZSA6IG51bGxcbiAgICB0aGlzLm9uY2xvc2UgPyB0aGlzLl9yYXZlT3B0aW9ucy5vbmNsb3NlID0gKCkgPT4gdGhpcy5vbmNsb3NlLmVtaXQoKSA6IG51bGxcbiAgICB0aGlzLmNhbGxiYWNrID8gdGhpcy5fcmF2ZU9wdGlvbnMuY2FsbGJhY2sgPSAocmVzKSA9PiB0aGlzLm9uY2xvc2UuZW1pdChyZXMpIDogbnVsbFxuICB9XG5cbiAgdmFsaWRhdGVPcHRpb25zKCkge1xuICAgIGlmICghdGhpcy5yYXZlT3B0aW9ucy5QQkZQdWJLZXkpIHJldHVybiBjb25zb2xlLmVycm9yKFwiTWVyY2hhbnQgcHVibGljIGtleSBpcyByZXF1aXJlZFwiKTtcbiAgICBpZiAoISh0aGlzLnJhdmVPcHRpb25zLmN1c3RvbWVyX2VtYWlsIHx8IHRoaXMucmF2ZU9wdGlvbnMuY3VzdG9tZXJfcGhvbmUpKSByZXR1cm4gY29uc29sZS5lcnJvcihcIkN1c3RvbWVyIGVtYWlsIG9yIHBob25lIG51bWJlciBpcyByZXF1aXJlZFwiKTtcbiAgICBpZiAoIXRoaXMucmF2ZU9wdGlvbnMudHhyZWYpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQSB1bmlxdWUgdHJhbnNhY3Rpb24gcmVmZXJlbmNlIGlzIHJlcXVpcmVkXCIpXG4gICAgaWYgKCF0aGlzLnJhdmVPcHRpb25zLmFtb3VudCkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBbW91bnQgdG8gY2hhcmdlIGlzIHJlcXVpcmVkXCIpXG4gICAgLy8gUmVtb3ZlIGNhbGxiYWNrIGFuZCBvbkNsb3NlIGZyb20gb3B0aW9uc1xuICAgIGlmICh0eXBlb2YgdGhpcy5yYXZlT3B0aW9ucy5jYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBkZWxldGUgdGhpcy5yYXZlT3B0aW9ucy5jYWxsYmFja1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRoaXMucmF2ZU9wdGlvbnMub25jbG9zZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBkZWxldGUgdGhpcy5yYXZlT3B0aW9ucy5vbmNsb3NlXG4gICAgfVxuICAgIHRoaXMucmF2ZU9wdGlvbnMub25jbG9zZSA9ICgpID0+IHRoaXMub25jbG9zZS5lbWl0KClcbiAgICB0aGlzLnJhdmVPcHRpb25zLmNhbGxiYWNrID0gKHJlcykgPT4gdGhpcy5vbmNsb3NlLmVtaXQocmVzKVxuICAgIGlmICghdGhpcy5jYWxsYmFjaykgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJZb3Ugc2hvdWxkIGF0dGFjaCB0byBjYWxsYmFjayB0byB2ZXJpZnkgeW91ciB0cmFuc2FjdGlvblwiKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICB2YWxpZGF0ZUlucHV0KCkge1xuICAgIGlmICghdGhpcy5QQkZQdWJLZXkpIHJldHVybiBjb25zb2xlLmVycm9yKFwiTWVyY2hhbnQgcHVibGljIGtleSBpcyByZXF1aXJlZFwiKTtcbiAgICBpZiAoISh0aGlzLmN1c3RvbWVyX2VtYWlsIHx8IHRoaXMuY3VzdG9tZXJfcGhvbmUpKSByZXR1cm4gY29uc29sZS5lcnJvcihcIkN1c3RvbWVyIGVtYWlsIG9yIHBob25lIG51bWJlciBpcyByZXF1aXJlZFwiKTtcbiAgICBpZiAoIXRoaXMudHhyZWYpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQSB1bmlxdWUgdHJhbnNhY3Rpb24gcmVmZXJlbmNlIGlzIHJlcXVpcmVkXCIpXG4gICAgaWYgKCF0aGlzLmFtb3VudCkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBbW91bnQgdG8gY2hhcmdlIGlzIHJlcXVpcmVkXCIpXG4gICAgaWYgKCF0aGlzLmNhbGxiYWNrKSByZXR1cm4gY29uc29sZS5lcnJvcihcIllvdSBzaG91bGQgYXR0YWNoIHRvIGNhbGxiYWNrIHRvIHZlcmlmeSB5b3VyIHRyYW5zYWN0aW9uXCIpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucGF5KClcbiAgfVxufSJdfQ==