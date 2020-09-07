(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\asekene\github.com\ashinzekene\angular-rave\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * In development mode, to ignore zone related error stack frames such as
       * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
       * import the following file, but please comment it out in production mode
       * because it will have performance impact when throw error
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "InB+":
    /*!****************************************************!*\
      !*** ./dist/angular-rave/fesm2015/angular-rave.js ***!
      \****************************************************/

    /*! exports provided: AngularRaveComponent, AngularRaveDirective, AngularRaveModule, AngularRaveService */

    /***/
    function InB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularRaveComponent", function () {
        return AngularRaveComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularRaveDirective", function () {
        return AngularRaveDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularRaveModule", function () {
        return AngularRaveModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularRaveService", function () {
        return AngularRaveService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var PBFPUBKEY_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Rave.PBFPubKey');
      var ENVIRONMENT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Rave.IsDevelopment');
      var PROD_URL = '//api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js';
      var DEV_URL = '//ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-inline.js';

      var AngularRaveService = /*#__PURE__*/function () {
        function AngularRaveService(PBFPubKey, isDev) {
          _classCallCheck(this, AngularRaveService);

          this.PBFPubKey = PBFPubKey;
          this.isDev = isDev;
        }

        _createClass(AngularRaveService, [{
          key: "createRaveOptionsObject",
          value: function createRaveOptionsObject(obj) {
            var raveOptions = {};
            raveOptions.amount = obj.amount; // raveOptions.hosted_payment = 1; // Modal should open in another page

            raveOptions.PBFPubKey = obj.PBFPubKey || this.PBFPubKey;

            if (obj.payment_method) {
              raveOptions.payment_method = obj.payment_method;
            }

            if (obj.payment_options) {
              raveOptions.payment_options = obj.payment_options;
            }

            if (obj.redirect_url) {
              raveOptions.redirect_url = obj.redirect_url;
            }

            if (obj.integrity_hash) {
              raveOptions.integrity_hash = obj.integrity_hash;
            }

            if (obj.pay_button_text) {
              raveOptions.pay_button_text = obj.pay_button_text;
            }

            if (obj.country) {
              raveOptions.country = obj.country;
            }

            if (obj.currency) {
              raveOptions.currency = obj.currency;
            }

            if (obj.custom_description) {
              raveOptions.custom_description = obj.custom_description;
            }

            if (obj.customer_email) {
              raveOptions.customer_email = obj.customer_email;
            }

            if (obj.custom_logo) {
              raveOptions.custom_logo = obj.custom_logo;
            }

            if (obj.custom_title) {
              raveOptions.custom_title = obj.custom_title;
            }

            if (obj.customer_firstname) {
              raveOptions.customer_firstname = obj.customer_firstname;
            }

            if (obj.subaccount) {
              raveOptions.subaccount = obj.subaccount;
            }

            if (obj.customer_lastname) {
              raveOptions.customer_lastname = obj.customer_lastname;
            }

            if (obj.txref) {
              raveOptions.txref = obj.txref;
            }

            if (obj.customer_phone) {
              raveOptions.customer_phone = obj.customer_phone;
            }

            return raveOptions;
          }
        }, {
          key: "loadScript",
          value: function loadScript() {
            var _this = this;

            return new Promise(function (resolve) {
              if (typeof window.getpaidSetup === 'function') {
                resolve();
                return;
              }

              var script = window.document.createElement('script');
              window.document.head.appendChild(script);

              var onLoadFunc = function onLoadFunc() {
                script.removeEventListener('load', onLoadFunc);
                resolve();
              };

              script.addEventListener('load', onLoadFunc);
              var url = _this.isDev ? DEV_URL : PROD_URL;
              script.setAttribute('src', url);
            });
          }
        }, {
          key: "isInvalidOptions",
          value: function isInvalidOptions(obj) {
            if (!obj.PBFPubKey && !this.PBFPubKey) {
              return 'ANGULAR-RAVE: Merchant public key is required';
            }

            if (!(obj.customer_email || obj.customer_phone)) {
              return 'ANGULAR-RAVE: Customer email or phone number is required';
            }

            if (!obj.txref) {
              return 'ANGULAR-RAVE: A unique transaction reference is required';
            }

            if (!obj.currency) {
              return 'ANGULAR-RAVE: Currency is required, Use "NGN" for naira';
            }

            if (!obj.amount) {
              return 'ANGULAR-RAVE: Amount to charge is required';
            }

            return '';
          }
        }]);

        return AngularRaveService;
      }();

      AngularRaveService.ɵfac = function AngularRaveService_Factory(t) {
        return new (t || AngularRaveService)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(PBFPUBKEY_TOKEN), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ENVIRONMENT_TOKEN));
      };

      AngularRaveService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        token: AngularRaveService,
        factory: AngularRaveService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(AngularRaveService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [PBFPUBKEY_TOKEN]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [ENVIRONMENT_TOKEN]
            }]
          }];
        }, null);
      })();

      var _c0 = ["*"];

      var AngularRaveComponent = /*#__PURE__*/function () {
        function AngularRaveComponent(raveService) {
          _classCallCheck(this, AngularRaveComponent);

          this.raveService = raveService;
          this.onclose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.callback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.init = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this._raveOptions = {};
        }

        _createClass(AngularRaveComponent, [{
          key: "pay",
          value: function pay() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var errorExists;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      errorExists = false;

                      if (this.raveOptions && Object.keys(this.raveOptions).length > 1) {
                        errorExists = this.checkInvalidOptions(this.raveOptions);
                        this.insertRaveOptions(this.raveOptions);
                      } else {
                        errorExists = this.checkInvalidOptions(this);
                        this.insertRaveOptions(this);
                      }

                      if (!errorExists) {
                        _context.next = 4;
                        break;
                      }

                      return _context.abrupt("return");

                    case 4:
                      _context.next = 6;
                      return this.raveService.loadScript();

                    case 6:
                      this.paymentSetup = window.getpaidSetup(this._raveOptions);

                      if (this.init.observers.length > 0) {
                        this.init.emit(this.paymentSetup);
                      }

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "checkInvalidOptions",
          value: function checkInvalidOptions(object) {
            var optionsInvalid = this.raveService.isInvalidOptions(object);

            if (optionsInvalid) {
              console.error(optionsInvalid);
            }

            return optionsInvalid !== '';
          }
        }, {
          key: "insertRaveOptions",
          value: function insertRaveOptions(object) {
            var _this2 = this;

            this._raveOptions = this.raveService.createRaveOptionsObject(object);

            if (this.onclose) {
              this._raveOptions.onclose = function () {
                return _this2.onclose.emit();
              };
            }

            this._raveOptions.callback = function (res) {
              _this2.onclose.emit(res);

              if (_this2.autoClose) {
                _this2.paymentSetup.close();
              }
            };
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.pay();
          }
        }]);

        return AngularRaveComponent;
      }();

      AngularRaveComponent.ɵfac = function AngularRaveComponent_Factory(t) {
        return new (t || AngularRaveComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(AngularRaveService));
      };

      AngularRaveComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
        type: AngularRaveComponent,
        selectors: [["angular-rave"]],
        inputs: {
          amount: "amount",
          autoClose: "autoClose",
          country: "country",
          currency: "currency",
          custom_description: "custom_description",
          custom_logo: "custom_logo",
          custom_title: "custom_title",
          customer_email: "customer_email",
          customer_firstname: "customer_firstname",
          customer_lastname: "customer_lastname",
          customer_phone: "customer_phone",
          integrity_hash: "integrity_hash",
          meta: "meta",
          pay_button_text: "pay_button_text",
          payment_method: "payment_method",
          payment_options: "payment_options",
          PBFPubKey: "PBFPubKey",
          raveOptions: "raveOptions",
          redirect_url: "redirect_url",
          subaccount: "subaccount",
          txref: "txref"
        },
        outputs: {
          onclose: "onclose",
          callback: "callback",
          init: "init"
        },
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function AngularRaveComponent_Template(rf, ctx) {
          if (rf & 1) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(AngularRaveComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'angular-rave',
            template: "<ng-content></ng-content>"
          }]
        }], function () {
          return [{
            type: AngularRaveService
          }];
        }, {
          amount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          autoClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          country: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          currency: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          custom_description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          custom_logo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          custom_title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customer_email: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customer_firstname: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customer_lastname: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customer_phone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          integrity_hash: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          meta: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pay_button_text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          payment_method: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          payment_options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          PBFPubKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          raveOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          redirect_url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          subaccount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          txref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onclose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          callback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          init: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();

      var AngularRaveDirective = /*#__PURE__*/function () {
        function AngularRaveDirective(raveService) {
          _classCallCheck(this, AngularRaveDirective);

          this.raveService = raveService;
          this.raveOptions = {};
          this.onclose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.callback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.init = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this._raveOptions = {};
        }

        _createClass(AngularRaveDirective, [{
          key: "buttonClick",
          value: function buttonClick() {
            this.pay();
          }
        }, {
          key: "pay",
          value: function pay() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var errorExists;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      errorExists = false;

                      if (this.raveOptions && Object.keys(this.raveOptions).length > 1) {
                        errorExists = this.checkInvalidOptions(this.raveOptions);
                        this.insertRaveOptions(this.raveOptions);
                      } else {
                        errorExists = this.checkInvalidOptions(this);
                        this.insertRaveOptions(this);
                      }

                      if (!errorExists) {
                        _context2.next = 4;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 4:
                      _context2.next = 6;
                      return this.raveService.loadScript();

                    case 6:
                      this.paymentSetup = window.getpaidSetup(this._raveOptions);

                      if (this.init.observers.length > 0) {
                        this.init.emit(this.paymentSetup);
                      }

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "checkInvalidOptions",
          value: function checkInvalidOptions(object) {
            var optionsInvalid = this.raveService.isInvalidOptions(object);

            if (optionsInvalid) {
              console.error(optionsInvalid);
            }

            return optionsInvalid !== '';
          }
        }, {
          key: "insertRaveOptions",
          value: function insertRaveOptions(object) {
            var _this3 = this;

            this._raveOptions = this.raveService.createRaveOptionsObject(object);

            if (this.onclose) {
              this._raveOptions.onclose = function () {
                return _this3.onclose.emit();
              };
            }

            this._raveOptions.callback = function (res) {
              _this3.onclose.emit(res);

              if (_this3.autoClose) {
                _this3.paymentSetup.close();
              }
            };
          }
        }]);

        return AngularRaveDirective;
      }();

      AngularRaveDirective.ɵfac = function AngularRaveDirective_Factory(t) {
        return new (t || AngularRaveDirective)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(AngularRaveService));
      };

      AngularRaveDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({
        type: AngularRaveDirective,
        selectors: [["", "angular-rave", ""]],
        hostBindings: function AngularRaveDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function AngularRaveDirective_click_HostBindingHandler() {
              return ctx.buttonClick();
            });
          }
        },
        inputs: {
          amount: "amount",
          autoClose: "autoClose",
          country: "country",
          currency: "currency",
          custom_description: "custom_description",
          custom_logo: "custom_logo",
          custom_title: "custom_title",
          customer_email: "customer_email",
          customer_firstname: "customer_firstname",
          customer_lastname: "customer_lastname",
          customer_phone: "customer_phone",
          integrity_hash: "integrity_hash",
          meta: "meta",
          pay_button_text: "pay_button_text",
          payment_method: "payment_method",
          payment_options: "payment_options",
          PBFPubKey: "PBFPubKey",
          raveOptions: "raveOptions",
          redirect_url: "redirect_url",
          subaccount: "subaccount",
          txref: "txref"
        },
        outputs: {
          onclose: "onclose",
          callback: "callback",
          init: "init"
        }
      });
      /*@__PURE__*/

      (function () {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(AngularRaveDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[angular-rave]'
          }]
        }], function () {
          return [{
            type: AngularRaveService
          }];
        }, {
          amount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          autoClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          country: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          currency: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          custom_description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          custom_logo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          custom_title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customer_email: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customer_firstname: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customer_lastname: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customer_phone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          integrity_hash: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          meta: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pay_button_text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          payment_method: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          payment_options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          PBFPubKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          raveOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          redirect_url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          subaccount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          txref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onclose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          callback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          init: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          buttonClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
          }]
        });
      })();

      var AngularRaveModule = /*#__PURE__*/function () {
        function AngularRaveModule() {
          _classCallCheck(this, AngularRaveModule);
        }

        _createClass(AngularRaveModule, null, [{
          key: "forRoot",
          value: function forRoot(options) {
            return {
              ngModule: AngularRaveModule,
              providers: [AngularRaveService, {
                provide: PBFPUBKEY_TOKEN,
                useValue: options.key
              }, {
                provide: ENVIRONMENT_TOKEN,
                useValue: options.isTest
              }]
            };
          }
        }]);

        return AngularRaveModule;
      }();

      AngularRaveModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
        type: AngularRaveModule
      });
      AngularRaveModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
        factory: function AngularRaveModule_Factory(t) {
          return new (t || AngularRaveModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(AngularRaveModule, {
          declarations: [AngularRaveDirective, AngularRaveComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
          exports: [AngularRaveDirective, AngularRaveComponent]
        });
      })();
      /*@__PURE__*/


      (function () {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(AngularRaveModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            declarations: [AngularRaveDirective, AngularRaveComponent],
            exports: [AngularRaveDirective, AngularRaveComponent]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of angular-rave
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=angular-rave.js.map

      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var angular_rave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-rave */
      "InB+");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.title = 'app';
          this.raveOptions = {
            customer_email: 'user@ravemail.com',
            customer_phone: '090848484843',
            amount: 3000,
            redirect_url: 'http://localhost:4200',
            currency: 'NGN',
            custom_title: 'Angular rave test payment',
            txref: "".concat(Math.random() * 1000000)
          };
        }

        _createClass(AppComponent, [{
          key: "paymentFailure",
          value: function paymentFailure() {
            console.log('Payment Failed');
            this.paymentInstance.close();
          }
        }, {
          key: "paymentSuccess",
          value: function paymentSuccess(res) {
            console.log('Payment complete', res);
            this.paymentInstance.close();
          }
        }, {
          key: "paymentInit",
          value: function paymentInit(paymentInstance) {
            this.paymentFailure = paymentInstance;
            console.log(paymentInstance);
            console.log('Payment about to begin', paymentInstance);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 2,
        consts: [["angular-rave", "", 1, "btn", "btn-primary", "btn-lg", 3, "autoClose", "raveOptions", "init", "callback", "onclose"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("init", function AppComponent_Template_button_init_0_listener($event) {
              return ctx.paymentInit($event);
            })("callback", function AppComponent_Template_button_callback_0_listener($event) {
              return ctx.paymentSuccess($event);
            })("onclose", function AppComponent_Template_button_onclose_0_listener() {
              return ctx.paymentFailure();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Pay with Rave Directive\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoClose", true)("raveOptions", ctx.raveOptions);
          }
        },
        directives: [angular_rave__WEBPACK_IMPORTED_MODULE_1__["AngularRaveDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var angular_rave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-rave */
      "InB+");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], angular_rave__WEBPACK_IMPORTED_MODULE_3__["AngularRaveModule"].forRoot({
          key: 'FLWPUBK_TEST-ccf7c01dd5d4e69db74608b8c3a09499-X',
          isTest: true
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], angular_rave__WEBPACK_IMPORTED_MODULE_3__["AngularRaveModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], angular_rave__WEBPACK_IMPORTED_MODULE_3__["AngularRaveModule"].forRoot({
              key: 'FLWPUBK_TEST-ccf7c01dd5d4e69db74608b8c3a09499-X',
              isTest: true
            })],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map