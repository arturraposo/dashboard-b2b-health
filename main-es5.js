function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/guards/auth.guard */
    "./src/app/guards/auth.guard.ts");

    var routes = [{
      path: 'auth',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | layouts-auth-auth-module */
        [__webpack_require__.e("default~layouts-auth-auth-module~pages-dashboard-dashboard-module~pages-relatorios-relatorios-module"), __webpack_require__.e("common"), __webpack_require__.e("layouts-auth-auth-module")]).then(__webpack_require__.bind(null,
        /*! ./layouts/auth/auth.module */
        "./src/app/layouts/auth/auth.module.ts")).then(function (m) {
          return m.AuthModule;
        });
      }
    }, {
      path: '',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | layouts-panel-panel-module */
        [__webpack_require__.e("default~layouts-panel-panel-module~pages-login-login-module"), __webpack_require__.e("common"), __webpack_require__.e("layouts-panel-panel-module")]).then(__webpack_require__.bind(null,
        /*! ./layouts/panel/panel.module */
        "./src/app/layouts/panel/panel.module.ts")).then(function (m) {
          return m.PanelModule;
        });
      },
      canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.title = 'sofbox-dashboard-angular';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
              return;
            }

            window.scrollTo(0, 0);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.interceptor.ts":
  /*!************************************!*\
    !*** ./src/app/app.interceptor.ts ***!
    \************************************/

  /*! exports provided: AppInterceptor */

  /***/
  function srcAppAppInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppInterceptor", function () {
      return AppInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _models_response_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./models/response-error */
    "./src/app/models/response-error.ts");

    var AppInterceptor = /*#__PURE__*/function () {
      function AppInterceptor(router, authService) {
        _classCallCheck(this, AppInterceptor);

        this.router = router;
        this.authService = authService;
      }

      _createClass(AppInterceptor, [{
        key: "handleAuthError",
        value: function handleAuthError(err) {
          var res = new _models_response_error__WEBPACK_IMPORTED_MODULE_6__["ResponseError"](err.status, '');

          if (err.status === 401 && this.router.url != '/auth/login') {
            localStorage.clear();
            this.router.navigateByUrl('/auth/login');
            res.setMessage(err.error.message);
          } else if (err.status === 422) {
            var message = '';
            var errors = err.error.errors;
            Object.keys(errors).forEach(function (k) {
              return message += errors[k] + '.\n';
            });
            res.setMessage(message);
          } else if ('message' in err.error) {
            res.setMessage(err.error.message);
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(res);
        }
      }, {
        key: "intercept",
        value: function intercept(request, next) {
          var _this = this;

          var token = this.authService.getAuthToken();

          if (token != null) {
            request = request.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(token)
              }
            });
          }

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return _this.handleAuthError(err);
          }));
        }
      }]);

      return AppInterceptor;
    }();

    AppInterceptor.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };

    AppInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AppInterceptor);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/pagination */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
    /* harmony import */


    var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-bootstrap/popover */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/popover/fesm2015/ngx-bootstrap-popover.js");
    /* harmony import */


    var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/progressbar */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm2015/ngx-bootstrap-progressbar.js");
    /* harmony import */


    var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-bootstrap/alert */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/alert/fesm2015/ngx-bootstrap-alert.js");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
    /* harmony import */


    var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-bootstrap/buttons */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/buttons/fesm2015/ngx-bootstrap-buttons.js");
    /* harmony import */


    var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-bootstrap/carousel */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-scrollbar */
    "./node_modules/ngx-scrollbar/__ivy_ngcc__/fesm2015/ngx-scrollbar.js");
    /* harmony import */


    var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ngx-slick-carousel */
    "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
    /* harmony import */


    var ngx_wow__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ngx-wow */
    "./node_modules/ngx-wow/__ivy_ngcc__/esm2015/ngx-wow.js");
    /* harmony import */


    var _app_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./app.interceptor */
    "./src/app/app.interceptor.ts");
    /* harmony import */


    var ngx_sortablejs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ngx-sortablejs */
    "./node_modules/ngx-sortablejs/__ivy_ngcc__/fesm2015/ngx-sortablejs.js");
    /* harmony import */


    var ngx_mask__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ngx-mask */
    "./node_modules/ngx-mask/__ivy_ngcc__/fesm2015/ngx-mask.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_9__["AlertModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_21__["ModalModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"].forRoot(), ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_7__["PopoverModule"].forRoot(), ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_8__["ProgressbarModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__["TabsModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"].forRoot(), ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_12__["ButtonsModule"].forRoot(), ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_13__["CarouselModule"].forRoot(), ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_8__["ProgressbarModule"].forRoot(), ngx_scrollbar__WEBPACK_IMPORTED_MODULE_15__["NgScrollbarModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_16__["SlickCarouselModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], ngx_wow__WEBPACK_IMPORTED_MODULE_17__["NgwWowModule"], ngx_sortablejs__WEBPACK_IMPORTED_MODULE_19__["SortablejsModule"].forRoot({
        animation: 150
      }), ngx_mask__WEBPACK_IMPORTED_MODULE_20__["NgxMaskModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__["NgSelectModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
        useClass: _app_interceptor__WEBPACK_IMPORTED_MODULE_18__["AppInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this.authService.isLogged()) {
            return true;
          }

          window.location.href = '/auth/login';
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/models/response-error.ts":
  /*!******************************************!*\
    !*** ./src/app/models/response-error.ts ***!
    \******************************************/

  /*! exports provided: ResponseError */

  /***/
  function srcAppModelsResponseErrorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResponseError", function () {
      return ResponseError;
    });

    var ResponseError = /*#__PURE__*/function () {
      function ResponseError(status, message) {
        _classCallCheck(this, ResponseError);

        this.status = status;
        this.message = message;
      }

      _createClass(ResponseError, [{
        key: "getMessage",
        value: function getMessage() {
          return this.message;
        }
      }, {
        key: "setMessage",
        value: function setMessage(message) {
          this.message = message;
        }
      }]);

      return ResponseError;
    }();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.userStorageKey = '_auth_user';
        this.tokenStorageKey = '_auth_token';
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        var user = JSON.parse(localStorage.getItem(this.userStorageKey));
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](user);
      }

      _createClass(AuthService, [{
        key: "isLogged",
        value: function isLogged() {
          return localStorage.getItem(this.userStorageKey) !== null;
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return this.userSubject.value;
        }
      }, {
        key: "getAuthToken",
        value: function getAuthToken() {
          return localStorage.getItem(this.tokenStorageKey);
        }
      }, {
        key: "authenticate",
        value: function authenticate(email, password) {
          var _this2 = this;

          var url = "".concat(this.apiUrl, "/auth/login");
          var data = {
            email: email,
            password: password
          };
          return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            localStorage.setItem(_this2.tokenStorageKey, res.access_token);
            localStorage.setItem(_this2.userStorageKey, JSON.stringify(res.user));

            _this2.userSubject.next(res.user);

            return res.user;
          }));
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      //apiUrl: 'http://b2bapidashboard.ddns.net:8888/api'
      apiUrl: 'http://167.71.102.237:8888/api'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\user\Documents\B2B Health\dashboard-b2b-health\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map