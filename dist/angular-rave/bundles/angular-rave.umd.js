(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('tslib')) :
    typeof define === 'function' && define.amd ? define('angular-rave', ['exports', '@angular/core', 'tslib'], factory) :
    (factory((global['angular-rave'] = {}),global.ng.core,global.tslib));
}(this, (function (exports,core,tslib_1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AngularRaveComponent = (function () {
        function AngularRaveComponent() {
            this.onclose = new core.EventEmitter();
            this.callback = new core.EventEmitter();
            this._raveOptions = {};
        }
        /**
         * @return {?}
         */
        AngularRaveComponent.prototype.pay = /**
         * @return {?}
         */
            function () {
                if (typeof window.getpaidSetup !== 'function') {
                    return console.error('ANGULAR-RAVE: Please verify that you imported rave\'s script into your index.html');
                }
                // If the raveoptions Input is present then use it
                if (this.raveOptions && Object.keys(this.raveOptions).length > 3) {
                    if (this.validateOptions()) {
                        window.getpaidSetup(this.raveOptions);
                    }
                }
                else {
                    if (this.validateInput()) {
                        this.insertRaveOptions();
                        window.getpaidSetup(this._raveOptions);
                    }
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
                if (this.amount) {
                    this._raveOptions.amount = this.amount;
                }
                if (this.PBFPubKey) {
                    this._raveOptions.PBFPubKey = this.PBFPubKey;
                }
                if (this.payment_method) {
                    this._raveOptions.payment_method = this.payment_method;
                }
                if (this.redirect_url) {
                    this._raveOptions.redirect_url = this.redirect_url;
                }
                if (this.integrity_hash) {
                    this._raveOptions.integrity_hash = this.integrity_hash;
                }
                if (this.pay_button_text) {
                    this._raveOptions.pay_button_text = this.pay_button_text;
                }
                if (this.country) {
                    this._raveOptions.country = this.country;
                }
                if (this.currency) {
                    this._raveOptions.currency = this.currency;
                }
                if (this.custom_description) {
                    this._raveOptions.custom_description = this.custom_description;
                }
                if (this.customer_email) {
                    this._raveOptions.customer_email = this.customer_email;
                }
                if (this.custom_logo) {
                    this._raveOptions.custom_logo = this.custom_logo;
                }
                if (this.custom_title) {
                    this._raveOptions.custom_title = this.custom_title;
                }
                if (this.customer_firstname) {
                    this._raveOptions.customer_firstname = this.customer_firstname;
                }
                if (this.subaccount) {
                    this._raveOptions.subaccount = this.subaccount;
                }
                if (this.customer_lastname) {
                    this._raveOptions.customer_lastname = this.customer_lastname;
                }
                if (this.txref) {
                    this._raveOptions.txref = this.txref;
                }
                if (this.customer_phone) {
                    this._raveOptions.customer_phone = this.customer_phone;
                }
                if (this.onclose) {
                    this._raveOptions.onclose = function () { return _this.onclose.emit(); };
                }
                if (this.callback) {
                    this._raveOptions.callback = function (res) { return _this.onclose.emit(res); };
                }
            };
        /**
         * @return {?}
         */
        AngularRaveComponent.prototype.validateOptions = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.raveOptions.PBFPubKey) {
                    return console.error('ANGULAR-RAVE: Merchant public key is required');
                }
                if (!(this.raveOptions.customer_email || this.raveOptions.customer_phone)) {
                    return console.error('ANGULAR-RAVE: Customer email or phone number is required');
                }
                if (!this.raveOptions.txref) {
                    return console.error('ANGULAR-RAVE: A unique transaction reference is required');
                }
                if (!this.raveOptions.amount) {
                    return console.error('ANGULAR-RAVE: Amount to charge is required');
                }
                if (!this.callback.observers.length) {
                    return console.error('ANGULAR-RAVE: You should attach to callback to verify your transaction');
                }
                if (this.onclose.observers.length) {
                    this.raveOptions.onclose = function () { return _this.onclose.emit(); };
                }
                this.raveOptions.callback = function (res) { return _this.callback.emit(res); };
                return true;
            };
        /**
         * @return {?}
         */
        AngularRaveComponent.prototype.validateInput = /**
         * @return {?}
         */
            function () {
                if (!this.PBFPubKey) {
                    return console.error('ANGULAR-RAVE: Merchant public key is required');
                }
                if (!(this.customer_email || this.customer_phone)) {
                    return console.error('ANGULAR-RAVE: Customer email or phone number is required');
                }
                if (!this.txref) {
                    return console.error('ANGULAR-RAVE: A unique transaction reference is required');
                }
                if (!this.amount) {
                    return console.error('ANGULAR-RAVE: Amount to charge is required');
                }
                if (!this.callback) {
                    return console.error('ANGULAR-RAVE: You should attach to callback to verify your transaction');
                }
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
            { type: core.Component, args: [{
                        selector: 'angular-rave',
                        template: "<ng-content></ng-content>"
                    },] },
        ];
        /** @nocollapse */
        AngularRaveComponent.ctorParameters = function () { return []; };
        AngularRaveComponent.propDecorators = {
            "PBFPubKey": [{ type: core.Input },],
            "integrity_hash": [{ type: core.Input },],
            "txref": [{ type: core.Input },],
            "payment_method": [{ type: core.Input },],
            "amount": [{ type: core.Input },],
            "currency": [{ type: core.Input },],
            "country": [{ type: core.Input },],
            "customer_email": [{ type: core.Input },],
            "customer_phone": [{ type: core.Input },],
            "customer_firstname": [{ type: core.Input },],
            "customer_lastname": [{ type: core.Input },],
            "subaccount": [{ type: core.Input },],
            "pay_button_text": [{ type: core.Input },],
            "custom_title": [{ type: core.Input },],
            "custom_description": [{ type: core.Input },],
            "redirect_url": [{ type: core.Input },],
            "custom_logo": [{ type: core.Input },],
            "meta": [{ type: core.Input },],
            "raveOptions": [{ type: core.Input },],
            "onclose": [{ type: core.Output },],
            "callback": [{ type: core.Output },],
        };
        return AngularRaveComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AngularRaveDirective = (function () {
        function AngularRaveDirective() {
            this.raveOptions = {};
            this.onclose = new core.EventEmitter();
            this.callback = new core.EventEmitter();
            this._raveOptions = {};
        }
        /**
         * @return {?}
         */
        AngularRaveDirective.prototype.buttonClick = /**
         * @return {?}
         */
            function () {
                this.pay();
            };
        /**
         * @return {?}
         */
        AngularRaveDirective.prototype.pay = /**
         * @return {?}
         */
            function () {
                if (typeof window.getpaidSetup !== 'function') {
                    return console.error('ANGULAR-RAVE: Please verify that you imported rave\'s script into your index.html');
                }
                // If the raveoptions Input is present then use
                if (this.raveOptions && Object.keys(this.raveOptions).length > 3) {
                    if (this.validateOptions()) {
                        window.getpaidSetup(this.raveOptions);
                    }
                }
                else {
                    if (this.validateInput()) {
                        this.insertRaveOptions();
                        window.getpaidSetup(this._raveOptions);
                    }
                }
            };
        /**
         * @return {?}
         */
        AngularRaveDirective.prototype.insertRaveOptions = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.amount) {
                    this._raveOptions.amount = this.amount;
                }
                if (this.PBFPubKey) {
                    this._raveOptions.PBFPubKey = this.PBFPubKey;
                }
                if (this.payment_method) {
                    this._raveOptions.payment_method = this.payment_method;
                }
                if (this.redirect_url) {
                    this._raveOptions.redirect_url = this.redirect_url;
                }
                if (this.integrity_hash) {
                    this._raveOptions.integrity_hash = this.integrity_hash;
                }
                if (this.pay_button_text) {
                    this._raveOptions.pay_button_text = this.pay_button_text;
                }
                if (this.country) {
                    this._raveOptions.country = this.country;
                }
                if (this.currency) {
                    this._raveOptions.currency = this.currency;
                }
                if (this.custom_description) {
                    this._raveOptions.custom_description = this.custom_description;
                }
                if (this.customer_email) {
                    this._raveOptions.customer_email = this.customer_email;
                }
                if (this.custom_logo) {
                    this._raveOptions.custom_logo = this.custom_logo;
                }
                if (this.custom_title) {
                    this._raveOptions.custom_title = this.custom_title;
                }
                if (this.customer_firstname) {
                    this._raveOptions.customer_firstname = this.customer_firstname;
                }
                if (this.customer_lastname) {
                    this._raveOptions.customer_lastname = this.customer_lastname;
                }
                if (this.subaccount) {
                    this._raveOptions.subaccount = this.subaccount;
                }
                if (this.customer_phone) {
                    this._raveOptions.customer_phone = this.customer_phone;
                }
                if (this.txref) {
                    this._raveOptions.txref = this.txref;
                }
                if (this.onclose) {
                    this._raveOptions.onclose = function () { return _this.onclose.emit(); };
                }
                if (this.callback) {
                    this._raveOptions.callback = function (res) { return _this.callback.emit(res); };
                }
            };
        /**
         * @return {?}
         */
        AngularRaveDirective.prototype.validateOptions = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.raveOptions.PBFPubKey) {
                    return console.error('ANGULAR-RAVE: Merchant public key is required');
                }
                if (!(this.raveOptions.customer_email || this.raveOptions.customer_phone)) {
                    return console.error('ANGULAR-RAVE: Customer email or phone number is required');
                }
                if (!this.raveOptions.txref) {
                    return console.error('ANGULAR-RAVE: A unique transaction reference is required');
                }
                if (!this.raveOptions.amount) {
                    return console.error('ANGULAR-RAVE: Amount to charge is required');
                }
                if (!this.callback.observers.length) {
                    return console.error('ANGULAR-RAVE: You should attach to callback to verify your transaction');
                }
                if (this.onclose.observers.length) {
                    this.raveOptions.onclose = function () { return _this.onclose.emit(); };
                }
                this.raveOptions.callback = function (res) { return _this.callback.emit(res); };
                return true;
            };
        /**
         * @return {?}
         */
        AngularRaveDirective.prototype.validateInput = /**
         * @return {?}
         */
            function () {
                if (!this.PBFPubKey) {
                    return console.error('ANGULAR-RAVE: Merchant public key is required');
                }
                if (!(this.customer_email || this.customer_phone)) {
                    return console.error('ANGULAR-RAVE: Customer email or phone number is required');
                }
                if (!this.txref) {
                    return console.error('ANGULAR-RAVE: A unique transaction reference is required');
                }
                if (!this.amount) {
                    return console.error('ANGULAR-RAVE: Amount to charge is required');
                }
                if (!this.callback) {
                    return console.error('ANGULAR-RAVE: You should attach to callback to verify your transaction');
                }
                return true;
            };
        AngularRaveDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[angular-rave]'
                    },] },
        ];
        /** @nocollapse */
        AngularRaveDirective.ctorParameters = function () { return []; };
        AngularRaveDirective.propDecorators = {
            "PBFPubKey": [{ type: core.Input },],
            "integrity_hash": [{ type: core.Input },],
            "txref": [{ type: core.Input },],
            "payment_method": [{ type: core.Input },],
            "amount": [{ type: core.Input },],
            "currency": [{ type: core.Input },],
            "country": [{ type: core.Input },],
            "customer_email": [{ type: core.Input },],
            "customer_phone": [{ type: core.Input },],
            "customer_firstname": [{ type: core.Input },],
            "customer_lastname": [{ type: core.Input },],
            "pay_button_text": [{ type: core.Input },],
            "custom_title": [{ type: core.Input },],
            "subaccount": [{ type: core.Input },],
            "custom_description": [{ type: core.Input },],
            "redirect_url": [{ type: core.Input },],
            "custom_logo": [{ type: core.Input },],
            "meta": [{ type: core.Input },],
            "raveOptions": [{ type: core.Input },],
            "onclose": [{ type: core.Output },],
            "callback": [{ type: core.Output },],
            "buttonClick": [{ type: core.HostListener, args: ['click',] },],
        };
        return AngularRaveDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var RaveOptions = (function () {
        function RaveOptions() {
        }
        return RaveOptions;
    }());
    var PrivateRaveOptions = (function (_super) {
        tslib_1.__extends(PrivateRaveOptions, _super);
        function PrivateRaveOptions() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PrivateRaveOptions;
    }(RaveOptions));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AngularRaveModule = (function () {
        function AngularRaveModule() {
        }
        AngularRaveModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        exports: [AngularRaveComponent, AngularRaveDirective],
                        declarations: [AngularRaveComponent, AngularRaveDirective],
                        providers: [],
                    },] },
        ];
        return AngularRaveModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.RaveOptions = RaveOptions;
    exports.AngularRaveComponent = AngularRaveComponent;
    exports.AngularRaveDirective = AngularRaveDirective;
    exports.AngularRaveModule = AngularRaveModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1yYXZlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYW5ndWxhci1yYXZlL2xpYi9hbmd1bGFyLXJhdmUuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLXJhdmUvbGliL2FuZ3VsYXItcmF2ZS5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItcmF2ZS9saWIvcmF2ZS1vcHRpb25zLnRzIiwibmc6Ly9hbmd1bGFyLXJhdmUvbGliL2FuZ3VsYXItcmF2ZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpdmF0ZVJhdmVPcHRpb25zIH0gZnJvbSAnLi9yYXZlLW9wdGlvbnMnO1xuXG5pbnRlcmZhY2UgTXlXaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xuICBnZXRwYWlkU2V0dXA6IChyYXZlT3B0aW9uczogUGFydGlhbDxQcml2YXRlUmF2ZU9wdGlvbnM+KSA9PiB2b2lkO1xufVxuXG5kZWNsYXJlIHZhciB3aW5kb3c6IE15V2luZG93O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhbmd1bGFyLXJhdmUnLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXG59KVxuXG5leHBvcnQgY2xhc3MgQW5ndWxhclJhdmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBQQkZQdWJLZXk6IHN0cmluZztcbiAgQElucHV0KCkgaW50ZWdyaXR5X2hhc2g6IHN0cmluZztcbiAgQElucHV0KCkgdHhyZWY6IHN0cmluZztcbiAgQElucHV0KCkgcGF5bWVudF9tZXRob2Q6IHN0cmluZztcbiAgQElucHV0KCkgYW1vdW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIGN1cnJlbmN5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvdW50cnk6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tZXJfZW1haWw6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tZXJfcGhvbmU6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tZXJfZmlyc3RuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbWVyX2xhc3RuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN1YmFjY291bnQ6IHsgaWQ6IHN0cmluZywgdHJhbnNhY3Rpb25fc3BsaXRfcmF0aW86IHN0cmluZyB9W107XG4gIEBJbnB1dCgpIHBheV9idXR0b25fdGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21fdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tX2Rlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlZGlyZWN0X3VybDogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21fbG9nbzogc3RyaW5nO1xuICBASW5wdXQoKSBtZXRhOiBhbnk7XG4gIEBJbnB1dCgpIHJhdmVPcHRpb25zOiBQYXJ0aWFsPFByaXZhdGVSYXZlT3B0aW9ucz47XG4gIEBPdXRwdXQoKSBvbmNsb3NlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBjYWxsYmFjazogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdD4oKTtcbiAgcHJpdmF0ZSBfcmF2ZU9wdGlvbnM6IFBhcnRpYWw8UHJpdmF0ZVJhdmVPcHRpb25zPiA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcGF5KCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93LmdldHBhaWRTZXR1cCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogUGxlYXNlIHZlcmlmeSB0aGF0IHlvdSBpbXBvcnRlZCByYXZlXFwncyBzY3JpcHQgaW50byB5b3VyIGluZGV4Lmh0bWwnKTtcbiAgICB9XG4gICAgLy8gSWYgdGhlIHJhdmVvcHRpb25zIElucHV0IGlzIHByZXNlbnQgdGhlbiB1c2UgaXRcbiAgICBpZiAodGhpcy5yYXZlT3B0aW9ucyAmJiBPYmplY3Qua2V5cyh0aGlzLnJhdmVPcHRpb25zKS5sZW5ndGggPiAzKSB7XG4gICAgICBpZiAodGhpcy52YWxpZGF0ZU9wdGlvbnMoKSkge1xuICAgICAgICB3aW5kb3cuZ2V0cGFpZFNldHVwKHRoaXMucmF2ZU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy52YWxpZGF0ZUlucHV0KCkpIHtcbiAgICAgICAgdGhpcy5pbnNlcnRSYXZlT3B0aW9ucygpO1xuICAgICAgICB3aW5kb3cuZ2V0cGFpZFNldHVwKHRoaXMuX3JhdmVPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnNlcnRSYXZlT3B0aW9ucygpIHtcbiAgICBpZiAodGhpcy5hbW91bnQpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuYW1vdW50ID0gdGhpcy5hbW91bnQ7IH1cbiAgICBpZiAodGhpcy5QQkZQdWJLZXkpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuUEJGUHViS2V5ID0gdGhpcy5QQkZQdWJLZXk7IH1cbiAgICBpZiAodGhpcy5wYXltZW50X21ldGhvZCkgeyB0aGlzLl9yYXZlT3B0aW9ucy5wYXltZW50X21ldGhvZCA9IHRoaXMucGF5bWVudF9tZXRob2Q7IH1cbiAgICBpZiAodGhpcy5yZWRpcmVjdF91cmwpIHsgdGhpcy5fcmF2ZU9wdGlvbnMucmVkaXJlY3RfdXJsID0gdGhpcy5yZWRpcmVjdF91cmw7IH1cbiAgICBpZiAodGhpcy5pbnRlZ3JpdHlfaGFzaCkgeyB0aGlzLl9yYXZlT3B0aW9ucy5pbnRlZ3JpdHlfaGFzaCA9IHRoaXMuaW50ZWdyaXR5X2hhc2g7IH1cbiAgICBpZiAodGhpcy5wYXlfYnV0dG9uX3RleHQpIHsgdGhpcy5fcmF2ZU9wdGlvbnMucGF5X2J1dHRvbl90ZXh0ID0gdGhpcy5wYXlfYnV0dG9uX3RleHQ7IH1cbiAgICBpZiAodGhpcy5jb3VudHJ5KSB7IHRoaXMuX3JhdmVPcHRpb25zLmNvdW50cnkgPSB0aGlzLmNvdW50cnk7IH1cbiAgICBpZiAodGhpcy5jdXJyZW5jeSkgeyB0aGlzLl9yYXZlT3B0aW9ucy5jdXJyZW5jeSA9IHRoaXMuY3VycmVuY3k7IH1cbiAgICBpZiAodGhpcy5jdXN0b21fZGVzY3JpcHRpb24pIHsgdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tX2Rlc2NyaXB0aW9uID0gdGhpcy5jdXN0b21fZGVzY3JpcHRpb247IH1cbiAgICBpZiAodGhpcy5jdXN0b21lcl9lbWFpbCkgeyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9lbWFpbCA9IHRoaXMuY3VzdG9tZXJfZW1haWw7IH1cbiAgICBpZiAodGhpcy5jdXN0b21fbG9nbykgeyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21fbG9nbyA9IHRoaXMuY3VzdG9tX2xvZ287IH1cbiAgICBpZiAodGhpcy5jdXN0b21fdGl0bGUpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tX3RpdGxlID0gdGhpcy5jdXN0b21fdGl0bGU7IH1cbiAgICBpZiAodGhpcy5jdXN0b21lcl9maXJzdG5hbWUpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tZXJfZmlyc3RuYW1lID0gdGhpcy5jdXN0b21lcl9maXJzdG5hbWU7IH1cbiAgICBpZiAodGhpcy5zdWJhY2NvdW50KSB7IHRoaXMuX3JhdmVPcHRpb25zLnN1YmFjY291bnQgPSB0aGlzLnN1YmFjY291bnQ7IH1cbiAgICBpZiAodGhpcy5jdXN0b21lcl9sYXN0bmFtZSkgeyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9sYXN0bmFtZSA9IHRoaXMuY3VzdG9tZXJfbGFzdG5hbWU7IH1cbiAgICBpZiAodGhpcy50eHJlZikgeyB0aGlzLl9yYXZlT3B0aW9ucy50eHJlZiA9IHRoaXMudHhyZWY7IH1cbiAgICBpZiAodGhpcy5jdXN0b21lcl9waG9uZSkgeyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9waG9uZSA9IHRoaXMuY3VzdG9tZXJfcGhvbmU7IH1cbiAgICBpZiAodGhpcy5vbmNsb3NlKSB7IHRoaXMuX3JhdmVPcHRpb25zLm9uY2xvc2UgPSAoKSA9PiB0aGlzLm9uY2xvc2UuZW1pdCgpOyB9XG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHsgdGhpcy5fcmF2ZU9wdGlvbnMuY2FsbGJhY2sgPSAocmVzKSA9PiB0aGlzLm9uY2xvc2UuZW1pdChyZXMpOyB9XG4gIH1cblxuICB2YWxpZGF0ZU9wdGlvbnMoKSB7XG4gICAgaWYgKCF0aGlzLnJhdmVPcHRpb25zLlBCRlB1YktleSkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBNZXJjaGFudCBwdWJsaWMga2V5IGlzIHJlcXVpcmVkJyk7IH1cbiAgICBpZiAoISh0aGlzLnJhdmVPcHRpb25zLmN1c3RvbWVyX2VtYWlsIHx8IHRoaXMucmF2ZU9wdGlvbnMuY3VzdG9tZXJfcGhvbmUpKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBDdXN0b21lciBlbWFpbCBvciBwaG9uZSBudW1iZXIgaXMgcmVxdWlyZWQnKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnJhdmVPcHRpb25zLnR4cmVmKSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IEEgdW5pcXVlIHRyYW5zYWN0aW9uIHJlZmVyZW5jZSBpcyByZXF1aXJlZCcpOyB9XG4gICAgaWYgKCF0aGlzLnJhdmVPcHRpb25zLmFtb3VudCkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBBbW91bnQgdG8gY2hhcmdlIGlzIHJlcXVpcmVkJyk7IH1cbiAgICBpZiAoIXRoaXMuY2FsbGJhY2sub2JzZXJ2ZXJzLmxlbmd0aCkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBZb3Ugc2hvdWxkIGF0dGFjaCB0byBjYWxsYmFjayB0byB2ZXJpZnkgeW91ciB0cmFuc2FjdGlvbicpOyB9XG4gICAgaWYgKHRoaXMub25jbG9zZS5vYnNlcnZlcnMubGVuZ3RoKSB7IHRoaXMucmF2ZU9wdGlvbnMub25jbG9zZSA9ICgpID0+IHRoaXMub25jbG9zZS5lbWl0KCk7IH1cbiAgICB0aGlzLnJhdmVPcHRpb25zLmNhbGxiYWNrID0gcmVzID0+IHRoaXMuY2FsbGJhY2suZW1pdChyZXMpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFsaWRhdGVJbnB1dCgpIHtcbiAgICBpZiAoIXRoaXMuUEJGUHViS2V5KSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IE1lcmNoYW50IHB1YmxpYyBrZXkgaXMgcmVxdWlyZWQnKTsgfVxuICAgIGlmICghKHRoaXMuY3VzdG9tZXJfZW1haWwgfHwgdGhpcy5jdXN0b21lcl9waG9uZSkpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogQ3VzdG9tZXIgZW1haWwgb3IgcGhvbmUgbnVtYmVyIGlzIHJlcXVpcmVkJyk7IH1cbiAgICBpZiAoIXRoaXMudHhyZWYpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogQSB1bmlxdWUgdHJhbnNhY3Rpb24gcmVmZXJlbmNlIGlzIHJlcXVpcmVkJyk7IH1cbiAgICBpZiAoIXRoaXMuYW1vdW50KSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IEFtb3VudCB0byBjaGFyZ2UgaXMgcmVxdWlyZWQnKTsgfVxuICAgIGlmICghdGhpcy5jYWxsYmFjaykgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBZb3Ugc2hvdWxkIGF0dGFjaCB0byBjYWxsYmFjayB0byB2ZXJpZnkgeW91ciB0cmFuc2FjdGlvbicpOyB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBheSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFByaXZhdGVSYXZlT3B0aW9ucyB9IGZyb20gJy4vcmF2ZS1vcHRpb25zJztcblxuaW50ZXJmYWNlIE15V2luZG93IGV4dGVuZHMgV2luZG93IHtcbiAgZ2V0cGFpZFNldHVwOiAocmF2ZU9wdGlvbnM6IFBhcnRpYWw8UHJpdmF0ZVJhdmVPcHRpb25zPikgPT4gdm9pZDtcbn1cblxuZGVjbGFyZSB2YXIgd2luZG93OiBNeVdpbmRvdztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FuZ3VsYXItcmF2ZV0nXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJSYXZlRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgUEJGUHViS2V5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGludGVncml0eV9oYXNoOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHR4cmVmOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBheW1lbnRfbWV0aG9kOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFtb3VudDogbnVtYmVyO1xuICBASW5wdXQoKSBjdXJyZW5jeTogc3RyaW5nO1xuICBASW5wdXQoKSBjb3VudHJ5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbWVyX2VtYWlsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbWVyX3Bob25lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbWVyX2ZpcnN0bmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21lcl9sYXN0bmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBwYXlfYnV0dG9uX3RleHQ6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tX3RpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN1YmFjY291bnQ6IHsgaWQ6IHN0cmluZywgdHJhbnNhY3Rpb25fc3BsaXRfcmF0aW86IHN0cmluZyB9W107XG4gIEBJbnB1dCgpIGN1c3RvbV9kZXNjcmlwdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKSByZWRpcmVjdF91cmw6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tX2xvZ286IHN0cmluZztcbiAgQElucHV0KCkgbWV0YTogYW55O1xuICBASW5wdXQoKSByYXZlT3B0aW9uczogUGFydGlhbDxQcml2YXRlUmF2ZU9wdGlvbnM+ID0ge307XG4gIEBPdXRwdXQoKSBvbmNsb3NlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBjYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgcHJpdmF0ZSBfcmF2ZU9wdGlvbnM6IFBhcnRpYWw8UHJpdmF0ZVJhdmVPcHRpb25zPiA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBidXR0b25DbGljaygpIHtcbiAgICB0aGlzLnBheSgpO1xuICB9XG5cbiAgcGF5KCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93LmdldHBhaWRTZXR1cCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogUGxlYXNlIHZlcmlmeSB0aGF0IHlvdSBpbXBvcnRlZCByYXZlXFwncyBzY3JpcHQgaW50byB5b3VyIGluZGV4Lmh0bWwnKTtcbiAgICB9XG4gICAgLy8gSWYgdGhlIHJhdmVvcHRpb25zIElucHV0IGlzIHByZXNlbnQgdGhlbiB1c2VcbiAgICBpZiAodGhpcy5yYXZlT3B0aW9ucyAmJiBPYmplY3Qua2V5cyh0aGlzLnJhdmVPcHRpb25zKS5sZW5ndGggPiAzKSB7XG4gICAgICBpZiAodGhpcy52YWxpZGF0ZU9wdGlvbnMoKSkge1xuICAgICAgICB3aW5kb3cuZ2V0cGFpZFNldHVwKHRoaXMucmF2ZU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy52YWxpZGF0ZUlucHV0KCkpIHtcbiAgICAgICAgdGhpcy5pbnNlcnRSYXZlT3B0aW9ucygpO1xuICAgICAgICB3aW5kb3cuZ2V0cGFpZFNldHVwKHRoaXMuX3JhdmVPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnNlcnRSYXZlT3B0aW9ucygpIHtcbiAgICBpZiAodGhpcy5hbW91bnQpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuYW1vdW50ID0gdGhpcy5hbW91bnQ7IH1cbiAgICBpZiAodGhpcy5QQkZQdWJLZXkpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuUEJGUHViS2V5ID0gdGhpcy5QQkZQdWJLZXk7IH1cbiAgICBpZiAodGhpcy5wYXltZW50X21ldGhvZCkgeyB0aGlzLl9yYXZlT3B0aW9ucy5wYXltZW50X21ldGhvZCA9IHRoaXMucGF5bWVudF9tZXRob2Q7IH1cbiAgICBpZiAodGhpcy5yZWRpcmVjdF91cmwpIHsgdGhpcy5fcmF2ZU9wdGlvbnMucmVkaXJlY3RfdXJsID0gdGhpcy5yZWRpcmVjdF91cmw7IH1cbiAgICBpZiAodGhpcy5pbnRlZ3JpdHlfaGFzaCkgeyB0aGlzLl9yYXZlT3B0aW9ucy5pbnRlZ3JpdHlfaGFzaCA9IHRoaXMuaW50ZWdyaXR5X2hhc2g7IH1cbiAgICBpZiAodGhpcy5wYXlfYnV0dG9uX3RleHQpIHsgdGhpcy5fcmF2ZU9wdGlvbnMucGF5X2J1dHRvbl90ZXh0ID0gdGhpcy5wYXlfYnV0dG9uX3RleHQ7IH1cbiAgICBpZiAodGhpcy5jb3VudHJ5KSB7IHRoaXMuX3JhdmVPcHRpb25zLmNvdW50cnkgPSB0aGlzLmNvdW50cnk7IH1cbiAgICBpZiAodGhpcy5jdXJyZW5jeSkgeyB0aGlzLl9yYXZlT3B0aW9ucy5jdXJyZW5jeSA9IHRoaXMuY3VycmVuY3k7IH1cbiAgICBpZiAodGhpcy5jdXN0b21fZGVzY3JpcHRpb24pIHsgdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tX2Rlc2NyaXB0aW9uID0gdGhpcy5jdXN0b21fZGVzY3JpcHRpb247IH1cbiAgICBpZiAodGhpcy5jdXN0b21lcl9lbWFpbCkgeyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9lbWFpbCA9IHRoaXMuY3VzdG9tZXJfZW1haWw7IH1cbiAgICBpZiAodGhpcy5jdXN0b21fbG9nbykgeyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21fbG9nbyA9IHRoaXMuY3VzdG9tX2xvZ287IH1cbiAgICBpZiAodGhpcy5jdXN0b21fdGl0bGUpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tX3RpdGxlID0gdGhpcy5jdXN0b21fdGl0bGU7IH1cbiAgICBpZiAodGhpcy5jdXN0b21lcl9maXJzdG5hbWUpIHsgdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tZXJfZmlyc3RuYW1lID0gdGhpcy5jdXN0b21lcl9maXJzdG5hbWU7IH1cbiAgICBpZiAodGhpcy5jdXN0b21lcl9sYXN0bmFtZSkgeyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9sYXN0bmFtZSA9IHRoaXMuY3VzdG9tZXJfbGFzdG5hbWU7IH1cbiAgICBpZiAodGhpcy5zdWJhY2NvdW50KSB7IHRoaXMuX3JhdmVPcHRpb25zLnN1YmFjY291bnQgPSB0aGlzLnN1YmFjY291bnQ7IH1cbiAgICBpZiAodGhpcy5jdXN0b21lcl9waG9uZSkgeyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9waG9uZSA9IHRoaXMuY3VzdG9tZXJfcGhvbmU7IH1cbiAgICBpZiAodGhpcy50eHJlZikgeyB0aGlzLl9yYXZlT3B0aW9ucy50eHJlZiA9IHRoaXMudHhyZWY7IH1cbiAgICBpZiAodGhpcy5vbmNsb3NlKSB7IHRoaXMuX3JhdmVPcHRpb25zLm9uY2xvc2UgPSAoKSA9PiB0aGlzLm9uY2xvc2UuZW1pdCgpOyB9XG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHsgdGhpcy5fcmF2ZU9wdGlvbnMuY2FsbGJhY2sgPSByZXMgPT4gdGhpcy5jYWxsYmFjay5lbWl0KHJlcyk7IH1cbiAgfVxuXG4gIHZhbGlkYXRlT3B0aW9ucygpIHtcbiAgICBpZiAoIXRoaXMucmF2ZU9wdGlvbnMuUEJGUHViS2V5KSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IE1lcmNoYW50IHB1YmxpYyBrZXkgaXMgcmVxdWlyZWQnKTsgfVxuICAgIGlmICghKHRoaXMucmF2ZU9wdGlvbnMuY3VzdG9tZXJfZW1haWwgfHwgdGhpcy5yYXZlT3B0aW9ucy5jdXN0b21lcl9waG9uZSkpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IEN1c3RvbWVyIGVtYWlsIG9yIHBob25lIG51bWJlciBpcyByZXF1aXJlZCcpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMucmF2ZU9wdGlvbnMudHhyZWYpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogQSB1bmlxdWUgdHJhbnNhY3Rpb24gcmVmZXJlbmNlIGlzIHJlcXVpcmVkJyk7IH1cbiAgICBpZiAoIXRoaXMucmF2ZU9wdGlvbnMuYW1vdW50KSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IEFtb3VudCB0byBjaGFyZ2UgaXMgcmVxdWlyZWQnKTsgfVxuICAgIGlmICghdGhpcy5jYWxsYmFjay5vYnNlcnZlcnMubGVuZ3RoKSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IFlvdSBzaG91bGQgYXR0YWNoIHRvIGNhbGxiYWNrIHRvIHZlcmlmeSB5b3VyIHRyYW5zYWN0aW9uJyk7IH1cbiAgICBpZiAodGhpcy5vbmNsb3NlLm9ic2VydmVycy5sZW5ndGgpIHsgdGhpcy5yYXZlT3B0aW9ucy5vbmNsb3NlID0gKCkgPT4gdGhpcy5vbmNsb3NlLmVtaXQoKTsgfVxuICAgIHRoaXMucmF2ZU9wdGlvbnMuY2FsbGJhY2sgPSByZXMgPT4gdGhpcy5jYWxsYmFjay5lbWl0KHJlcyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YWxpZGF0ZUlucHV0KCkge1xuICAgIGlmICghdGhpcy5QQkZQdWJLZXkpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogTWVyY2hhbnQgcHVibGljIGtleSBpcyByZXF1aXJlZCcpOyB9XG4gICAgaWYgKCEodGhpcy5jdXN0b21lcl9lbWFpbCB8fCB0aGlzLmN1c3RvbWVyX3Bob25lKSkgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBDdXN0b21lciBlbWFpbCBvciBwaG9uZSBudW1iZXIgaXMgcmVxdWlyZWQnKTsgfVxuICAgIGlmICghdGhpcy50eHJlZikgeyByZXR1cm4gY29uc29sZS5lcnJvcignQU5HVUxBUi1SQVZFOiBBIHVuaXF1ZSB0cmFuc2FjdGlvbiByZWZlcmVuY2UgaXMgcmVxdWlyZWQnKTsgfVxuICAgIGlmICghdGhpcy5hbW91bnQpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0FOR1VMQVItUkFWRTogQW1vdW50IHRvIGNoYXJnZSBpcyByZXF1aXJlZCcpOyB9XG4gICAgaWYgKCF0aGlzLmNhbGxiYWNrKSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdBTkdVTEFSLVJBVkU6IFlvdSBzaG91bGQgYXR0YWNoIHRvIGNhbGxiYWNrIHRvIHZlcmlmeSB5b3VyIHRyYW5zYWN0aW9uJyk7IH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG59XG4iLCJleHBvcnQgY2xhc3MgUmF2ZU9wdGlvbnMge1xuICAvKipcbiAgICogWW91ciBtZXJjaGFudCBwdWJsaWMga2V5IHByb3ZpZGVkIHdoZW4geW91IGNyZWF0ZSBhIGJ1dHRvblxuICAgKi9cbiAgUEJGUHViS2V5OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBFbWFpbCBvZiB0aGUgY3VzdG9tZXJcbiAgICovXG4gIGN1c3RvbWVyX2VtYWlsPzogc3RyaW5nO1xuICAvKipcbiAgICogRmlyc3RuYW1lIG9mIHRoZSBjdXN0b21lclxuICAgKi9cbiAgY3VzdG9tZXJfZmlyc3RuYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICogZmlyc3RuYW1lIG9mIHRoZSBjdXN0b21lclxuICAgKi9cbiAgY3VzdG9tZXJfbGFzdG5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUZXh0IHRvIGJlIGRpc3BsYXllZCBhcyBhIHNob3J0IG1vZGFsIGRlc2NyaXB0aW9uXG4gICAqL1xuICBjdXN0b21fZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBMaW5rIHRvIHlvdXIgY3VzdG9tIGltYWdlXG4gICAqL1xuICBjdXN0b21fbG9nbz86IHN0cmluZztcbiAgLyoqXG4gICAqIFRleHQgdG8gYmUgZGlzcGxheWVkIGFzIHRoZSB0aXRsZSBvZiB0aGUgcGF5bWVudCBtb2RhbFxuICAgKi9cbiAgY3VzdG9tX3RpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICogQW1vdW50IHRvIGNoYXJnZVxuICAgKi9cbiAgYW1vdW50OiBudW1iZXI7XG4gIC8qKlxuICAgKiBwaG9uZSBudW1iZXIgb2YgdGhlIGN1c3RvbWVyXG4gICAqL1xuICBjdXN0b21lcl9waG9uZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFVSTCB0byByZWRpcmVjdCB0byB3aGVuIHRyYW5zYWN0aW9uIGlzIGNvbXBsZXRlZC5cbiAgICovXG4gIHJlZGlyZWN0X3VybD86IHN0cmluZztcbiAgLyoqXG4gICAqIHJvdXRlIGNvdW50cnkuIERlZmF1bHQgTkdcbiAgICovXG4gIGNvdW50cnk/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBjdXJyZW5jeSB0byBjaGFyZ2UgdGhlIGNhcmQgaW4uIERlZmF1bHQgXCJOR05cIlxuICAgKi9cbiAgY3VycmVuY3k/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGlzIGFsbG93cyB5b3Ugc2VsZWN0IHRoZSBwYXltZW50IG9wdGlvbiB5b3Ugd2FudCBmb3IgeW91ciB1c2VycywgcG9zc2libGUgdmFsdWVzIGFyZSBjYXJkLCBhY2NvdW50IG9yIGJvdGhcbiAgICovXG4gIHBheW1lbnRfbWV0aG9kPzogc3RyaW5nO1xuICAvKipcbiAgICogVGV4dCB0byBiZSBkaXNwbGF5ZWQgb24gdGhlIFJhdmUgQ2hlY2tvdXQgQnV0dG9uXG4gICAqL1xuICBwYXlfYnV0dG9uX3RleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBVbmlxdWUgdHJhbnNhY3Rpb24gcmVmZXJlbmNlIHByb3ZpZGVkIGJ5IHRoZSBtZXJjaGFudFxuICAgKi9cbiAgdHhyZWY6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoaXMgaXMgYSBzaGEyNTYgaGFzaCBvZiB5b3VyIGdldHBhaWRTZXR1cCB2YWx1ZXMsIGl0IGlzIHVzZWQgZm9yIHBhc3Npbmcgc2VjdXJlZCB2YWx1ZXMgdG8gdGhlIHBheW1lbnQgZ2F0ZXdheVxuICAgKi9cbiAgaW50ZWdyaXR5X2hhc2g/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgdG8gYmUgcGFzc2VkIGZvciB0aGlzIGlzIDEuIFRoaXMgaXMgdXNlZnVsIHdoZW4gY3VzdG9tZXIgaXMgdXNpbmcgYW4gb3BlcmEgYnJvd3NlciwgaXRcbiAgICogd291bGQgbG9hZCB0aGUgcGF5bWVudCBtb2RhbCBvbiBhIG5ldyBwYWdlLlxuICAgKi9cbiAgaG9zdGVkX3BheW1lbnQ/OiAxO1xuICAvKipcbiAgICogQW55IG90aGVyIGN1c3RvbSBkYXRhIHlvdSB3aXNoIHRvIHBhc3MuXG4gICAqL1xuICBtZXRhPzogYW55O1xuICAvKipcbiAgICogU3ViYWNjb3VudHMgdG8gc3BsaXQgcGF5bWVudCB3aXRoXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLmZsdXR0ZXJ3YXZlLmNvbS92Mi4wL2RvY3Mvc3BsaXQtcGF5bWVudFxuICAgKi9cbiAgc3ViYWNjb3VudD86IHsgaWQ6IHN0cmluZywgdHJhbnNhY3Rpb25fc3BsaXRfcmF0aW86IHN0cmluZyB9W107XG59XG5cbmV4cG9ydCBjbGFzcyBQcml2YXRlUmF2ZU9wdGlvbnMgZXh0ZW5kcyBSYXZlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBzdWNjZXNzZnVsIGNhcmQgY2hhcmdlLiBVc2Vyw6LCgMKZcyBjYW4gYWx3YXlzIGJlIHJlZGlyZWN0ZWQgdG8gYSBzdWNjZXNzZnVsIG9yXG4gICAqIGZhaWxlZCBwYWdlIHN1cHBsaWVkIGJ5IHRoZSBtZXJjaGFudCBoZXJlIGJhc2VkIG9uIHJlc3BvbnNlXG4gICAqIEBwYXJhbSByZXNwb25zZT86IFRoZSBzZXJ2ZXIgcmVzcG9uc2VcbiAgICovXG4gIGNhbGxiYWNrOiAocmVzcG9uc2U/OiBhbnkpID0+IHZvaWQ7XG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBwYXkgbW9kYWwgaXMgY2xvc2VkLlxuICAgKi9cbiAgb25jbG9zZTogKCkgPT4gdm9pZDtcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFuZ3VsYXJSYXZlQ29tcG9uZW50IH0gZnJvbSAnLi9hbmd1bGFyLXJhdmUuY29tcG9uZW50JztcbmltcG9ydCB7IEFuZ3VsYXJSYXZlRGlyZWN0aXZlIH0gZnJvbSAnLi9hbmd1bGFyLXJhdmUuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIGV4cG9ydHM6IFtBbmd1bGFyUmF2ZUNvbXBvbmVudCwgQW5ndWxhclJhdmVEaXJlY3RpdmVdLFxuICBkZWNsYXJhdGlvbnM6IFtBbmd1bGFyUmF2ZUNvbXBvbmVudCwgQW5ndWxhclJhdmVEaXJlY3RpdmVdLFxuICBwcm92aWRlcnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyUmF2ZU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJJbnB1dCIsIk91dHB1dCIsIkRpcmVjdGl2ZSIsIkhvc3RMaXN0ZW5lciIsInRzbGliXzEuX19leHRlbmRzIiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQXNDRTsyQkFKd0MsSUFBSUEsaUJBQVksRUFBUTs0QkFDckIsSUFBSUEsaUJBQVksRUFBVTtnQ0FDakIsRUFBRTtTQUVyQzs7OztRQUVqQixrQ0FBRzs7O1lBQUg7Z0JBQ0UsSUFBSSxPQUFPLE1BQU0sQ0FBQyxZQUFZLEtBQUssVUFBVSxFQUFFO29CQUM3QyxPQUFPLE9BQU8sQ0FB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