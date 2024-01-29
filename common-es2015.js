(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/plugins.service.ts":
/*!************************************!*\
  !*** ./src/app/plugins.service.ts ***!
  \************************************/
/*! exports provided: PluginsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginsService", function() { return PluginsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PluginsService = class PluginsService {
    constructor() {
        // @ts-ignore
        this.$ = window.$;
    }
    index() {
        this.loaderInit();
    }
    dashboardIndex() {
        this.sideBarToggle(this.$);
        this.navBarAction(this.$);
        this.wrapperMenuToggle(this.$);
        this.fullscreen(this.$);
        this.accordionToggle(this.$);
    }
    // Function for toggle page Loader...
    loaderInit() {
        this.$('#load').fadeOut();
        this.$('#loading').delay(1000).fadeOut('slow');
    }
    checkElement(type, element) {
        let found = false;
        let elements;
        switch (type) {
            case 'class':
                elements = document.getElementsByClassName(element);
                if (elements !== undefined && elements !== null && elements.length > 0) {
                    found = true;
                }
                break;
            case 'id':
                elements = document.getElementById(element);
                if (elements !== undefined && elements !== null) {
                    found = true;
                }
                break;
        }
        return found;
    }
    sideBarToggle($) {
        const elementExist = this.checkElement('class', 'iq-sidebar-menu');
        if (elementExist) {
            // $(document).on('click', '.iq-sidebar-menu li', function() {
            //   if ($(this).hasClass('menu-open')) {
            //     $(this).find('.iq-submenu').slideUp('slow');
            //     $(this).removeClass('menu-open');
            //     if (!$(this).find('.iq-submenu.menu-open .menu-open').length) {
            //       $(this).find('.menu-open').removeClass('menu-open');
            //     } else {
            //       $(this).find('.iq-submenu').removeClass('menu-open');
            //     }
            //   } else if ($(this).find('.iq-submenu').length) {
            //     $(this).find('.iq-submenu').slideDown('slow');
            //     $(this).addClass('menu-open');
            //     $(this).find('.iq-submenu').addClass('menu-open');
            //   }
            // });
        }
    }
    navBarAction($) {
        $(document).on('click', function (e) {
            const myTargetElement = e.target;
            // tslint:disable-next-line:one-variable-per-declaration
            let selector, mainElement;
            if ($(myTargetElement).hasClass('search-toggle')
                || $(myTargetElement).parent().hasClass('search-toggle')
                || $(myTargetElement).parent().parent().hasClass('search-toggle')) {
                if ($(myTargetElement).hasClass('search-toggle')) {
                    selector = $(myTargetElement).parent();
                    mainElement = $(myTargetElement);
                }
                else if ($(myTargetElement).parent().hasClass('search-toggle')) {
                    selector = $(myTargetElement).parent().parent();
                    mainElement = $(myTargetElement).parent();
                }
                else if ($(myTargetElement).parent().parent().hasClass('search-toggle')) {
                    selector = $(myTargetElement).parent().parent().parent();
                    mainElement = $(myTargetElement).parent().parent();
                }
                if (!mainElement.hasClass('active') && $('.navbar-list li').find('.active')) {
                    $('.navbar-list li').removeClass('iq-show');
                    $('.navbar-list li .search-toggle').removeClass('active');
                }
                selector.toggleClass('iq-show');
                mainElement.toggleClass('active');
                e.preventDefault();
            }
            else if ($(myTargetElement).is('.search-input')) { }
            else {
                $('.navbar-list li').removeClass('iq-show');
                $('.navbar-list li .search-toggle').removeClass('active');
            }
        });
    }
    toggleMenu() {
        $('body').toggleClass('sidebar-main');
        $('.iq-menu-bt .wrapper-menu').toggleClass('open');
    }
    wrapperMenuToggle($) {
        const elementExist = this.checkElement('class', 'wrapper-menu');
        if (elementExist) {
            const wrapperMenu = document.querySelectorAll('.wrapper-menu');
            const body = document.querySelector('body');
            for (let i = 0; i < wrapperMenu.length; i++) {
                wrapperMenu[i].addEventListener('click', function () {
                    wrapperMenu[i].classList.toggle('open');
                    body.classList.toggle('sidebar-main');
                });
            }
        }
    }
    fullscreen($) {
        const elementExist = this.checkElement('class', 'iq-full-screen');
        if (elementExist) {
            $(document).on('click', '.iq-full-screen', function () {
                /*const elem = $(this);
                if (!document.fullscreenElement &&
                  !document.mozFullScreenElement &&
                  !document.webkitFullscreenElement &&
                  !document.msFullscreenElement) {
                  if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                  } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                  } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                  } else if (document.documentElement.msRequestFullscreen) {
                    document.documentElement.msRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                  }
                } else {
                  if (document.cancelFullScreen) {
                    document.cancelFullScreen();
                  } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                  } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                  } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                  }
                }
                elem.find('i').toggleClass('ri-fullscreen-line').toggleClass('ri-fullscreen-exit-line');*/
            });
        }
    }
    apexChart(element, chartOption) {
        const selector = '#' + element;
        if (chartOption !== undefined) {
            const chart = new ApexCharts(document.querySelector(selector), chartOption);
            chart.render();
        }
    }
    accordionToggle($) {
        $('.iq-accordion .iq-accordion-block .accordion-details').hide();
        $('.iq-accordion .iq-accordion-block:first').addClass('accordion-active').children().slideDown('slow');
        $(document).on('click', '.iq-accordion .iq-accordion-block', function () {
            if ($(this).children('div.accordion-details ').is(':hidden')) {
                $('.iq-accordion .iq-accordion-block').removeClass('accordion-active').children('div.accordion-details ').slideUp('slow');
                $(this).toggleClass('accordion-active').children('div.accordion-details ').slideDown('slow');
            }
        });
    }
    getActiveLink(item, activeRoute) {
        let active = false;
        if (item.children !== undefined) {
            item.children.filter((child) => {
                if (child.link === activeRoute) {
                    active = true;
                }
            });
        }
        else {
            if (item.link === activeRoute) {
                active = true;
            }
        }
        return active;
    }
};
PluginsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PluginsService);



/***/ }),

/***/ "./src/app/services/empresa.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/empresa.service.ts ***!
  \*********************************************/
/*! exports provided: EmpresaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresaService", function() { return EmpresaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let EmpresaService = class EmpresaService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    list() {
        return this.http.get(`${this.apiUrl}/empresas`);
    }
    findById(id) {
        return this.http.get(`${this.apiUrl}/empresas/${id}`);
    }
    create(empresa) {
        const data = new FormData();
        data.append('nome_empresa', empresa.nome_empresa);
        data.append('nome_fantasia', empresa.nome_fantasia);
        data.append('cnpj', empresa.cnpj);
        data.append('fone', empresa.fone);
        data.append('endereco', empresa.endereco);
        data.append('email', empresa.email);
        data.append('site', empresa.site);
        data.append('logo', empresa.logo);
        return this.http.post(`${this.apiUrl}/empresas`, data);
    }
    update(empresa) {
        return this.http.put(`${this.apiUrl}/empresas/${empresa.id}`, empresa);
    }
    updateLogo(id, logo) {
        const data = new FormData();
        data.append('id', id.toString());
        data.append('logo', logo);
        return this.http.post(`${this.apiUrl}/empresas/logo`, data);
    }
    delete(empresa) {
        return this.http.delete(`${this.apiUrl}/empresas/${empresa.id}`);
    }
};
EmpresaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
EmpresaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], EmpresaService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map