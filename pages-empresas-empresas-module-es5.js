function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-empresas-empresas-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/empresas/empresas.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/empresas/empresas.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEmpresasEmpresasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-lg-12\">\r\n    <app-card [loading]=\"loading\">\r\n      <div class=\"d-flex justify-content-between align-items-center\" header>\r\n        <h4>Empresas</h4>\r\n        <app-button color=\"primary\" rounded=\"pill\" routerLink=\"/empresa/cadastro\">\r\n          <i class=\"ri-add-line mr-1\"></i> Nova Empresa\r\n        </app-button>\r\n      </div>\r\n      <div body>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped table-borderless\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">Logo</th>\r\n                <th scope=\"col\">Empresa</th>\r\n                <th scope=\"col\">Nome Fantasia</th>\r\n                <th scope=\"col\">CNPJ</th>\r\n                <th scope=\"col\">Telefone</th>\r\n                <th scope=\"col\">E-mail</th>\r\n                <th scope=\"col\"></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let empresa of empresas; let i=index\">\r\n                <td class=\"align-middle\">\r\n                  <img [src]=\"empresa.logo\" height=\"50px\"  alt=\"Logo da empresa\">\r\n                </td>\r\n                <td class=\"align-middle\">{{ empresa.nome_empresa }}</td>\r\n                <td class=\"align-middle\">{{ empresa.nome_fantasia }}</td>\r\n                <td class=\"align-middle\">{{ empresa.cnpj }}</td>\r\n                <td class=\"align-middle\">{{ empresa.fone }}</td>\r\n                <td class=\"align-middle\">{{ empresa.email }}</td>\r\n                <td class=\"align-middle\">\r\n                  <div class=\"d-flex\">\r\n                    <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" [routerLink]=\"['/empresa', empresa.id]\">\r\n                      <i class=\"ri-edit-box-line\"></i>\r\n                    </app-button>\r\n                    <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"destroy(empresa)\">\r\n                      <i class=\"ri-delete-bin-line\"></i>\r\n                    </app-button>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr *ngIf=\"empresas?.length == 0\">\r\n                <td colspan=\"7\" class=\"text-center\">Nenhuma empresa encontrada</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/empresas/empresas-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/empresas/empresas-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: EmpresasRoutingModule */

  /***/
  function srcAppPagesEmpresasEmpresasRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmpresasRoutingModule", function () {
      return EmpresasRoutingModule;
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


    var _empresas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./empresas.component */
    "./src/app/pages/empresas/empresas.component.ts");

    var routes = [{
      path: '',
      component: _empresas_component__WEBPACK_IMPORTED_MODULE_3__["EmpresasComponent"]
    }];

    var EmpresasRoutingModule = /*#__PURE__*/_createClass(function EmpresasRoutingModule() {
      _classCallCheck(this, EmpresasRoutingModule);
    });

    EmpresasRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EmpresasRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/empresas/empresas.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/pages/empresas/empresas.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEmpresasEmpresasComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtcHJlc2FzL2VtcHJlc2FzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/empresas/empresas.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/empresas/empresas.component.ts ***!
    \******************************************************/

  /*! exports provided: EmpresasComponent */

  /***/
  function srcAppPagesEmpresasEmpresasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmpresasComponent", function () {
      return EmpresasComponent;
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


    var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/helpers/alert.helper */
    "./src/app/helpers/alert.helper.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_empresa_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/empresa.service */
    "./src/app/services/empresa.service.ts");

    var EmpresasComponent = /*#__PURE__*/function () {
      function EmpresasComponent(empresaService, alertHelper) {
        _classCallCheck(this, EmpresasComponent);

        this.empresaService = empresaService;
        this.alertHelper = alertHelper;
        this.loading = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(EmpresasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadEmpresas();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "destroy",
        value: function destroy(empresa) {
          var _this = this;

          this.alertHelper.show('warning', "Tem certeza que deseja remover a empresa ".concat(empresa.nome_empresa, "?"), {
            showCancelButton: true
          }).then(function (confirmed) {
            if (confirmed) {
              _this.loading = true;

              _this.empresaService["delete"](empresa).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.unsubscribe$)).subscribe({
                next: function next() {
                  _this.loading = false;
                  _this.empresas = _this.empresas.filter(function (c) {
                    return c.id != empresa.id;
                  });
                },
                error: function error() {
                  _this.loading = false;
                }
              });
            }
          });
        }
      }, {
        key: "loadEmpresas",
        value: function loadEmpresas() {
          var _this2 = this;

          this.loading = true;
          this.empresaService.list().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(empresas) {
              _this2.loading = false;
              _this2.empresas = empresas;
            },
            error: function error() {
              _this2.loading = false;
            }
          });
        }
      }]);

      return EmpresasComponent;
    }();

    EmpresasComponent.ctorParameters = function () {
      return [{
        type: src_app_services_empresa_service__WEBPACK_IMPORTED_MODULE_5__["EmpresaService"]
      }, {
        type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_3__["AlertHelper"]
      }];
    };

    EmpresasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-empresas',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./empresas.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/empresas/empresas.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./empresas.component.scss */
      "./src/app/pages/empresas/empresas.component.scss"))["default"]]
    })], EmpresasComponent);
    /***/
  },

  /***/
  "./src/app/pages/empresas/empresas.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/empresas/empresas.module.ts ***!
    \***************************************************/

  /*! exports provided: EmpresasModule */

  /***/
  function srcAppPagesEmpresasEmpresasModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmpresasModule", function () {
      return EmpresasModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _empresas_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./empresas-routing.module */
    "./src/app/pages/empresas/empresas-routing.module.ts");
    /* harmony import */


    var _empresas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./empresas.component */
    "./src/app/pages/empresas/empresas.component.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var EmpresasModule = /*#__PURE__*/_createClass(function EmpresasModule() {
      _classCallCheck(this, EmpresasModule);
    });

    EmpresasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_empresas_component__WEBPACK_IMPORTED_MODULE_4__["EmpresasComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _empresas_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmpresasRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]]
    })], EmpresasModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-empresas-empresas-module-es5.js.map