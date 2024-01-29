function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layouts-panel-panel-module~pages-login-login-module"], {
  /***/
  "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js ***!
    \***********************************************************************/

  /*! exports provided: NgxLoadingService, NgxLoadingComponent, NgxLoadingModule, NgxLoadingConfig, ngxLoadingAnimationTypes */

  /***/
  function node_modulesNgxLoading__ivy_ngcc__Fesm2015NgxLoadingJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxLoadingService", function () {
      return NgxLoadingService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxLoadingComponent", function () {
      return NgxLoadingComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxLoadingModule", function () {
      return NgxLoadingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxLoadingConfig", function () {
      return NgxLoadingConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ngxLoadingAnimationTypes", function () {
      return ngxLoadingAnimationTypes;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */


    var _c0 = function _c0(a0) {
      return {
        "full-screen": a0
      };
    };

    var _c1 = function _c1(a0, a1, a2, a3) {
      return {
        "border-top-color": a0,
        "border-right-color": a1,
        "border-bottom-color": a2,
        "border-left-color": a3
      };
    };

    function NgxLoadingComponent_div_0_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, (ctx_r1.config == null ? null : ctx_r1.config.fullScreenBackdrop) == true))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](4, _c1, ctx_r1.config == null ? null : ctx_r1.config.secondaryColour, ctx_r1.config == null ? null : ctx_r1.config.secondaryColour, ctx_r1.config == null ? null : ctx_r1.config.secondaryColour, ctx_r1.config == null ? null : ctx_r1.config.primaryColour));
      }
    }

    var _c2 = function _c2(a0) {
      return {
        "background-color": a0
      };
    };

    function NgxLoadingComponent_div_0_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, (ctx_r2.config == null ? null : ctx_r2.config.fullScreenBackdrop) == true));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c2, ctx_r2.config == null ? null : ctx_r2.config.primaryColour));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c2, ctx_r2.config == null ? null : ctx_r2.config.primaryColour));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c2, ctx_r2.config == null ? null : ctx_r2.config.primaryColour));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c2, ctx_r2.config == null ? null : ctx_r2.config.primaryColour));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c2, ctx_r2.config == null ? null : ctx_r2.config.primaryColour));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c2, ctx_r2.config == null ? null : ctx_r2.config.primaryColour));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c2, ctx_r2.config == null ? null : ctx_r2.config.primaryColour));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c2, ctx_r2.config == null ? null : ctx_r2.config.primaryColour));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c2, ctx_r2.config == null ? null : ctx_r2.config.primaryColour));
      }
    }

    function NgxLoadingComponent_div_0_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 25);
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, ctx_r3.config == null ? null : ctx_r3.config.primaryColour))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, (ctx_r3.config == null ? null : ctx_r3.config.fullScreenBackdrop) == true));
      }
    }

    function NgxLoadingComponent_div_0_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, (ctx_r4.config == null ? null : ctx_r4.config.fullScreenBackdrop) == true));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, ctx_r4.config == null ? null : ctx_r4.config.primaryColour));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c2, ctx_r4.config == null ? null : ctx_r4.config.primaryColour));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c2, ctx_r4.config == null ? null : ctx_r4.config.primaryColour));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c2, ctx_r4.config == null ? null : ctx_r4.config.primaryColour));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c2, ctx_r4.config == null ? null : ctx_r4.config.primaryColour));
      }
    }

    function NgxLoadingComponent_div_0_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, (ctx_r5.config == null ? null : ctx_r5.config.fullScreenBackdrop) == true));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx_r5.config == null ? null : ctx_r5.config.primaryColour));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx_r5.config == null ? null : ctx_r5.config.secondaryColour));
      }
    }

    function NgxLoadingComponent_div_0_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, (ctx_r6.config == null ? null : ctx_r6.config.fullScreenBackdrop) == true));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx_r6.config == null ? null : ctx_r6.config.primaryColour));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx_r6.config == null ? null : ctx_r6.config.secondaryColour));
      }
    }

    function NgxLoadingComponent_div_0_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 38);
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, (ctx_r7.config == null ? null : ctx_r7.config.fullScreenBackdrop) == true))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, ctx_r7.config == null ? null : ctx_r7.config.primaryColour));
      }
    }

    function NgxLoadingComponent_div_0_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, (ctx_r8.config == null ? null : ctx_r8.config.fullScreenBackdrop) == true));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx_r8.config == null ? null : ctx_r8.config.primaryColour));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx_r8.config == null ? null : ctx_r8.config.secondaryColour));
      }
    }

    var _c3 = function _c3(a0) {
      return {
        "color": a0
      };
    };

    function NgxLoadingComponent_div_0_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 42);
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, (ctx_r9.config == null ? null : ctx_r9.config.fullScreenBackdrop) == true))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, ctx_r9.config == null ? null : ctx_r9.config.primaryColour));
      }
    }

    function NgxLoadingComponent_div_0_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 43);
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, (ctx_r10.config == null ? null : ctx_r10.config.fullScreenBackdrop) == true));
      }
    }

    function NgxLoadingComponent_div_0_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, (ctx_r11.config == null ? null : ctx_r11.config.fullScreenBackdrop) == true));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, ctx_r11.config == null ? null : ctx_r11.config.primaryColour));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, ctx_r11.config == null ? null : ctx_r11.config.secondaryColour));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c2, ctx_r11.config == null ? null : ctx_r11.config.tertiaryColour));
      }
    }

    function NgxLoadingComponent_div_0_ng_container_14_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function NgxLoadingComponent_div_0_ng_container_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxLoadingComponent_div_0_ng_container_14_ng_container_1_Template, 1, 0, "ng-container", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r12.template);
      }
    }

    var _c4 = function _c4(a0, a1) {
      return {
        "border-radius": a0,
        "background-color": a1
      };
    };

    function NgxLoadingComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgxLoadingComponent_div_0_div_3_Template, 1, 9, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgxLoadingComponent_div_0_div_4_Template, 10, 30, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxLoadingComponent_div_0_div_5_Template, 1, 6, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgxLoadingComponent_div_0_div_6_Template, 6, 18, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NgxLoadingComponent_div_0_div_7_Template, 3, 9, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgxLoadingComponent_div_0_div_8_Template, 3, 9, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgxLoadingComponent_div_0_div_9_Template, 1, 6, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NgxLoadingComponent_div_0_div_10_Template, 3, 9, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NgxLoadingComponent_div_0_div_11_Template, 1, 6, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NgxLoadingComponent_div_0_div_12_Template, 1, 3, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NgxLoadingComponent_div_0_div_13_Template, 4, 12, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NgxLoadingComponent_div_0_ng_container_14_Template, 2, 1, "ng-container", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, (ctx_r0.config == null ? null : ctx_r0.config.fullScreenBackdrop) == true))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c4, ctx_r0.config == null ? null : ctx_r0.config.backdropBorderRadius, ctx_r0.config == null ? null : ctx_r0.config.backdropBackgroundColour));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r0.config == null ? null : ctx_r0.config.animationType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ngxLoadingAnimationTypes.circle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ngxLoadingAnimationTypes.cubeGrid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ngxLoadingAnimationTypes.rotatingPlane);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ngxLoadingAnimationTypes.rectangleBounce);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ngxLoadingAnimationTypes.wanderingCubes);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ngxLoadingAnimationTypes.doubleBounce);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ngxLoadingAnimationTypes.pulse);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ngxLoadingAnimationTypes.chasingDots);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ngxLoadingAnimationTypes.circleSwish);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.ngxLoadingAnimationTypes.none);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.template);
      }
    }

    var NgxLoadingConfig = /*#__PURE__*/_createClass(
    /**
     * @param {?=} config
     */
    function NgxLoadingConfig() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, NgxLoadingConfig);

      this.backdropBorderRadius = config.backdropBorderRadius;
      this.backdropBackgroundColour = config.backdropBackgroundColour;
      this.fullScreenBackdrop = config.fullScreenBackdrop;
      this.animationType = config.animationType;
      this.primaryColour = config.primaryColour;
      this.secondaryColour = config.secondaryColour;
      this.tertiaryColour = config.tertiaryColour;
    });
    /** @type {?} */


    var ngxLoadingAnimationTypes = {
      chasingDots: 'chasing-dots',
      circle: 'sk-circle',
      circleSwish: 'circleSwish',
      cubeGrid: 'sk-cube-grid',
      doubleBounce: 'double-bounce',
      none: 'none',
      pulse: 'pulse',
      rectangleBounce: 'rectangle-bounce',
      rotatingPlane: 'rotating-plane',
      threeBounce: 'three-bounce',
      wanderingCubes: 'wandering-cubes'
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    var NgxLoadingService = /*#__PURE__*/_createClass(
    /**
     * @param {?} config
     */
    function NgxLoadingService(config) {
      _classCallCheck(this, NgxLoadingService);

      this.config = config;
      this.loadingConfig = this.config || new NgxLoadingConfig();
    });

    NgxLoadingService.ɵfac = function NgxLoadingService_Factory(t) {
      return new (t || NgxLoadingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('loadingConfig', 8));
    };

    NgxLoadingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NgxLoadingService,
      factory: NgxLoadingService.ɵfac,
      providedIn: 'root'
    });
    /** @nocollapse */

    NgxLoadingService.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: ['loadingConfig']
        }]
      }];
    };
    /** @nocollapse */


    NgxLoadingService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NgxLoadingService_Factory() {
        return new NgxLoadingService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])("loadingConfig", 8));
      },
      token: NgxLoadingService,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxLoadingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['loadingConfig']
          }]
        }];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */


    var NgxLoadingComponent = /*#__PURE__*/function () {
      /**
       * @param {?} LoadingService
       * @param {?} changeDetectorRef
       */
      function NgxLoadingComponent(LoadingService, changeDetectorRef) {
        _classCallCheck(this, NgxLoadingComponent);

        this.LoadingService = LoadingService;
        this.changeDetectorRef = changeDetectorRef;
        this.config = new NgxLoadingConfig();
        this.defaultConfig = {
          animationType: ngxLoadingAnimationTypes.threeBounce,
          backdropBackgroundColour: 'rgba(0, 0, 0, 0.3)',
          backdropBorderRadius: '0px',
          fullScreenBackdrop: false,
          primaryColour: '#ffffff',
          secondaryColour: '#ffffff',
          tertiaryColour: '#ffffff'
        };
        this.ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
      }
      /**
       * @return {?}
       */


      _createClass(NgxLoadingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setupConfig();
        }
        /**
         * @return {?}
         */

      }, {
        key: "setupConfig",
        value: function setupConfig() {
          for (var option in this.defaultConfig) {
            if (typeof this.config[option] === 'boolean') {
              if (this.config[option] != null) {
                continue;
              }

              this.config[option] = this.LoadingService.loadingConfig[option] != null ? this.LoadingService.loadingConfig[option] : this.defaultConfig[option];
            } else {
              if (this.config[option] != null) {
                continue;
              }

              this.config[option] = this.LoadingService.loadingConfig[option] != null ? this.LoadingService.loadingConfig[option] : this.defaultConfig[option];
            }
          }
        }
        /**
         * @param {?} show
         * @return {?}
         */

      }, {
        key: "setShow",
        value: function setShow(show) {
          this.show = show;
          this.changeDetectorRef.markForCheck();
        }
      }]);

      return NgxLoadingComponent;
    }();

    NgxLoadingComponent.ɵfac = function NgxLoadingComponent_Factory(t) {
      return new (t || NgxLoadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgxLoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    NgxLoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgxLoadingComponent,
      selectors: [["ngx-loading"]],
      inputs: {
        config: "config",
        show: "show",
        template: "template"
      },
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "backdrop", 3, "ngClass", "ngStyle"], [3, "ngSwitch"], ["class", "spinner-circle", 3, "ngClass", "ngStyle", 4, "ngSwitchCase"], ["class", "sk-cube-grid", 3, "ngClass", 4, "ngSwitchCase"], ["class", "spinner-sk-rotateplane", 3, "ngStyle", "ngClass", 4, "ngSwitchCase"], ["class", "spinner-rectangle-bounce", 3, "ngClass", 4, "ngSwitchCase"], ["class", "spinner-wandering-cubes", 3, "ngClass", 4, "ngSwitchCase"], ["class", "spinner-double-bounce", 3, "ngClass", 4, "ngSwitchCase"], ["class", "spinner-pulse", 3, "ngClass", "ngStyle", 4, "ngSwitchCase"], ["class", "spinner-chasing-dots", 3, "ngClass", 4, "ngSwitchCase"], ["class", "spinner-circle-swish", 3, "ngClass", "ngStyle", 4, "ngSwitchCase"], [3, "ngClass", 4, "ngSwitchCase"], ["class", "spinner-three-bounce", 3, "ngClass", 4, "ngSwitchDefault"], [1, "spinner-circle", 3, "ngClass", "ngStyle"], [1, "sk-cube-grid", 3, "ngClass"], [1, "sk-cube", "sk-cube1", 3, "ngStyle"], [1, "sk-cube", "sk-cube2", 3, "ngStyle"], [1, "sk-cube", "sk-cube3", 3, "ngStyle"], [1, "sk-cube", "sk-cube4", 3, "ngStyle"], [1, "sk-cube", "sk-cube5", 3, "ngStyle"], [1, "sk-cube", "sk-cube6", 3, "ngStyle"], [1, "sk-cube", "sk-cube7", 3, "ngStyle"], [1, "sk-cube", "sk-cube8", 3, "ngStyle"], [1, "sk-cube", "sk-cube9", 3, "ngStyle"], [1, "spinner-sk-rotateplane", 3, "ngStyle", "ngClass"], [1, "spinner-rectangle-bounce", 3, "ngClass"], [1, "rect1", 3, "ngStyle"], [1, "rect2", 3, "ngStyle"], [1, "rect3", 3, "ngStyle"], [1, "rect4", 3, "ngStyle"], [1, "rect5", 3, "ngStyle"], [1, "spinner-wandering-cubes", 3, "ngClass"], [1, "cube1", 3, "ngStyle"], [1, "cube2", 3, "ngStyle"], [1, "spinner-double-bounce", 3, "ngClass"], [1, "double-bounce1", 3, "ngStyle"], [1, "double-bounce2", 3, "ngStyle"], [1, "spinner-pulse", 3, "ngClass", "ngStyle"], [1, "spinner-chasing-dots", 3, "ngClass"], [1, "dot1", 3, "ngStyle"], [1, "dot2", 3, "ngStyle"], [1, "spinner-circle-swish", 3, "ngClass", "ngStyle"], [3, "ngClass"], [1, "spinner-three-bounce", 3, "ngClass"], [1, "bounce1", 3, "ngStyle"], [1, "bounce2", 3, "ngStyle"], [1, "bounce3", 3, "ngStyle"], [4, "ngTemplateOutlet"]],
      template: function NgxLoadingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxLoadingComponent_div_0_Template, 15, 19, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]],
      styles: [".backdrop[_ngcontent-%COMP%] {\n        z-index: 1999;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: rgba(0, 0, 0, 0.3);\n      }\n\n      \n      .spinner-circle[_ngcontent-%COMP%], .spinner-circle[_ngcontent-%COMP%]:after {\n          border-radius: 50%;\n          width: 10em;\n          height: 10em;\n      }\n\n      .spinner-circle[_ngcontent-%COMP%] {\n          font-size: 6px;\n          border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n          border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n          border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\n          border-left: 1.1em solid #ffffff;\n          margin: auto;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          -webkit-transform: translateZ(0);\n          -ms-transform: translateZ(0);\n          transform: translateZ(0);\n          -webkit-animation: load8 1.1s infinite linear;\n          animation: load8 1.1s infinite linear;\n      }\n      @-webkit-keyframes load8 {\n          0% {\n              -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n          }\n          100% {\n              -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n          }\n      }\n      @keyframes load8 {\n          0% {\n              -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n          }\n          100% {\n              -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n          }\n      }\n\n      \n      .spinner-circle-swish[_ngcontent-%COMP%] {\n          font-size: 60px;\n          overflow: hidden;\n          width: 1em;\n          height: 1em;\n          z-index: 2000;\n          border-radius: 50%;\n          margin: auto;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          -webkit-transform: translateZ(0);\n          -ms-transform: translateZ(0);\n          transform: translateZ(0);\n          -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n          animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n        }\n        @-webkit-keyframes load6 {\n          0% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          5%,\n          95% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          10%,\n          59% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n          }\n          20% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n          }\n          38% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n          }\n          100% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n        }\n        @keyframes load6 {\n          0% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          5%,\n          95% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          10%,\n          59% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n          }\n          20% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n          }\n          38% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n          }\n          100% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n        }\n        @-webkit-keyframes round {\n          0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n          }\n          100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n          }\n        }\n        @keyframes round {\n          0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n          }\n          100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n          }\n        }\n\n      \n      .sk-cube-grid[_ngcontent-%COMP%] {\n          width: 40px;\n          height: 40px;\n\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .sk-cube-grid[_ngcontent-%COMP%]   .sk-cube[_ngcontent-%COMP%] {\n          width: 33%;\n          height: 33%;\n          background-color: #333;\n          float: left;\n          -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n          animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n      }\n\n      .sk-cube-grid[_ngcontent-%COMP%]   .sk-cube1[_ngcontent-%COMP%] {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n      }\n\n      .sk-cube-grid[_ngcontent-%COMP%]   .sk-cube2[_ngcontent-%COMP%] {\n          -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n      }\n\n      .sk-cube-grid[_ngcontent-%COMP%]   .sk-cube3[_ngcontent-%COMP%] {\n          -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n      }\n\n      .sk-cube-grid[_ngcontent-%COMP%]   .sk-cube4[_ngcontent-%COMP%] {\n          -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n      }\n\n      .sk-cube-grid[_ngcontent-%COMP%]   .sk-cube5[_ngcontent-%COMP%] {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n      }\n\n      .sk-cube-grid[_ngcontent-%COMP%]   .sk-cube6[_ngcontent-%COMP%] {\n          -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n      }\n\n      .sk-cube-grid[_ngcontent-%COMP%]   .sk-cube7[_ngcontent-%COMP%] {\n          -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n      }\n\n      .sk-cube-grid[_ngcontent-%COMP%]   .sk-cube8[_ngcontent-%COMP%] {\n          -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n      }\n\n      .sk-cube-grid[_ngcontent-%COMP%]   .sk-cube9[_ngcontent-%COMP%] {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n      }\n\n      @-webkit-keyframes sk-cubeGridScaleDelay {\n          0%, 70%, 100% {\n              -webkit-transform: scale3D(1, 1, 1);\n              transform: scale3D(1, 1, 1);\n          } 35% {\n              -webkit-transform: scale3D(0, 0, 1);\n              transform: scale3D(0, 0, 1);\n          }\n      }\n\n      @keyframes sk-cubeGridScaleDelay {\n          0%, 70%, 100% {\n              -webkit-transform: scale3D(1, 1, 1);\n              transform: scale3D(1, 1, 1);\n          } 35% {\n              -webkit-transform: scale3D(0, 0, 1);\n              transform: scale3D(0, 0, 1);\n          }\n      }\n\n      \n      .spinner-double-bounce[_ngcontent-%COMP%] {\n          width: 40px;\n          height: 40px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .double-bounce1[_ngcontent-%COMP%], .double-bounce2[_ngcontent-%COMP%] {\n          width: 100%;\n          height: 100%;\n          border-radius: 50%;\n          background-color: #333;\n          opacity: 0.6;\n          position: absolute;\n          top: 0;\n          left: 0;\n          -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n          animation: sk-bounce 2.0s infinite ease-in-out;\n      }\n\n      .double-bounce2[_ngcontent-%COMP%] {\n          -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s;\n      }\n\n      @-webkit-keyframes sk-bounce {\n          0%, 100% { -webkit-transform: scale(0.0) }\n          50% { -webkit-transform: scale(1.0) }\n      }\n\n      @keyframes sk-bounce {\n          0%, 100% {\n            transform: scale(0.0);\n            -webkit-transform: scale(0.0);\n          } 50% {\n            transform: scale(1.0);\n            -webkit-transform: scale(1.0);\n          }\n      }\n\n      \n      .spinner-pulse[_ngcontent-%COMP%] {\n          width: 40px;\n          height: 40px;\n          background-color: #333;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          border-radius: 100%;\n          -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;\n          animation: sk-scaleout 1.0s infinite ease-in-out;\n      }\n\n      @-webkit-keyframes sk-scaleout {\n          0% { -webkit-transform: scale(0) }\n          100% {\n            -webkit-transform: scale(1.0);\n            opacity: 0;\n          }\n      }\n\n      @keyframes sk-scaleout {\n          0% {\n            -webkit-transform: scale(0);\n            transform: scale(0);\n          } 100% {\n            -webkit-transform: scale(1.0);\n            transform: scale(1.0);\n            opacity: 0;\n          }\n      }\n\n      \n      .spinner-three-bounce[_ngcontent-%COMP%] {\n          width: 70px;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          height: 20px;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .spinner-three-bounce[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n          width: 18px;\n          height: 18px;\n          background-color: #ffffff;\n\n          border-radius: 100%;\n          display: inline-block;\n          -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n          animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n      }\n\n      .spinner-three-bounce[_ngcontent-%COMP%]   .bounce1[_ngcontent-%COMP%] {\n          -webkit-animation-delay: -0.32s;\n          animation-delay: -0.32s;\n      }\n\n      .spinner-three-bounce[_ngcontent-%COMP%]   .bounce2[_ngcontent-%COMP%] {\n          -webkit-animation-delay: -0.16s;\n          animation-delay: -0.16s;\n      }\n\n      @-webkit-keyframes sk-bouncedelay {\n          0%, 80%, 100% { -webkit-transform: scale(0) }\n          40% { -webkit-transform: scale(1.0) }\n      }\n\n      @keyframes sk-bouncedelay {\n          0%, 80%, 100% {\n              -webkit-transform: scale(0);\n              transform: scale(0);\n          } 40% {\n              -webkit-transform: scale(1.0);\n              transform: scale(1.0);\n          }\n      }\n\n      \n      .spinner-sk-rotateplane[_ngcontent-%COMP%] {\n          width: 40px;\n          height: 40px;\n          background-color: #ffffff;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\n          animation: sk-rotateplane 1.2s infinite ease-in-out;\n      }\n\n      @-webkit-keyframes sk-rotateplane {\n          0% { -webkit-transform: perspective(120px) }\n          50% { -webkit-transform: perspective(120px) rotateY(180deg) }\n          100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }\n      }\n\n      @keyframes sk-rotateplane {\n          0% {\n              transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n              -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)\n          } 50% {\n              transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n              -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)\n          } 100% {\n              transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n              -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n          }\n      }\n\n      \n      .spinner-rectangle-bounce[_ngcontent-%COMP%] {\n          width: 50px;\n          height: 40px;\n          font-size: 10px;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .spinner-rectangle-bounce[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n          background-color: #ffffff;\n          height: 100%;\n          width: 6px;\n          display: inline-block;\n          -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n          animation: sk-stretchdelay 1.2s infinite ease-in-out;\n      }\n\n      .spinner-rectangle-bounce[_ngcontent-%COMP%]   .rect2[_ngcontent-%COMP%] {\n          -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s;\n      }\n\n      .spinner-rectangle-bounce[_ngcontent-%COMP%]   .rect3[_ngcontent-%COMP%] {\n          -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s;\n      }\n\n      .spinner-rectangle-bounce[_ngcontent-%COMP%]   .rect4[_ngcontent-%COMP%] {\n          -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n      }\n\n      .spinner-rectangle-bounce[_ngcontent-%COMP%]   .rect5[_ngcontent-%COMP%] {\n          -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n      }\n\n      @-webkit-keyframes sk-stretchdelay {\n          0%, 40%, 100% { -webkit-transform: scaleY(0.4) }\n          20% { -webkit-transform: scaleY(1.0) }\n      }\n\n      @keyframes sk-stretchdelay {\n          0%, 40%, 100% {\n              transform: scaleY(0.4);\n              -webkit-transform: scaleY(0.4);\n          }  20% {\n              transform: scaleY(1.0);\n              -webkit-transform: scaleY(1.0);\n          }\n      }\n\n      \n      .spinner-wandering-cubes[_ngcontent-%COMP%] {\n          width: 60px;\n          height: 58px;\n          font-size: 10px;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .cube1[_ngcontent-%COMP%], .cube2[_ngcontent-%COMP%] {\n          background-color: #ffffff;\n          width: 15px;\n          height: 15px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;\n          animation: sk-cubemove 1.8s infinite ease-in-out;\n      }\n\n      .cube2[_ngcontent-%COMP%] {\n          -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n      }\n\n      @-webkit-keyframes sk-cubemove {\n          25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }\n          50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }\n          75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }\n          100% { -webkit-transform: rotate(-360deg) }\n      }\n\n      @keyframes sk-cubemove {\n          25% {\n              transform: translateX(42px) rotate(-90deg) scale(0.5);\n              -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);\n          } 50% {\n              transform: translateX(42px) translateY(42px) rotate(-179deg);\n              -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);\n          } 50.1% {\n              transform: translateX(42px) translateY(42px) rotate(-180deg);\n              -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);\n          } 75% {\n              transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n              -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n          } 100% {\n              transform: rotate(-360deg);\n              -webkit-transform: rotate(-360deg);\n          }\n      }\n\n      \n      .sk-circle[_ngcontent-%COMP%] {\n          width: 40px;\n          height: 40px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n        }\n        .sk-circle[_ngcontent-%COMP%]   .sk-child[_ngcontent-%COMP%] {\n          width: 100%;\n          height: 100%;\n          position: absolute;\n          left: 0;\n          top: 0;\n        }\n        .sk-circle[_ngcontent-%COMP%]   .sk-child[_ngcontent-%COMP%]:before {\n          content: '';\n          display: block;\n          margin: 0 auto;\n          width: 15%;\n          height: 15%;\n          background-color: #333;\n          border-radius: 100%;\n          -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n                  animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n        }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle2[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(30deg);\n              -ms-transform: rotate(30deg);\n                  transform: rotate(30deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle3[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(60deg);\n              -ms-transform: rotate(60deg);\n                  transform: rotate(60deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle4[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(90deg);\n              -ms-transform: rotate(90deg);\n                  transform: rotate(90deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle5[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(120deg);\n              -ms-transform: rotate(120deg);\n                  transform: rotate(120deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle6[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(150deg);\n              -ms-transform: rotate(150deg);\n                  transform: rotate(150deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle7[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(180deg);\n              -ms-transform: rotate(180deg);\n                  transform: rotate(180deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle8[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(210deg);\n              -ms-transform: rotate(210deg);\n                  transform: rotate(210deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle9[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(240deg);\n              -ms-transform: rotate(240deg);\n                  transform: rotate(240deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle10[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(270deg);\n              -ms-transform: rotate(270deg);\n                  transform: rotate(270deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle11[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(300deg);\n              -ms-transform: rotate(300deg);\n                  transform: rotate(300deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle12[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(330deg);\n              -ms-transform: rotate(330deg);\n                  transform: rotate(330deg); }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle2[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -1.1s;\n                  animation-delay: -1.1s; }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle3[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -1s;\n                  animation-delay: -1s; }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle4[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -0.9s;\n                  animation-delay: -0.9s; }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle5[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -0.8s;\n                  animation-delay: -0.8s; }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle6[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -0.7s;\n                  animation-delay: -0.7s; }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle7[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -0.6s;\n                  animation-delay: -0.6s; }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle8[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -0.5s;\n                  animation-delay: -0.5s; }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle9[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -0.4s;\n                  animation-delay: -0.4s; }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle10[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -0.3s;\n                  animation-delay: -0.3s; }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle11[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -0.2s;\n                  animation-delay: -0.2s; }\n        .sk-circle[_ngcontent-%COMP%]   .sk-circle12[_ngcontent-%COMP%]:before {\n          -webkit-animation-delay: -0.1s;\n                  animation-delay: -0.1s; }\n\n        @-webkit-keyframes sk-circleBounceDelay {\n          0%, 80%, 100% {\n            -webkit-transform: scale(0);\n                    transform: scale(0);\n          } 40% {\n            -webkit-transform: scale(1);\n                    transform: scale(1);\n          }\n        }\n\n        @keyframes sk-circleBounceDelay {\n          0%, 80%, 100% {\n            -webkit-transform: scale(0);\n                    transform: scale(0);\n          } 40% {\n            -webkit-transform: scale(1);\n                    transform: scale(1);\n          }\n        }\n\n        \n        .spinner-chasing-dots[_ngcontent-%COMP%] {\n          width: 40px;\n          height: 40px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          text-align: center;\n          -webkit-animation: sk-rotate 2.0s infinite linear;\n          animation: sk-rotate 2.0s infinite linear;\n        }\n\n        .dot1[_ngcontent-%COMP%], .dot2[_ngcontent-%COMP%] {\n          width: 60%;\n          height: 60%;\n          display: inline-block;\n          position: absolute;\n          top: 0;\n          background-color: #333;\n          border-radius: 100%;\n          -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n          animation: sk-bounce 2.0s infinite ease-in-out;\n        }\n\n        .dot2[_ngcontent-%COMP%] {\n          top: auto;\n          bottom: 0;\n          -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s;\n        }\n\n        @-webkit-keyframes sk-rotate { 100% { -webkit-transform: rotate(360deg) }}\n        @keyframes sk-rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}\n\n        @-webkit-keyframes sk-bounce {\n          0%, 100% { -webkit-transform: scale(0.0) }\n          50% { -webkit-transform: scale(1.0) }\n        }\n\n        @keyframes sk-bounce {\n          0%, 100% {\n            transform: scale(0.0);\n            -webkit-transform: scale(0.0);\n          } 50% {\n            transform: scale(1.0);\n            -webkit-transform: scale(1.0);\n          }\n        }\n\n      .full-screen[_ngcontent-%COMP%] {\n          position: fixed;\n          position: -ms-page;\n      }"]
    });
    /** @nocollapse */

    NgxLoadingComponent.ctorParameters = function () {
      return [{
        type: NgxLoadingService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    NgxLoadingComponent.propDecorators = {
      show: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      config: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      template: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxLoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngx-loading',
          template: "\n    <div *ngIf=\"show\">\n      <div class=\"backdrop\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\" [ngStyle]=\"{'border-radius': config?.backdropBorderRadius, 'background-color': config?.backdropBackgroundColour}\"></div>\n\n      <div [ngSwitch]=\"config?.animationType\">\n        <div class=\"spinner-circle\" *ngSwitchCase=\"ngxLoadingAnimationTypes.circle\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\"\n          [ngStyle]=\"{'border-top-color': config?.secondaryColour, 'border-right-color': config?.secondaryColour, 'border-bottom-color': config?.secondaryColour, 'border-left-color': config?.primaryColour}\">\n        </div>\n\n        <div *ngSwitchCase=\"ngxLoadingAnimationTypes.cubeGrid\" class=\"sk-cube-grid\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"sk-cube sk-cube1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube2\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube3\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube4\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube5\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube6\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube7\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube8\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube9\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n        </div>\n\n        <div class=\"spinner-sk-rotateplane\" *ngSwitchCase=\"ngxLoadingAnimationTypes.rotatingPlane\" [ngStyle]=\"{'background-color': config?.primaryColour}\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\"></div>\n\n        <div class=\"spinner-rectangle-bounce\" *ngSwitchCase=\"ngxLoadingAnimationTypes.rectangleBounce\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"rect1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"rect2\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"rect3\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"rect4\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"rect5\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n        </div>\n\n        <div class=\"spinner-wandering-cubes\" *ngSwitchCase=\"ngxLoadingAnimationTypes.wanderingCubes\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"cube1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"cube2\" [ngStyle]=\"{'background-color': config?.secondaryColour}\"></div>\n        </div>\n\n        <div class=\"spinner-double-bounce\" *ngSwitchCase=\"ngxLoadingAnimationTypes.doubleBounce\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"double-bounce1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"double-bounce2\" [ngStyle]=\"{'background-color': config?.secondaryColour}\"></div>\n        </div>\n\n        <div class=\"spinner-pulse\" *ngSwitchCase=\"ngxLoadingAnimationTypes.pulse\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n\n        <div class=\"spinner-chasing-dots\" *ngSwitchCase=\"ngxLoadingAnimationTypes.chasingDots\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"dot1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"dot2\" [ngStyle]=\"{'background-color': config?.secondaryColour}\"></div>\n        </div>\n\n        <div class=\"spinner-circle-swish\" *ngSwitchCase=\"ngxLoadingAnimationTypes.circleSwish\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\" [ngStyle]=\"{'color': config?.primaryColour}\"></div>\n\n        <div *ngSwitchCase=\"ngxLoadingAnimationTypes.none\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\"></div>\n\n        <div *ngSwitchDefault class=\"spinner-three-bounce\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"bounce1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"bounce2\" [ngStyle]=\"{'background-color': config?.secondaryColour}\"></div>\n          <div class=\"bounce3\" [ngStyle]=\"{'background-color': config?.tertiaryColour}\"></div>\n        </div>\n        \n        <ng-container *ngIf=\"template\">\n            <ng-container *ngTemplateOutlet=\"template\"></ng-container>\n        </ng-container>\n      </div>\n    </div>\n  ",
          styles: ["\n      .backdrop {\n        z-index: 1999;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: rgba(0, 0, 0, 0.3);\n      }\n\n      /* Spinner Circle styles */\n      .spinner-circle,\n      .spinner-circle:after {\n          border-radius: 50%;\n          width: 10em;\n          height: 10em;\n      }\n\n      .spinner-circle {\n          font-size: 6px;\n          border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n          border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n          border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\n          border-left: 1.1em solid #ffffff;\n          margin: auto;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          -webkit-transform: translateZ(0);\n          -ms-transform: translateZ(0);\n          transform: translateZ(0);\n          -webkit-animation: load8 1.1s infinite linear;\n          animation: load8 1.1s infinite linear;\n      }\n      @-webkit-keyframes load8 {\n          0% {\n              -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n          }\n          100% {\n              -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n          }\n      }\n      @keyframes load8 {\n          0% {\n              -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n          }\n          100% {\n              -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n          }\n      }\n\n      /* Circle Swish styles */\n      .spinner-circle-swish {\n          font-size: 60px;\n          overflow: hidden;\n          width: 1em;\n          height: 1em;\n          z-index: 2000;\n          border-radius: 50%;\n          margin: auto;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          -webkit-transform: translateZ(0);\n          -ms-transform: translateZ(0);\n          transform: translateZ(0);\n          -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n          animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n        }\n        @-webkit-keyframes load6 {\n          0% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          5%,\n          95% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          10%,\n          59% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n          }\n          20% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n          }\n          38% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n          }\n          100% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n        }\n        @keyframes load6 {\n          0% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          5%,\n          95% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          10%,\n          59% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n          }\n          20% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n          }\n          38% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n          }\n          100% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n        }\n        @-webkit-keyframes round {\n          0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n          }\n          100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n          }\n        }\n        @keyframes round {\n          0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n          }\n          100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n          }\n        }\n\n      /* Cube Grid styles */\n      .sk-cube-grid {\n          width: 40px;\n          height: 40px;\n\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .sk-cube-grid .sk-cube {\n          width: 33%;\n          height: 33%;\n          background-color: #333;\n          float: left;\n          -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n          animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n      }\n\n      .sk-cube-grid .sk-cube1 {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n      }\n\n      .sk-cube-grid .sk-cube2 {\n          -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n      }\n\n      .sk-cube-grid .sk-cube3 {\n          -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n      }\n\n      .sk-cube-grid .sk-cube4 {\n          -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n      }\n\n      .sk-cube-grid .sk-cube5 {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n      }\n\n      .sk-cube-grid .sk-cube6 {\n          -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n      }\n\n      .sk-cube-grid .sk-cube7 {\n          -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n      }\n\n      .sk-cube-grid .sk-cube8 {\n          -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n      }\n\n      .sk-cube-grid .sk-cube9 {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n      }\n\n      @-webkit-keyframes sk-cubeGridScaleDelay {\n          0%, 70%, 100% {\n              -webkit-transform: scale3D(1, 1, 1);\n              transform: scale3D(1, 1, 1);\n          } 35% {\n              -webkit-transform: scale3D(0, 0, 1);\n              transform: scale3D(0, 0, 1);\n          }\n      }\n\n      @keyframes sk-cubeGridScaleDelay {\n          0%, 70%, 100% {\n              -webkit-transform: scale3D(1, 1, 1);\n              transform: scale3D(1, 1, 1);\n          } 35% {\n              -webkit-transform: scale3D(0, 0, 1);\n              transform: scale3D(0, 0, 1);\n          }\n      }\n\n      /* Double Bounce styles */\n      .spinner-double-bounce {\n          width: 40px;\n          height: 40px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .double-bounce1, .double-bounce2 {\n          width: 100%;\n          height: 100%;\n          border-radius: 50%;\n          background-color: #333;\n          opacity: 0.6;\n          position: absolute;\n          top: 0;\n          left: 0;\n          -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n          animation: sk-bounce 2.0s infinite ease-in-out;\n      }\n\n      .double-bounce2 {\n          -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s;\n      }\n\n      @-webkit-keyframes sk-bounce {\n          0%, 100% { -webkit-transform: scale(0.0) }\n          50% { -webkit-transform: scale(1.0) }\n      }\n\n      @keyframes sk-bounce {\n          0%, 100% {\n            transform: scale(0.0);\n            -webkit-transform: scale(0.0);\n          } 50% {\n            transform: scale(1.0);\n            -webkit-transform: scale(1.0);\n          }\n      }\n\n      /* Pulse styles */\n      .spinner-pulse {\n          width: 40px;\n          height: 40px;\n          background-color: #333;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          border-radius: 100%;\n          -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;\n          animation: sk-scaleout 1.0s infinite ease-in-out;\n      }\n\n      @-webkit-keyframes sk-scaleout {\n          0% { -webkit-transform: scale(0) }\n          100% {\n            -webkit-transform: scale(1.0);\n            opacity: 0;\n          }\n      }\n\n      @keyframes sk-scaleout {\n          0% {\n            -webkit-transform: scale(0);\n            transform: scale(0);\n          } 100% {\n            -webkit-transform: scale(1.0);\n            transform: scale(1.0);\n            opacity: 0;\n          }\n      }\n\n      /* Three Bounce styles */\n      .spinner-three-bounce {\n          width: 70px;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          height: 20px;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .spinner-three-bounce > div {\n          width: 18px;\n          height: 18px;\n          background-color: #ffffff;\n\n          border-radius: 100%;\n          display: inline-block;\n          -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n          animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n      }\n\n      .spinner-three-bounce .bounce1 {\n          -webkit-animation-delay: -0.32s;\n          animation-delay: -0.32s;\n      }\n\n      .spinner-three-bounce .bounce2 {\n          -webkit-animation-delay: -0.16s;\n          animation-delay: -0.16s;\n      }\n\n      @-webkit-keyframes sk-bouncedelay {\n          0%, 80%, 100% { -webkit-transform: scale(0) }\n          40% { -webkit-transform: scale(1.0) }\n      }\n\n      @keyframes sk-bouncedelay {\n          0%, 80%, 100% {\n              -webkit-transform: scale(0);\n              transform: scale(0);\n          } 40% {\n              -webkit-transform: scale(1.0);\n              transform: scale(1.0);\n          }\n      }\n\n      /* Rotate Plane styles */\n      .spinner-sk-rotateplane {\n          width: 40px;\n          height: 40px;\n          background-color: #ffffff;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\n          animation: sk-rotateplane 1.2s infinite ease-in-out;\n      }\n\n      @-webkit-keyframes sk-rotateplane {\n          0% { -webkit-transform: perspective(120px) }\n          50% { -webkit-transform: perspective(120px) rotateY(180deg) }\n          100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }\n      }\n\n      @keyframes sk-rotateplane {\n          0% {\n              transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n              -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)\n          } 50% {\n              transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n              -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)\n          } 100% {\n              transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n              -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n          }\n      }\n\n      /* Rectangle Bounce styles*/\n      .spinner-rectangle-bounce {\n          width: 50px;\n          height: 40px;\n          font-size: 10px;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .spinner-rectangle-bounce > div {\n          background-color: #ffffff;\n          height: 100%;\n          width: 6px;\n          display: inline-block;\n          -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n          animation: sk-stretchdelay 1.2s infinite ease-in-out;\n      }\n\n      .spinner-rectangle-bounce .rect2 {\n          -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s;\n      }\n\n      .spinner-rectangle-bounce .rect3 {\n          -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s;\n      }\n\n      .spinner-rectangle-bounce .rect4 {\n          -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n      }\n\n      .spinner-rectangle-bounce .rect5 {\n          -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n      }\n\n      @-webkit-keyframes sk-stretchdelay {\n          0%, 40%, 100% { -webkit-transform: scaleY(0.4) }\n          20% { -webkit-transform: scaleY(1.0) }\n      }\n\n      @keyframes sk-stretchdelay {\n          0%, 40%, 100% {\n              transform: scaleY(0.4);\n              -webkit-transform: scaleY(0.4);\n          }  20% {\n              transform: scaleY(1.0);\n              -webkit-transform: scaleY(1.0);\n          }\n      }\n\n      /* Wandering Cubes styles */\n      .spinner-wandering-cubes {\n          width: 60px;\n          height: 58px;\n          font-size: 10px;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .cube1, .cube2 {\n          background-color: #ffffff;\n          width: 15px;\n          height: 15px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;\n          animation: sk-cubemove 1.8s infinite ease-in-out;\n      }\n\n      .cube2 {\n          -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n      }\n\n      @-webkit-keyframes sk-cubemove {\n          25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }\n          50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }\n          75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }\n          100% { -webkit-transform: rotate(-360deg) }\n      }\n\n      @keyframes sk-cubemove {\n          25% {\n              transform: translateX(42px) rotate(-90deg) scale(0.5);\n              -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);\n          } 50% {\n              transform: translateX(42px) translateY(42px) rotate(-179deg);\n              -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);\n          } 50.1% {\n              transform: translateX(42px) translateY(42px) rotate(-180deg);\n              -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);\n          } 75% {\n              transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n              -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n          } 100% {\n              transform: rotate(-360deg);\n              -webkit-transform: rotate(-360deg);\n          }\n      }\n\n      /* Circle styles */\n      .sk-circle {\n          width: 40px;\n          height: 40px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n        }\n        .sk-circle .sk-child {\n          width: 100%;\n          height: 100%;\n          position: absolute;\n          left: 0;\n          top: 0;\n        }\n        .sk-circle .sk-child:before {\n          content: '';\n          display: block;\n          margin: 0 auto;\n          width: 15%;\n          height: 15%;\n          background-color: #333;\n          border-radius: 100%;\n          -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n                  animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n        }\n        .sk-circle .sk-circle2 {\n          -webkit-transform: rotate(30deg);\n              -ms-transform: rotate(30deg);\n                  transform: rotate(30deg); }\n        .sk-circle .sk-circle3 {\n          -webkit-transform: rotate(60deg);\n              -ms-transform: rotate(60deg);\n                  transform: rotate(60deg); }\n        .sk-circle .sk-circle4 {\n          -webkit-transform: rotate(90deg);\n              -ms-transform: rotate(90deg);\n                  transform: rotate(90deg); }\n        .sk-circle .sk-circle5 {\n          -webkit-transform: rotate(120deg);\n              -ms-transform: rotate(120deg);\n                  transform: rotate(120deg); }\n        .sk-circle .sk-circle6 {\n          -webkit-transform: rotate(150deg);\n              -ms-transform: rotate(150deg);\n                  transform: rotate(150deg); }\n        .sk-circle .sk-circle7 {\n          -webkit-transform: rotate(180deg);\n              -ms-transform: rotate(180deg);\n                  transform: rotate(180deg); }\n        .sk-circle .sk-circle8 {\n          -webkit-transform: rotate(210deg);\n              -ms-transform: rotate(210deg);\n                  transform: rotate(210deg); }\n        .sk-circle .sk-circle9 {\n          -webkit-transform: rotate(240deg);\n              -ms-transform: rotate(240deg);\n                  transform: rotate(240deg); }\n        .sk-circle .sk-circle10 {\n          -webkit-transform: rotate(270deg);\n              -ms-transform: rotate(270deg);\n                  transform: rotate(270deg); }\n        .sk-circle .sk-circle11 {\n          -webkit-transform: rotate(300deg);\n              -ms-transform: rotate(300deg);\n                  transform: rotate(300deg); }\n        .sk-circle .sk-circle12 {\n          -webkit-transform: rotate(330deg);\n              -ms-transform: rotate(330deg);\n                  transform: rotate(330deg); }\n        .sk-circle .sk-circle2:before {\n          -webkit-animation-delay: -1.1s;\n                  animation-delay: -1.1s; }\n        .sk-circle .sk-circle3:before {\n          -webkit-animation-delay: -1s;\n                  animation-delay: -1s; }\n        .sk-circle .sk-circle4:before {\n          -webkit-animation-delay: -0.9s;\n                  animation-delay: -0.9s; }\n        .sk-circle .sk-circle5:before {\n          -webkit-animation-delay: -0.8s;\n                  animation-delay: -0.8s; }\n        .sk-circle .sk-circle6:before {\n          -webkit-animation-delay: -0.7s;\n                  animation-delay: -0.7s; }\n        .sk-circle .sk-circle7:before {\n          -webkit-animation-delay: -0.6s;\n                  animation-delay: -0.6s; }\n        .sk-circle .sk-circle8:before {\n          -webkit-animation-delay: -0.5s;\n                  animation-delay: -0.5s; }\n        .sk-circle .sk-circle9:before {\n          -webkit-animation-delay: -0.4s;\n                  animation-delay: -0.4s; }\n        .sk-circle .sk-circle10:before {\n          -webkit-animation-delay: -0.3s;\n                  animation-delay: -0.3s; }\n        .sk-circle .sk-circle11:before {\n          -webkit-animation-delay: -0.2s;\n                  animation-delay: -0.2s; }\n        .sk-circle .sk-circle12:before {\n          -webkit-animation-delay: -0.1s;\n                  animation-delay: -0.1s; }\n\n        @-webkit-keyframes sk-circleBounceDelay {\n          0%, 80%, 100% {\n            -webkit-transform: scale(0);\n                    transform: scale(0);\n          } 40% {\n            -webkit-transform: scale(1);\n                    transform: scale(1);\n          }\n        }\n\n        @keyframes sk-circleBounceDelay {\n          0%, 80%, 100% {\n            -webkit-transform: scale(0);\n                    transform: scale(0);\n          } 40% {\n            -webkit-transform: scale(1);\n                    transform: scale(1);\n          }\n        }\n\n        /* Chasing Dots styles */\n        .spinner-chasing-dots {\n          width: 40px;\n          height: 40px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          text-align: center;\n          -webkit-animation: sk-rotate 2.0s infinite linear;\n          animation: sk-rotate 2.0s infinite linear;\n        }\n\n        .dot1, .dot2 {\n          width: 60%;\n          height: 60%;\n          display: inline-block;\n          position: absolute;\n          top: 0;\n          background-color: #333;\n          border-radius: 100%;\n          -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n          animation: sk-bounce 2.0s infinite ease-in-out;\n        }\n\n        .dot2 {\n          top: auto;\n          bottom: 0;\n          -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s;\n        }\n\n        @-webkit-keyframes sk-rotate { 100% { -webkit-transform: rotate(360deg) }}\n        @keyframes sk-rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}\n\n        @-webkit-keyframes sk-bounce {\n          0%, 100% { -webkit-transform: scale(0.0) }\n          50% { -webkit-transform: scale(1.0) }\n        }\n\n        @keyframes sk-bounce {\n          0%, 100% {\n            transform: scale(0.0);\n            -webkit-transform: scale(0.0);\n          } 50% {\n            transform: scale(1.0);\n            -webkit-transform: scale(1.0);\n          }\n        }\n\n      .full-screen {\n          position: fixed;\n          position: -ms-page;\n      }\n    "]
        }]
      }], function () {
        return [{
          type: NgxLoadingService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        show: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */


    var NgxLoadingModule = /*#__PURE__*/function () {
      function NgxLoadingModule() {
        _classCallCheck(this, NgxLoadingModule);
      }

      _createClass(NgxLoadingModule, null, [{
        key: "forRoot",
        value:
        /**
         * @param {?} loadingConfig
         * @return {?}
         */
        function forRoot(loadingConfig) {
          return {
            ngModule: NgxLoadingModule,
            providers: [{
              provide: 'loadingConfig',
              useValue: loadingConfig
            }]
          };
        }
      }]);

      return NgxLoadingModule;
    }();

    NgxLoadingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NgxLoadingModule
    });
    NgxLoadingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NgxLoadingModule_Factory(t) {
        return new (t || NgxLoadingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxLoadingModule, {
        declarations: function declarations() {
          return [NgxLoadingComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
        },
        exports: function exports() {
          return [NgxLoadingComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxLoadingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [NgxLoadingComponent],
          exports: [NgxLoadingComponent]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvYWRpbmcuanMiLCJzb3VyY2VzIjpbIm5nOi9uZ3gtbG9hZGluZy9saWIvbmd4LWxvYWRpbmctY29uZmlnLnRzIiwibmc6L25neC1sb2FkaW5nL2xpYi9uZ3gtbG9hZGluZy5zZXJ2aWNlLnRzIiwibmc6L25neC1sb2FkaW5nL2xpYi9uZ3gtbG9hZGluZy5jb21wb25lbnQudHMiLCJuZzovbmd4LWxvYWRpbmcvbGliL25neC1sb2FkaW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQVdhLGdCQUFnQjs7OztJQVV6QixZQUFZLFNBQTRCLEVBQUU7UUFDdEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztRQUN4RCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDO1FBQ2hFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUM7UUFDcEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzFDLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUMxQyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUM7UUFDOUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO0tBQy9DO0NBQ0o7O0FBRUQsTUFBYSx3QkFBd0IsR0FBRztJQUNwQyxXQUFXLEVBQUUsY0FBYztJQUMzQixNQUFNLEVBQUUsV0FBVztJQUNuQixXQUFXLEVBQUUsYUFBYTtJQUMxQixRQUFRLEVBQUUsY0FBYztJQUN4QixZQUFZLEVBQUUsZUFBZTtJQUM3QixJQUFJLEVBQUUsTUFBTTtJQUNaLEtBQUssRUFBRSxPQUFPO0lBQ2QsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLFdBQVcsRUFBRSxjQUFjO0lBQzNCLGNBQWMsRUFBRSxpQkFBaUI7Q0FDcEM7Ozs7OztBQzVDRCxNQU1hLGlCQUFpQjs7OztJQUc1QixZQUF5RCxNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUNoRixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO0tBQzVEOzs7Q0FDRiw4Q0FUQSxVQUFVLFNBQUMsa0JBQ1YsVUFBVSxFQUFFLE1BQU0sY0FDbkIsbUJBQ0s7Ozs0Q0FHUyxRQUFRLFlBQUksTUFBTSxTQUFDLGVBQWU7Ozs7Ozs7Ozs7Ozs7a0NBSXdGOzs7Ozs7QUNiekksTUEwd0JhLG1CQUFtQjs7Ozs7SUFlNUIsWUFBb0IsY0FBaUMsRUFBVSxpQkFBb0M7UUFBL0UsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQWIxRixXQUFNLEdBQXNCLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUVwRCxrQkFBYSxHQUFzQjtZQUN2QyxhQUFhLEVBQUUsd0JBQXdCLENBQUMsV0FBVztZQUNuRCx3QkFBd0IsRUFBRSxvQkFBb0I7WUFDOUMsb0JBQW9CLEVBQUUsS0FBSztZQUMzQixrQkFBa0IsRUFBRSxLQUFLO1lBQ3pCLGFBQWEsRUFBRSxTQUFTO1lBQ3hCLGVBQWUsRUFBRSxTQUFTO1lBQzFCLGNBQWMsRUFBRSxTQUFTO1NBQzVCLENBQUM7UUFDSyw2QkFBd0IsR0FBRyx3QkFBd0IsQ0FBQztLQUU2Qzs7OztJQUV4RyxRQUFRO1FBQ0osSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3RCOzs7O0lBRU8sV0FBVztRQUNmLEtBQUssTUFBTSxNQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNyQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBQzFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUU7b0JBQzdCLFNBQVM7aUJBQ1o7Z0JBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNwSjtpQkFBTTtnQkFDSCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFO29CQUM3QixTQUFTO2lCQUNaO2dCQUVELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDcEo7U0FDSjtLQUNKOzs7OztJQUVNLE9BQU8sQ0FBQyxJQUFhO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN6Qzs7Ozs7OztDQUNKLGdEQWp6QkEsU0FBUyxTQUFDLGtCQUNQLFFBQVEsRUFBRSxhQUFhLGtCQUN2QixRQUFRLEVBQUUsMnhKQStEWCxrQkFDQyxNQUFNLEVBQUUsc0JBQ0osMjRsQkFtc0JGOzs7WUF4d0JHLGlCQUFpQjtZQUZqQixpQkFBaUI7OzttQkEyd0JyQixLQUFLO3FCQUNMLEtBQUs7dUJBQ0wsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tKQU5MLGtCQUNBLGNBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBSWU7Ozs7OztBQzd3QmhCLE1BVWEsZ0JBQWdCOzs7OztJQUMzQixPQUFPLE9BQU8sQ0FBQyxhQUFnQztRQUM3QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxDQUFDO1NBQ25FLENBQUM7S0FDSDs7O0NBQ0YsNkNBWkEsUUFBUSxTQUFDLGtCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxrQkFDdkIsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7TUFDbkMsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUMsY0FDL0I7Ozs7Ozs7OzBCQUNLIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBJTmd4TG9hZGluZ0NvbmZpZyB7XHJcbiAgICBiYWNrZHJvcEJvcmRlclJhZGl1cz86IHN0cmluZztcclxuICAgIGJhY2tkcm9wQmFja2dyb3VuZENvbG91cj86IHN0cmluZztcclxuICAgIGZ1bGxTY3JlZW5CYWNrZHJvcD86IGJvb2xlYW47XHJcbiAgICBhbmltYXRpb25UeXBlPzogc3RyaW5nO1xyXG4gICAgcHJpbWFyeUNvbG91cj86IHN0cmluZztcclxuICAgIHNlY29uZGFyeUNvbG91cj86IHN0cmluZztcclxuICAgIHRlcnRpYXJ5Q29sb3VyPzogc3RyaW5nO1xyXG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgYm9vbGVhbiB8IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5neExvYWRpbmdDb25maWcgaW1wbGVtZW50cyBJTmd4TG9hZGluZ0NvbmZpZyB7XHJcbiAgICBiYWNrZHJvcEJvcmRlclJhZGl1cz86IHN0cmluZztcclxuICAgIGJhY2tkcm9wQmFja2dyb3VuZENvbG91cj86IHN0cmluZztcclxuICAgIGZ1bGxTY3JlZW5CYWNrZHJvcD86IGJvb2xlYW47XHJcbiAgICBhbmltYXRpb25UeXBlPzogc3RyaW5nO1xyXG4gICAgcHJpbWFyeUNvbG91cj86IHN0cmluZztcclxuICAgIHNlY29uZGFyeUNvbG91cj86IHN0cmluZztcclxuICAgIHRlcnRpYXJ5Q29sb3VyPzogc3RyaW5nO1xyXG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgYm9vbGVhbiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IElOZ3hMb2FkaW5nQ29uZmlnID0ge30pIHtcclxuICAgICAgICB0aGlzLmJhY2tkcm9wQm9yZGVyUmFkaXVzID0gY29uZmlnLmJhY2tkcm9wQm9yZGVyUmFkaXVzO1xyXG4gICAgICAgIHRoaXMuYmFja2Ryb3BCYWNrZ3JvdW5kQ29sb3VyID0gY29uZmlnLmJhY2tkcm9wQmFja2dyb3VuZENvbG91cjtcclxuICAgICAgICB0aGlzLmZ1bGxTY3JlZW5CYWNrZHJvcCA9IGNvbmZpZy5mdWxsU2NyZWVuQmFja2Ryb3A7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25UeXBlID0gY29uZmlnLmFuaW1hdGlvblR5cGU7XHJcbiAgICAgICAgdGhpcy5wcmltYXJ5Q29sb3VyID0gY29uZmlnLnByaW1hcnlDb2xvdXI7XHJcbiAgICAgICAgdGhpcy5zZWNvbmRhcnlDb2xvdXIgPSBjb25maWcuc2Vjb25kYXJ5Q29sb3VyO1xyXG4gICAgICAgIHRoaXMudGVydGlhcnlDb2xvdXIgPSBjb25maWcudGVydGlhcnlDb2xvdXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMgPSB7XHJcbiAgICBjaGFzaW5nRG90czogJ2NoYXNpbmctZG90cycsXHJcbiAgICBjaXJjbGU6ICdzay1jaXJjbGUnLFxyXG4gICAgY2lyY2xlU3dpc2g6ICdjaXJjbGVTd2lzaCcsXHJcbiAgICBjdWJlR3JpZDogJ3NrLWN1YmUtZ3JpZCcsXHJcbiAgICBkb3VibGVCb3VuY2U6ICdkb3VibGUtYm91bmNlJyxcclxuICAgIG5vbmU6ICdub25lJyxcclxuICAgIHB1bHNlOiAncHVsc2UnLFxyXG4gICAgcmVjdGFuZ2xlQm91bmNlOiAncmVjdGFuZ2xlLWJvdW5jZScsXHJcbiAgICByb3RhdGluZ1BsYW5lOiAncm90YXRpbmctcGxhbmUnLFxyXG4gICAgdGhyZWVCb3VuY2U6ICd0aHJlZS1ib3VuY2UnLFxyXG4gICAgd2FuZGVyaW5nQ3ViZXM6ICd3YW5kZXJpbmctY3ViZXMnXHJcbn07XHJcbiIsImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSU5neExvYWRpbmdDb25maWcsIE5neExvYWRpbmdDb25maWcgfSBmcm9tICcuL25neC1sb2FkaW5nLWNvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hMb2FkaW5nU2VydmljZSB7XHJcbiAgcHVibGljIGxvYWRpbmdDb25maWc6IElOZ3hMb2FkaW5nQ29uZmlnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KCdsb2FkaW5nQ29uZmlnJykgcHJpdmF0ZSBjb25maWc6IElOZ3hMb2FkaW5nQ29uZmlnKSB7XHJcbiAgICB0aGlzLmxvYWRpbmdDb25maWcgPSB0aGlzLmNvbmZpZyB8fCBuZXcgTmd4TG9hZGluZ0NvbmZpZygpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMsIElOZ3hMb2FkaW5nQ29uZmlnLCBOZ3hMb2FkaW5nQ29uZmlnIH0gZnJvbSAnLi9uZ3gtbG9hZGluZy1jb25maWcnO1xyXG5pbXBvcnQgeyBOZ3hMb2FkaW5nU2VydmljZSB9IGZyb20gJy4vbmd4LWxvYWRpbmcuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmd4LWxvYWRpbmcnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgKm5nSWY9XCJzaG93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJiYWNrZHJvcFwiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIiBbbmdTdHlsZV09XCJ7J2JvcmRlci1yYWRpdXMnOiBjb25maWc/LmJhY2tkcm9wQm9yZGVyUmFkaXVzLCAnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8uYmFja2Ryb3BCYWNrZ3JvdW5kQ29sb3VyfVwiPjwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBbbmdTd2l0Y2hdPVwiY29uZmlnPy5hbmltYXRpb25UeXBlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItY2lyY2xlXCIgKm5nU3dpdGNoQ2FzZT1cIm5neExvYWRpbmdBbmltYXRpb25UeXBlcy5jaXJjbGVcIiBbbmdDbGFzc109XCJ7J2Z1bGwtc2NyZWVuJyA6IGNvbmZpZz8uZnVsbFNjcmVlbkJhY2tkcm9wID09IHRydWV9XCJcclxuICAgICAgICAgIFtuZ1N0eWxlXT1cInsnYm9yZGVyLXRvcC1jb2xvcic6IGNvbmZpZz8uc2Vjb25kYXJ5Q29sb3VyLCAnYm9yZGVyLXJpZ2h0LWNvbG9yJzogY29uZmlnPy5zZWNvbmRhcnlDb2xvdXIsICdib3JkZXItYm90dG9tLWNvbG9yJzogY29uZmlnPy5zZWNvbmRhcnlDb2xvdXIsICdib3JkZXItbGVmdC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwibmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLmN1YmVHcmlkXCIgY2xhc3M9XCJzay1jdWJlLWdyaWRcIiBbbmdDbGFzc109XCJ7J2Z1bGwtc2NyZWVuJyA6IGNvbmZpZz8uZnVsbFNjcmVlbkJhY2tkcm9wID09IHRydWV9XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY3ViZSBzay1jdWJlMVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzay1jdWJlIHNrLWN1YmUyXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNrLWN1YmUgc2stY3ViZTNcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY3ViZSBzay1jdWJlNFwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzay1jdWJlIHNrLWN1YmU1XCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNrLWN1YmUgc2stY3ViZTZcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY3ViZSBzay1jdWJlN1wiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzay1jdWJlIHNrLWN1YmU4XCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNrLWN1YmUgc2stY3ViZTlcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLXNrLXJvdGF0ZXBsYW5lXCIgKm5nU3dpdGNoQ2FzZT1cIm5neExvYWRpbmdBbmltYXRpb25UeXBlcy5yb3RhdGluZ1BsYW5lXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIj48L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItcmVjdGFuZ2xlLWJvdW5jZVwiICpuZ1N3aXRjaENhc2U9XCJuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMucmVjdGFuZ2xlQm91bmNlXCIgW25nQ2xhc3NdPVwieydmdWxsLXNjcmVlbicgOiBjb25maWc/LmZ1bGxTY3JlZW5CYWNrZHJvcCA9PSB0cnVlfVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlY3QxXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlY3QyXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlY3QzXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlY3Q0XCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlY3Q1XCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci13YW5kZXJpbmctY3ViZXNcIiAqbmdTd2l0Y2hDYXNlPVwibmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLndhbmRlcmluZ0N1YmVzXCIgW25nQ2xhc3NdPVwieydmdWxsLXNjcmVlbicgOiBjb25maWc/LmZ1bGxTY3JlZW5CYWNrZHJvcCA9PSB0cnVlfVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImN1YmUxXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImN1YmUyXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5zZWNvbmRhcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWRvdWJsZS1ib3VuY2VcIiAqbmdTd2l0Y2hDYXNlPVwibmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLmRvdWJsZUJvdW5jZVwiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkb3VibGUtYm91bmNlMVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkb3VibGUtYm91bmNlMlwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8uc2Vjb25kYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1wdWxzZVwiICpuZ1N3aXRjaENhc2U9XCJuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMucHVsc2VcIiBbbmdDbGFzc109XCJ7J2Z1bGwtc2NyZWVuJyA6IGNvbmZpZz8uZnVsbFNjcmVlbkJhY2tkcm9wID09IHRydWV9XCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1jaGFzaW5nLWRvdHNcIiAqbmdTd2l0Y2hDYXNlPVwibmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLmNoYXNpbmdEb3RzXCIgW25nQ2xhc3NdPVwieydmdWxsLXNjcmVlbicgOiBjb25maWc/LmZ1bGxTY3JlZW5CYWNrZHJvcCA9PSB0cnVlfVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRvdDFcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZG90MlwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8uc2Vjb25kYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1jaXJjbGUtc3dpc2hcIiAqbmdTd2l0Y2hDYXNlPVwibmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLmNpcmNsZVN3aXNoXCIgW25nQ2xhc3NdPVwieydmdWxsLXNjcmVlbicgOiBjb25maWc/LmZ1bGxTY3JlZW5CYWNrZHJvcCA9PSB0cnVlfVwiIFtuZ1N0eWxlXT1cInsnY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIm5neExvYWRpbmdBbmltYXRpb25UeXBlcy5ub25lXCIgW25nQ2xhc3NdPVwieydmdWxsLXNjcmVlbicgOiBjb25maWc/LmZ1bGxTY3JlZW5CYWNrZHJvcCA9PSB0cnVlfVwiPjwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaERlZmF1bHQgY2xhc3M9XCJzcGlubmVyLXRocmVlLWJvdW5jZVwiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3VuY2UxXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJvdW5jZTJcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnNlY29uZGFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3VuY2UzXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy50ZXJ0aWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGVtcGxhdGVcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgLmJhY2tkcm9wIHtcclxuICAgICAgICB6LWluZGV4OiAxOTk5O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBTcGlubmVyIENpcmNsZSBzdHlsZXMgKi9cclxuICAgICAgLnNwaW5uZXItY2lyY2xlLFxyXG4gICAgICAuc3Bpbm5lci1jaXJjbGU6YWZ0ZXIge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwZW07XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zcGlubmVyLWNpcmNsZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDZweDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDEuMWVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMS4xZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMS4xZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDEuMWVtIHNvbGlkICNmZmZmZmY7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB6LWluZGV4OiAyMDAwO1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQ4IDEuMXMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBsb2FkOCAxLjFzIGluZmluaXRlIGxpbmVhcjtcclxuICAgICAgfVxyXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDgge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBAa2V5ZnJhbWVzIGxvYWQ4IHtcclxuICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIENpcmNsZSBTd2lzaCBzdHlsZXMgKi9cclxuICAgICAgLnNwaW5uZXItY2lyY2xlLXN3aXNoIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB3aWR0aDogMWVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxZW07XHJcbiAgICAgICAgICB6LWluZGV4OiAyMDAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkNiAxLjdzIGluZmluaXRlIGVhc2UsIHJvdW5kIDEuN3MgaW5maW5pdGUgZWFzZTtcclxuICAgICAgICAgIGFuaW1hdGlvbjogbG9hZDYgMS43cyBpbmZpbml0ZSBlYXNlLCByb3VuZCAxLjdzIGluZmluaXRlIGVhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBsb2FkNiB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA1JSxcclxuICAgICAgICAgIDk1JSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMCUsXHJcbiAgICAgICAgICA1OSUge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjA4N2VtIC0wLjgyNWVtIDAgLTAuNDJlbSwgLTAuMTczZW0gLTAuODEyZW0gMCAtMC40NGVtLCAtMC4yNTZlbSAtMC43ODllbSAwIC0wLjQ2ZW0sIC0wLjI5N2VtIC0wLjc3NWVtIDAgLTAuNDc3ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAyMCUge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjMzOGVtIC0wLjc1OGVtIDAgLTAuNDJlbSwgLTAuNTU1ZW0gLTAuNjE3ZW0gMCAtMC40NGVtLCAtMC42NzFlbSAtMC40ODhlbSAwIC0wLjQ2ZW0sIC0wLjc0OWVtIC0wLjM0ZW0gMCAtMC40NzdlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDM4JSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMzc3ZW0gLTAuNzRlbSAwIC0wLjQyZW0sIC0wLjY0NWVtIC0wLjUyMmVtIDAgLTAuNDRlbSwgLTAuNzc1ZW0gLTAuMjk3ZW0gMCAtMC40NmVtLCAtMC44MmVtIC0wLjA5ZW0gMCAtMC40NzdlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBAa2V5ZnJhbWVzIGxvYWQ2IHtcclxuICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAwIC0wLjgzZW0gMCAtMC40MmVtLCAwIC0wLjgzZW0gMCAtMC40NGVtLCAwIC0wLjgzZW0gMCAtMC40NmVtLCAwIC0wLjgzZW0gMCAtMC40NzdlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDUlLFxyXG4gICAgICAgICAgOTUlIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAwIC0wLjgzZW0gMCAtMC40MmVtLCAwIC0wLjgzZW0gMCAtMC40NGVtLCAwIC0wLjgzZW0gMCAtMC40NmVtLCAwIC0wLjgzZW0gMCAtMC40NzdlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwJSxcclxuICAgICAgICAgIDU5JSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMDg3ZW0gLTAuODI1ZW0gMCAtMC40MmVtLCAtMC4xNzNlbSAtMC44MTJlbSAwIC0wLjQ0ZW0sIC0wLjI1NmVtIC0wLjc4OWVtIDAgLTAuNDZlbSwgLTAuMjk3ZW0gLTAuNzc1ZW0gMCAtMC40NzdlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDIwJSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMzM4ZW0gLTAuNzU4ZW0gMCAtMC40MmVtLCAtMC41NTVlbSAtMC42MTdlbSAwIC0wLjQ0ZW0sIC0wLjY3MWVtIC0wLjQ4OGVtIDAgLTAuNDZlbSwgLTAuNzQ5ZW0gLTAuMzRlbSAwIC0wLjQ3N2VtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMzglIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4zNzdlbSAtMC43NGVtIDAgLTAuNDJlbSwgLTAuNjQ1ZW0gLTAuNTIyZW0gMCAtMC40NGVtLCAtMC43NzVlbSAtMC4yOTdlbSAwIC0wLjQ2ZW0sIC0wLjgyZW0gLTAuMDllbSAwIC0wLjQ3N2VtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyByb3VuZCB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQGtleWZyYW1lcyByb3VuZCB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAvKiBDdWJlIEdyaWQgc3R5bGVzICovXHJcbiAgICAgIC5zay1jdWJlLWdyaWQge1xyXG4gICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcblxyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZSB7XHJcbiAgICAgICAgICB3aWR0aDogMzMlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMyU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stY3ViZUdyaWRTY2FsZURlbGF5IDEuM3MgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNrLWN1YmVHcmlkU2NhbGVEZWxheSAxLjNzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2stY3ViZS1ncmlkIC5zay1jdWJlMSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4ycztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4ycztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTIge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuM3M7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zay1jdWJlLWdyaWQgLnNrLWN1YmUzIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2stY3ViZS1ncmlkIC5zay1jdWJlNCB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4xcztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4xcztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zay1jdWJlLWdyaWQgLnNrLWN1YmU2IHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2stY3ViZS1ncmlkIC5zay1jdWJlNyB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2stY3ViZS1ncmlkIC5zay1jdWJlOCB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4xcztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4xcztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTkge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1jdWJlR3JpZFNjYWxlRGVsYXkge1xyXG4gICAgICAgICAgMCUsIDcwJSwgMTAwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNEKDEsIDEsIDEpO1xyXG4gICAgICAgICAgfSAzNSUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQGtleWZyYW1lcyBzay1jdWJlR3JpZFNjYWxlRGVsYXkge1xyXG4gICAgICAgICAgMCUsIDcwJSwgMTAwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNEKDEsIDEsIDEpO1xyXG4gICAgICAgICAgfSAzNSUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLyogRG91YmxlIEJvdW5jZSBzdHlsZXMgKi9cclxuICAgICAgLnNwaW5uZXItZG91YmxlLWJvdW5jZSB7XHJcbiAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kb3VibGUtYm91bmNlMSwgLmRvdWJsZS1ib3VuY2UyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZG91YmxlLWJvdW5jZTIge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjBzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcclxuICAgICAgfVxyXG5cclxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZSB7XHJcbiAgICAgICAgICAwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApIH1cclxuICAgICAgICAgIDUwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQGtleWZyYW1lcyBzay1ib3VuY2Uge1xyXG4gICAgICAgICAgMCUsIDEwMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMCk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xyXG4gICAgICAgICAgfSA1MCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBQdWxzZSBzdHlsZXMgKi9cclxuICAgICAgLnNwaW5uZXItcHVsc2Uge1xyXG4gICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stc2NhbGVvdXQgMS4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgICAgIGFuaW1hdGlvbjogc2stc2NhbGVvdXQgMS4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgfVxyXG5cclxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLXNjYWxlb3V0IHtcclxuICAgICAgICAgIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQGtleWZyYW1lcyBzay1zY2FsZW91dCB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgIH0gMTAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIFRocmVlIEJvdW5jZSBzdHlsZXMgKi9cclxuICAgICAgLnNwaW5uZXItdGhyZWUtYm91bmNlIHtcclxuICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNwaW5uZXItdGhyZWUtYm91bmNlID4gZGl2IHtcclxuICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcclxuICAgICAgICAgIGFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3Bpbm5lci10aHJlZS1ib3VuY2UgLmJvdW5jZTEge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3Bpbm5lci10aHJlZS1ib3VuY2UgLmJvdW5jZTIge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xyXG4gICAgICAgICAgMCUsIDgwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSB9XHJcbiAgICAgICAgICA0MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKSB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xyXG4gICAgICAgICAgMCUsIDgwJSwgMTAwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICB9IDQwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBSb3RhdGUgUGxhbmUgc3R5bGVzICovXHJcbiAgICAgIC5zcGlubmVyLXNrLXJvdGF0ZXBsYW5lIHtcclxuICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stcm90YXRlcGxhbmUgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgICAgIGFuaW1hdGlvbjogc2stcm90YXRlcGxhbmUgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgfVxyXG5cclxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLXJvdGF0ZXBsYW5lIHtcclxuICAgICAgICAgIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSB9XHJcbiAgICAgICAgICA1MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVkoMTgwZGVnKSB9XHJcbiAgICAgICAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVZKDE4MGRlZykgIHJvdGF0ZVgoMTgwZGVnKSB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgc2stcm90YXRlcGxhbmUge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKVxyXG4gICAgICAgICAgfSA1MCUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MC4xZGVnKSByb3RhdGVZKDBkZWcpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwLjFkZWcpIHJvdGF0ZVkoMGRlZylcclxuICAgICAgICAgIH0gMTAwJSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwZGVnKSByb3RhdGVZKC0xNzkuOWRlZyk7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODBkZWcpIHJvdGF0ZVkoLTE3OS45ZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLyogUmVjdGFuZ2xlIEJvdW5jZSBzdHlsZXMqL1xyXG4gICAgICAuc3Bpbm5lci1yZWN0YW5nbGUtYm91bmNlIHtcclxuICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNwaW5uZXItcmVjdGFuZ2xlLWJvdW5jZSA+IGRpdiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgd2lkdGg6IDZweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1zdHJldGNoZGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgICAgIGFuaW1hdGlvbjogc2stc3RyZXRjaGRlbGF5IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zcGlubmVyLXJlY3RhbmdsZS1ib3VuY2UgLnJlY3QyIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zcGlubmVyLXJlY3RhbmdsZS1ib3VuY2UgLnJlY3QzIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMHM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zcGlubmVyLXJlY3RhbmdsZS1ib3VuY2UgLnJlY3Q0IHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zcGlubmVyLXJlY3RhbmdsZS1ib3VuY2UgLnJlY3Q1IHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1zdHJldGNoZGVsYXkge1xyXG4gICAgICAgICAgMCUsIDQwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC40KSB9XHJcbiAgICAgICAgICAyMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEuMCkgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAa2V5ZnJhbWVzIHNrLXN0cmV0Y2hkZWxheSB7XHJcbiAgICAgICAgICAwJSwgNDAlLCAxMDAlIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjQpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC40KTtcclxuICAgICAgICAgIH0gIDIwJSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMS4wKTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEuMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIFdhbmRlcmluZyBDdWJlcyBzdHlsZXMgKi9cclxuICAgICAgLnNwaW5uZXItd2FuZGVyaW5nLWN1YmVzIHtcclxuICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA1OHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmN1YmUxLCAuY3ViZTIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1jdWJlbW92ZSAxLjhzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBzay1jdWJlbW92ZSAxLjhzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY3ViZTIge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjlzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcclxuICAgICAgfVxyXG5cclxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWN1YmVtb3ZlIHtcclxuICAgICAgICAgIDI1JSB7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHJvdGF0ZSgtOTBkZWcpIHNjYWxlKDAuNSkgfVxyXG4gICAgICAgICAgNTAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDJweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTE4MGRlZykgfVxyXG4gICAgICAgICAgNzUlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMjcwZGVnKSBzY2FsZSgwLjUpIH1cclxuICAgICAgICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQGtleWZyYW1lcyBzay1jdWJlbW92ZSB7XHJcbiAgICAgICAgICAyNSUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSByb3RhdGUoLTkwZGVnKSBzY2FsZSgwLjUpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHJvdGF0ZSgtOTBkZWcpIHNjYWxlKDAuNSk7XHJcbiAgICAgICAgICB9IDUwJSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0xNzlkZWcpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0xNzlkZWcpO1xyXG4gICAgICAgICAgfSA1MC4xJSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0xODBkZWcpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0xODBkZWcpO1xyXG4gICAgICAgICAgfSA3NSUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0yNzBkZWcpIHNjYWxlKDAuNSk7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMjcwZGVnKSBzY2FsZSgwLjUpO1xyXG4gICAgICAgICAgfSAxMDAlIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBDaXJjbGUgc3R5bGVzICovXHJcbiAgICAgIC5zay1jaXJjbGUge1xyXG4gICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB6LWluZGV4OiAyMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaGlsZCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNoaWxkOmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNSU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1jaXJjbGVCb3VuY2VEZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogc2stY2lyY2xlQm91bmNlRGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGUyIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTMge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XHJcbiAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNCB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU1IHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcclxuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTYge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xyXG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNyB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU4IHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcclxuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTkge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xyXG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMTAge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMTEge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xyXG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMTIge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xyXG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMjpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjFzO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xLjFzOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMzpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xcztcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU0OmJlZm9yZSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOXM7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU1OmJlZm9yZSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOHM7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU2OmJlZm9yZSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuN3M7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuN3M7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU3OmJlZm9yZSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNnM7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNnM7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU4OmJlZm9yZSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNXM7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU5OmJlZm9yZSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNHM7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNHM7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGUxMDpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjNzO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjNzOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMTE6YmVmb3JlIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4ycztcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yczsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTEyOmJlZm9yZSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMXM7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMXM7IH1cclxuXHJcbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWNpcmNsZUJvdW5jZURlbGF5IHtcclxuICAgICAgICAgIDAlLCA4MCUsIDEwMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgIH0gNDAlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAa2V5ZnJhbWVzIHNrLWNpcmNsZUJvdW5jZURlbGF5IHtcclxuICAgICAgICAgIDAlLCA4MCUsIDEwMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgIH0gNDAlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBDaGFzaW5nIERvdHMgc3R5bGVzICovXHJcbiAgICAgICAgLnNwaW5uZXItY2hhc2luZy1kb3RzIHtcclxuICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1yb3RhdGUgMi4wcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNrLXJvdGF0ZSAyLjBzIGluZmluaXRlIGxpbmVhcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kb3QxLCAuZG90MiB7XHJcbiAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA2MCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2UgMi4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgICAgIGFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZG90MiB7XHJcbiAgICAgICAgICB0b3A6IGF1dG87XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMHM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xLjBzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLXJvdGF0ZSB7IDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgfX1cclxuICAgICAgICBAa2V5ZnJhbWVzIHNrLXJvdGF0ZSB7IDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgfX1cclxuXHJcbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZSB7XHJcbiAgICAgICAgICAwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApIH1cclxuICAgICAgICAgIDUwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBrZXlmcmFtZXMgc2stYm91bmNlIHtcclxuICAgICAgICAgIDAlLCAxMDAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKTtcclxuICAgICAgICAgIH0gNTAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAuZnVsbC1zY3JlZW4ge1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgcG9zaXRpb246IC1tcy1wYWdlO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hMb2FkaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIHNob3c6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSBjb25maWc6IElOZ3hMb2FkaW5nQ29uZmlnID0gbmV3IE5neExvYWRpbmdDb25maWcoKTtcclxuICAgIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gICAgcHJpdmF0ZSBkZWZhdWx0Q29uZmlnOiBJTmd4TG9hZGluZ0NvbmZpZyA9IHtcclxuICAgICAgICBhbmltYXRpb25UeXBlOiBuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMudGhyZWVCb3VuY2UsXHJcbiAgICAgICAgYmFja2Ryb3BCYWNrZ3JvdW5kQ29sb3VyOiAncmdiYSgwLCAwLCAwLCAwLjMpJyxcclxuICAgICAgICBiYWNrZHJvcEJvcmRlclJhZGl1czogJzBweCcsXHJcbiAgICAgICAgZnVsbFNjcmVlbkJhY2tkcm9wOiBmYWxzZSxcclxuICAgICAgICBwcmltYXJ5Q29sb3VyOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgc2Vjb25kYXJ5Q29sb3VyOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgdGVydGlhcnlDb2xvdXI6ICcjZmZmZmZmJ1xyXG4gICAgfTtcclxuICAgIHB1YmxpYyBuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMgPSBuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXM7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBMb2FkaW5nU2VydmljZTogTmd4TG9hZGluZ1NlcnZpY2UsIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnNldHVwQ29uZmlnKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXR1cENvbmZpZygpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBpbiB0aGlzLmRlZmF1bHRDb25maWcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZ1tvcHRpb25dID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZ1tvcHRpb25dICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ1tvcHRpb25dID0gdGhpcy5Mb2FkaW5nU2VydmljZS5sb2FkaW5nQ29uZmlnW29wdGlvbl0gIT0gbnVsbCA/IHRoaXMuTG9hZGluZ1NlcnZpY2UubG9hZGluZ0NvbmZpZ1tvcHRpb25dIDogdGhpcy5kZWZhdWx0Q29uZmlnW29wdGlvbl07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25maWdbb3B0aW9uXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWdbb3B0aW9uXSA9IHRoaXMuTG9hZGluZ1NlcnZpY2UubG9hZGluZ0NvbmZpZ1tvcHRpb25dICE9IG51bGwgPyB0aGlzLkxvYWRpbmdTZXJ2aWNlLmxvYWRpbmdDb25maWdbb3B0aW9uXSA6IHRoaXMuZGVmYXVsdENvbmZpZ1tvcHRpb25dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTaG93KHNob3c6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNob3cgPSBzaG93O1xyXG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSU5neExvYWRpbmdDb25maWcgfSBmcm9tICcuLi9wdWJsaWNfYXBpJztcclxuaW1wb3J0IHsgTmd4TG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vbmd4LWxvYWRpbmcuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTmd4TG9hZGluZ0NvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW05neExvYWRpbmdDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hMb2FkaW5nTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChsb2FkaW5nQ29uZmlnOiBJTmd4TG9hZGluZ0NvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE5neExvYWRpbmdNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogJ2xvYWRpbmdDb25maWcnLCB1c2VWYWx1ZTogbG9hZGluZ0NvbmZpZyB9XVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app-button/app-button.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/app-button/app-button.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAppButtonAppButtonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button [type]=\"type\" [ngClass]=\"classes\" #button style=\"color:#fff ;\">\n  <ng-content *ngIf=\"!loading\"></ng-content>\n  <app-loading\n    color=\"#fff\"\n    size=\"10px\"\n    [show]=\"true\"\n    *ngIf=\"loading\">\n  </app-loading>\n</button>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app-card/app-card.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/app-card/app-card.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAppCardAppCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"iq-card\">\r\n  <div class=\"iq-card-header\" [ngClass]=\"headerClass\" *ngIf=\"header\">\r\n    <ng-content select=\"[header]\"></ng-content>\r\n  </div>\r\n  <div class=\"iq-card-body\" [ngClass]=\"bodyClass\">\r\n    <div [class.py-3]=\"!backdrop\" *ngIf=\"loading\">\r\n      <app-loading [backdrop]=\"backdrop\" [show]=\"true\"></app-loading>\r\n    </div>\r\n    <div [hidden]=\"loading && !backdrop\">\r\n      <ng-content select=\"[body]\"></ng-content>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app-loading/app-loading.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/app-loading/app-loading.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAppLoadingAppLoadingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ngx-loading \r\n    style=\"--loading-size: {{ size }}\"\r\n    class=\"app-loading\" \r\n    [class.backdrop]=\"backdrop\"\r\n    [config]=\"config\" \r\n    [show]=\"show\">\r\n</ngx-loading>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app-nav-bar/app-nav-bar.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/app-nav-bar/app-nav-bar.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAppNavBarAppNavBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- TOP Nav Bar [START] -->\n<div class=\"iq-top-navbar\">\n    <div class=\"iq-navbar-custom\">\n        <div class=\"iq-sidebar-logo\">\n            <div class=\"top-logo\">\n                <a href=\"index.html\" class=\"logo\">\n                    <img src=\"/assets/images/logo.png\" class=\"img-fluid\" alt=\"\">\n                    <span></span>\n                </a>\n            </div>\n        </div>\n        <!-- <app-breadcrumb1 [title]=\"title\" [items]=\"breadCrumbItems\"></app-breadcrumb1> -->\n        <nav class=\"navbar navbar-expand-lg navbar-light p-0\">\n            <div class=\"iq-menu-bt align-self-center\">\n                <div class=\"wrapper-menu\">\n                    <div class=\"line-menu half start\"></div>\n                    <div class=\"line-menu\"></div>\n                    <div class=\"line-menu half end\"></div>\n                </div>\n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\"></div>\n            <ul class=\"navbar-list\">\n                <li class=\"\">\n                    <a href=\"#\" class=\"search-toggle iq-waves-effect bg-primary text-white\">\n                        <span class=\"ripple rippleEffect\"\n                            style=\"width: 75px; height: 75px; top: 25.5px; left: 9.5px;\"></span>\n                        <img src=\"../../../../../assets/images/user/1.jpg\" class=\"img-fluid rounded\" alt=\"user\">\n                    </a>\n                    <div class=\"iq-sub-dropdown iq-user-dropdown\">\n                        <div class=\"iq-card iq-card-block iq-card-stretch iq-card-height shadow-none m-0\">\n                            <div class=\"iq-card-body p-0 \">\n                                <div class=\"bg-primary p-3\">\n                                    <h5 class=\"mb-0 text-white line-height\">Hello Nik jone</h5>\n                                    <span class=\"text-white font-size-12\">Available</span>\n                                </div>\n                                <a href=\"profile.html\" class=\"iq-sub-card iq-bg-primary-hover\">\n                                    <div class=\"media align-items-center\">\n                                        <div class=\"rounded iq-card-icon iq-bg-primary\">\n                                            <i class=\"ri-file-user-line\"></i>\n                                        </div>\n                                        <div class=\"media-body ml-3\">\n                                            <h6 class=\"mb-0 \">My Profile</h6>\n                                            <p class=\"mb-0 font-size-12\">View personal profile details.</p>\n                                        </div>\n                                    </div>\n                                </a>\n                                <a href=\"profile-edit.html\" class=\"iq-sub-card iq-bg-primary-success-hover\">\n                                    <div class=\"media align-items-center\">\n                                        <div class=\"rounded iq-card-icon iq-bg-success\">\n                                            <i class=\"ri-profile-line\"></i>\n                                        </div>\n                                        <div class=\"media-body ml-3\">\n                                            <h6 class=\"mb-0 \">Edit Profile</h6>\n                                            <p class=\"mb-0 font-size-12\">Modify your personal details.</p>\n                                        </div>\n                                    </div>\n                                </a>\n                                <a href=\"account-setting.html\" class=\"iq-sub-card iq-bg-primary-danger-hover\">\n                                    <div class=\"media align-items-center\">\n                                        <div class=\"rounded iq-card-icon iq-bg-danger\">\n                                            <i class=\"ri-account-box-line\"></i>\n                                        </div>\n                                        <div class=\"media-body ml-3\">\n                                            <h6 class=\"mb-0 \">Account settings</h6>\n                                            <p class=\"mb-0 font-size-12\">Manage your account parameters.</p>\n                                        </div>\n                                    </div>\n                                </a>\n                                <a href=\"privacy-setting.html\" class=\"iq-sub-card iq-bg-primary-secondary-hover\">\n                                    <div class=\"media align-items-center\">\n                                        <div class=\"rounded iq-card-icon iq-bg-secondary\">\n                                            <i class=\"ri-lock-line\"></i>\n                                        </div>\n                                        <div class=\"media-body ml-3\">\n                                            <h6 class=\"mb-0 \">Privacy Settings</h6>\n                                            <p class=\"mb-0 font-size-12\">Control your privacy parameters.</p>\n                                        </div>\n                                    </div>\n                                </a>\n                                <div class=\"d-inline-block w-100 text-center p-3\">\n                                    <a class=\"iq-bg-danger iq-sign-btn\" href=\"sign-in.html\" role=\"button\">Sign out<i\n                                            class=\"ri-login-box-line ml-2\"></i></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        </nav>\n    </div>\n</div>\n<!-- TOP Nav Bar [END] -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app-side-bar/app-side-bar.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/app-side-bar/app-side-bar.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAppSideBarAppSideBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Sidebar [START] -->\n<div class=\"iq-sidebar\">\n    <div class=\"iq-sidebar-logo d-flex justify-content-between\">\n        <a routerLink=\"/\">\n            <img src=\"assets/images/logo.png\" class=\"img-fluid\" alt=\"\">\n            <span style=\"font-size: 18px;\">B2B Health</span>\n        </a>\n        <div class=\"iq-menu-bt align-self-center\">\n            <div class=\"wrapper-menu\">\n                <div class=\"line-menu half start\"></div>\n                <div class=\"line-menu\"></div>\n                <div class=\"line-menu half end\"></div>\n            </div>\n        </div>\n    </div>\n    <ng-scrollbar>\n        <nav class=\"iq-sidebar-menu\">\n          <ul id=\"iq-sidebar-toggle\" class=\"iq-menu\">\n            <ng-container *ngFor=\"let item of menuItems; let i=index\">\n\n              <li class=\"iq-menu-title\" *ngIf=\"item?.isHeading else isntHeading\">\n                <i [class]=\"item.icon\" *ngIf=\"item?.icon\"></i>\n                <span>{{ item.title }}</span>\n              </li>\n\n              <ng-template #isntHeading>\n                <li [class.active]=\"activeLink(item)\">\n\n                  <ng-container *ngIf=\"item.children?.length > 0 else withoutChildren\">\n                    <a\n                      href=\"#iqsubmenu{{ i }}\"\n                      class=\"iq-waves-effect\"\n                      [class.collapsed]=\"!activeLink(item)\"\n                      data-toggle=\"collapse\"\n                      aria-expanded=\"true\">\n                      <i [class]=\"item.icon\" *ngIf=\"item?.icon\"></i>\n                      <span>{{ item.title }}</span>\n                      <i class=\"ri-arrow-right-s-line iq-arrow-right\"></i>\n                    </a>\n\n                    <ul\n                      id=\"iqsubmenu{{ i }}\"\n                      class=\"iq-submenu collapse\"\n                      [class.show]=\"activeLink(item)\"\n                      data-parent=\"#iq-sidebar-toggle\">\n                      <li *ngFor=\"let child of item.children\" [class.active]=\"activeLink(child)\">\n                        <a [routerLink]=\"child.link\" (click)=\"toggleMenu()\">{{ child.title }}</a>\n                      </li>\n                    </ul>\n                  </ng-container>\n\n                  <ng-template #withoutChildren>\n                    <a [routerLink]=\"item.link\" class=\"iq-waves-effect\" (click)=\"toggleMenu()\">\n                      <i [class]=\"item.icon\" *ngIf=\"item?.icon\"></i>\n                      <span>{{ item.title }}</span>\n                    </a>\n                  </ng-template>\n                </li>\n              </ng-template>\n\n            </ng-container>\n          </ul>\n        </nav>\n        <div class=\"p-3\"></div>\n    </ng-scrollbar>\n</div>\n<!-- Sidebar [END] -->\n";
    /***/
  },

  /***/
  "./src/app/components/app-button/app-button.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/app-button/app-button.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAppButtonAppButtonComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 38px;\n  padding: 0 10px;\n  position: relative;\n}\n.btn.btn-sm {\n  height: 30px;\n}\n.btn.rounded-circle {\n  padding: 0;\n}\n.btn.rounded-circle.btn-sm {\n  width: 30px;\n}\n.btn.rounded-circle.btn-lg {\n  width: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcHAtYnV0dG9uL0M6XFxVc2Vyc1xcdXNlclxcRG9jdW1lbnRzXFxCMkIgSGVhbHRoXFxkYXNoYm9hcmQtYjJiLWhlYWx0aC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYXBwLWJ1dHRvblxcYXBwLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hcHAtYnV0dG9uL2FwcC1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENJO0VBQ0ksWUFBQTtBQ0NSO0FERUk7RUFDSSxVQUFBO0FDQVI7QURFUTtFQUNJLFdBQUE7QUNBWjtBREdRO0VBQ0ksV0FBQTtBQ0RaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hcHAtYnV0dG9uL2FwcC1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmLmJ0bi1zbSB7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG5cbiAgICAmLnJvdW5kZWQtY2lyY2xlIHtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAmLmJ0bi1zbSB7XG4gICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWxnIHtcbiAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLmJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDM4cHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJ0bi5idG4tc20ge1xuICBoZWlnaHQ6IDMwcHg7XG59XG4uYnRuLnJvdW5kZWQtY2lyY2xlIHtcbiAgcGFkZGluZzogMDtcbn1cbi5idG4ucm91bmRlZC1jaXJjbGUuYnRuLXNtIHtcbiAgd2lkdGg6IDMwcHg7XG59XG4uYnRuLnJvdW5kZWQtY2lyY2xlLmJ0bi1sZyB7XG4gIHdpZHRoOiA0NXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/app-button/app-button.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/app-button/app-button.component.ts ***!
    \***************************************************************/

  /*! exports provided: AppButtonComponent */

  /***/
  function srcAppComponentsAppButtonAppButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppButtonComponent", function () {
      return AppButtonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppButtonComponent = /*#__PURE__*/function () {
      function AppButtonComponent() {
        _classCallCheck(this, AppButtonComponent);

        this.type = 'submit';
        this.color = 'primary';
        this.size = 'default';
        this.rounded = 'pill';
        this.outline = false;
        this.loading = false;
        this.classes = {
          btn: true
        };
      }

      _createClass(AppButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.outline === true) {
            this.classes["btn-outline-".concat(this.color)] = true;
          } else {
            this.classes["btn-".concat(this.color)] = true;
          }

          if (this.size === 'large') {
            this.classes['btn-lg'] = true;
          } else if (this.size === 'small') {
            this.classes['btn-sm'] = true;
          }

          if (this.rounded !== 'default') {
            this.classes["rounded-".concat(this.rounded)] = true;
          }

          if (this.form && this.type == 'submit') {
            this.button.nativeElement.setAttribute('form', this.form);
          }
        }
      }]);

      return AppButtonComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AppButtonComponent.prototype, "type", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AppButtonComponent.prototype, "color", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AppButtonComponent.prototype, "size", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AppButtonComponent.prototype, "rounded", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AppButtonComponent.prototype, "form", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AppButtonComponent.prototype, "outline", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AppButtonComponent.prototype, "loading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('button', {
      "static": true
    })], AppButtonComponent.prototype, "button", void 0);
    AppButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-button',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app-button.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app-button/app-button.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app-button.component.scss */
      "./src/app/components/app-button/app-button.component.scss"))["default"]]
    })], AppButtonComponent);
    /***/
  },

  /***/
  "./src/app/components/app-card/app-card.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/app-card/app-card.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAppCardAppCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".iq-card-header {\n  min-height: auto;\n  padding: 10px 20px;\n}\n\n.iq-card-body {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcHAtY2FyZC9DOlxcVXNlcnNcXHVzZXJcXERvY3VtZW50c1xcQjJCIEhlYWx0aFxcZGFzaGJvYXJkLWIyYi1oZWFsdGgvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFwcC1jYXJkXFxhcHAtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hcHAtY2FyZC9hcHAtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FwcC1jYXJkL2FwcC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlxLWNhcmQtaGVhZGVyIHtcclxuICBtaW4taGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxufVxyXG5cclxuLmlxLWNhcmQtYm9keSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59IiwiLmlxLWNhcmQtaGVhZGVyIHtcbiAgbWluLWhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuXG4uaXEtY2FyZC1ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/app-card/app-card.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/app-card/app-card.component.ts ***!
    \***********************************************************/

  /*! exports provided: AppCardComponent */

  /***/
  function srcAppComponentsAppCardAppCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppCardComponent", function () {
      return AppCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppCardComponent = /*#__PURE__*/function () {
      function AppCardComponent() {
        _classCallCheck(this, AppCardComponent);

        this.header = true;
        this.loading = false;
        this.backdrop = true;
        this.headerClass = '';
        this.bodyClass = '';
      }

      _createClass(AppCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppCardComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AppCardComponent.prototype, "header", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AppCardComponent.prototype, "loading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AppCardComponent.prototype, "backdrop", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AppCardComponent.prototype, "headerClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AppCardComponent.prototype, "bodyClass", void 0);
    AppCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app-card/app-card.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app-card.component.scss */
      "./src/app/components/app-card/app-card.component.scss"))["default"]]
    })], AppCardComponent);
    /***/
  },

  /***/
  "./src/app/components/app-loading/app-loading.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/app-loading/app-loading.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAppLoadingAppLoadingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".app-loading:not(.backdrop) {\n  display: block;\n  margin: 0 auto;\n  width: calc(var(--loading-size) * 3);\n}\n.app-loading:not(.backdrop) .spinner-three-bounce {\n  width: calc(var(--loading-size) * 3) !important;\n}\n.app-loading:not(.backdrop) .spinner-three-bounce div {\n  width: var(--loading-size) !important;\n  height: var(--loading-size) !important;\n}\n.app-loading .backdrop {\n  z-index: 9 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcHAtbG9hZGluZy9DOlxcVXNlcnNcXHVzZXJcXERvY3VtZW50c1xcQjJCIEhlYWx0aFxcZGFzaGJvYXJkLWIyYi1oZWFsdGgvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFwcC1sb2FkaW5nXFxhcHAtbG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hcHAtbG9hZGluZy9hcHAtbG9hZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7QUNBSjtBREVJO0VBQ0UsK0NBQUE7QUNBTjtBREVNO0VBQ0UscUNBQUE7RUFDQSxzQ0FBQTtBQ0FSO0FES0U7RUFDRSxxQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hcHAtbG9hZGluZy9hcHAtbG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtbG9hZGluZyB7XHJcbiAgJjpub3QoLmJhY2tkcm9wKSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IGNhbGModmFyKC0tbG9hZGluZy1zaXplKSAqIDMpO1xyXG5cclxuICAgIC5zcGlubmVyLXRocmVlLWJvdW5jZSB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKHZhcigtLWxvYWRpbmctc2l6ZSkgKiAzKSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgZGl2IHtcclxuICAgICAgICB3aWR0aDogdmFyKC0tbG9hZGluZy1zaXplKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogdmFyKC0tbG9hZGluZy1zaXplKSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYmFja2Ryb3Age1xyXG4gICAgei1pbmRleDogOSAhaW1wb3J0YW50O1xyXG4gIH1cclxufSIsIi5hcHAtbG9hZGluZzpub3QoLmJhY2tkcm9wKSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IGNhbGModmFyKC0tbG9hZGluZy1zaXplKSAqIDMpO1xufVxuLmFwcC1sb2FkaW5nOm5vdCguYmFja2Ryb3ApIC5zcGlubmVyLXRocmVlLWJvdW5jZSB7XG4gIHdpZHRoOiBjYWxjKHZhcigtLWxvYWRpbmctc2l6ZSkgKiAzKSAhaW1wb3J0YW50O1xufVxuLmFwcC1sb2FkaW5nOm5vdCguYmFja2Ryb3ApIC5zcGlubmVyLXRocmVlLWJvdW5jZSBkaXYge1xuICB3aWR0aDogdmFyKC0tbG9hZGluZy1zaXplKSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IHZhcigtLWxvYWRpbmctc2l6ZSkgIWltcG9ydGFudDtcbn1cbi5hcHAtbG9hZGluZyAuYmFja2Ryb3Age1xuICB6LWluZGV4OiA5ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/app-loading/app-loading.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/app-loading/app-loading.component.ts ***!
    \*****************************************************************/

  /*! exports provided: AppLoadingComponent */

  /***/
  function srcAppComponentsAppLoadingAppLoadingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppLoadingComponent", function () {
      return AppLoadingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppLoadingComponent = /*#__PURE__*/function () {
      function AppLoadingComponent() {
        _classCallCheck(this, AppLoadingComponent);

        this.show = false;
        this.backdrop = false;
        this.color = 'var(--primary)';
        this.size = '18px';
        this.config = {};
      }

      _createClass(AppLoadingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.config.primaryColour = this.color;
          this.config.secondaryColour = this.color;
          this.config.tertiaryColour = this.color;
          this.config.backdropBackgroundColour = this.backdrop ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0)';
        }
      }]);

      return AppLoadingComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AppLoadingComponent.prototype, "show", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AppLoadingComponent.prototype, "backdrop", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AppLoadingComponent.prototype, "color", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AppLoadingComponent.prototype, "size", void 0);
    AppLoadingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loading',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app-loading.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app-loading/app-loading.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app-loading.component.scss */
      "./src/app/components/app-loading/app-loading.component.scss"))["default"]]
    })], AppLoadingComponent);
    /***/
  },

  /***/
  "./src/app/components/app-nav-bar/app-nav-bar.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/app-nav-bar/app-nav-bar.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAppNavBarAppNavBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwLW5hdi1iYXIvYXBwLW5hdi1iYXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/app-nav-bar/app-nav-bar.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/app-nav-bar/app-nav-bar.component.ts ***!
    \*****************************************************************/

  /*! exports provided: AppNavBarComponent */

  /***/
  function srcAppComponentsAppNavBarAppNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppNavBarComponent", function () {
      return AppNavBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppNavBarComponent = /*#__PURE__*/function () {
      function AppNavBarComponent() {
        _classCallCheck(this, AppNavBarComponent);
      }

      _createClass(AppNavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppNavBarComponent;
    }();

    AppNavBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-bar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app-nav-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app-nav-bar/app-nav-bar.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app-nav-bar.component.scss */
      "./src/app/components/app-nav-bar/app-nav-bar.component.scss"))["default"]]
    })], AppNavBarComponent);
    /***/
  },

  /***/
  "./src/app/components/app-side-bar/app-side-bar.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/app-side-bar/app-side-bar.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAppSideBarAppSideBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a.iq-waves-effect.collapsed i.ri-arrow-right-s-line.iq-arrow-right {\n  transform: rotate(0deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcHAtc2lkZS1iYXIvQzpcXFVzZXJzXFx1c2VyXFxEb2N1bWVudHNcXEIyQiBIZWFsdGhcXGRhc2hib2FyZC1iMmItaGVhbHRoL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhcHAtc2lkZS1iYXJcXGFwcC1zaWRlLWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hcHAtc2lkZS1iYXIvYXBwLXNpZGUtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsdUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwLXNpZGUtYmFyL2FwcC1zaWRlLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEuaXEtd2F2ZXMtZWZmZWN0LmNvbGxhcHNlZCB7XHJcbiAgaS5yaS1hcnJvdy1yaWdodC1zLWxpbmUuaXEtYXJyb3ctcmlnaHQge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG59IiwiYS5pcS13YXZlcy1lZmZlY3QuY29sbGFwc2VkIGkucmktYXJyb3ctcmlnaHQtcy1saW5lLmlxLWFycm93LXJpZ2h0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/app-side-bar/app-side-bar.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/app-side-bar/app-side-bar.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AppSideBarComponent */

  /***/
  function srcAppComponentsAppSideBarAppSideBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppSideBarComponent", function () {
      return AppSideBarComponent;
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


    var src_app_plugins_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/plugins.service */
    "./src/app/plugins.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _menu_sidebar_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./menu-sidebar.data */
    "./src/app/components/app-side-bar/menu-sidebar.data.ts");

    var AppSideBarComponent = /*#__PURE__*/function () {
      function AppSideBarComponent(plugins, router, authService) {
        _classCallCheck(this, AppSideBarComponent);

        this.plugins = plugins;
        this.router = router;
        this.authService = authService;
        this.menuItems = [];
      }

      _createClass(AppSideBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadMenu();
        }
      }, {
        key: "activeLink",
        value: function activeLink(item) {
          return this.plugins.getActiveLink(item, this.router.url);
        }
      }, {
        key: "toggleMenu",
        value: function toggleMenu() {
          if ($(window).width() < 1300) {
            this.plugins.toggleMenu();
          }
        }
      }, {
        key: "loadMenu",
        value: function loadMenu() {
          var user = this.authService.getUser();

          var userTypeFilter = function userTypeFilter(children) {
            return children.filter(function (c) {
              if (c.userTypes && c.userTypes.length > 0 && !c.userTypes.includes(user.tipo)) {
                return false;
              }

              if (c.children) {
                c.children = userTypeFilter(c.children);
              }

              return true;
            });
          };

          this.menuItems = userTypeFilter(_menu_sidebar_data__WEBPACK_IMPORTED_MODULE_5__["MENU_SIDEBAR"]);
        }
      }]);

      return AppSideBarComponent;
    }();

    AppSideBarComponent.ctorParameters = function () {
      return [{
        type: src_app_plugins_service__WEBPACK_IMPORTED_MODULE_3__["PluginsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    AppSideBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-side-bar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app-side-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app-side-bar/app-side-bar.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app-side-bar.component.scss */
      "./src/app/components/app-side-bar/app-side-bar.component.scss"))["default"]]
    })], AppSideBarComponent);
    /***/
  },

  /***/
  "./src/app/components/app-side-bar/menu-sidebar.data.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/app-side-bar/menu-sidebar.data.ts ***!
    \**************************************************************/

  /*! exports provided: MENU_SIDEBAR */

  /***/
  function srcAppComponentsAppSideBarMenuSidebarDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MENU_SIDEBAR", function () {
      return MENU_SIDEBAR;
    });
    /* harmony import */


    var src_app_data_user_types_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/data/user-types.data */
    "./src/app/data/user-types.data.ts");

    var MENU_SIDEBAR = [{
      title: '',
      isHeading: true,
      isActive: false,
      icon: 'ri-separator'
    }, {
      title: 'Dashboard',
      isActive: false,
      link: '/dashboard',
      icon: 'ri-dashboard-line'
    }, {
      title: 'Controle de Usuários',
      isActive: false,
      link: '/empresas',
      icon: 'ri-user-settings-line'
    }, {
      title: 'Configurações',
      isActive: false,
      icon: 'ri-settings-3-line',
      userTypes: [src_app_data_user_types_data__WEBPACK_IMPORTED_MODULE_0__["ADMINISTRADOR"]],
      children: [{
        title: 'Doenças',
        isActive: false,
        link: '/configuracoes/doencas'
      }, {
        title: 'Frequência de Atividade',
        isActive: false,
        link: '/configuracoes/frequencias-de-atividades'
      }, {
        title: 'Grupo de Exames',
        isActive: false,
        link: '/configuracoes/grupos-de-exames'
      }, {
        title: 'IMC',
        isActive: false,
        link: '/configuracoes/imc'
      }, {
        title: 'Metas',
        isActive: false,
        link: '/configuracoes/metas'
      }, {
        title: 'Programas',
        isActive: false,
        link: '/configuracoes/programas'
      }, {
        title: 'Refeição',
        isActive: false,
        link: '/configuracoes/refeicoes'
      }, {
        title: 'Dietas',
        isActive: false,
        link: '/configuracoes/dietas'
      }, {
        title: 'Treinos',
        isActive: false,
        link: '/configuracoes/treinos'
      }]
    }, {
      title: 'Relatórios',
      isActive: false,
      icon: 'ri-bar-chart-2-line',
      userTypes: [src_app_data_user_types_data__WEBPACK_IMPORTED_MODULE_0__["ADMINISTRADOR"]],
      children: [{
        title: 'Água',
        isActive: false,
        link: '/relatorios/agua'
      }, {
        title: 'Peso',
        isActive: false,
        link: '/relatorios/peso'
      }, {
        title: 'Sono',
        isActive: false,
        link: '/relatorios/sono'
      }]
    }];
    /***/
  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
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


    var _app_button_app_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-button/app-button.component */
    "./src/app/components/app-button/app-button.component.ts");
    /* harmony import */


    var _app_card_app_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-card/app-card.component */
    "./src/app/components/app-card/app-card.component.ts");
    /* harmony import */


    var _app_loading_app_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-loading/app-loading.component */
    "./src/app/components/app-loading/app-loading.component.ts");
    /* harmony import */


    var ngx_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-loading */
    "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js");
    /* harmony import */


    var _app_nav_bar_app_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-nav-bar/app-nav-bar.component */
    "./src/app/components/app-nav-bar/app-nav-bar.component.ts");
    /* harmony import */


    var _app_side_bar_app_side_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-side-bar/app-side-bar.component */
    "./src/app/components/app-side-bar/app-side-bar.component.ts");
    /* harmony import */


    var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-scrollbar */
    "./node_modules/ngx-scrollbar/__ivy_ngcc__/fesm2015/ngx-scrollbar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ComponentsModule = /*#__PURE__*/_createClass(function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    });

    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_button_app_button_component__WEBPACK_IMPORTED_MODULE_3__["AppButtonComponent"], _app_card_app_card_component__WEBPACK_IMPORTED_MODULE_4__["AppCardComponent"], _app_loading_app_loading_component__WEBPACK_IMPORTED_MODULE_5__["AppLoadingComponent"], _app_nav_bar_app_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["AppNavBarComponent"], _app_side_bar_app_side_bar_component__WEBPACK_IMPORTED_MODULE_8__["AppSideBarComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_6__["NgxLoadingModule"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_9__["NgScrollbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]],
      exports: [_app_button_app_button_component__WEBPACK_IMPORTED_MODULE_3__["AppButtonComponent"], _app_card_app_card_component__WEBPACK_IMPORTED_MODULE_4__["AppCardComponent"], _app_loading_app_loading_component__WEBPACK_IMPORTED_MODULE_5__["AppLoadingComponent"], _app_nav_bar_app_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["AppNavBarComponent"], _app_side_bar_app_side_bar_component__WEBPACK_IMPORTED_MODULE_8__["AppSideBarComponent"]]
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/data/user-types.data.ts":
  /*!*****************************************!*\
    !*** ./src/app/data/user-types.data.ts ***!
    \*****************************************/

  /*! exports provided: ADMINISTRADOR, DIRETOR, COORDENADOR, FUNCIONARIO, USER_TYPES */

  /***/
  function srcAppDataUserTypesDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ADMINISTRADOR", function () {
      return ADMINISTRADOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DIRETOR", function () {
      return DIRETOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COORDENADOR", function () {
      return COORDENADOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FUNCIONARIO", function () {
      return FUNCIONARIO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "USER_TYPES", function () {
      return USER_TYPES;
    });

    var ADMINISTRADOR = 1;
    var DIRETOR = 2;
    var COORDENADOR = 3;
    var FUNCIONARIO = 4;
    var USER_TYPES = [{
      id: ADMINISTRADOR,
      text: 'Administrador'
    }, {
      id: DIRETOR,
      text: 'Diretor'
    }, {
      id: COORDENADOR,
      text: 'Coordenador'
    }, {
      id: FUNCIONARIO,
      text: 'Funcionário'
    }];
    /***/
  }
}]);
//# sourceMappingURL=default~layouts-panel-panel-module~pages-login-login-module-es5.js.map