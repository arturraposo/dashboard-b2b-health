(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-panel-panel-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/panel/panel.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/panel/panel.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-loader></app-loader> -->\r\n\r\n<!-- Wrapper [START] -->\r\n<div class=\"wrapper\">\r\n    <app-side-bar></app-side-bar>\r\n    <app-nav-bar></app-nav-bar>\r\n    <!--Content [START]-->\r\n    <div id=\"content-page\" class=\"content-page\">\r\n        <div class=\"container-fluid\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n    <!-- Content [END] -->\r\n</div>\r\n<!-- Wrapper [END] -->");

/***/ }),

/***/ "./src/app/layouts/panel/panel-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/layouts/panel/panel-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PanelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelRoutingModule", function() { return PanelRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panel.component */ "./src/app/layouts/panel/panel.component.ts");




const routes = [
    {
        path: '',
        component: _panel_component__WEBPACK_IMPORTED_MODULE_3__["PanelComponent"],
        children: [
            {
                path: 'dashboard',
                loadChildren: () => Promise.all(/*! import() | pages-dashboard-dashboard-module */[__webpack_require__.e("default~layouts-auth-auth-module~pages-dashboard-dashboard-module~pages-relatorios-relatorios-module"), __webpack_require__.e("pages-dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ../../pages/dashboard/dashboard.module */ "./src/app/pages/dashboard/dashboard.module.ts")).then(m => m.DashboardModule)
            },
            {
                path: 'empresas',
                loadChildren: () => Promise.all(/*! import() | pages-empresas-empresas-module */[__webpack_require__.e("default~pages-configuracoes-configuracoes-module~pages-empresa-empresa-module~pages-empresas-empresa~28ca92ea"), __webpack_require__.e("common"), __webpack_require__.e("pages-empresas-empresas-module")]).then(__webpack_require__.bind(null, /*! ../../pages/empresas/empresas.module */ "./src/app/pages/empresas/empresas.module.ts")).then(m => m.EmpresasModule)
            },
            {
                path: 'empresa/cadastro',
                loadChildren: () => Promise.all(/*! import() | pages-empresa-empresa-module */[__webpack_require__.e("default~pages-configuracoes-configuracoes-module~pages-empresa-empresa-module~pages-empresas-empresa~28ca92ea"), __webpack_require__.e("common"), __webpack_require__.e("pages-empresa-empresa-module")]).then(__webpack_require__.bind(null, /*! ../../pages/empresa/empresa.module */ "./src/app/pages/empresa/empresa.module.ts")).then(m => m.EmpresaModule)
            },
            {
                path: 'empresa/:id',
                loadChildren: () => Promise.all(/*! import() | pages-empresa-empresa-module */[__webpack_require__.e("default~pages-configuracoes-configuracoes-module~pages-empresa-empresa-module~pages-empresas-empresa~28ca92ea"), __webpack_require__.e("common"), __webpack_require__.e("pages-empresa-empresa-module")]).then(__webpack_require__.bind(null, /*! ../../pages/empresa/empresa.module */ "./src/app/pages/empresa/empresa.module.ts")).then(m => m.EmpresaModule)
            },
            {
                path: 'configuracoes',
                loadChildren: () => Promise.all(/*! import() | pages-configuracoes-configuracoes-module */[__webpack_require__.e("default~pages-configuracoes-configuracoes-module~pages-empresa-empresa-module~pages-empresas-empresa~28ca92ea"), __webpack_require__.e("pages-configuracoes-configuracoes-module")]).then(__webpack_require__.bind(null, /*! ../../pages/configuracoes/configuracoes.module */ "./src/app/pages/configuracoes/configuracoes.module.ts")).then(m => m.ConfiguracoesModule)
            },
            {
                path: 'relatorios',
                loadChildren: () => Promise.all(/*! import() | pages-relatorios-relatorios-module */[__webpack_require__.e("default~layouts-auth-auth-module~pages-dashboard-dashboard-module~pages-relatorios-relatorios-module"), __webpack_require__.e("pages-relatorios-relatorios-module")]).then(__webpack_require__.bind(null, /*! ../../pages/relatorios/relatorios.module */ "./src/app/pages/relatorios/relatorios.module.ts")).then(m => m.RelatoriosModule)
            },
            {
                path: '**',
                redirectTo: '/dashboard'
            }
        ]
    }
];
let PanelRoutingModule = class PanelRoutingModule {
};
PanelRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PanelRoutingModule);



/***/ }),

/***/ "./src/app/layouts/panel/panel.component.scss":
/*!****************************************************!*\
  !*** ./src/app/layouts/panel/panel.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvcGFuZWwvcGFuZWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layouts/panel/panel.component.ts":
/*!**************************************************!*\
  !*** ./src/app/layouts/panel/panel.component.ts ***!
  \**************************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_plugins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/plugins.service */ "./src/app/plugins.service.ts");



let PanelComponent = class PanelComponent {
    constructor(plugins) {
        this.plugins = plugins;
    }
    ngOnInit() {
        // Init all plugins...
        const current = this;
        setTimeout(() => {
            current.plugins.index();
            current.plugins.dashboardIndex();
        }, 200);
    }
};
PanelComponent.ctorParameters = () => [
    { type: src_app_plugins_service__WEBPACK_IMPORTED_MODULE_2__["PluginsService"] }
];
PanelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-panel',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/panel/panel.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./panel.component.scss */ "./src/app/layouts/panel/panel.component.scss")).default]
    })
], PanelComponent);



/***/ }),

/***/ "./src/app/layouts/panel/panel.module.ts":
/*!***********************************************!*\
  !*** ./src/app/layouts/panel/panel.module.ts ***!
  \***********************************************/
/*! exports provided: PanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelModule", function() { return PanelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _panel_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panel-routing.module */ "./src/app/layouts/panel/panel-routing.module.ts");
/* harmony import */ var _panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panel.component */ "./src/app/layouts/panel/panel.component.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");






let PanelModule = class PanelModule {
};
PanelModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_panel_component__WEBPACK_IMPORTED_MODULE_4__["PanelComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _panel_routing_module__WEBPACK_IMPORTED_MODULE_3__["PanelRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
        ]
    })
], PanelModule);



/***/ })

}]);
//# sourceMappingURL=layouts-panel-panel-module-es2015.js.map