function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-empresa-empresa-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/empresa/empresa-form/empresa-form.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/empresa/empresa-form/empresa-form.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEmpresaEmpresaFormEmpresaFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form (ngSubmit)=\"submit()\">\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-md-12 d-flex flex-column justify-content-center align-items-center mb-5\">\r\n      <div class=\"profile-img-edit\" [class.is-invalid]=\"isInvalid && logo.invalid\">\r\n        <app-loading [backdrop]=\"true\" [show]=\"loadingLogo\"></app-loading>\r\n        <div class=\"no-pic\" *ngIf=\"!imageUrl\">\r\n          <i class=\"ri-image-line\"></i> Logo da Empresa\r\n        </div>\r\n        <img\r\n          class=\"profile-pic\"\r\n          [src]=\"imageUrl\"\r\n          accept=\"image/*\"\r\n          *ngIf=\"imageUrl\"\r\n        />\r\n        <div class=\"p-image\" (click)=\"logoInput.click()\">\r\n          <i class=\"ri-pencil-line upload-button\"></i>\r\n          <input class=\"file-upload\" type=\"file\" accept=\"image/*\" (change)=\"logoChanged($event)\" #logoInput>\r\n        </div>\r\n      </div>\r\n      <div class=\"invalid-feedback text-center\" *ngIf=\"isInvalid && logo.errors?.required\">\r\n        Logo da empresa é obrigatório.\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"nome_empresa\">Nome da Empresa *</label>\r\n      <input\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        [class.is-invalid]=\"isInvalid && nomeEmpresa.invalid\"\r\n        id=\"nome_empresa\"\r\n        [formControl]=\"nomeEmpresa\" />\r\n        <div class=\"invalid-feedback\" *ngIf=\"isInvalid && nomeEmpresa.errors?.required\">\r\n          Nome da empresa é obrigatório.\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"nome_fantasia\">Nome Fantasia *</label>\r\n      <input\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        [class.is-invalid]=\"isInvalid && nomeFantasia.invalid\"\r\n        id=\"nome_fantasia\"\r\n        [formControl]=\"nomeFantasia\" />\r\n        <div class=\"invalid-feedback\" *ngIf=\"isInvalid && nomeFantasia.errors?.required\">\r\n          Nome fantasia é obrigatório.\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"cnpj\">CNPJ *</label>\r\n      <input\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        [class.is-invalid]=\"isInvalid && cnpj.invalid\"\r\n        id=\"cnpj\"\r\n        [formControl]=\"cnpj\"\r\n        mask=\"00.000.000/0000-00\" />\r\n        <div class=\"invalid-feedback\" *ngIf=\"isInvalid && cnpj.errors?.required\">\r\n          CNPJ é obrigatório.\r\n        </div>\r\n        <div class=\"invalid-feedback\" *ngIf=\"isInvalid && cnpj.errors?.cnpj\">\r\n          CNPJ inválido.\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"fone\">Telefone *</label>\r\n      <input\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        [class.is-invalid]=\"isInvalid && fone.invalid\"\r\n        id=\"fone\"\r\n        [formControl]=\"fone\"\r\n        mask=\"(00) 0000-0000||(00) 00000-0000\" />\r\n        <div class=\"invalid-feedback\" *ngIf=\"isInvalid && fone.errors?.required\">\r\n          Telefone é obrigatório.\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"email\">E-mail *</label>\r\n      <input\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        [class.is-invalid]=\"isInvalid && email.invalid\"\r\n        id=\"email\"\r\n        [formControl]=\"email\" />\r\n        <div class=\"invalid-feedback\" *ngIf=\"isInvalid && email.errors?.required\">\r\n          E-mail é obrigatório.\r\n        </div>\r\n        <div class=\"invalid-feedback\" *ngIf=\"isInvalid && email.errors?.email\">\r\n          E-mail inválido.\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"site\">Site *</label>\r\n      <input\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        [class.is-invalid]=\"isInvalid && site.invalid\"\r\n        id=\"site\"\r\n        [formControl]=\"site\" />\r\n        <div class=\"invalid-feedback\" *ngIf=\"isInvalid && site.errors?.required\">\r\n          Site é obrigatório.\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group col-sm-12\">\r\n      <label for=\"endereco\">Endereço *</label>\r\n      <textarea\r\n        class=\"form-control\"\r\n        [class.is-invalid]=\"isInvalid && endereco.invalid\"\r\n        name=\"address\"\r\n        rows=\"3\"\r\n        id=\"endereco\"\r\n        [formControl]=\"endereco\">\r\n      </textarea>\r\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && endereco.errors?.required\">\r\n        Endereço é obrigatório.\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"auth.tipo == 1\">\r\n    <div class=\"col-sm-12\">\r\n      <h4 class=\"mt-3\">Admin</h4>\r\n      <hr class=\"mt-1 mb-4\" />\r\n    </div>\r\n    <div class=\"form-group col-sm-6\">\r\n      <label for=\"empresa_pai\">Empresa Pai*</label>\r\n      <ng-select [formControl]=\"empresaPai\" [class.is-invalid]=\"isInvalid && empresaPai.invalid\">\r\n        <ng-option [value]=\"empresa.id\" *ngFor=\"let empresa of empresas$ | async\">\r\n          <h6 class=\"m-0\">{{ empresa.nome_empresa }}<small class=\"text-muted ml-2\">{{ empresa.cnpj }}</small></h6>\r\n        </ng-option>\r\n      </ng-select>\r\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && empresaPai.errors?.required\">\r\n        Empresa pai é obrigatório.\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"d-flex justify-content-end mt-5\">\r\n    <app-button type=\"submit\" class=\"mr-2\" [loading]=\"loading\">Salvar</app-button>\r\n    <app-button type=\"reset\" color=\"light\" routerLink=\"/empresas\">Voltar</app-button>\r\n  </div>\r\n</form>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/empresa/empresa-usuarios/empresa-usuarios.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/empresa/empresa-usuarios/empresa-usuarios.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEmpresaEmpresaUsuariosEmpresaUsuariosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-card [loading]=\"loading\">\r\n  <div class=\"d-flex justify-content-between align-items-center\" header>\r\n    <h4>Usuários</h4>\r\n    <div>\r\n      <app-button rounded=\"pill\" (click)=\"openUsuarioForm()\">\r\n        <i class=\"ri-add-line mr-1\"></i>\r\n        Novo Usuário\r\n      </app-button>\r\n    </div>\r\n  </div>\r\n  <div body>\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-striped table-borderless\">\r\n          <thead>\r\n              <tr>\r\n                  <th scope=\"col\">Nome</th>\r\n                  <th scope=\"col\">E-mail</th>\r\n                  <th scope=\"col\" class=\"text-center\">Gênero</th>\r\n                  <th scope=\"col\" class=\"text-center\">Data de nascimento</th>\r\n                  <th scope=\"col\" class=\"text-center\">Tipo</th>\r\n                  <th scope=\"col\"></th>\r\n              </tr>\r\n          </thead>\r\n          <tbody>\r\n              <tr *ngFor=\"let usuario of usuarios\">\r\n                  <td class=\"align-middle\">{{ usuario.nome }}</td>\r\n                  <td class=\"align-middle\">{{ usuario.email }}</td>\r\n                  <td class=\"align-middle text-center\">{{ usuario.genero }}</td>\r\n                  <td class=\"align-middle text-center\">{{ usuario.nasc | date:'dd/MM/yyyy' }}</td>\r\n                  <td class=\"align-middle text-center\">{{ usuario.tipo | userType }}</td>\r\n                  <td class=\"align-middle\">\r\n                    <div class=\"d-flex align-items-center justify-content-end\">\r\n                      <app-button\r\n                        class=\"mx-1\"\r\n                        color=\"primary\"\r\n                        size=\"small\"\r\n                        rounded=\"circle\"\r\n                        (click)=\"openUsuarioForm(usuario)\">\r\n                        <i class=\"ri-edit-box-line\"></i>\r\n                      </app-button>\r\n\r\n                      <app-button\r\n                        class=\"mx-1\"\r\n                        color=\"primary\"\r\n                        size=\"small\"\r\n                        rounded=\"circle\"\r\n                        (click)=\"destroy(usuario)\">\r\n                        <i class=\"ri-delete-bin-line\"></i>\r\n                      </app-button>\r\n                    </div>\r\n                  </td>\r\n              </tr>\r\n              <tr *ngIf=\"!usuarios || usuarios?.length == 0\">\r\n                <td colspan=\"6\" class=\"text-center\">Nenhum usuário encontrado</td>\r\n              </tr>\r\n          </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</app-card>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/empresa/empresa-usuarios/usuario-form/usuario-form.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/empresa/empresa-usuarios/usuario-form/usuario-form.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEmpresaEmpresaUsuariosUsuarioFormUsuarioFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">Usuário</h4>\r\n  <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef?.hide()\">\r\n    <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form id=\"userForm\" (ngSubmit)=\"submit()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"tipo\">Tipo *</label>\r\n      <select id=\"tipo\"\r\n        class=\"form-control\"\r\n        [class.is-invalid]=\"isInvalid && tipo.invalid\"\r\n        [formControl]=\"tipo\">\r\n        <option value disabled>Selecione o Tipo</option>\r\n        <option [value]=\"type.id\" *ngFor=\"let type of userTypes\">{{ type.text }}</option>\r\n      </select>\r\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && tipo.errors?.required\">\r\n        Tipo é obrigatório.\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"nome\">Nome *</label>\r\n      <input\r\n        type=\"text\"\r\n        id=\"nome\"\r\n        class=\"form-control\"\r\n        [class.is-invalid]=\"isInvalid && nome.invalid\"\r\n        [formControl]=\"nome\" />\r\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && nome.errors?.required\">\r\n        Nome é obrigatório.\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"nasc\">Data de Nascimento *</label>\r\n      <input\r\n        type=\"date\"\r\n        id=\"nasc\"\r\n        class=\"form-control\"\r\n        [class.is-invalid]=\"isInvalid && nasc.invalid\"\r\n        [formControl]=\"nasc\" />\r\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && nasc.errors?.required\">\r\n        Data de nascimento é obrigatório.\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"genero\">Gênero *</label>\r\n      <select id=\"genero\"\r\n        class=\"form-control\"\r\n        [class.is-invalid]=\"isInvalid && genero.invalid\"\r\n        [formControl]=\"genero\">\r\n        <option value disabled>Selecione o Gênero</option>\r\n        <option value=\"M\">Masculino</option>\r\n        <option value=\"F\">Feminino</option>\r\n      </select>\r\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && genero.errors?.required\">\r\n        Gênero é obrigatório.\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">E-mail *</label>\r\n      <input\r\n        type=\"email\"\r\n        id=\"email\"\r\n        class=\"form-control\"\r\n        [class.is-invalid]=\"isInvalid && email.invalid\"\r\n        [formControl]=\"email\" />\r\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && email.errors?.required\">\r\n        E-mail é obrigatório.\r\n      </div>\r\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && email.errors?.email\">\r\n        E-mail inválido.\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Senha *</label>\r\n      <input\r\n        type=\"password\"\r\n        id=\"senha\"\r\n        class=\"form-control\"\r\n        [class.is-invalid]=\"isInvalid && password.invalid\"\r\n        [formControl]=\"password\" />\r\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && password.errors?.required\">\r\n        Senha é obrigatório.\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <app-button color=\"light\">Cancelar</app-button>\r\n  <app-button [form]=\"'userForm'\" [loading]=\"loading\">Salvar</app-button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/empresa/empresa.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/empresa/empresa.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEmpresaEmpresaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-lg-12\">\r\n    <app-card bodyClass=\"p-0\" [header]=\"false\">\r\n      <div class=\"iq-edit-list\" body>\r\n        <ul class=\"iq-edit-profile d-flex nav nav-pills\">\r\n          <li class=\"col-md-6 p-0\">\r\n            <a class=\"nav-link active\" data-toggle=\"pill\" href=\"#personal-information\">\r\n              Informações da Empresa\r\n            </a>\r\n          </li>\r\n          <li class=\"col-md-6 p-0\">\r\n            <a class=\"nav-link\" data-toggle=\"pill\" href=\"#chang-pwd\">\r\n              Usuários\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-lg-12\">\r\n    <div class=\"iq-edit-list-data\">\r\n      <div class=\"tab-content\">\r\n        <div class=\"tab-pane fade active show\" id=\"personal-information\" role=\"tabpanel\">\r\n          <app-card [loading]=\"loading\">\r\n            <div header>\r\n              <h4>Informações da Empresa</h4>\r\n            </div>\r\n            <div body>\r\n              <empresa-form [empresa]=\"empresa\"></empresa-form>\r\n            </div>\r\n          </app-card>\r\n        </div>\r\n        <div class=\"tab-pane fade\" id=\"chang-pwd\" role=\"tabpanel\">\r\n          <empresa-usuarios [empresaId]=\"empresa?.id\" [usuarios]=\"empresa?.usuarios\"></empresa-usuarios>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/helpers/validators.helper.ts":
  /*!**********************************************!*\
    !*** ./src/app/helpers/validators.helper.ts ***!
    \**********************************************/

  /*! exports provided: cnpjValidator */

  /***/
  function srcAppHelpersValidatorsHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cnpjValidator", function () {
      return cnpjValidator;
    });

    function cnpjValidator() {
      var validateCNPJ = function validateCNPJ(cnpj) {
        cnpj = cnpj.replace(/[^0-9]/g, "");
        var v1 = 0;
        var v2 = 0;
        var aux = false;

        for (var i = 1; cnpj.length > i; i++) {
          if (cnpj[i - 1] != cnpj[i]) {
            aux = true;
          }
        }

        if (aux == false) {
          return false;
        }

        for (var _i = 0, p1 = 5, p2 = 13; cnpj.length - 2 > _i; _i++, p1--, p2--) {
          if (p1 >= 2) {
            v1 += Number(cnpj[_i]) * p1;
          } else {
            v1 += Number(cnpj[_i]) * p2;
          }
        }

        v1 = v1 % 11;

        if (v1 < 2) {
          v1 = 0;
        } else {
          v1 = 11 - v1;
        }

        if (v1 != Number(cnpj[12])) {
          return false;
        }

        for (var _i2 = 0, _p = 6, _p2 = 14; cnpj.length - 1 > _i2; _i2++, _p--, _p2--) {
          if (_p >= 2) {
            v2 += Number(cnpj[_i2]) * _p;
          } else {
            v2 += Number(cnpj[_i2]) * _p2;
          }
        }

        v2 = v2 % 11;

        if (v2 < 2) {
          v2 = 0;
        } else {
          v2 = 11 - v2;
        }

        if (v2 != Number(cnpj[13])) {
          return false;
        } else {
          return true;
        }
      };

      return function (control) {
        if (!control.value || validateCNPJ(control.value)) return null;
        return {
          cnpj: true
        };
      };
    }
    /***/

  },

  /***/
  "./src/app/models/usuario.ts":
  /*!***********************************!*\
    !*** ./src/app/models/usuario.ts ***!
    \***********************************/

  /*! exports provided: UsuarioTipo */

  /***/
  function srcAppModelsUsuarioTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioTipo", function () {
      return UsuarioTipo;
    });

    var UsuarioTipo;

    (function (UsuarioTipo) {
      UsuarioTipo[UsuarioTipo["admin"] = 1] = "admin";
      UsuarioTipo[UsuarioTipo["director"] = 2] = "director";
      UsuarioTipo[UsuarioTipo["coordinator"] = 3] = "coordinator";
      UsuarioTipo[UsuarioTipo["employee"] = 4] = "employee";
    })(UsuarioTipo || (UsuarioTipo = {}));
    /***/

  },

  /***/
  "./src/app/pages/empresa/empresa-form/empresa-form.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/pages/empresa/empresa-form/empresa-form.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEmpresaEmpresaFormEmpresaFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profile-img-edit {\n  background: #e9edf4;\n  border-radius: 0.25rem;\n}\n.profile-img-edit.is-invalid {\n  border: 1px solid var(--red);\n}\n.profile-img-edit .p-image {\n  right: -15px;\n  z-index: 10;\n}\n.profile-img-edit .profile-pic {\n  border-radius: 0.25rem;\n}\n.profile-img-edit .no-pic {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  font-size: 12px;\n  line-height: 22px;\n  height: 100%;\n}\n.profile-img-edit .no-pic i {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZW1wcmVzYS9lbXByZXNhLWZvcm0vQzpcXFVzZXJzXFx1c2VyXFxEb2N1bWVudHNcXEIyQiBIZWFsdGhcXGRhc2hib2FyZC1iMmItaGVhbHRoL3NyY1xcYXBwXFxwYWdlc1xcZW1wcmVzYVxcZW1wcmVzYS1mb3JtXFxlbXByZXNhLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VtcHJlc2EvZW1wcmVzYS1mb3JtL2VtcHJlc2EtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7QUNDSjtBRENJO0VBQ0ksNEJBQUE7QUNDUjtBREVJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNBTjtBREdJO0VBQ0Usc0JBQUE7QUNETjtBRElJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNGUjtBRElRO0VBQ0ksZUFBQTtBQ0ZaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZW1wcmVzYS9lbXByZXNhLWZvcm0vZW1wcmVzYS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtaW1nLWVkaXQge1xyXG4gICAgYmFja2dyb3VuZDogI2U5ZWRmNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcblxyXG4gICAgJi5pcy1pbnZhbGlkIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1yZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC5wLWltYWdlIHtcclxuICAgICAgcmlnaHQ6IC0xNXB4O1xyXG4gICAgICB6LWluZGV4OiAxMDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS1waWMge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5uby1waWMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLnByb2ZpbGUtaW1nLWVkaXQge1xuICBiYWNrZ3JvdW5kOiAjZTllZGY0O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuLnByb2ZpbGUtaW1nLWVkaXQuaXMtaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJlZCk7XG59XG4ucHJvZmlsZS1pbWctZWRpdCAucC1pbWFnZSB7XG4gIHJpZ2h0OiAtMTVweDtcbiAgei1pbmRleDogMTA7XG59XG4ucHJvZmlsZS1pbWctZWRpdCAucHJvZmlsZS1waWMge1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuLnByb2ZpbGUtaW1nLWVkaXQgLm5vLXBpYyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucHJvZmlsZS1pbWctZWRpdCAubm8tcGljIGkge1xuICBmb250LXNpemU6IDE2cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/empresa/empresa-form/empresa-form.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/empresa/empresa-form/empresa-form.component.ts ***!
    \**********************************************************************/

  /*! exports provided: EmpresaFormComponent */

  /***/
  function srcAppPagesEmpresaEmpresaFormEmpresaFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmpresaFormComponent", function () {
      return EmpresaFormComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_models_usuario__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/models/usuario */
    "./src/app/models/usuario.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_empresa_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/empresa.service */
    "./src/app/services/empresa.service.ts");
    /* harmony import */


    var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/helpers/alert.helper */
    "./src/app/helpers/alert.helper.ts");
    /* harmony import */


    var src_app_helpers_validators_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/helpers/validators.helper */
    "./src/app/helpers/validators.helper.ts");

    var EmpresaFormComponent = /*#__PURE__*/function () {
      function EmpresaFormComponent(alertHelper, authService, empresaService, router) {
        _classCallCheck(this, EmpresaFormComponent);

        this.alertHelper = alertHelper;
        this.authService = authService;
        this.empresaService = empresaService;
        this.router = router;
        this.empresaPai = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.nomeEmpresa = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.nomeFantasia = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.cnpj = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, Object(src_app_helpers_validators_helper__WEBPACK_IMPORTED_MODULE_10__["cnpjValidator"])()]);
        this.fone = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.endereco = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.site = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.logo = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.isInvalid = false;
        this.loading = false;
        this.loadingLogo = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(EmpresaFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.auth = this.authService.getUser();
          this.empresas$ = this.empresaService.list().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (c) {
            return c.filter(function (e) {
              var _a;

              return e.id !== ((_a = _this.empresa) === null || _a === void 0 ? void 0 : _a.id);
            });
          }));
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.empresa) {
            this.nomeEmpresa.setValue(this.empresa.nome_empresa);
            this.nomeFantasia.setValue(this.empresa.nome_fantasia);
            this.cnpj.setValue(this.empresa.cnpj);
            this.fone.setValue(this.empresa.fone);
            this.endereco.setValue(this.empresa.endereco);
            this.email.setValue(this.empresa.email);
            this.site.setValue(this.empresa.site);
            this.imageUrl = this.empresa.logo.toString();

            if (this.auth.tipo == src_app_models_usuario__WEBPACK_IMPORTED_MODULE_6__["UsuarioTipo"].admin) {
              this.empresaPai.setValue(this.empresa.empresa_pai);
            }

            this.logo.clearValidators();
            this.logo.updateValueAndValidity();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "logoChanged",
        value: function logoChanged(event) {
          var _this2 = this;

          var file = event.target.files[0];

          if (file && file.type.startsWith('image/')) {
            var reader = new FileReader();

            reader.onload = function () {
              var _a;

              if ((_a = _this2.empresa) === null || _a === void 0 ? void 0 : _a.id) {
                _this2.updateLogo(file);
              } else {
                _this2.imageUrl = reader.result.toString();

                _this2.logo.setValue(file);
              }
            };

            reader.onerror = function () {
              _this2.alertHelper.toast('error', 'Imagem não pode ser carregada. Tente novamente.');
            };

            reader.readAsDataURL(file);
          } else {
            this.alertHelper.toast('error', 'A logo da empresa precisa ser uma imagem.');
          }
        }
      }, {
        key: "submit",
        value: function submit() {
          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;

          this.isInvalid = ((_a = this.nomeEmpresa.errors) === null || _a === void 0 ? void 0 : _a.required) || ((_b = this.nomeFantasia.errors) === null || _b === void 0 ? void 0 : _b.required) || ((_c = this.cnpj.errors) === null || _c === void 0 ? void 0 : _c.required) || ((_d = this.cnpj.errors) === null || _d === void 0 ? void 0 : _d.cnpj) || ((_e = this.fone.errors) === null || _e === void 0 ? void 0 : _e.required) || ((_f = this.endereco.errors) === null || _f === void 0 ? void 0 : _f.required) || ((_g = this.email.errors) === null || _g === void 0 ? void 0 : _g.required) || ((_h = this.email.errors) === null || _h === void 0 ? void 0 : _h.email) || ((_j = this.site.errors) === null || _j === void 0 ? void 0 : _j.required) || ((_k = this.logo.errors) === null || _k === void 0 ? void 0 : _k.required);

          if (this.auth.tipo == src_app_models_usuario__WEBPACK_IMPORTED_MODULE_6__["UsuarioTipo"].admin) {
            this.isInvalid = this.isInvalid || ((_l = this.empresaPai.errors) === null || _l === void 0 ? void 0 : _l.required);
          }

          if (!this.isInvalid) {
            this.empresa = Object.assign(Object.assign({}, this.empresa), {
              nome_empresa: this.nomeEmpresa.value,
              nome_fantasia: this.nomeFantasia.value,
              cnpj: this.cnpj.value,
              fone: this.fone.value,
              endereco: this.endereco.value,
              email: this.email.value,
              site: this.site.value,
              logo: this.logo.value
            });

            if (this.auth.tipo == src_app_models_usuario__WEBPACK_IMPORTED_MODULE_6__["UsuarioTipo"].admin) {
              this.empresa.empresa_pai = this.empresaPai.value;
            }

            if ((_m = this.empresa) === null || _m === void 0 ? void 0 : _m.id) {
              this.empresa.logo = undefined;
              this.updateEmpresa();
            } else {
              this.createEmpresa();
            }
          }
        }
      }, {
        key: "createEmpresa",
        value: function createEmpresa() {
          var _this3 = this;

          this.loading = true;
          this.empresaService.create(this.empresa).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next() {
              _this3.loading = false;

              _this3.alertHelper.toast('success', 'Empresa cadastrada com sucesso.');

              _this3.router.navigateByUrl('/empresas');
            },
            error: function error() {
              _this3.loading = false;
            }
          });
        }
      }, {
        key: "updateEmpresa",
        value: function updateEmpresa() {
          var _this4 = this;

          this.loading = true;
          this.empresaService.update(this.empresa).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next() {
              _this4.loading = false;

              _this4.alertHelper.toast('success', 'Empresa atualizada com sucesso.');
            },
            error: function error() {
              _this4.loading = false;
            }
          });
        }
      }, {
        key: "updateLogo",
        value: function updateLogo(logo) {
          var _this5 = this;

          this.loadingLogo = true;
          this.empresaService.updateLogo(this.empresa.id, logo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(empresa) {
              _this5.loadingLogo = false;
              _this5.imageUrl = empresa.logo.toString();

              _this5.alertHelper.toast('success', 'Logo alterada com sucesso.');
            },
            error: function error() {
              _this5.loadingLogo = false;
            }
          });
        }
      }]);

      return EmpresaFormComponent;
    }();

    EmpresaFormComponent.ctorParameters = function () {
      return [{
        type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_9__["AlertHelper"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
      }, {
        type: src_app_services_empresa_service__WEBPACK_IMPORTED_MODULE_8__["EmpresaService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EmpresaFormComponent.prototype, "empresa", void 0);
    EmpresaFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'empresa-form',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./empresa-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/empresa/empresa-form/empresa-form.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./empresa-form.component.scss */
      "./src/app/pages/empresa/empresa-form/empresa-form.component.scss"))["default"]]
    })], EmpresaFormComponent);
    /***/
  },

  /***/
  "./src/app/pages/empresa/empresa-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/empresa/empresa-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: EmpresaRoutingModule */

  /***/
  function srcAppPagesEmpresaEmpresaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmpresaRoutingModule", function () {
      return EmpresaRoutingModule;
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


    var _empresa_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./empresa.component */
    "./src/app/pages/empresa/empresa.component.ts");

    var routes = [{
      path: '',
      component: _empresa_component__WEBPACK_IMPORTED_MODULE_3__["EmpresaComponent"]
    }];

    var EmpresaRoutingModule = /*#__PURE__*/_createClass(function EmpresaRoutingModule() {
      _classCallCheck(this, EmpresaRoutingModule);
    });

    EmpresaRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EmpresaRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/empresa/empresa-usuarios/empresa-usuarios.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/empresa/empresa-usuarios/empresa-usuarios.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEmpresaEmpresaUsuariosEmpresaUsuariosComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtcHJlc2EvZW1wcmVzYS11c3Vhcmlvcy9lbXByZXNhLXVzdWFyaW9zLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/empresa/empresa-usuarios/empresa-usuarios.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/empresa/empresa-usuarios/empresa-usuarios.component.ts ***!
    \******************************************************************************/

  /*! exports provided: EmpresaUsuariosComponent */

  /***/
  function srcAppPagesEmpresaEmpresaUsuariosEmpresaUsuariosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmpresaUsuariosComponent", function () {
      return EmpresaUsuariosComponent;
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


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./usuario-form/usuario-form.component */
    "./src/app/pages/empresa/empresa-usuarios/usuario-form/usuario-form.component.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/usuario.service */
    "./src/app/services/usuario.service.ts");
    /* harmony import */


    var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/helpers/alert.helper */
    "./src/app/helpers/alert.helper.ts");

    var EmpresaUsuariosComponent = /*#__PURE__*/function () {
      function EmpresaUsuariosComponent(modalService, usuarioService, alertHelper) {
        _classCallCheck(this, EmpresaUsuariosComponent);

        this.modalService = modalService;
        this.usuarioService = usuarioService;
        this.alertHelper = alertHelper;
        this.loading = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(EmpresaUsuariosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "openUsuarioForm",
        value: function openUsuarioForm(usuario) {
          var _this6 = this;

          this.bsModalRef = this.modalService.show(_usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_3__["UsuarioFormComponent"], {
            initialState: {
              empresaId: this.empresaId,
              usuario: usuario
            }
          });
          var component = this.bsModalRef.content;
          component.onClose.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(usuario) {
              var index = _this6.usuarios.findIndex(function (u) {
                return u.id == usuario.id;
              });

              if (index === -1) {
                _this6.usuarios.unshift(usuario);
              } else {
                _this6.usuarios[index] = usuario;
              }
            }
          });
        }
      }, {
        key: "destroy",
        value: function destroy(usuario) {
          var _this7 = this;

          this.alertHelper.show('warning', "Tem certeza que deseja remover o usu\xE1rio ".concat(usuario.nome, "?"), {
            showCancelButton: true
          }).then(function (confirmed) {
            if (confirmed) {
              _this7.loading = true;

              _this7.usuarioService["delete"](usuario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this7.unsubscribe$)).subscribe({
                next: function next(usuario) {
                  _this7.loading = false;
                  _this7.usuarios = _this7.usuarios.filter(function (u) {
                    return u.id != usuario.id;
                  });
                },
                error: function error() {
                  _this7.loading = false;
                }
              });
            }
          });
        }
      }]);

      return EmpresaUsuariosComponent;
    }();

    EmpresaUsuariosComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
      }, {
        type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"]
      }, {
        type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_7__["AlertHelper"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EmpresaUsuariosComponent.prototype, "empresaId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EmpresaUsuariosComponent.prototype, "usuarios", void 0);
    EmpresaUsuariosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'empresa-usuarios',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./empresa-usuarios.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/empresa/empresa-usuarios/empresa-usuarios.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./empresa-usuarios.component.scss */
      "./src/app/pages/empresa/empresa-usuarios/empresa-usuarios.component.scss"))["default"]]
    })], EmpresaUsuariosComponent);
    /***/
  },

  /***/
  "./src/app/pages/empresa/empresa-usuarios/usuario-form/usuario-form.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/empresa/empresa-usuarios/usuario-form/usuario-form.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEmpresaEmpresaUsuariosUsuarioFormUsuarioFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtcHJlc2EvZW1wcmVzYS11c3Vhcmlvcy91c3VhcmlvLWZvcm0vdXN1YXJpby1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/empresa/empresa-usuarios/usuario-form/usuario-form.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/pages/empresa/empresa-usuarios/usuario-form/usuario-form.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: UsuarioFormComponent */

  /***/
  function srcAppPagesEmpresaEmpresaUsuariosUsuarioFormUsuarioFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioFormComponent", function () {
      return UsuarioFormComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_data_user_types_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/data/user-types.data */
    "./src/app/data/user-types.data.ts");
    /* harmony import */


    var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/helpers/alert.helper */
    "./src/app/helpers/alert.helper.ts");
    /* harmony import */


    var src_app_models_response_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/models/response-error */
    "./src/app/models/response-error.ts");
    /* harmony import */


    var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/usuario.service */
    "./src/app/services/usuario.service.ts");

    var UsuarioFormComponent = /*#__PURE__*/function () {
      function UsuarioFormComponent(bsModalRef, usuarioService, alertHelper) {
        _classCallCheck(this, UsuarioFormComponent);

        this.bsModalRef = bsModalRef;
        this.usuarioService = usuarioService;
        this.alertHelper = alertHelper;
        this.nome = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.nasc = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.tipo = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.genero = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.isInvalid = false;
        this.loading = false;
        this.userTypes = [];
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(UsuarioFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userTypes = src_app_data_user_types_data__WEBPACK_IMPORTED_MODULE_6__["USER_TYPES"].filter(function (u) {
            return u.id != 1;
          });

          if (this.usuario) {
            this.nome.setValue(this.usuario.nome);
            this.email.setValue(this.usuario.email);
            this.nasc.setValue(this.usuario.nasc);
            this.tipo.setValue(this.usuario.tipo);
            this.genero.setValue(this.usuario.genero);
            this.password.clearValidators();
            this.password.updateValueAndValidity();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "submit",
        value: function submit() {
          var _a;

          this.isInvalid = this.nome.invalid || this.email.invalid || this.nasc.invalid || this.tipo.invalid || this.genero.invalid || this.password.invalid;

          if (!this.isInvalid) {
            this.usuario = Object.assign(Object.assign({}, this.usuario), {
              empresa_id: this.empresaId,
              nome: this.nome.value,
              email: this.email.value,
              nasc: this.nasc.value,
              tipo: this.tipo.value,
              genero: this.genero.value
            });

            if (this.password.value) {
              this.usuario.password = this.password.value;
            }

            if ((_a = this.usuario) === null || _a === void 0 ? void 0 : _a.id) {
              this.updateUsuario();
            } else {
              this.createUsuario();
            }
          }
        }
      }, {
        key: "createUsuario",
        value: function createUsuario() {
          var _this8 = this;

          this.loading = true;
          this.usuarioService.create(this.usuario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(usuario) {
              _this8.loading = false;

              _this8.alertHelper.toast('success', 'Usuário cadastrado com sucesso.');

              _this8.onClose.next(usuario);

              _this8.bsModalRef.hide();
            },
            error: function error(e) {
              _this8.loading = false;

              if (e instanceof src_app_models_response_error__WEBPACK_IMPORTED_MODULE_8__["ResponseError"]) {
                _this8.alertHelper.show('error', e.getMessage(), {
                  confirmButtonText: 'Entendi'
                });
              }
            }
          });
        }
      }, {
        key: "updateUsuario",
        value: function updateUsuario() {
          var _this9 = this;

          this.loading = true;
          this.usuarioService.update(this.usuario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(usuario) {
              _this9.loading = false;

              _this9.alertHelper.toast('success', 'Usuário atualizado com sucesso.');

              _this9.onClose.next(usuario);

              _this9.bsModalRef.hide();
            },
            error: function error() {
              _this9.loading = false;
            }
          });
        }
      }]);

      return UsuarioFormComponent;
    }();

    UsuarioFormComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"]
      }, {
        type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioService"]
      }, {
        type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_7__["AlertHelper"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UsuarioFormComponent.prototype, "empresaId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UsuarioFormComponent.prototype, "usuario", void 0);
    UsuarioFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'usuario-form',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./usuario-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/empresa/empresa-usuarios/usuario-form/usuario-form.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./usuario-form.component.scss */
      "./src/app/pages/empresa/empresa-usuarios/usuario-form/usuario-form.component.scss"))["default"]]
    })], UsuarioFormComponent);
    /***/
  },

  /***/
  "./src/app/pages/empresa/empresa.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/pages/empresa/empresa.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEmpresaEmpresaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtcHJlc2EvZW1wcmVzYS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/empresa/empresa.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/empresa/empresa.component.ts ***!
    \****************************************************/

  /*! exports provided: EmpresaComponent */

  /***/
  function srcAppPagesEmpresaEmpresaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmpresaComponent", function () {
      return EmpresaComponent;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_services_empresa_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/empresa.service */
    "./src/app/services/empresa.service.ts");

    var EmpresaComponent = /*#__PURE__*/function () {
      function EmpresaComponent(activatedRoute, empresaService) {
        _classCallCheck(this, EmpresaComponent);

        this.activatedRoute = activatedRoute;
        this.empresaService = empresaService;
        this.loading = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(EmpresaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var id = this.activatedRoute.snapshot.paramMap.get('id');

          if (id !== null) {
            this.loadEmpresa(Number(id));
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "loadEmpresa",
        value: function loadEmpresa(id) {
          var _this10 = this;

          this.loading = true;
          this.empresaService.findById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(empresa) {
              _this10.loading = false;
              _this10.empresa = empresa;
            },
            error: function error() {
              _this10.loading = false;
            }
          });
        }
      }]);

      return EmpresaComponent;
    }();

    EmpresaComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_empresa_service__WEBPACK_IMPORTED_MODULE_5__["EmpresaService"]
      }];
    };

    EmpresaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-empresa',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./empresa.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/empresa/empresa.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./empresa.component.scss */
      "./src/app/pages/empresa/empresa.component.scss"))["default"]]
    })], EmpresaComponent);
    /***/
  },

  /***/
  "./src/app/pages/empresa/empresa.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/empresa/empresa.module.ts ***!
    \*************************************************/

  /*! exports provided: EmpresaModule */

  /***/
  function srcAppPagesEmpresaEmpresaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmpresaModule", function () {
      return EmpresaModule;
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


    var _empresa_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./empresa-routing.module */
    "./src/app/pages/empresa/empresa-routing.module.ts");
    /* harmony import */


    var _empresa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./empresa.component */
    "./src/app/pages/empresa/empresa.component.ts");
    /* harmony import */


    var _empresa_form_empresa_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./empresa-form/empresa-form.component */
    "./src/app/pages/empresa/empresa-form/empresa-form.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-mask */
    "./node_modules/ngx-mask/__ivy_ngcc__/fesm2015/ngx-mask.js");
    /* harmony import */


    var _empresa_usuarios_empresa_usuarios_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./empresa-usuarios/empresa-usuarios.component */
    "./src/app/pages/empresa/empresa-usuarios/empresa-usuarios.component.ts");
    /* harmony import */


    var _empresa_usuarios_usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./empresa-usuarios/usuario-form/usuario-form.component */
    "./src/app/pages/empresa/empresa-usuarios/usuario-form/usuario-form.component.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _pipes_user_type_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pipes/user-type.pipe */
    "./src/app/pages/empresa/pipes/user-type.pipe.ts");

    var EmpresaModule = /*#__PURE__*/_createClass(function EmpresaModule() {
      _classCallCheck(this, EmpresaModule);
    });

    EmpresaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_empresa_component__WEBPACK_IMPORTED_MODULE_4__["EmpresaComponent"], _empresa_form_empresa_form_component__WEBPACK_IMPORTED_MODULE_5__["EmpresaFormComponent"], _empresa_usuarios_empresa_usuarios_component__WEBPACK_IMPORTED_MODULE_8__["EmpresaUsuariosComponent"], _empresa_usuarios_usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_9__["UsuarioFormComponent"], _pipes_user_type_pipe__WEBPACK_IMPORTED_MODULE_13__["UserTypePipe"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _empresa_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmpresaRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_7__["NgxMaskModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forChild(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsModule"]]
    })], EmpresaModule);
    /***/
  },

  /***/
  "./src/app/pages/empresa/pipes/user-type.pipe.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/empresa/pipes/user-type.pipe.ts ***!
    \*******************************************************/

  /*! exports provided: UserTypePipe */

  /***/
  function srcAppPagesEmpresaPipesUserTypePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserTypePipe", function () {
      return UserTypePipe;
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


    var src_app_data_user_types_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/data/user-types.data */
    "./src/app/data/user-types.data.ts");

    var UserTypePipe = /*#__PURE__*/function () {
      function UserTypePipe() {
        _classCallCheck(this, UserTypePipe);
      }

      _createClass(UserTypePipe, [{
        key: "transform",
        value: function transform(value) {
          var type = src_app_data_user_types_data__WEBPACK_IMPORTED_MODULE_2__["USER_TYPES"].find(function (u) {
            return u.id == value;
          });
          return type != undefined ? type.text : '';
        }
      }]);

      return UserTypePipe;
    }();

    UserTypePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'userType'
    })], UserTypePipe);
    /***/
  },

  /***/
  "./src/app/services/usuario.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/usuario.service.ts ***!
    \*********************************************/

  /*! exports provided: UsuarioService */

  /***/
  function srcAppServicesUsuarioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioService", function () {
      return UsuarioService;
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

    var UsuarioService = /*#__PURE__*/function () {
      function UsuarioService(http) {
        _classCallCheck(this, UsuarioService);

        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
      }

      _createClass(UsuarioService, [{
        key: "create",
        value: function create(usuario) {
          return this.http.post("".concat(this.apiUrl, "/usuarios"), usuario);
        }
      }, {
        key: "update",
        value: function update(usuario) {
          return this.http.put("".concat(this.apiUrl, "/usuarios/").concat(usuario.id), usuario);
        }
      }, {
        key: "delete",
        value: function _delete(usuario) {
          return this.http["delete"]("".concat(this.apiUrl, "/usuarios/").concat(usuario.id));
        }
      }]);

      return UsuarioService;
    }();

    UsuarioService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    UsuarioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], UsuarioService);
    /***/
  }
}]);
//# sourceMappingURL=pages-empresa-empresa-module-es5.js.map