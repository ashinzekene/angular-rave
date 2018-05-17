(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('angular-rave', ['exports', '@angular/core'], factory) :
    (factory((global['angular-rave'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AngularRaveComponent = (function () {
        function AngularRaveComponent() {
            this.onclose = new core.EventEmitter();
            this.callback = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        AngularRaveComponent.prototype.pay = /**
         * @return {?}
         */
            function () {
                if (typeof window.getpaidSetup !== "function") {
                    return console.error("ANGULAR-RAVE: Please verify that you imported rave's script into your index.html");
                }
                // If the raveoptions Input is present then use it
                if (this.raveOptions && Object.keys(this.raveOptions).length > 3) {
                    this.validateOptions() && window.getpaidSetup(this.raveOptions);
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
                    return console.error("ANGULAR-RAVE: Merchant public key is required");
                if (!(this.raveOptions.customer_email || this.raveOptions.customer_phone))
                    return console.error("ANGULAR-RAVE: Customer email or phone number is required");
                if (!this.raveOptions.txref)
                    return console.error("ANGULAR-RAVE: A unique transaction reference is required");
                if (!this.raveOptions.amount)
                    return console.error("ANGULAR-RAVE: Amount to charge is required");
                if (!this.callback.observers.length)
                    return console.error("ANGULAR-RAVE: You should attach to callback to verify your transaction");
                if (this.callback.observers.length)
                    this.raveOptions.onclose = function () { return _this.onclose.emit(); };
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
            };
        /**
         * @return {?}
         */
        AngularRaveDirective.prototype.insertRaveOptions = /**
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
                this.customer_phone ? this._raveOptions.customer_phone = this.customer_phone : null;
                this.txref ? this._raveOptions.txref = this.txref : null;
                this.onclose ? this._raveOptions.onclose = function () {
                    _this.onclose.emit();
                } : null;
                this.callback ? this._raveOptions.callback = function (res) {
                    _this.callback.emit(res);
                } : null;
            };
        /**
         * @return {?}
         */
        AngularRaveDirective.prototype.validateOptions = /**
         * @return {?}
         */
            function () {
                var _this = this;
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
                    this.raveOptions.onclose = function () { return _this.onclose.emit(); };
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
    var _RaveOptions = (function () {
        function _RaveOptions() {
        }
        return _RaveOptions;
    }());

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

    exports.AngularRaveComponent = AngularRaveComponent;
    exports.AngularRaveDirective = AngularRaveDirective;
    exports.RaveOptions = RaveOptions;
    exports._RaveOptions = _RaveOptions;
    exports.AngularRaveModule = AngularRaveModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1yYXZlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYW5ndWxhci1yYXZlL2xpYi9hbmd1bGFyLXJhdmUuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLXJhdmUvbGliL2FuZ3VsYXItcmF2ZS5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItcmF2ZS9saWIvcmF2ZS1vcHRpb25zLnRzIiwibmc6Ly9hbmd1bGFyLXJhdmUvbGliL2FuZ3VsYXItcmF2ZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgX1JhdmVPcHRpb25zIH0gZnJvbSBcIi4vcmF2ZS1vcHRpb25zXCI7XG5cbmludGVyZmFjZSBteVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XG4gIGdldHBhaWRTZXR1cDogKHJhdmVPcHRpb25zOiBQYXJ0aWFsPF9SYXZlT3B0aW9ucz4pID0+IHZvaWRcbn1cblxuZGVjbGFyZSB2YXIgd2luZG93OiBteVdpbmRvd1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhbmd1bGFyLXJhdmUnLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXG59KVxuXG5leHBvcnQgY2xhc3MgQW5ndWxhclJhdmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBQQkZQdWJLZXk6IHN0cmluZztcbiAgQElucHV0KCkgaW50ZWdyaXR5X2hhc2g6IHN0cmluZztcbiAgQElucHV0KCkgdHhyZWY6IHN0cmluZztcbiAgQElucHV0KCkgcGF5bWVudF9tZXRob2Q6IHN0cmluZztcbiAgQElucHV0KCkgYW1vdW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIGN1cnJlbmN5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvdW50cnk6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tZXJfZW1haWw6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tZXJfcGhvbmU6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tZXJfZmlyc3RuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbWVyX2xhc3RuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBheV9idXR0b25fdGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21fdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tX2Rlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlZGlyZWN0X3VybDogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21fbG9nbzogc3RyaW5nO1xuICBASW5wdXQoKSBtZXRhOiBhbnk7XG4gIEBJbnB1dCgpIHJhdmVPcHRpb25zOiBQYXJ0aWFsPF9SYXZlT3B0aW9ucz5cbiAgQE91dHB1dCgpIG9uY2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIGNhbGxiYWNrOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0PigpO1xuICBwcml2YXRlIF9yYXZlT3B0aW9uczogUGFydGlhbDxfUmF2ZU9wdGlvbnM+XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwYXkoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuZ2V0cGFpZFNldHVwICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBQbGVhc2UgdmVyaWZ5IHRoYXQgeW91IGltcG9ydGVkIHJhdmUncyBzY3JpcHQgaW50byB5b3VyIGluZGV4Lmh0bWxcIilcbiAgICB9XG4gICAgLy8gSWYgdGhlIHJhdmVvcHRpb25zIElucHV0IGlzIHByZXNlbnQgdGhlbiB1c2UgaXRcbiAgICBpZiAodGhpcy5yYXZlT3B0aW9ucyAmJiBPYmplY3Qua2V5cyh0aGlzLnJhdmVPcHRpb25zKS5sZW5ndGggPiAzKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlT3B0aW9ucygpICYmIHdpbmRvdy5nZXRwYWlkU2V0dXAodGhpcy5yYXZlT3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMudmFsaWRhdGVJbnB1dCgpKSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0UmF2ZU9wdGlvbnMoKVxuICAgICAgICB3aW5kb3cuZ2V0cGFpZFNldHVwKHRoaXMuX3JhdmVPcHRpb25zKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGluc2VydFJhdmVPcHRpb25zKCkge1xuICAgIHRoaXMuYW1vdW50ID8gdGhpcy5fcmF2ZU9wdGlvbnMuYW1vdW50ID0gdGhpcy5hbW91bnQgOiBudWxsXG4gICAgdGhpcy5QQkZQdWJLZXkgPyB0aGlzLl9yYXZlT3B0aW9ucy5QQkZQdWJLZXkgPSB0aGlzLlBCRlB1YktleSA6IG51bGxcbiAgICB0aGlzLnBheW1lbnRfbWV0aG9kID8gdGhpcy5fcmF2ZU9wdGlvbnMucGF5bWVudF9tZXRob2QgPSB0aGlzLnBheW1lbnRfbWV0aG9kIDogbnVsbFxuICAgIHRoaXMucmVkaXJlY3RfdXJsID8gdGhpcy5fcmF2ZU9wdGlvbnMucmVkaXJlY3RfdXJsID0gdGhpcy5yZWRpcmVjdF91cmwgOiBudWxsXG4gICAgdGhpcy5pbnRlZ3JpdHlfaGFzaCA/IHRoaXMuX3JhdmVPcHRpb25zLmludGVncml0eV9oYXNoID0gdGhpcy5pbnRlZ3JpdHlfaGFzaCA6IG51bGxcbiAgICB0aGlzLnBheV9idXR0b25fdGV4dCA/IHRoaXMuX3JhdmVPcHRpb25zLnBheV9idXR0b25fdGV4dCA9IHRoaXMucGF5X2J1dHRvbl90ZXh0IDogbnVsbFxuICAgIHRoaXMuY291bnRyeSA/IHRoaXMuX3JhdmVPcHRpb25zLmNvdW50cnkgPSB0aGlzLmNvdW50cnkgOiBudWxsXG4gICAgdGhpcy5jdXJyZW5jeSA/IHRoaXMuX3JhdmVPcHRpb25zLmN1cnJlbmN5ID0gdGhpcy5jdXJyZW5jeSA6IG51bGxcbiAgICB0aGlzLmN1c3RvbV9kZXNjcmlwdGlvbiA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbV9kZXNjcmlwdGlvbiA9IHRoaXMuY3VzdG9tX2Rlc2NyaXB0aW9uIDogbnVsbFxuICAgIHRoaXMuY3VzdG9tZXJfZW1haWwgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9lbWFpbCA9IHRoaXMuY3VzdG9tZXJfZW1haWwgOiBudWxsXG4gICAgdGhpcy5jdXN0b21fbG9nbyA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbV9sb2dvID0gdGhpcy5jdXN0b21fbG9nbyA6IG51bGxcbiAgICB0aGlzLmN1c3RvbV90aXRsZSA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbV90aXRsZSA9IHRoaXMuY3VzdG9tX3RpdGxlIDogbnVsbFxuICAgIHRoaXMuY3VzdG9tZXJfZmlyc3RuYW1lID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tZXJfZmlyc3RuYW1lID0gdGhpcy5jdXN0b21lcl9maXJzdG5hbWUgOiBudWxsXG4gICAgdGhpcy5jdXN0b21lcl9sYXN0bmFtZSA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX2xhc3RuYW1lID0gdGhpcy5jdXN0b21lcl9sYXN0bmFtZSA6IG51bGxcbiAgICB0aGlzLnR4cmVmID8gdGhpcy5fcmF2ZU9wdGlvbnMudHhyZWYgPSB0aGlzLnR4cmVmIDogbnVsbFxuICAgIHRoaXMuY3VzdG9tZXJfcGhvbmUgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9waG9uZSA9IHRoaXMuY3VzdG9tZXJfcGhvbmUgOiBudWxsXG4gICAgdGhpcy5vbmNsb3NlID8gdGhpcy5fcmF2ZU9wdGlvbnMub25jbG9zZSA9ICgpID0+IHRoaXMub25jbG9zZS5lbWl0KCkgOiBudWxsXG4gICAgdGhpcy5jYWxsYmFjayA/IHRoaXMuX3JhdmVPcHRpb25zLmNhbGxiYWNrID0gKHJlcykgPT4gdGhpcy5vbmNsb3NlLmVtaXQocmVzKSA6IG51bGxcbiAgfVxuXG4gIHZhbGlkYXRlT3B0aW9ucygpIHtcbiAgICBpZiAoIXRoaXMucmF2ZU9wdGlvbnMuUEJGUHViS2V5KSByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogTWVyY2hhbnQgcHVibGljIGtleSBpcyByZXF1aXJlZFwiKTtcbiAgICBpZiAoISh0aGlzLnJhdmVPcHRpb25zLmN1c3RvbWVyX2VtYWlsIHx8IHRoaXMucmF2ZU9wdGlvbnMuY3VzdG9tZXJfcGhvbmUpKSByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogQ3VzdG9tZXIgZW1haWwgb3IgcGhvbmUgbnVtYmVyIGlzIHJlcXVpcmVkXCIpO1xuICAgIGlmICghdGhpcy5yYXZlT3B0aW9ucy50eHJlZikgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IEEgdW5pcXVlIHRyYW5zYWN0aW9uIHJlZmVyZW5jZSBpcyByZXF1aXJlZFwiKVxuICAgIGlmICghdGhpcy5yYXZlT3B0aW9ucy5hbW91bnQpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBBbW91bnQgdG8gY2hhcmdlIGlzIHJlcXVpcmVkXCIpXG4gICAgaWYgKCF0aGlzLmNhbGxiYWNrLm9ic2VydmVycy5sZW5ndGgpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBZb3Ugc2hvdWxkIGF0dGFjaCB0byBjYWxsYmFjayB0byB2ZXJpZnkgeW91ciB0cmFuc2FjdGlvblwiKVxuICAgIGlmICh0aGlzLmNhbGxiYWNrLm9ic2VydmVycy5sZW5ndGgpIHRoaXMucmF2ZU9wdGlvbnMub25jbG9zZSA9ICgpID0+IHRoaXMub25jbG9zZS5lbWl0KClcbiAgICB0aGlzLnJhdmVPcHRpb25zLmNhbGxiYWNrID0gcmVzID0+IHRoaXMuY2FsbGJhY2suZW1pdChyZXMpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHZhbGlkYXRlSW5wdXQoKSB7XG4gICAgaWYgKCF0aGlzLlBCRlB1YktleSkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IE1lcmNoYW50IHB1YmxpYyBrZXkgaXMgcmVxdWlyZWRcIik7XG4gICAgaWYgKCEodGhpcy5jdXN0b21lcl9lbWFpbCB8fCB0aGlzLmN1c3RvbWVyX3Bob25lKSkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IEN1c3RvbWVyIGVtYWlsIG9yIHBob25lIG51bWJlciBpcyByZXF1aXJlZFwiKTtcbiAgICBpZiAoIXRoaXMudHhyZWYpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBBIHVuaXF1ZSB0cmFuc2FjdGlvbiByZWZlcmVuY2UgaXMgcmVxdWlyZWRcIilcbiAgICBpZiAoIXRoaXMuYW1vdW50KSByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogQW1vdW50IHRvIGNoYXJnZSBpcyByZXF1aXJlZFwiKVxuICAgIGlmICghdGhpcy5jYWxsYmFjaykgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IFlvdSBzaG91bGQgYXR0YWNoIHRvIGNhbGxiYWNrIHRvIHZlcmlmeSB5b3VyIHRyYW5zYWN0aW9uXCIpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucGF5KClcbiAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgSG9zdExpc3RlbmVyLCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBfUmF2ZU9wdGlvbnMgfSBmcm9tIFwiLi9yYXZlLW9wdGlvbnNcIjtcblxuaW50ZXJmYWNlIE15V2luZG93IGV4dGVuZHMgV2luZG93IHtcbiAgZ2V0cGFpZFNldHVwOiAocmF2ZU9wdGlvbnM6IFBhcnRpYWw8X1JhdmVPcHRpb25zPikgPT4gdm9pZFxufVxuXG5kZWNsYXJlIHZhciB3aW5kb3c6IE15V2luZG93XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thbmd1bGFyLXJhdmVdJ1xufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyUmF2ZURpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIFBCRlB1YktleTogc3RyaW5nO1xuICBASW5wdXQoKSBpbnRlZ3JpdHlfaGFzaDogc3RyaW5nO1xuICBASW5wdXQoKSB0eHJlZjogc3RyaW5nO1xuICBASW5wdXQoKSBwYXltZW50X21ldGhvZDogc3RyaW5nO1xuICBASW5wdXQoKSBhbW91bnQ6IG51bWJlcjtcbiAgQElucHV0KCkgY3VycmVuY3k6IHN0cmluZztcbiAgQElucHV0KCkgY291bnRyeTogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21lcl9lbWFpbDogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21lcl9waG9uZTogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21lcl9maXJzdG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tZXJfbGFzdG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgcGF5X2J1dHRvbl90ZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbV90aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21fZGVzY3JpcHRpb246IHN0cmluZztcbiAgQElucHV0KCkgcmVkaXJlY3RfdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbV9sb2dvOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1ldGE6IGFueTtcbiAgQElucHV0KCkgcmF2ZU9wdGlvbnM6IFBhcnRpYWw8X1JhdmVPcHRpb25zPiA9IHt9XG4gIEBPdXRwdXQoKSBvbmNsb3NlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBjYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgcHJpdmF0ZSBfcmF2ZU9wdGlvbnM6IFBhcnRpYWw8X1JhdmVPcHRpb25zPiA9IHt9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIGJ1dHRvbkNsaWNrKCkge1xuICAgIHRoaXMucGF5KClcbiAgfVxuXG4gIHBheSgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5nZXRwYWlkU2V0dXAgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IFBsZWFzZSB2ZXJpZnkgdGhhdCB5b3UgaW1wb3J0ZWQgcmF2ZSdzIHNjcmlwdCBpbnRvIHlvdXIgaW5kZXguaHRtbFwiKVxuICAgIH1cbiAgICAvLyBJZiB0aGUgcmF2ZW9wdGlvbnMgSW5wdXQgaXMgcHJlc2VudCB0aGVuIHVzZVxuICAgIGlmICh0aGlzLnJhdmVPcHRpb25zICYmIE9iamVjdC5rZXlzKHRoaXMucmF2ZU9wdGlvbnMpLmxlbmd0aCA+IDMpIHtcbiAgICAgIHRoaXMudmFsaWRhdGVPcHRpb25zKCkgJiYgd2luZG93LmdldHBhaWRTZXR1cCh0aGlzLnJhdmVPcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy52YWxpZGF0ZUlucHV0KCkpIHtcbiAgICAgICAgdGhpcy5pbnNlcnRSYXZlT3B0aW9ucygpXG4gICAgICAgIHdpbmRvdy5nZXRwYWlkU2V0dXAodGhpcy5fcmF2ZU9wdGlvbnMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5zZXJ0UmF2ZU9wdGlvbnMoKSB7XG4gICAgdGhpcy5hbW91bnQgPyB0aGlzLl9yYXZlT3B0aW9ucy5hbW91bnQgPSB0aGlzLmFtb3VudCA6IG51bGxcbiAgICB0aGlzLlBCRlB1YktleSA/IHRoaXMuX3JhdmVPcHRpb25zLlBCRlB1YktleSA9IHRoaXMuUEJGUHViS2V5IDogbnVsbFxuICAgIHRoaXMucGF5bWVudF9tZXRob2QgPyB0aGlzLl9yYXZlT3B0aW9ucy5wYXltZW50X21ldGhvZCA9IHRoaXMucGF5bWVudF9tZXRob2QgOiBudWxsXG4gICAgdGhpcy5yZWRpcmVjdF91cmwgPyB0aGlzLl9yYXZlT3B0aW9ucy5yZWRpcmVjdF91cmwgPSB0aGlzLnJlZGlyZWN0X3VybCA6IG51bGxcbiAgICB0aGlzLmludGVncml0eV9oYXNoID8gdGhpcy5fcmF2ZU9wdGlvbnMuaW50ZWdyaXR5X2hhc2ggPSB0aGlzLmludGVncml0eV9oYXNoIDogbnVsbFxuICAgIHRoaXMucGF5X2J1dHRvbl90ZXh0ID8gdGhpcy5fcmF2ZU9wdGlvbnMucGF5X2J1dHRvbl90ZXh0ID0gdGhpcy5wYXlfYnV0dG9uX3RleHQgOiBudWxsXG4gICAgdGhpcy5jb3VudHJ5ID8gdGhpcy5fcmF2ZU9wdGlvbnMuY291bnRyeSA9IHRoaXMuY291bnRyeSA6IG51bGxcbiAgICB0aGlzLmN1cnJlbmN5ID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VycmVuY3kgPSB0aGlzLmN1cnJlbmN5IDogbnVsbFxuICAgIHRoaXMuY3VzdG9tX2Rlc2NyaXB0aW9uID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tX2Rlc2NyaXB0aW9uID0gdGhpcy5jdXN0b21fZGVzY3JpcHRpb24gOiBudWxsXG4gICAgdGhpcy5jdXN0b21lcl9lbWFpbCA/IHRoaXMuX3JhdmVPcHRpb25zLmN1c3RvbWVyX2VtYWlsID0gdGhpcy5jdXN0b21lcl9lbWFpbCA6IG51bGxcbiAgICB0aGlzLmN1c3RvbV9sb2dvID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tX2xvZ28gPSB0aGlzLmN1c3RvbV9sb2dvIDogbnVsbFxuICAgIHRoaXMuY3VzdG9tX3RpdGxlID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tX3RpdGxlID0gdGhpcy5jdXN0b21fdGl0bGUgOiBudWxsXG4gICAgdGhpcy5jdXN0b21lcl9maXJzdG5hbWUgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9maXJzdG5hbWUgPSB0aGlzLmN1c3RvbWVyX2ZpcnN0bmFtZSA6IG51bGxcbiAgICB0aGlzLmN1c3RvbWVyX2xhc3RuYW1lID8gdGhpcy5fcmF2ZU9wdGlvbnMuY3VzdG9tZXJfbGFzdG5hbWUgPSB0aGlzLmN1c3RvbWVyX2xhc3RuYW1lIDogbnVsbFxuICAgIHRoaXMuY3VzdG9tZXJfcGhvbmUgPyB0aGlzLl9yYXZlT3B0aW9ucy5jdXN0b21lcl9waG9uZSA9IHRoaXMuY3VzdG9tZXJfcGhvbmUgOiBudWxsXG4gICAgdGhpcy50eHJlZiA/IHRoaXMuX3JhdmVPcHRpb25zLnR4cmVmID0gdGhpcy50eHJlZiA6IG51bGxcbiAgICB0aGlzLm9uY2xvc2UgPyB0aGlzLl9yYXZlT3B0aW9ucy5vbmNsb3NlID0gKCkgPT4ge1xuICAgICAgdGhpcy5vbmNsb3NlLmVtaXQoKVxuICAgIH0gOiBudWxsXG4gICAgdGhpcy5jYWxsYmFjayA/IHRoaXMuX3JhdmVPcHRpb25zLmNhbGxiYWNrID0gcmVzID0+IHtcbiAgICAgIHRoaXMuY2FsbGJhY2suZW1pdChyZXMpIFxuICAgIH0gOiBudWxsXG4gIH1cblxuICB2YWxpZGF0ZU9wdGlvbnMoKSB7XG4gICAgaWYgKCF0aGlzLnJhdmVPcHRpb25zLlBCRlB1YktleSkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IE1lcmNoYW50IHB1YmxpYyBrZXkgaXMgcmVxdWlyZWRcIik7XG4gICAgaWYgKCEodGhpcy5yYXZlT3B0aW9ucy5jdXN0b21lcl9lbWFpbCB8fCB0aGlzLnJhdmVPcHRpb25zLmN1c3RvbWVyX3Bob25lKSkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IEN1c3RvbWVyIGVtYWlsIG9yIHBob25lIG51bWJlciBpcyByZXF1aXJlZFwiKTtcbiAgICBpZiAoIXRoaXMucmF2ZU9wdGlvbnMudHhyZWYpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBBIHVuaXF1ZSB0cmFuc2FjdGlvbiByZWZlcmVuY2UgaXMgcmVxdWlyZWRcIilcbiAgICBpZiAoIXRoaXMucmF2ZU9wdGlvbnMuYW1vdW50KSByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogQW1vdW50IHRvIGNoYXJnZSBpcyByZXF1aXJlZFwiKVxuICAgIGlmICghdGhpcy5jYWxsYmFjay5vYnNlcnZlcnMubGVuZ3RoKSByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogWW91IHNob3VsZCBhdHRhY2ggdG8gY2FsbGJhY2sgdG8gdmVyaWZ5IHlvdXIgdHJhbnNhY3Rpb25cIilcbiAgICBpZiAodHlwZW9mIHRoaXMub25jbG9zZSA9PT0gXCJmdW5jdGlvblwiKSB0aGlzLnJhdmVPcHRpb25zLm9uY2xvc2UgPSAoKSA9PiB0aGlzLm9uY2xvc2UuZW1pdCgpXG4gICAgdGhpcy5yYXZlT3B0aW9ucy5jYWxsYmFjayA9IHJlcyA9PiB0aGlzLmNhbGxiYWNrLmVtaXQocmVzKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICB2YWxpZGF0ZUlucHV0KCkge1xuICAgIGlmICghdGhpcy5QQkZQdWJLZXkpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBNZXJjaGFudCBwdWJsaWMga2V5IGlzIHJlcXVpcmVkXCIpO1xuICAgIGlmICghKHRoaXMuY3VzdG9tZXJfZW1haWwgfHwgdGhpcy5jdXN0b21lcl9waG9uZSkpIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBDdXN0b21lciBlbWFpbCBvciBwaG9uZSBudW1iZXIgaXMgcmVxdWlyZWRcIik7XG4gICAgaWYgKCF0aGlzLnR4cmVmKSByZXR1cm4gY29uc29sZS5lcnJvcihcIkFOR1VMQVItUkFWRTogQSB1bmlxdWUgdHJhbnNhY3Rpb24gcmVmZXJlbmNlIGlzIHJlcXVpcmVkXCIpXG4gICAgaWYgKCF0aGlzLmFtb3VudCkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJBTkdVTEFSLVJBVkU6IEFtb3VudCB0byBjaGFyZ2UgaXMgcmVxdWlyZWRcIilcbiAgICBpZiAoIXRoaXMuY2FsbGJhY2spIHJldHVybiBjb25zb2xlLmVycm9yKFwiQU5HVUxBUi1SQVZFOiBZb3Ugc2hvdWxkIGF0dGFjaCB0byBjYWxsYmFjayB0byB2ZXJpZnkgeW91ciB0cmFuc2FjdGlvblwiKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxufSIsImV4cG9ydCBjbGFzcyBSYXZlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBZb3VyIG1lcmNoYW50IHB1YmxpYyBrZXkgcHJvdmlkZWQgd2hlbiB5b3UgY3JlYXRlIGEgYnV0dG9uXG4gICAqL1xuICBQQkZQdWJLZXk6IHN0cmluZ1xuICAvKipcbiAgICogRW1haWwgb2YgdGhlIGN1c3RvbWVyXG4gICAqL1xuICBjdXN0b21lcl9lbWFpbD86IHN0cmluZ1xuICAvKipcbiAgICogRmlyc3RuYW1lIG9mIHRoZSBjdXN0b21lclxuICAgKi9cbiAgY3VzdG9tZXJfZmlyc3RuYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiBmaXJzdG5hbWUgb2YgdGhlIGN1c3RvbWVyXG4gICAqL1xuICBjdXN0b21lcl9sYXN0bmFtZT86IHN0cmluZ1xuICAvKipcbiAgICogVGV4dCB0byBiZSBkaXNwbGF5ZWQgYXMgYSBzaG9ydCBtb2RhbCBkZXNjcmlwdGlvblxuICAgKi9cbiAgY3VzdG9tX2Rlc2NyaXB0aW9uPzogc3RyaW5nXG4gIC8qKlxuICAgKiBMaW5rIHRvIHlvdXIgY3VzdG9tIGltYWdlXG4gICAqL1xuICBjdXN0b21fbG9nbz86IHN0cmluZ1xuICAvKipcbiAgICogVGV4dCB0byBiZSBkaXNwbGF5ZWQgYXMgdGhlIHRpdGxlIG9mIHRoZSBwYXltZW50IG1vZGFsXG4gICAqL1xuICBjdXN0b21fdGl0bGU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIEFtb3VudCB0byBjaGFyZ2VcbiAgICovXG4gIGFtb3VudDogbnVtYmVyXG4gIC8qKlxuICAgKiBwaG9uZSBudW1iZXIgb2YgdGhlIGN1c3RvbWVyXG4gICAqL1xuICBjdXN0b21lcl9waG9uZT86IHN0cmluZ1xuICAvKipcbiAgICogVVJMIHRvIHJlZGlyZWN0IHRvIHdoZW4gdHJhbnNhY3Rpb24gaXMgY29tcGxldGVkLlxuICAgKi9cbiAgcmVkaXJlY3RfdXJsPzogc3RyaW5nXG4gIC8qKlxuICAgKiByb3V0ZSBjb3VudHJ5LiBEZWZhdWx0IE5HXG4gICAqL1xuICBjb3VudHJ5Pzogc3RyaW5nXG4gIC8qKlxuICAgKiBjdXJyZW5jeSB0byBjaGFyZ2UgdGhlIGNhcmQgaW4uIERlZmF1bHQgXCJOR05cIlxuICAgKi9cbiAgY3VycmVuY3k/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFRoaXMgYWxsb3dzIHlvdSBzZWxlY3QgdGhlIHBheW1lbnQgb3B0aW9uIHlvdSB3YW50IGZvciB5b3VyIHVzZXJzLCBwb3NzaWJsZSB2YWx1ZXMgYXJlIGNhcmQsIGFjY291bnQgb3IgYm90aFxuICAgKi9cbiAgcGF5bWVudF9tZXRob2Q/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFRleHQgdG8gYmUgZGlzcGxheWVkIG9uIHRoZSBSYXZlIENoZWNrb3V0IEJ1dHRvblxuICAgKi9cbiAgcGF5X2J1dHRvbl90ZXh0Pzogc3RyaW5nXG4gIC8qKlxuICAgKiBVbmlxdWUgdHJhbnNhY3Rpb24gcmVmZXJlbmNlIHByb3ZpZGVkIGJ5IHRoZSBtZXJjaGFudFxuICAgKi9cbiAgdHhyZWY6IHN0cmluZ1xuICAvKipcbiAgICogVGhpcyBpcyBhIHNoYTI1NiBoYXNoIG9mIHlvdXIgZ2V0cGFpZFNldHVwIHZhbHVlcywgaXQgaXMgdXNlZCBmb3IgcGFzc2luZyBzZWN1cmVkIHZhbHVlcyB0byB0aGUgcGF5bWVudCBnYXRld2F5XG4gICAqL1xuICBpbnRlZ3JpdHlfaGFzaD86IHN0cmluZ1xuICAvKipcbiAgICogVGhlIHZhbHVlIHRvIGJlIHBhc3NlZCBmb3IgdGhpcyBpcyAxLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGN1c3RvbWVyIGlzIHVzaW5nIGFuIG9wZXJhIGJyb3dzZXIsIGl0IHdvdWxkIGxvYWQgdGhlIHBheW1lbnQgbW9kYWwgb24gYSBuZXcgcGFnZS5cbiAgICovXG4gIGhvc3RlZF9wYXltZW50PzogMVxuICAvKipcbiAgICogQW55IG90aGVyIGN1c3RvbSBkYXRhIHlvdSB3aXNoIHRvIHBhc3MuXG4gICAqL1xuICBtZXRhPzogYW55XG59XG5cbmV4cG9ydCBjbGFzcyBfUmF2ZU9wdGlvbnMge1xuICAvKipcbiAgICogWW91ciBtZXJjaGFudCBwdWJsaWMga2V5IHByb3ZpZGVkIHdoZW4geW91IGNyZWF0ZSBhIGJ1dHRvblxuICAgKi9cbiAgUEJGUHViS2V5OiBzdHJpbmdcbiAgLyoqXG4gICAqIEVtYWlsIG9mIHRoZSBjdXN0b21lclxuICAgKi9cbiAgY3VzdG9tZXJfZW1haWw/OiBzdHJpbmdcbiAgLyoqXG4gICAqIEZpcnN0bmFtZSBvZiB0aGUgY3VzdG9tZXJcbiAgICovXG4gIGN1c3RvbWVyX2ZpcnN0bmFtZT86IHN0cmluZ1xuICAvKipcbiAgICogZmlyc3RuYW1lIG9mIHRoZSBjdXN0b21lclxuICAgKi9cbiAgY3VzdG9tZXJfbGFzdG5hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFRleHQgdG8gYmUgZGlzcGxheWVkIGFzIGEgc2hvcnQgbW9kYWwgZGVzY3JpcHRpb25cbiAgICovXG4gIGN1c3RvbV9kZXNjcmlwdGlvbj86IHN0cmluZ1xuICAvKipcbiAgICogTGluayB0byB5b3VyIGN1c3RvbSBpbWFnZVxuICAgKi9cbiAgY3VzdG9tX2xvZ28/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFRleHQgdG8gYmUgZGlzcGxheWVkIGFzIHRoZSB0aXRsZSBvZiB0aGUgcGF5bWVudCBtb2RhbFxuICAgKi9cbiAgY3VzdG9tX3RpdGxlPzogc3RyaW5nXG4gIC8qKlxuICAgKiBBbW91bnQgdG8gY2hhcmdlXG4gICAqL1xuICBhbW91bnQ6IG51bWJlclxuICAvKipcbiAgICogcGhvbmUgbnVtYmVyIG9mIHRoZSBjdXN0b21lclxuICAgKi9cbiAgY3VzdG9tZXJfcGhvbmU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFVSTCB0byByZWRpcmVjdCB0byB3aGVuIHRyYW5zYWN0aW9uIGlzIGNvbXBsZXRlZC5cbiAgICovXG4gIHJlZGlyZWN0X3VybD86IHN0cmluZ1xuICAvKipcbiAgICogcm91dGUgY291bnRyeS4gRGVmYXVsdCBOR1xuICAgKi9cbiAgY291bnRyeT86IHN0cmluZ1xuICAvKipcbiAgICogY3VycmVuY3kgdG8gY2hhcmdlIHRoZSBjYXJkIGluLiBEZWZhdWx0IFwiTkdOXCJcbiAgICovXG4gIGN1cnJlbmN5Pzogc3RyaW5nXG4gIC8qKlxuICAgKiBUaGlzIGFsbG93cyB5b3Ugc2VsZWN0IHRoZSBwYXltZW50IG9wdGlvbiB5b3Ugd2FudCBmb3IgeW91ciB1c2VycywgcG9zc2libGUgdmFsdWVzIGFyZSBjYXJkLCBhY2NvdW50IG9yIGJvdGhcbiAgICovXG4gIHBheW1lbnRfbWV0aG9kPzogc3RyaW5nXG4gIC8qKlxuICAgKiBUZXh0IHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgUmF2ZSBDaGVja291dCBCdXR0b25cbiAgICovXG4gIHBheV9idXR0b25fdGV4dD86IHN0cmluZ1xuICAvKipcbiAgICogVW5pcXVlIHRyYW5zYWN0aW9uIHJlZmVyZW5jZSBwcm92aWRlZCBieSB0aGUgbWVyY2hhbnRcbiAgICovXG4gIHR4cmVmOiBzdHJpbmdcbiAgLyoqXG4gICAqIFRoaXMgaXMgYSBzaGEyNTYgaGFzaCBvZiB5b3VyIGdldHBhaWRTZXR1cCB2YWx1ZXMsIGl0IGlzIHVzZWQgZm9yIHBhc3Npbmcgc2VjdXJlZCB2YWx1ZXMgdG8gdGhlIHBheW1lbnQgZ2F0ZXdheVxuICAgKi9cbiAgaW50ZWdyaXR5X2hhc2g/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSB0byBiZSBwYXNzZWQgZm9yIHRoaXMgaXMgMS4gVGhpcyBpcyB1c2VmdWwgd2hlbiBjdXN0b21lciBpcyB1c2luZyBhbiBvcGVyYSBicm93c2VyLCBpdCB3b3VsZCBsb2FkIHRoZSBwYXltZW50IG1vZGFsIG9uIGEgbmV3IHBhZ2UuXG4gICAqL1xuICBob3N0ZWRfcGF5bWVudD86IDFcbiAgLyoqXG4gICAqIEFueSBvdGhlciBjdXN0b20gZGF0YSB5b3Ugd2lzaCB0byBwYXNzLlxuICAgKi9cbiAgbWV0YT86IGFueVxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gc3VjY2Vzc2Z1bCBjYXJkIGNoYXJnZS4gVXNlcsOiwoDCmXMgY2FuIGFsd2F5cyBiZSByZWRpcmVjdGVkIHRvIGEgc3VjY2Vzc2Z1bCBvciBmYWlsZWQgcGFnZSBzdXBwbGllZCBieSB0aGUgbWVyY2hhbnQgaGVyZSBiYXNlZCBvbiByZXNwb25zZVxuICAgKiBAcGFyYW0gcmVzcG9uc2U/OiBUaGUgc2VydmVyIHJlc3BvbnNlXG4gICAqL1xuICBjYWxsYmFjazogKHJlc3BvbnNlPzogYW55KSA9PiB2b2lkXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBwYXkgbW9kYWwgaXMgY2xvc2VkLlxuICAgKi9cbiAgb25jbG9zZTogKCkgPT4gdm9pZFxufSIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFuZ3VsYXJSYXZlQ29tcG9uZW50IH0gZnJvbSAnLi9hbmd1bGFyLXJhdmUuY29tcG9uZW50JztcbmltcG9ydCB7IEFuZ3VsYXJSYXZlRGlyZWN0aXZlIH0gZnJvbSBcIi4vYW5ndWxhci1yYXZlLmRpcmVjdGl2ZVwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgZXhwb3J0czogW0FuZ3VsYXJSYXZlQ29tcG9uZW50LCBBbmd1bGFyUmF2ZURpcmVjdGl2ZV0sXG4gIGRlY2xhcmF0aW9uczogW0FuZ3VsYXJSYXZlQ29tcG9uZW50LCBBbmd1bGFyUmF2ZURpcmVjdGl2ZV0sXG4gIHByb3ZpZGVyczogW10sXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJSYXZlTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIkNvbXBvbmVudCIsIklucHV0IiwiT3V0cHV0IiwiRGlyZWN0aXZlIiwiSG9zdExpc3RlbmVyIiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQXFDRTsyQkFKd0MsSUFBSUEsaUJBQVksRUFBUTs0QkFDckIsSUFBSUEsaUJBQVksRUFBVTtTQUdwRDs7OztRQUVqQixrQ0FBRzs7O1lBQUg7Z0JBQ0UsSUFB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