function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/plugins.service.ts":
  /*!************************************!*\
    !*** ./src/app/plugins.service.ts ***!
    \************************************/

  /*! exports provided: PluginsService */

  /***/
  function srcAppPluginsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PluginsService", function () {
      return PluginsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PluginsService = /*#__PURE__*/function () {
      function PluginsService() {
        _classCallCheck(this, PluginsService);

        // @ts-ignore
        this.$ = window.$;
      }

      _createClass(PluginsService, [{
        key: "index",
        value: function index() {
          this.loaderInit();
        }
      }, {
        key: "dashboardIndex",
        value: function dashboardIndex() {
          this.sideBarToggle(this.$);
          this.navBarAction(this.$);
          this.wrapperMenuToggle(this.$);
          this.fullscreen(this.$);
          this.accordionToggle(this.$);
        } // Function for toggle page Loader...

      }, {
        key: "loaderInit",
        value: function loaderInit() {
          this.$('#load').fadeOut();
          this.$('#loading').delay(1000).fadeOut('slow');
        }
      }, {
        key: "checkElement",
        value: function checkElement(type, element) {
          var found = false;
          var elements;

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
      }, {
        key: "sideBarToggle",
        value: function sideBarToggle($) {
          var elementExist = this.checkElement('class', 'iq-sidebar-menu');

          if (elementExist) {// $(document).on('click', '.iq-sidebar-menu li', function() {
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
      }, {
        key: "navBarAction",
        value: function navBarAction($) {
          $(document).on('click', function (e) {
            var myTargetElement = e.target; // tslint:disable-next-line:one-variable-per-declaration

            var selector, mainElement;

            if ($(myTargetElement).hasClass('search-toggle') || $(myTargetElement).parent().hasClass('search-toggle') || $(myTargetElement).parent().parent().hasClass('search-toggle')) {
              if ($(myTargetElement).hasClass('search-toggle')) {
                selector = $(myTargetElement).parent();
                mainElement = $(myTargetElement);
              } else if ($(myTargetElement).parent().hasClass('search-toggle')) {
                selector = $(myTargetElement).parent().parent();
                mainElement = $(myTargetElement).parent();
              } else if ($(myTargetElement).parent().parent().hasClass('search-toggle')) {
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
            } else if ($(myTargetElement).is('.search-input')) {} else {
              $('.navbar-list li').removeClass('iq-show');
              $('.navbar-list li .search-toggle').removeClass('active');
            }
          });
        }
      }, {
        key: "toggleMenu",
        value: function toggleMenu() {
          $('body').toggleClass('sidebar-main');
          $('.iq-menu-bt .wrapper-menu').toggleClass('open');
        }
      }, {
        key: "wrapperMenuToggle",
        value: function wrapperMenuToggle($) {
          var elementExist = this.checkElement('class', 'wrapper-menu');

          if (elementExist) {
            var wrapperMenu = document.querySelectorAll('.wrapper-menu');
            var body = document.querySelector('body');

            var _loop = function _loop(i) {
              wrapperMenu[i].addEventListener('click', function () {
                wrapperMenu[i].classList.toggle('open');
                body.classList.toggle('sidebar-main');
              });
            };

            for (var i = 0; i < wrapperMenu.length; i++) {
              _loop(i);
            }
          }
        }
      }, {
        key: "fullscreen",
        value: function fullscreen($) {
          var elementExist = this.checkElement('class', 'iq-full-screen');

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
      }, {
        key: "apexChart",
        value: function apexChart(element, chartOption) {
          var selector = '#' + element;

          if (chartOption !== undefined) {
            var chart = new ApexCharts(document.querySelector(selector), chartOption);
            chart.render();
          }
        }
      }, {
        key: "accordionToggle",
        value: function accordionToggle($) {
          $('.iq-accordion .iq-accordion-block .accordion-details').hide();
          $('.iq-accordion .iq-accordion-block:first').addClass('accordion-active').children().slideDown('slow');
          $(document).on('click', '.iq-accordion .iq-accordion-block', function () {
            if ($(this).children('div.accordion-details ').is(':hidden')) {
              $('.iq-accordion .iq-accordion-block').removeClass('accordion-active').children('div.accordion-details ').slideUp('slow');
              $(this).toggleClass('accordion-active').children('div.accordion-details ').slideDown('slow');
            }
          });
        }
      }, {
        key: "getActiveLink",
        value: function getActiveLink(item, activeRoute) {
          var active = false;

          if (item.children !== undefined) {
            item.children.filter(function (child) {
              if (child.link === activeRoute) {
                active = true;
              }
            });
          } else {
            if (item.link === activeRoute) {
              active = true;
            }
          }

          return active;
        }
      }]);

      return PluginsService;
    }();

    PluginsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PluginsService);
    /***/
  },

  /***/
  "./src/app/services/empresa.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/empresa.service.ts ***!
    \*********************************************/

  /*! exports provided: EmpresaService */

  /***/
  function srcAppServicesEmpresaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmpresaService", function () {
      return EmpresaService;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var EmpresaService = /*#__PURE__*/function () {
      function EmpresaService(http) {
        _classCallCheck(this, EmpresaService);

        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
      }

      _createClass(EmpresaService, [{
        key: "list",
        value: function list() {
          return this.http.get("".concat(this.apiUrl, "/empresas"));
        }
      }, {
        key: "findById",
        value: function findById(id) {
          return this.http.get("".concat(this.apiUrl, "/empresas/").concat(id));
        }
      }, {
        key: "create",
        value: function create(empresa) {
          var data = new FormData();
          data.append('nome_empresa', empresa.nome_empresa);
          data.append('nome_fantasia', empresa.nome_fantasia);
          data.append('cnpj', empresa.cnpj);
          data.append('fone', empresa.fone);
          data.append('endereco', empresa.endereco);
          data.append('email', empresa.email);
          data.append('site', empresa.site);
          data.append('logo', empresa.logo);
          return this.http.post("".concat(this.apiUrl, "/empresas"), data);
        }
      }, {
        key: "update",
        value: function update(empresa) {
          return this.http.put("".concat(this.apiUrl, "/empresas/").concat(empresa.id), empresa);
        }
      }, {
        key: "updateLogo",
        value: function updateLogo(id, logo) {
          var data = new FormData();
          data.append('id', id.toString());
          data.append('logo', logo);
          return this.http.post("".concat(this.apiUrl, "/empresas/logo"), data);
        }
      }, {
        key: "delete",
        value: function _delete(empresa) {
          return this.http["delete"]("".concat(this.apiUrl, "/empresas/").concat(empresa.id));
        }
      }]);

      return EmpresaService;
    }();

    EmpresaService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    EmpresaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], EmpresaService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map