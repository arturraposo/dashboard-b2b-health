function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-md-6 col-lg-3\">\r\n    <div class=\"iq-card\">\r\n      <div class=\"iq-card-body\">\r\n        <span class=\"text-success float-right\">+3.3%<i class=\"ri-arrow-up-fill\"></i></span>\r\n        <span class=\"font-size-14\">Água Semanal</span>\r\n        <h3>3,897</h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6 col-lg-3\">\r\n    <div class=\"iq-card\">\r\n      <div class=\"iq-card-body\">\r\n        <span class=\"text-success float-right\">+3.3%<i class=\"ri-arrow-up-fill\"></i></span>\r\n        <span class=\"font-size-14\">Peso Quinzenal</span>\r\n        <h3>3,897</h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6 col-lg-3\">\r\n    <div class=\"iq-card\">\r\n      <div class=\"iq-card-body\">\r\n        <span class=\"text-success float-right\">+3.3%<i class=\"ri-arrow-up-fill\"></i></span>\r\n        <span class=\"font-size-14\">Sono Mensal</span>\r\n        <h3>3,897</h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6 col-lg-3\">\r\n    <div class=\"iq-card\">\r\n      <div class=\"iq-card-body\">\r\n        <span class=\"text-success float-right\">+3.3%<i class=\"ri-arrow-up-fill\"></i></span>\r\n        <span class=\"font-size-14\">Funcionários</span>\r\n        <h3>3,897</h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"col-md-12 col-lg-12\">\r\n    <div class=\"iq-card iq-card-block iq-card-stretch iq-card-height overflow-hidden wow fadeInUp\" data-wow-delay=\"0.6s\">\r\n       <div class=\"iq-card-header d-flex justify-content-between\">\r\n          <div class=\"iq-header-title\">\r\n             <h4 class=\"card-title\">Overall Performance</h4>\r\n          </div>\r\n          <div class=\"iq-card-header-toolbar d-flex align-items-center\">\r\n             <ul class=\"nav nav-pills\">\r\n                <li class=\"nav-item\">\r\n                   <a href=\"#\" class=\"nav-link active\">All Time</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                   <a href=\"#\" class=\"nav-link\">This Year</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                   <a href=\"#\" class=\"nav-link\">This Week</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                   <a href=\"#\" class=\"nav-link\">Today</a>\r\n                </li>\r\n             </ul>\r\n          </div>\r\n       </div>\r\n       <div class=\"iq-card-body\">\r\n          <app-high-chart [ids]=\"'chart11'\" [options]=\"options\"></app-high-chart>\r\n          <div id=\"chart11\"></div>\r\n       </div>\r\n    </div>\r\n</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardRoutingModule */

  /***/
  function srcAppPagesDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
      return DashboardRoutingModule;
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


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");

    var routes = [{
      path: '',
      component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }];

    var DashboardRoutingModule = /*#__PURE__*/_createClass(function DashboardRoutingModule() {
      _classCallCheck(this, DashboardRoutingModule);
    });

    DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
    \********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppPagesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);

        this.options = {
          title: {
            text: "U.S Solar Employment Growth",
            align: "left"
          },
          subtitle: {
            text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
            align: "left"
          },
          yAxis: {
            title: {
              text: "Number of Employees"
            }
          },
          xAxis: {
            accessibility: {
              rangeDescription: "Range: 2010 to 2020"
            }
          },
          legend: {
            layout: "vertical",
            align: "right",
            verticalAlign: "middle"
          },
          plotOptions: {
            series: {
              label: {
                connectorAllowed: false
              },
              pointStart: 2010
            }
          },
          series: [{
            name: "Installation & Developers",
            data: [43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157, 161454, 154610]
          }, {
            name: "Manufacturing",
            data: [24916, 37941, 29742, 29851, 32490, 30282, 38121, 36885, 33726, 34243, 31050]
          }, {
            name: "Sales & Distribution",
            data: [11744, 30000, 16005, 19771, 20185, 24377, 32147, 30912, 29243, 29213, 25663]
          }, {
            name: "Operations & Maintenance",
            data: [null, null, null, null, null, null, null, null, 11164, 11218, 10077]
          }, {
            name: "Other",
            data: [21908, 5548, 8105, 11248, 8989, 11816, 18274, 17300, 13053, 11906, 10073]
          }],
          responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                legend: {
                  layout: "horizontal",
                  align: "center",
                  verticalAlign: "bottom"
                }
              }
            }]
          }
        };
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/pages/dashboard/dashboard.component.scss"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
    \*****************************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppPagesDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
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


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/pages/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var src_app_components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/components/sofbox/sofbox.module */
    "./src/app/components/sofbox/sofbox.module.ts");

    var DashboardModule = /*#__PURE__*/_createClass(function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    });

    DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"], src_app_components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_5__["SofboxModule"]]
    })], DashboardModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-dashboard-dashboard-module-es5.js.map