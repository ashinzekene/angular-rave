/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Input, Output, HostListener, EventEmitter } from "@angular/core";
/**
 * @record
 */
function MyWindow() { }
function MyWindow_tsickle_Closure_declarations() {
    /** @type {?} */
    MyWindow.prototype.getpaidSetup;
}
export class AngularRaveDirective {
    constructor() {
        this.raveOptions = {};
        this.onclose = new EventEmitter();
        this.callback = new EventEmitter();
        this._raveOptions = {};
    }
    /**
     * @return {?}
     */
    buttonClick() {
        this.pay();
    }
    /**
     * @return {?}
     */
    pay() {
        if (typeof window.getpaidSetup !== "function") {
            return console.error("ANGULAR-RAVE: Please verify that you imported rave's script into your index.html");
        }
        // If the raveoptions Input is present then use
        if (this.raveOptions && Object.keys(this.raveOptions).length > 3) {
            this.validateOptions() && window.getpaidSetup(this.raveOptions);
        }
        else {
            if (this.validateInput()) {
                this.insertRaveOptions();
                window.getpaidSetup(this._raveOptions);
            }
        }
    }
    /**
     * @return {?}
     */
    insertRaveOptions() {
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
        this.customer_phone ? this._raveOptions.customer_phone = this.customer_phone : null;
        this.txref ? this._raveOptions.txref = this.txref : null;
        this.onclose ? this._raveOptions.onclose = () => {
            this.onclose.emit();
        } : null;
        this.callback ? this._raveOptions.callback = res => {
            this.callback.emit(res);
        } : null;
    }
    /**
     * @return {?}
     */
    validateOptions() {
        if (!this.raveOptions.PBFPubKey)
            return console.error("ANGULAR-RAVE: Merchant public key is required");
        if (!(this.raveOptions.customer_email || this.raveOptions.customer_phone))
            return console.error("ANGULAR-RAVE: Customer email or phone number is required");
        if (!this.raveOptions.txref)
            return console.error("ANGULAR-RAVE: A unique transaction reference is required");
        if (!this.raveOptions.amount)
            return console.error("ANGULAR-RAVE: Amount to charge is required");
        if (!this.callback.observers.length)
            return console.error("ANGULAR-RAVE: You should attach to callback to verify your transaction");
        if (typeof this.onclose === "function")
            this.raveOptions.onclose = () => this.onclose.emit();
        this.raveOptions.callback = res => this.callback.emit(res);
        return true;
    }
    /**
     * @return {?}
     */
    validateInput() {
        if (!this.PBFPubKey)
            return console.error("ANGULAR-RAVE: Merchant public key is required");
        if (!(this.customer_email || this.customer_phone))
            return console.error("ANGULAR-RAVE: Customer email or phone number is required");
        if (!this.txref)
            return console.error("ANGULAR-RAVE: A unique transaction reference is required");
        if (!this.amount)
            return console.error("ANGULAR-RAVE: Amount to charge is required");
        if (!this.callback)
            return console.error("ANGULAR-RAVE: You should attach to callback to verify your transaction");
        return true;
    }
}
AngularRaveDirective.decorators = [
    { type: Directive, args: [{
                selector: '[angular-rave]'
            },] },
];
/** @nocollapse */
AngularRaveDirective.ctorParameters = () => [];
AngularRaveDirective.propDecorators = {
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
    "buttonClick": [{ type: HostListener, args: ['click',] },],
};
function AngularRaveDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AngularRaveDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AngularRaveDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    AngularRaveDirective.propDecorators;
    /** @type {?} */
    AngularRaveDirective.prototype.PBFPubKey;
    /** @type {?} */
    AngularRaveDirective.prototype.integrity_hash;
    /** @type {?} */
    AngularRaveDirective.prototype.txref;
    /** @type {?} */
    AngularRaveDirective.prototype.payment_method;
    /** @type {?} */
    AngularRaveDirective.prototype.amount;
    /** @type {?} */
    AngularRaveDirective.prototype.currency;
    /** @type {?} */
    AngularRaveDirective.prototype.country;
    /** @type {?} */
    AngularRaveDirective.prototype.customer_email;
    /** @type {?} */
    AngularRaveDirective.prototype.customer_phone;
    /** @type {?} */
    AngularRaveDirective.prototype.customer_firstname;
    /** @type {?} */
    AngularRaveDirective.prototype.customer_lastname;
    /** @type {?} */
    AngularRaveDirective.prototype.pay_button_text;
    /** @type {?} */
    AngularRaveDirective.prototype.custom_title;
    /** @type {?} */
    AngularRaveDirective.prototype.custom_description;
    /** @type {?} */
    AngularRaveDirective.prototype.redirect_url;
    /** @type {?} */
    AngularRaveDirective.prototype.custom_logo;
    /** @type {?} */
    AngularRaveDirective.prototype.meta;
    /** @type {?} */
    AngularRaveDirective.prototype.raveOptions;
    /** @type {?} */
    AngularRaveDirective.prototype.onclose;
    /** @type {?} */
    AngularRaveDirective.prototype.callback;
    /** @type {?} */
    AngularRaveDirective.prototype._raveOptions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1yYXZlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcmF2ZS8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLXJhdmUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0FBYXJGLE1BQU07SUF1Qko7MkJBTDhDLEVBQUU7dUJBQ1IsSUFBSSxZQUFZLEVBQVE7d0JBQ3hCLElBQUksWUFBWSxFQUFPOzRCQUNqQixFQUFFO0tBRS9COzs7O0lBR2pCLFdBQVc7UUFDVCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUE7Ozs7O0lBR1osR0FBRztRQUNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLFlBQVksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLGtGQUFrRixDQUFDLENBQUE7U0FDekc7O1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7U0FDaEU7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO2dCQUN4QixNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTthQUN2QztTQUNGO0tBQ0Y7Ozs7SUFFRCxpQkFB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Q0wsS0FBSzsrQkFDTCxLQUFLO21DQUNMLEtBQUs7a0NBQ0wsS0FBSztnQ0FDTCxLQUFLOzZCQUNMLEtBQUs7bUNBQ0wsS0FBSzs2QkFDTCxLQUFLOzRCQUNMLEtBQUs7cUJBQ0wsS0FBSzs0QkFDTCxLQUFLO3dCQUNMLE1BQU07eUJBQ04sTUFBTTs0QkFLTixZQUFZLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgSG9zdExpc3RlbmVyLCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBfUmF2ZU9wdGlvbnMgfSBmcm9tIFwiLi9yYXZlLW9wdGlvbnNcIjtcblxuaW50ZXJmYWNlIE15V2luZG93IGV4dGVuZHMgV2luZG93IHtcbiAgZ2V0cGFpZFNldHVwOiAocmF2ZU9wdGlvbnM6IFBhcnRpYWw8X1JhdmVPcHRpb25zPikgPT4gdm9pZFxufVxuXG5kZWNsYXJlIHZhciB3aW5kb3c6IE15V2luZG93XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thbmd1bGFyLXJhdmVdJ1xufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyUmF2ZURpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIFBCRlB1YktleTogc3RyaW5nO1xuICBASW5wdXQoKSBpbnRlZ3JpdHlfaGFzaDogc3RyaW5nO1xuICBASW5wdXQoKSB0eHJlZjogc3RyaW5nO1xuICBASW5wdXQoKSBwYXltZW50X21ldGhvZDogc3RyaW5nO1xuICBASW5wdXQoKSBhbW91bnQ6IG51bWJlcjtcbiAgQElucHV0KCkgY3VycmVuY3k6IHN0cmluZztcbiAgQElucHV0KCkgY291bnRyeTogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21lcl9lbWFpbDogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21lcl9waG9uZTogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21lcl9maXJzdG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tZXJfbGFzdG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgcGF5X2J1dHRvbl90ZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbV90aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21fZGVzY3JpcHRpb246IHN0cmluZztcbiAgQElucHV0KCkgcmVkaXJlY3RfdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbV9sb2dvOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1ldGE6IGFueTtcbiAgQElucHV0KCkgcmF2ZU9wdGlvbnM6IFBhcnRpYWw8X1JhdmVPcHRpb25zPiA9IHt9XG4gIEBPdXRwdXQoKSBvbmNsb3NlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBjYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgcHJpdmF0ZSBfcmF2ZU9wdGlvbnM6IFBhcnRpYWw8X1JhdmVPcHRpb25zPiA9IHt9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIGJ1dHRvbkNsaWNrKCkge1xuICAgIHRoaXMucGF5KClcbiAgfVxuXG4gIHBheSgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5nZXRwYWlkU2V0dXAgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IFBsZWFzZSB2ZXJpZnkgdGhhdCB5b3UgaW1wb3J0ZWQgcmF2ZSdzIHNjcmlwdCBpbnRvIHlvdXIgaW5kZXguaHRtbFwiKVxuICAgIH1cbiAgICAvLyBJZiB0aGUgcmF2ZW9wdGlvbnMgSW5wdXQgaXMgcHJlc2VudCB0aGVuIHVzZVxuICAgIGlmICh0aGlzLnJhdmVPcHRpb25zICYmIE9iamVjdC5rZXlzKHRoaXMucmF2ZU9wdGlvbnMpLmxlbmd0aCA+IDMpIHtcbiAgICAgIHRoaXMudmFsaWRhdGVPcHRpb25zKCkgJiYgd2luZG93LmdldHBhaWRTZXR1cCh0aGlzLnJhdmVPcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy52YWxpZGF0ZUlucHV0KCkpIHtcbiAgICAgICAgdGhpcy5pbnNlcnRSYXZlT3B0aW9ucygpXG4gICAgICAgIHdpbmRvdy5nZXRwYWlkU2V0dXAodGhpcy5fcmF2ZU9wdGlvbnMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5zZXJ0UmF2ZU9wdGlvbnMoKSB7XG4gICAgdGhpcy5hbW91bnQgPyB0aGlzLl9yYXZlT3B0aW9ucy5hbW91bnQgPSB0aGlzLmFtb3VudCA6IG51bGxcbiAgICB0aGlzLlBCRlB1YktleSA/IHRoaXMuX3JhdmVPcHRpb25zLlBCRlB1YktleSA9IHRoaXMuUEJGUHViS2V5IDogbnVsbFxuICAgIHRoaXMucGF5bWVudF9tZXRob2QgPyB0aGlzLl9yYXZlT3B0aW9ucy5wYXltZW50X21ldGhvZCA9IHRoaXMucGF5bWVudF9tZXRob2QgOiBudWxsXG4gICAgdGhpcy5yZWRpcmVjdF91cmwgPyB0aGlzLl9yYXZlT3B0aW9ucy5yZWRpcmVjdF91cmwgPSB0aGlzLnJlZGlyZWN0X3VybCA6IG51bGxcbiAgICB0aGlzLmludGVncml0eV9oYXNoID8gdGhpcy5fcmF2ZU9wdGlvbnMuaW50ZWdyaXR5X2hhc2ggPSB0aGlzLmludGVncml0eV9oYXNoIDogbnVsbFxuICAgIHRoaXMucGF5X2J1dHRvbl90ZXh0ID8gdGhpcy5fcmF2ZU9wdGlvbnMucGF5X2J1dHRvbl90ZXh0ID0gdGhpcy5wYXlfYnV0dG9uX3RleHQgOiBudWxsXG4gICAgdGhpcy5jb3VudHJ5ID8gdGhpcy5fcmF2ZU9wdGlvbnMuY291bnRyeSA9IHRoaXMuY291bnRyeSA6IG51bGxcbiAgICB0aGlzLmN1cnJlbmN5ID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VycmVuY3kgPSB0aGlzLmN1cnJlbmN5IDogbnVsbFxuICAgIHRoaXMuY3VzdG9tX2Rlc2NyaXB0aW9uID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tX2Rlc2NyaXB0aW9uID0gdGhpcy5jdXN0b21fZGVzY3JpcHRpb24gOiBudWxsXG4gICAgdGhpcy5jdXN0b21lcl9lbWFpbCA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX2VtYWlsID0gdGhpcy5jdXN0b21lcl9lbWFpbCA6IG51bGxcbiAgICB0aGlzLmN1c3RvbV9sb2dvID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tX2xvZ28gPSB0aGlzLmN1c3RvbV9sb2dvIDogbnVsbFxuICAgIHRoaXMuY3VzdG9tX3RpdGxlID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tX3RpdGxlID0gdGhpcy5jdXN0b21fdGl0bGUgOiBudWxsXG4gICAgdGhpcy5jdXN0b21lcl9maXJzdG5hbWUgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9maXJzdG5hbWUgPSB0aGlzLmN1c3RvbWVyX2ZpcnN0bmFtZSA6IG51bGxcbiAgICB0aGlzLmN1c3RvbWVyX2xhc3RuYW1lID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tZXJfbGFzdG5hbWUgPSB0aGlzLmN1c3RvbWVyX2xhc3RuYW1lIDogbnVsbFxuICAgIHRoaXMuY3VzdG9tZXJfcGhvbmUgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9waG9uZSA9IHRoaXMuY3VzdG9tZXJfcGhvbmUgOiBudWxsXG4gICAgdGhpcy50eHJlZiA/IHRoaXMuX3JhdmVPcHRpb25zLnR4cmVmID0gdGhpcy50eHJlZiA6IG51bGxcbiAgICB0aGlzLm9uY2xvc2UgPyB0aGlzLl9yYXZlT3B0aW9ucy5vbmNsb3NlID0gKCkgPT4ge1xuICAgICAgdGhpcy5vbmNsb3NlLmVtaXQoKVxuICAgIH0gOiBudWxsXG4gICAgdGhpcy5jYWxsYmFjayA/IHRoaXMuX3JhdmVPcHRpb25zLmNhbGxiYWNrID0gcmVzID0+IHtcbiAgICAgIHRoaXMuY2FsbGJhY2suZW1pdChyZXMpIFxuICAgIH0gOiBudWxsXG4gIH1cblxuICB2YWxpZGF0ZU9wdGlvbnMoKSB7XG4gICAgaWYgKCF0aGlzLnJhdmVPcHRpb25zLlBCRlB1YktleSkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IE1lcmNoYW50IHB1YmxpYyBrZXkgaXMgcmVxdWlyZWRcIik7XG4gICAgaWYgKCEodGhpcy5yYXZlT3B0aW9ucy5jdXN0b21lcl9lbWFpbCB8fCB0aGlzLnJhdmVPcHRpb25zLmN1c3RvbWVyX3Bob25lKSkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IEN1c3RvbWVyIGVtYWlsIG9yIHBob25lIG51bWJlciBpcyByZXF1aXJlZFwiKTtcbiAgICBpZiAoIXRoaXMucmF2ZU9wdGlvbnMudHhyZWYpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBBIHVuaXF1ZSB0cmFuc2FjdGlvbiByZWZlcmVuY2UgaXMgcmVxdWlyZWRcIilcbiAgICBpZiAoIXRoaXMucmF2ZU9wdGlvbnMuYW1vdW50KSByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogQW1vdW50IHRvIGNoYXJnZSBpcyByZXF1aXJlZFwiKVxuICAgIGlmICghdGhpcy5jYWxsYmFjay5vYnNlcnZlcnMubGVuZ3RoKSByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogWW91IHNob3VsZCBhdHRhY2ggdG8gY2FsbGJhY2sgdG8gdmVyaWZ5IHlvdXIgdHJhbnNhY3Rpb25cIilcbiAgICBpZiAodHlwZW9mIHRoaXMub25jbG9zZSA9PT0gXCJmdW5jdGlvblwiKSB0aGlzLnJhdmVPcHRpb25zLm9uY2xvc2UgPSAoKSA9PiB0aGlzLm9uY2xvc2UuZW1pdCgpXG4gICAgdGhpcy5yYXZlT3B0aW9ucy5jYWxsYmFjayA9IHJlcyA9PiB0aGlzLmNhbGxiYWNrLmVtaXQocmVzKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICB2YWxpZGF0ZUlucHV0KCkge1xuICAgIGlmICghdGhpcy5QQkZQdWJLZXkpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBNZXJjaGFudCBwdWJsaWMga2V5IGlzIHJlcXVpcmVkXCIpO1xuICAgIGlmICghKHRoaXMuY3VzdG9tZXJfZW1haWwgfHwgdGhpcy5jdXN0b21lcl9waG9uZSkpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBDdXN0b21lciBlbWFpbCBvciBwaG9uZSBudW1iZXIgaXMgcmVxdWlyZWRcIik7XG4gICAgaWYgKCF0aGlzLnR4cmVmKSByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogQSB1bmlxdWUgdHJhbnNhY3Rpb24gcmVmZXJlbmNlIGlzIHJlcXVpcmVkXCIpXG4gICAgaWYgKCF0aGlzLmFtb3VudCkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IEFtb3VudCB0byBjaGFyZ2UgaXMgcmVxdWlyZWRcIilcbiAgICBpZiAoIXRoaXMuY2FsbGJhY2spIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBZb3Ugc2hvdWxkIGF0dGFjaCB0byBjYWxsYmFjayB0byB2ZXJpZnkgeW91ciB0cmFuc2FjdGlvblwiKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxufSJdfQ==