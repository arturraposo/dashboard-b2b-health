function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-configuracoes-configuracoes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/dietas/dieta-form/dieta-form.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/dietas/dieta-form/dieta-form.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfiguracoesDietasDietaFormDietaFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Dieta</h4>\n  <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"close()\">\n    <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form id=\"doencaForm\" (ngSubmit)=\"submit()\">\n    <div class=\"form-group\">\n      <label for=\"programaId\">Programa *</label>\n      <ng-select [formControl]=\"programaId\" [class.is-invalid]=\"isInvalid && programaId.invalid\" id=\"programaId\">\n        <ng-option [value]=\"programa.id\" *ngFor=\"let programa of programas\">{{ programa.desc }}</ng-option>\n      </ng-select>\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && programaId.errors?.required\">\n        Programa é obrigatório.\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"refeicaoId\">Refeição *</label>\n      <ng-select [formControl]=\"refeicaoId\" [class.is-invalid]=\"isInvalid && refeicaoId.invalid\" id=\"refeicaoId\">\n        <ng-option [value]=\"refeicao.id\" *ngFor=\"let refeicao of refeicoes\">{{ refeicao.desc }}</ng-option>\n      </ng-select>\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && refeicaoId.errors?.required\">\n        Refeição é obrigatória.\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"itemId\">Item *</label>\n      <ng-select [formControl]=\"itemId\" [class.is-invalid]=\"isInvalid && itemId.invalid\" id=\"itemId\">\n        <ng-option [value]=\"item.id\" *ngFor=\"let item of itens\">{{ item.desc }}</ng-option>\n      </ng-select>\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && itemId.errors?.required\">\n        Item é obrigatório.\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"mes\">Dia *</label>\n      <ng-select [formControl]=\"dia\" [class.is-invalid]=\"isInvalid && mes.invalid\" id=\"dia\">\n        <ng-option [value]=\"i+1\" *ngFor=\"let dia of dias; let i=index\">{{ dia }}</ng-option>\n      </ng-select>\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && dia.errors?.required\">\n        Dia é obrigatório.\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"mes\">Mês *</label>\n      <ng-select [formControl]=\"mes\" [class.is-invalid]=\"isInvalid && mes.invalid\" id=\"mes\">\n        <ng-option [value]=\"i+1\" *ngFor=\"let mes of meses; let i=index\">{{ mes }}</ng-option>\n      </ng-select>\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && mes.errors?.required\">\n        Mês é obrigatório.\n      </div>\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <app-button type=\"reset\" form=\"doencaForm\" color=\"light\" (click)=\"close()\">Cancelar</app-button>\n  <app-button type=\"submit\" form=\"doencaForm\" [loading]=\"loading\">Salvar</app-button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/dietas/dietas.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/dietas/dietas.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfiguracoesDietasDietasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-lg-12\">\r\n    <app-card bodyClass=\"p-0\" [header]=\"false\">\r\n      <div class=\"iq-edit-list\" body>\r\n        <ul class=\"iq-edit-profile d-flex nav nav-pills\">\r\n          <li class=\"col-md-6 p-0\">\r\n            <a class=\"nav-link active\" data-toggle=\"pill\" href=\"#dietas\">\r\n              Dietas\r\n            </a>\r\n          </li>\r\n          <li class=\"col-md-6 p-0\">\r\n            <a class=\"nav-link\" data-toggle=\"pill\" href=\"#itens-dieta\">\r\n              Itens\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-lg-12\">\r\n    <div class=\"iq-edit-list-data\">\r\n      <div class=\"tab-content\">\r\n        <div class=\"tab-pane fade active show\" id=\"dietas\" role=\"tabpanel\">\r\n          <app-card [backdrop]=\"true\" [loading]=\"loading\">\r\n            <div class=\"d-flex justify-content-between align-items-center\" header>\r\n              <h4>Dietas</h4>\r\n              <app-button rounded=\"pill\" (click)=\"openDietaForm()\">\r\n                <i class=\"ri-add-line mr-1\"></i>\r\n                Nova Dieta\r\n              </app-button>\r\n            </div>\r\n            <div body>\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-striped table-borderless\">\r\n                  <thead>\r\n                        <tr>\r\n                            <th scope=\"col\">#</th>\r\n                            <th scope=\"col\" class=\"text-center\">Mês</th>\r\n                            <th scope=\"col\" class=\"text-center\">Dia</th>\r\n                            <th scope=\"col\">Programa</th>\r\n                            <th scope=\"col\">Refeição</th>\r\n                            <th scope=\"col\">Item</th>\r\n                        </tr>\r\n                    </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let dieta of dietas\">\r\n                      <td class=\"align-middle\">{{ dieta.id }}</td>\r\n                      <td class=\"align-middle text-center\">{{ dieta.mes }}</td>\r\n                      <td class=\"align-middle text-center\">{{ dieta.dia }}</td>\r\n                      <td class=\"align-middle\">{{ dieta.programa.desc }}</td>\r\n                      <td class=\"align-middle\">{{ dieta.refeicao.desc }}</td>\r\n                      <td class=\"align-middle\">{{ dieta.item.desc }}</td>\r\n                      <td class=\"d-flex flex-nowrap align-items-center justify-content-end\">\r\n                        <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"openDietaForm(dieta)\">\r\n                          <i class=\"ri-edit-box-line\"></i>\r\n                        </app-button>\r\n                        <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"deleteDieta(dieta)\">\r\n                          <i class=\"ri-delete-bin-line\"></i>\r\n                        </app-button>\r\n                      </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"dietas?.length == 0\">\r\n                      <td colspan=\"6\" class=\"text-center\">Nenhuma dieta encontrada</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </app-card>\r\n        </div>\r\n        <div class=\"tab-pane fade\" id=\"itens-dieta\" role=\"tabpanel\">\r\n          <app-card [backdrop]=\"true\" [loading]=\"loading\">\r\n            <div class=\"d-flex justify-content-between align-items-center\" header>\r\n              <h4>Itens</h4>\r\n              <app-button rounded=\"pill\" (click)=\"openItemDietaForm()\">\r\n                <i class=\"ri-add-line mr-1\"></i>\r\n                Novo Item\r\n              </app-button>\r\n            </div>\r\n            <div body>\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-striped table-borderless\">\r\n                  <thead>\r\n                        <tr>\r\n                            <th scope=\"col\">#</th>\r\n                            <th scope=\"col\">Imagem</th>\r\n                            <th scope=\"col\">Descrição</th>\r\n                        </tr>\r\n                    </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let item of itensDieta\">\r\n                      <td class=\"align-middle\">{{ item.id }}</td>\r\n                      <td class=\"align-middle\">\r\n                        <img class=\"rounded\" [src]=\"item.url_img\" height=\"80px\" />\r\n                      </td>\r\n                      <td class=\"align-middle\">{{ item.desc }}</td>\r\n                      <td class=\"align-middle\">\r\n                        <div class=\"d-flex flex-nowrap align-items-center justify-content-end\">\r\n                          <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"openItemDietaForm(item)\">\r\n                            <i class=\"ri-edit-box-line\"></i>\r\n                          </app-button>\r\n                          <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"deleteItemDieta(item)\">\r\n                            <i class=\"ri-delete-bin-line\"></i>\r\n                          </app-button>\r\n                        </div>\r\n                      </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"itensDieta?.length == 0\">\r\n                      <td colspan=\"6\" class=\"text-center\">Nenhum item encontrado</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </app-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/dietas/item-dieta-form/item-dieta-form.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/dietas/item-dieta-form/item-dieta-form.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfiguracoesDietasItemDietaFormItemDietaFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">Item Dieta</h4>\r\n  <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form id=\"doencaForm\" (ngSubmit)=\"submit()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"desc\">Descrição *</label>\r\n      <input\r\n        type=\"text\"\r\n        id=\"desc\"\r\n        class=\"form-control\"\r\n        [class.is-invalid]=\"isInvalid && desc.invalid\"\r\n        [formControl]=\"desc\" />\r\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && desc.errors?.required\">\r\n        Descrição é obrigatório.\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"validatedCustomFile\">Imagem</label>\r\n      <div class=\"custom-file\">\r\n        <input\r\n          type=\"file\"\r\n          class=\"custom-file-input\"\r\n          id=\"validatedCustomFile\"\r\n          accept=\"image/*\"\r\n          (change)=\"imageChanged($event)\">\r\n        <label\r\n          class=\"custom-file-label\"\r\n          for=\"validatedCustomFile\"\r\n          [class.is-invalid]=\"isInvalid && !urlImg\">\r\n          Escolha uma imagem...\r\n        </label>\r\n        <div class=\"invalid-feedback\" *ngIf=\"isInvalid && !urlImg\">\r\n          Imagem é obrigatória.\r\n        </div>\r\n      </div>\r\n      <img [src]=\"urlImg\" class=\"img-thumbnail\" *ngIf=\"urlImg\">\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <app-button type=\"reset\" form=\"doencaForm\" color=\"light\" (click)=\"close()\">Cancelar</app-button>\r\n  <app-button type=\"submit\" form=\"doencaForm\" [loading]=\"loading\">Salvar</app-button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/doencas/doenca-form/doenca-form.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/doencas/doenca-form/doenca-form.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfiguracoesDoencasDoencaFormDoencaFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">Doença</h4>\r\n  <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form id=\"doencaForm\" (ngSubmit)=\"submit()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"desc\">Descrição *</label>\r\n      <input\r\n        type=\"text\"\r\n        id=\"desc\"\r\n        class=\"form-control\"\r\n        [class.is-invalid]=\"isInvalid && desc.invalid\"\r\n        [formControl]=\"desc\" />\r\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && desc.errors?.required\">\r\n        Descrição é obrigatório.\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <app-button type=\"reset\" form=\"doencaForm\" color=\"light\" (click)=\"close()\">Cancelar</app-button>\r\n  <app-button type=\"submit\" form=\"doencaForm\" [loading]=\"loading\">Salvar</app-button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/doencas/doencas.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/doencas/doencas.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfiguracoesDoencasDoencasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [backdrop]=\"true\" [loading]=\"loading\">\r\n      <div class=\"d-flex justify-content-between align-items-center\" header>\r\n        <h4>Doenças</h4>\r\n        <app-button rounded=\"pill\" (click)=\"openDoencaForm()\">\r\n          <i class=\"ri-add-line mr-1\"></i>\r\n          Nova Doença\r\n        </app-button>\r\n      </div>\r\n      <div body>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped table-borderless\">\r\n            <thead>\r\n                  <tr>\r\n                      <th scope=\"col\">#</th>\r\n                      <th scope=\"col\">Descrição</th>\r\n                      <th scope=\"col\"></th>\r\n                  </tr>\r\n              </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let doenca of doencas\">\r\n                <td class=\"align-middle\">{{ doenca.id }}</td>\r\n                <td class=\"align-middle\">{{ doenca.desc }}</td>\r\n                <td class=\"d-flex flex-nowrap align-items-center justify-content-end\">\r\n                  <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"openDoencaForm(doenca)\">\r\n                    <i class=\"ri-edit-box-line\"></i>\r\n                  </app-button>\r\n                  <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"deleteDoenca(doenca)\">\r\n                    <i class=\"ri-delete-bin-line\"></i>\r\n                  </app-button>\r\n                </td>\r\n              </tr>\r\n              <tr *ngIf=\"doencas?.length == 0\">\r\n                <td colspan=\"6\" class=\"text-center\">Nenhuma doença encontrada</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/frequencias-de-atividades/frequencia-form/frequencia-form.component.html":
  /*!****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/frequencias-de-atividades/frequencia-form/frequencia-form.component.html ***!
    \****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfiguracoesFrequenciasDeAtividadesFrequenciaFormFrequenciaFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">Frequência de Atividade</h4>\r\n  <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form id=\"freqAtivForm\" (ngSubmit)=\"submit()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"desc\">Descrição *</label>\r\n      <input\r\n        type=\"text\"\r\n        id=\"desc\"\r\n        class=\"form-control\"\r\n        [class.is-invalid]=\"isInvalid && desc.invalid\"\r\n        [formControl]=\"desc\" />\r\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && desc.errors?.required\">\r\n        Descrição é obrigatório.\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <app-button type=\"reset\" form=\"freqAtivForm\" color=\"light\" (click)=\"close()\">Cancelar</app-button>\r\n  <app-button type=\"submit\" form=\"freqAtivForm\" [loading]=\"loading\">Salvar</app-button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/frequencias-de-atividades/frequencias-de-atividades.component.html":
  /*!**********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/frequencias-de-atividades/frequencias-de-atividades.component.html ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfiguracoesFrequenciasDeAtividadesFrequenciasDeAtividadesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [backdrop]=\"true\" [loading]=\"loading\">\r\n      <div class=\"d-flex justify-content-between align-items-center\" header>\r\n        <h4>Frequências de Atividades</h4>\r\n        <app-button rounded=\"pill\" (click)=\"openFrequenciaForm()\">\r\n          <i class=\"ri-add-line mr-1\"></i>\r\n          Nova Frequência\r\n        </app-button>\r\n      </div>\r\n      <div body>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped table-borderless\">\r\n            <thead>\r\n                  <tr>\r\n                      <th scope=\"col\">#</th>\r\n                      <th scope=\"col\">Descrição</th>\r\n                      <th scope=\"col\"></th>\r\n                  </tr>\r\n              </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let freqAtiv of frequenciasAtividades\">\r\n                <td class=\"align-middle\">{{ freqAtiv.id }}</td>\r\n                <td class=\"align-middle\">{{ freqAtiv.desc }}</td>\r\n                <td class=\"d-flex flex-nowrap align-items-center justify-content-end\">\r\n                  <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"openFrequenciaForm(freqAtiv)\">\r\n                    <i class=\"ri-edit-box-line\"></i>\r\n                  </app-button>\r\n                  <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"deleteFrequenciaAtividade(freqAtiv)\">\r\n                    <i class=\"ri-delete-bin-line\"></i>\r\n                  </app-button>\r\n                </td>\r\n              </tr>\r\n              <tr *ngIf=\"frequenciasAtividades?.length == 0\">\r\n                <td colspan=\"6\" class=\"text-center\">Nenhum frequência de atividade encontrada</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/grupos-de-exames/grupo-form/grupo-form.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/grupos-de-exames/grupo-form/grupo-form.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfiguracoesGruposDeExamesGrupoFormGrupoFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">Grupo de Exame</h4>\r\n  <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form id=\"grupoExameForm\" (ngSubmit)=\"submit()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"desc\">Descrição *</label>\r\n      <input\r\n        type=\"text\"\r\n        id=\"desc\"\r\n        class=\"form-control\"\r\n        [class.is-invalid]=\"isInvalid && desc.invalid\"\r\n        [formControl]=\"desc\" />\r\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && desc.errors?.required\">\r\n        Descrição é obrigatório.\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <app-button type=\"reset\" form=\"grupoExameForm\" color=\"light\" (click)=\"close()\">Cancelar</app-button>\r\n  <app-button type=\"submit\" form=\"grupoExameForm\" [loading]=\"loading\">Salvar</app-button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/grupos-de-exames/grupos-de-exames.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/grupos-de-exames/grupos-de-exames.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfiguracoesGruposDeExamesGruposDeExamesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [backdrop]=\"true\" [loading]=\"loading\">\r\n      <div class=\"d-flex justify-content-between align-items-center\" header>\r\n        <h4>Grupos de Exames</h4>\r\n        <app-button rounded=\"pill\" (click)=\"openGrupoForm()\">\r\n          <i class=\"ri-add-line mr-1\"></i>\r\n          Novo Grupo\r\n        </app-button>\r\n      </div>\r\n      <div body>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped table-borderless\">\r\n            <thead>\r\n                  <tr>\r\n                      <th scope=\"col\">#</th>\r\n                      <th scope=\"col\">Descrição</th>\r\n                      <th scope=\"col\"></th>\r\n                  </tr>\r\n              </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let grupoExame of gruposExames\">\r\n                <td class=\"align-middle\">{{ grupoExame.id }}</td>\r\n                <td class=\"align-middle\">{{ grupoExame.desc }}</td>\r\n                <td class=\"d-flex flex-nowrap align-items-center justify-content-end\">\r\n                  <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"openGrupoForm(grupoExame)\">\r\n                    <i class=\"ri-edit-box-line\"></i>\r\n                  </app-button>\r\n                  <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"deleteGrupoExame(grupoExame)\">\r\n                    <i class=\"ri-delete-bin-line\"></i>\r\n                  </app-button>\r\n                </td>\r\n              </tr>\r\n              <tr *ngIf=\"gruposExames?.length == 0\">\r\n                <td colspan=\"6\" class=\"text-center\">Nenhum grupo de exame encontrado</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/imc/imc-form/imc-form.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/imc/imc-form/imc-form.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfiguracoesImcImcFormImcFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">IMC</h4>\r\n  <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form id=\"imcForm\" (ngSubmit)=\"submit()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"tipo\">Tipo *</label>\r\n      <input\r\n        type=\"text\"\r\n        id=\"tipo\"\r\n        class=\"form-control\"\r\n        [class.is-invalid]=\"isInvalid && tipo.invalid\"\r\n        [formControl]=\"tipo\" />\r\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && tipo.errors?.required\">\r\n        Tipo é obrigatório.\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <app-button type=\"reset\" form=\"imcForm\" color=\"light\" (click)=\"close()\">Cancelar</app-button>\r\n  <app-button type=\"submit\" form=\"imcForm\" [loading]=\"loading\">Salvar</app-button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/imc/imc.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/imc/imc.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfiguracoesImcImcComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [backdrop]=\"true\" [loading]=\"loading\">\r\n      <div class=\"d-flex justify-content-between align-items-center\" header>\r\n        <h4>IMC</h4>\r\n        <app-button rounded=\"pill\" (click)=\"openImcForm()\">\r\n          <i class=\"ri-add-line mr-1\"></i>\r\n          Novo IMC\r\n        </app-button>\r\n      </div>\r\n      <div body>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped table-borderless\">\r\n            <thead>\r\n                  <tr>\r\n                      <th scope=\"col\">#</th>\r\n                      <th scope=\"col\">Tipo</th>\r\n                      <th scope=\"col\"></th>\r\n                  </tr>\r\n              </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let imc of imcArr\">\r\n                <td class=\"align-middle\">{{ imc.id }}</td>\r\n                <td class=\"align-middle\">{{ imc.tipo }}</td>\r\n                <td class=\"d-flex flex-nowrap align-items-center justify-content-end\">\r\n                  <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"openImcForm(imc)\">\r\n                    <i class=\"ri-edit-box-line\"></i>\r\n                  </app-button>\r\n                  <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"deleteImc(imc)\">\r\n                    <i class=\"ri-delete-bin-line\"></i>\r\n                  </app-button>\r\n                </td>\r\n              </tr>\r\n              <tr *ngIf=\"imcArr?.length == 0\">\r\n                <td colspan=\"6\" class=\"text-center\">Nenhum IMC encontrado</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/metas/meta-form/meta-form.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/metas/meta-form/meta-form.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfiguracoesMetasMetaFormMetaFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">Meta</h4>\r\n  <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form id=\"metaForm\" (ngSubmit)=\"submit()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"desc\">Descrição *</label>\r\n      <input\r\n        type=\"text\"\r\n        id=\"desc\"\r\n        class=\"form-control\"\r\n        [class.is-invalid]=\"isInvalid && desc.invalid\"\r\n        [formControl]=\"desc\" />\r\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && desc.errors?.required\">\r\n        Descrição é obrigatório.\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <app-button type=\"reset\" form=\"metaForm\" color=\"light\" (click)=\"close()\">Cancelar</app-button>\r\n  <app-button type=\"submit\" form=\"metaForm\" [loading]=\"loading\">Salvar</app-button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/metas/metas.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/metas/metas.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfiguracoesMetasMetasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [backdrop]=\"true\" [loading]=\"loading\">\r\n      <div class=\"d-flex justify-content-between align-items-center\" header>\r\n        <h4>Metas</h4>\r\n        <app-button rounded=\"pill\" (click)=\"openMetaForm()\">\r\n          <i class=\"ri-add-line mr-1\"></i>\r\n          Nova Meta\r\n        </app-button>\r\n      </div>\r\n      <div body>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped table-borderless\">\r\n            <thead>\r\n                  <tr>\r\n                      <th scope=\"col\">#</th>\r\n                      <th scope=\"col\">Descrição</th>\r\n                      <th scope=\"col\"></th>\r\n                  </tr>\r\n              </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let meta of metas\">\r\n                <td class=\"align-middle\">{{ meta.id }}</td>\r\n                <td class=\"align-middle\">{{ meta.desc }}</td>\r\n                <td class=\"d-flex flex-nowrap align-items-center justify-content-end\">\r\n                  <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"openMetaForm(meta)\">\r\n                    <i class=\"ri-edit-box-line\"></i>\r\n                  </app-button>\r\n                  <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"deleteMeta(meta)\">\r\n                    <i class=\"ri-delete-bin-line\"></i>\r\n                  </app-button>\r\n                </td>\r\n              </tr>\r\n              <tr *ngIf=\"metas?.length == 0\">\r\n                <td colspan=\"6\" class=\"text-center\">Nenhum meta encontrada</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/programas/programa-form/programa-form.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/programas/programa-form/programa-form.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfiguracoesProgramasProgramaFormProgramaFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">Programa</h4>\r\n  <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form id=\"programaForm\" (ngSubmit)=\"submit()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"desc\">Descrição *</label>\r\n      <input\r\n        type=\"text\"\r\n        id=\"desc\"\r\n        class=\"form-control\"\r\n        [class.is-invalid]=\"isInvalid && desc.invalid\"\r\n        [formControl]=\"desc\" />\r\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && desc.errors?.required\">\r\n        Descrição é obrigatório.\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <app-button type=\"reset\" form=\"programaForm\" color=\"light\" (click)=\"close()\">Cancelar</app-button>\r\n  <app-button type=\"submit\" form=\"programaForm\" [loading]=\"loading\">Salvar</app-button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/programas/programas.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/programas/programas.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfiguracoesProgramasProgramasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [backdrop]=\"true\" [loading]=\"loading\">\r\n      <div class=\"d-flex justify-content-between align-items-center\" header>\r\n        <h4>Programas</h4>\r\n        <app-button rounded=\"pill\" (click)=\"openProgramaForm()\">\r\n          <i class=\"ri-add-line mr-1\"></i>\r\n          Novo Programa\r\n        </app-button>\r\n      </div>\r\n      <div body>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped table-borderless\">\r\n            <thead>\r\n                  <tr>\r\n                      <th scope=\"col\">#</th>\r\n                      <th scope=\"col\">Descrição</th>\r\n                      <th scope=\"col\"></th>\r\n                  </tr>\r\n              </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let programa of programas\">\r\n                <td class=\"align-middle\">{{ programa.id }}</td>\r\n                <td class=\"align-middle\">{{ programa.desc }}</td>\r\n                <td class=\"d-flex flex-nowrap align-items-center justify-content-end\">\r\n                  <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"openProgramaForm(programa)\">\r\n                    <i class=\"ri-edit-box-line\"></i>\r\n                  </app-button>\r\n                  <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"deletePrograma(programa)\">\r\n                    <i class=\"ri-delete-bin-line\"></i>\r\n                  </app-button>\r\n                </td>\r\n              </tr>\r\n              <tr *ngIf=\"programas?.length == 0\">\r\n                <td colspan=\"6\" class=\"text-center\">Nenhum programa encontrada</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/refeicoes/refeicao-form/refeicao-form.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/refeicoes/refeicao-form/refeicao-form.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfiguracoesRefeicoesRefeicaoFormRefeicaoFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">Refeição</h4>\r\n  <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form id=\"refeicaoForm\" (ngSubmit)=\"submit()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"desc\">Descrição *</label>\r\n      <input\r\n        type=\"text\"\r\n        id=\"desc\"\r\n        class=\"form-control\"\r\n        [class.is-invalid]=\"isInvalid && desc.invalid\"\r\n        [formControl]=\"desc\" />\r\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && desc.errors?.required\">\r\n        Descrição é obrigatório.\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <app-button type=\"reset\" form=\"refeicaoForm\" color=\"light\" (click)=\"close()\">Cancelar</app-button>\r\n  <app-button type=\"submit\" form=\"refeicaoForm\" [loading]=\"loading\">Salvar</app-button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/refeicoes/refeicoes.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/refeicoes/refeicoes.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfiguracoesRefeicoesRefeicoesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [backdrop]=\"true\" [loading]=\"loading\">\r\n      <div class=\"d-flex justify-content-between align-items-center\" header>\r\n        <h4>Refeições</h4>\r\n        <app-button rounded=\"pill\" (click)=\"openRefeicaoForm()\">\r\n          <i class=\"ri-add-line mr-1\"></i>\r\n          Nova Refeição\r\n        </app-button>\r\n      </div>\r\n      <div body>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped table-borderless\">\r\n            <thead>\r\n                  <tr>\r\n                      <th scope=\"col\">#</th>\r\n                      <th scope=\"col\">Descrição</th>\r\n                      <th scope=\"col\"></th>\r\n                  </tr>\r\n              </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let refeicao of refeicoes\">\r\n                <td class=\"align-middle\">{{ refeicao.id }}</td>\r\n                <td class=\"align-middle\">{{ refeicao.desc }}</td>\r\n                <td class=\"d-flex flex-nowrap align-items-center justify-content-end\">\r\n                  <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"openRefeicaoForm(refeicao)\">\r\n                    <i class=\"ri-edit-box-line\"></i>\r\n                  </app-button>\r\n                  <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"deleteRefeicao(refeicao)\">\r\n                    <i class=\"ri-delete-bin-line\"></i>\r\n                  </app-button>\r\n                </td>\r\n              </tr>\r\n              <tr *ngIf=\"refeicoes?.length == 0\">\r\n                <td colspan=\"6\" class=\"text-center\">Nenhuma refeição encontrada</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/treinos/item-treino-form/item-treino-form.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/treinos/item-treino-form/item-treino-form.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfiguracoesTreinosItemTreinoFormItemTreinoFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Item Treino</h4>\n  <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"close()\">\n    <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form id=\"doencaForm\" (ngSubmit)=\"submit()\">\n    <div class=\"form-group\">\n      <label for=\"desc\">Descrição *</label>\n      <input\n        type=\"text\"\n        id=\"desc\"\n        class=\"form-control\"\n        [class.is-invalid]=\"isInvalid && desc.invalid\"\n        [formControl]=\"desc\" />\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && desc.errors?.required\">\n        Descrição é obrigatório.\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"desc\">Metodologia</label>\n      <input\n        type=\"text\"\n        id=\"metodologia\"\n        class=\"form-control\"\n        [formControl]=\"metodologia\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"desc\">Intervalo</label>\n      <input\n        type=\"text\"\n        id=\"intervalo\"\n        class=\"form-control\"\n        [formControl]=\"intervalo\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"validatedCustomFile\">Imagem</label>\n      <div class=\"custom-file\">\n        <input\n          type=\"file\"\n          class=\"custom-file-input\"\n          id=\"validatedCustomFile\"\n          accept=\"image/*\"\n          (change)=\"imageChanged($event)\">\n        <label\n          class=\"custom-file-label\"\n          for=\"validatedCustomFile\"\n          [class.is-invalid]=\"isInvalid && !urlImg\">\n          Escolha uma imagem...\n        </label>\n        <div class=\"invalid-feedback\" *ngIf=\"isInvalid && !urlImg\">\n          Imagem é obrigatória.\n        </div>\n      </div>\n      <img [src]=\"urlImg\" class=\"img-thumbnail\" *ngIf=\"urlImg\">\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <app-button type=\"reset\" form=\"doencaForm\" color=\"light\" (click)=\"close()\">Cancelar</app-button>\n  <app-button type=\"submit\" form=\"doencaForm\" [loading]=\"loading\">Salvar</app-button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/treinos/treino-form/treino-form.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/treinos/treino-form/treino-form.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfiguracoesTreinosTreinoFormTreinoFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Treino</h4>\n  <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"close()\">\n    <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form id=\"doencaForm\" (ngSubmit)=\"submit()\">\n    <div class=\"form-group\">\n      <label for=\"programaId\">Programa *</label>\n      <ng-select [formControl]=\"programaId\" [class.is-invalid]=\"isInvalid && programaId.invalid\" id=\"programaId\">\n        <ng-option [value]=\"programa.id\" *ngFor=\"let programa of programas\">{{ programa.desc }}</ng-option>\n      </ng-select>\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && programaId.errors?.required\">\n        Programa é obrigatório.\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"itemId\">Item *</label>\n      <ng-select [formControl]=\"itemId\" [class.is-invalid]=\"isInvalid && itemId.invalid\" id=\"itemId\">\n        <ng-option [value]=\"item.id\" *ngFor=\"let item of itens\">{{ item.desc }}</ng-option>\n      </ng-select>\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && itemId.errors?.required\">\n        Item é obrigatório.\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"dia\">Dia *</label>\n      <ng-select [formControl]=\"dia\" [class.is-invalid]=\"isInvalid && itemId.invalid\" id=\"itemId\">\n        <ng-option [value]=\"dia.id\" *ngFor=\"let dia of dias\">{{ dia.nome }}</ng-option>\n      </ng-select>\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && dia.errors?.required\">\n        Item é obrigatório.\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"mes\">Mês *</label>\n      <ng-select [formControl]=\"mes\" [class.is-invalid]=\"isInvalid && mes.invalid\" id=\"mes\">\n        <ng-option [value]=\"i+1\" *ngFor=\"let mes of meses; let i=index\">{{ mes }}</ng-option>\n      </ng-select>\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && mes.errors?.required\">\n        Mês é obrigatório.\n      </div>\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <app-button type=\"reset\" form=\"doencaForm\" color=\"light\" (click)=\"close()\">Cancelar</app-button>\n  <app-button type=\"submit\" form=\"doencaForm\" [loading]=\"loading\">Salvar</app-button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/treinos/treinos.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/treinos/treinos.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfiguracoesTreinosTreinosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <app-card bodyClass=\"p-0\" [header]=\"false\">\n      <div class=\"iq-edit-list\" body>\n        <ul class=\"iq-edit-profile d-flex nav nav-pills\">\n          <li class=\"col-md-6 p-0\">\n            <a class=\"nav-link active\" data-toggle=\"pill\" href=\"#treinos\">\n              Treinos\n            </a>\n          </li>\n          <li class=\"col-md-6 p-0\">\n            <a class=\"nav-link\" data-toggle=\"pill\" href=\"#itens-treino\">\n              Itens\n            </a>\n          </li>\n        </ul>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-lg-12\">\n    <div class=\"iq-edit-list-data\">\n      <div class=\"tab-content\">\n        <div class=\"tab-pane fade active show\" id=\"treinos\" role=\"tabpanel\">\n          <app-card [backdrop]=\"true\" [loading]=\"loading\">\n            <div class=\"d-flex justify-content-between align-items-center\" header>\n              <h4>Treinos</h4>\n              <app-button rounded=\"pill\" (click)=\"openTreinoForm()\">\n                <i class=\"ri-add-line mr-1\"></i>\n                Nova Treino\n              </app-button>\n            </div>\n            <div body>\n              <div class=\"table-responsive\">\n                <table class=\"table table-striped table-borderless\">\n                  <thead>\n                        <tr>\n                            <th scope=\"col\">#</th>\n                            <th scope=\"col\" class=\"text-center\">Mês</th>\n                            <th scope=\"col\" class=\"text-center\">Dia</th>\n                            <th scope=\"col\">Programa</th>\n                            <th scope=\"col\">Item</th>\n                        </tr>\n                    </thead>\n                  <tbody>\n                    <tr *ngFor=\"let treino of treinos\">\n                      <td class=\"align-middle\">{{ treino.id }}</td>\n                      <td class=\"align-middle text-center\">{{ treino.mes }}</td>\n                      <ng-container *ngIf=\"treino.dia === 1\">\n                        <td class=\"align-middle text-center\">Domingo</td>\n                      </ng-container>\n                      <ng-container *ngIf=\"treino.dia === 2\">\n                        <td class=\"align-middle text-center\">Segunda</td>\n                      </ng-container>\n                      <ng-container *ngIf=\"treino.dia === 3\">\n                        <td class=\"align-middle text-center\">Terça</td>\n                      </ng-container>\n                      <ng-container *ngIf=\"treino.dia === 4\">\n                        <td class=\"align-middle text-center\">Quarta</td>\n                      </ng-container>\n                      <ng-container *ngIf=\"treino.dia === 5\">\n                        <td class=\"align-middle text-center\">Quinta</td>\n                      </ng-container>\n                      <ng-container *ngIf=\"treino.dia === 6\">\n                        <td class=\"align-middle text-center\">Sexta</td>\n                      </ng-container>\n                      <ng-container *ngIf=\"treino.dia === 7\">\n                        <td class=\"align-middle text-center\">Sábado</td>\n                      </ng-container>\n\n                      <td class=\"align-middle\">{{ treino.programa.desc }}</td>\n                      <td class=\"align-middle\">{{ treino.item.desc }}</td>\n                      <td class=\"d-flex flex-nowrap align-items-center justify-content-end\">\n                        <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"openTreinoForm(treino)\">\n                          <i class=\"ri-edit-box-line\"></i>\n                        </app-button>\n                        <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"deleteTreino(treino)\">\n                          <i class=\"ri-delete-bin-line\"></i>\n                        </app-button>\n                      </td>\n                    </tr>\n                    <tr *ngIf=\"treinos?.length == 0\">\n                      <td colspan=\"6\" class=\"text-center\">Nenhuma treino encontrada</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </app-card>\n        </div>\n        <div class=\"tab-pane fade\" id=\"itens-treino\" role=\"tabpanel\">\n          <app-card [backdrop]=\"true\" [loading]=\"loading\">\n            <div class=\"d-flex justify-content-between align-items-center\" header>\n              <h4>Itens</h4>\n              <app-button rounded=\"pill\" (click)=\"openItemTreinoForm()\">\n                <i class=\"ri-add-line mr-1\"></i>\n                Novo Item\n              </app-button>\n            </div>\n            <div body>\n              <div class=\"table-responsive\">\n                <table class=\"table table-striped table-borderless\">\n                  <thead>\n                        <tr>\n                            <th scope=\"col\">#</th>\n                            <th scope=\"col\">Imagem</th>\n                            <th scope=\"col\">Descrição</th>\n                            <th scope=\"col\">Metodologia</th>\n                            <th scope=\"col\">Intervalo</th>\n                        </tr>\n                    </thead>\n                  <tbody>\n                    <tr *ngFor=\"let item of itensTreino\">\n                      <td class=\"align-middle\">{{ item.id }}</td>\n                      <td class=\"align-middle\">\n                        <img class=\"rounded\" [src]=\"item.url_img\" height=\"80px\" />\n                      </td>\n                      <td class=\"align-middle\">{{ item.desc }}</td>\n                      <td class=\"align-middle\">{{ item.metodologia }}</td>\n                      <td class=\"align-middle\">{{ item.intervalo }}</td>\n                      <td class=\"align-middle\">\n                        <div class=\"d-flex flex-nowrap align-items-center justify-content-end\">\n                          <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"openItemTreinoForm(item)\">\n                            <i class=\"ri-edit-box-line\"></i>\n                          </app-button>\n                          <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"deleteItemTreino(item)\">\n                            <i class=\"ri-delete-bin-line\"></i>\n                          </app-button>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr *ngIf=\"itensTreino?.length == 0\">\n                      <td colspan=\"6\" class=\"text-center\">Nenhum item encontrado</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </app-card>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/configuracoes-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/configuracoes/configuracoes-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: SettingsRoutingModule */

  /***/
  function srcAppPagesConfiguracoesConfiguracoesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function () {
      return SettingsRoutingModule;
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


    var _doencas_doencas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./doencas/doencas.component */
    "./src/app/pages/configuracoes/doencas/doencas.component.ts");
    /* harmony import */


    var _imc_imc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./imc/imc.component */
    "./src/app/pages/configuracoes/imc/imc.component.ts");
    /* harmony import */


    var _frequencias_de_atividades_frequencias_de_atividades_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./frequencias-de-atividades/frequencias-de-atividades.component */
    "./src/app/pages/configuracoes/frequencias-de-atividades/frequencias-de-atividades.component.ts");
    /* harmony import */


    var _grupos_de_exames_grupos_de_exames_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./grupos-de-exames/grupos-de-exames.component */
    "./src/app/pages/configuracoes/grupos-de-exames/grupos-de-exames.component.ts");
    /* harmony import */


    var _metas_metas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./metas/metas.component */
    "./src/app/pages/configuracoes/metas/metas.component.ts");
    /* harmony import */


    var _refeicoes_refeicoes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./refeicoes/refeicoes.component */
    "./src/app/pages/configuracoes/refeicoes/refeicoes.component.ts");
    /* harmony import */


    var _programas_programas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./programas/programas.component */
    "./src/app/pages/configuracoes/programas/programas.component.ts");
    /* harmony import */


    var _configuracoes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./configuracoes.component */
    "./src/app/pages/configuracoes/configuracoes.component.ts");
    /* harmony import */


    var _dietas_dietas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./dietas/dietas.component */
    "./src/app/pages/configuracoes/dietas/dietas.component.ts");
    /* harmony import */


    var _treinos_treinos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./treinos/treinos.component */
    "./src/app/pages/configuracoes/treinos/treinos.component.ts");

    var routes = [{
      path: '',
      component: _configuracoes_component__WEBPACK_IMPORTED_MODULE_10__["ConfiguracoesComponent"],
      children: [{
        path: 'doencas',
        component: _doencas_doencas_component__WEBPACK_IMPORTED_MODULE_3__["DoencasComponent"]
      }, {
        path: 'frequencias-de-atividades',
        component: _frequencias_de_atividades_frequencias_de_atividades_component__WEBPACK_IMPORTED_MODULE_5__["FrequenciasDeAtividadesComponent"]
      }, {
        path: 'grupos-de-exames',
        component: _grupos_de_exames_grupos_de_exames_component__WEBPACK_IMPORTED_MODULE_6__["GruposDeExamesComponent"]
      }, {
        path: 'imc',
        component: _imc_imc_component__WEBPACK_IMPORTED_MODULE_4__["IMCComponent"]
      }, {
        path: 'metas',
        component: _metas_metas_component__WEBPACK_IMPORTED_MODULE_7__["MetasComponent"]
      }, {
        path: 'programas',
        component: _programas_programas_component__WEBPACK_IMPORTED_MODULE_9__["ProgramasComponent"]
      }, {
        path: 'refeicoes',
        component: _refeicoes_refeicoes_component__WEBPACK_IMPORTED_MODULE_8__["RefeicoesComponent"]
      }, {
        path: 'dietas',
        component: _dietas_dietas_component__WEBPACK_IMPORTED_MODULE_11__["DietasComponent"]
      }, {
        path: 'treinos',
        component: _treinos_treinos_component__WEBPACK_IMPORTED_MODULE_12__["TreinosComponent"]
      }, {
        path: '**',
        redirectTo: 'doencas'
      }]
    }];

    var SettingsRoutingModule = /*#__PURE__*/_createClass(function SettingsRoutingModule() {
      _classCallCheck(this, SettingsRoutingModule);
    });

    SettingsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SettingsRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/configuracoes.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/configuracoes/configuracoes.component.ts ***!
    \****************************************************************/

  /*! exports provided: ConfiguracoesComponent */

  /***/
  function srcAppPagesConfiguracoesConfiguracoesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfiguracoesComponent", function () {
      return ConfiguracoesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ConfiguracoesComponent = /*#__PURE__*/_createClass(function ConfiguracoesComponent() {
      _classCallCheck(this, ConfiguracoesComponent);
    });

    ConfiguracoesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-configuracoes',
      template: '<router-outlet></router-outlet>'
    })], ConfiguracoesComponent);
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/configuracoes.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/configuracoes/configuracoes.module.ts ***!
    \*************************************************************/

  /*! exports provided: ConfiguracoesModule */

  /***/
  function srcAppPagesConfiguracoesConfiguracoesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfiguracoesModule", function () {
      return ConfiguracoesModule;
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


    var _configuracoes_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./configuracoes-routing.module */
    "./src/app/pages/configuracoes/configuracoes-routing.module.ts");
    /* harmony import */


    var _doencas_doencas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./doencas/doencas.component */
    "./src/app/pages/configuracoes/doencas/doencas.component.ts");
    /* harmony import */


    var _imc_imc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./imc/imc.component */
    "./src/app/pages/configuracoes/imc/imc.component.ts");
    /* harmony import */


    var _doencas_doenca_form_doenca_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./doencas/doenca-form/doenca-form.component */
    "./src/app/pages/configuracoes/doencas/doenca-form/doenca-form.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _frequencias_de_atividades_frequencias_de_atividades_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./frequencias-de-atividades/frequencias-de-atividades.component */
    "./src/app/pages/configuracoes/frequencias-de-atividades/frequencias-de-atividades.component.ts");
    /* harmony import */


    var _frequencias_de_atividades_frequencia_form_frequencia_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./frequencias-de-atividades/frequencia-form/frequencia-form.component */
    "./src/app/pages/configuracoes/frequencias-de-atividades/frequencia-form/frequencia-form.component.ts");
    /* harmony import */


    var _grupos_de_exames_grupos_de_exames_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./grupos-de-exames/grupos-de-exames.component */
    "./src/app/pages/configuracoes/grupos-de-exames/grupos-de-exames.component.ts");
    /* harmony import */


    var _grupos_de_exames_grupo_form_grupo_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./grupos-de-exames/grupo-form/grupo-form.component */
    "./src/app/pages/configuracoes/grupos-de-exames/grupo-form/grupo-form.component.ts");
    /* harmony import */


    var _imc_imc_form_imc_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./imc/imc-form/imc-form.component */
    "./src/app/pages/configuracoes/imc/imc-form/imc-form.component.ts");
    /* harmony import */


    var _metas_metas_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./metas/metas.component */
    "./src/app/pages/configuracoes/metas/metas.component.ts");
    /* harmony import */


    var _refeicoes_refeicoes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./refeicoes/refeicoes.component */
    "./src/app/pages/configuracoes/refeicoes/refeicoes.component.ts");
    /* harmony import */


    var _programas_programas_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./programas/programas.component */
    "./src/app/pages/configuracoes/programas/programas.component.ts");
    /* harmony import */


    var _metas_meta_form_meta_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./metas/meta-form/meta-form.component */
    "./src/app/pages/configuracoes/metas/meta-form/meta-form.component.ts");
    /* harmony import */


    var _programas_programa_form_programa_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./programas/programa-form/programa-form.component */
    "./src/app/pages/configuracoes/programas/programa-form/programa-form.component.ts");
    /* harmony import */


    var _refeicoes_refeicao_form_refeicao_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./refeicoes/refeicao-form/refeicao-form.component */
    "./src/app/pages/configuracoes/refeicoes/refeicao-form/refeicao-form.component.ts");
    /* harmony import */


    var _configuracoes_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./configuracoes.component */
    "./src/app/pages/configuracoes/configuracoes.component.ts");
    /* harmony import */


    var _dietas_dietas_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./dietas/dietas.component */
    "./src/app/pages/configuracoes/dietas/dietas.component.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _dietas_dieta_form_dieta_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./dietas/dieta-form/dieta-form.component */
    "./src/app/pages/configuracoes/dietas/dieta-form/dieta-form.component.ts");
    /* harmony import */


    var _dietas_item_dieta_form_item_dieta_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./dietas/item-dieta-form/item-dieta-form.component */
    "./src/app/pages/configuracoes/dietas/item-dieta-form/item-dieta-form.component.ts");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _treinos_item_treino_form_item_treino_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./treinos/item-treino-form/item-treino-form.component */
    "./src/app/pages/configuracoes/treinos/item-treino-form/item-treino-form.component.ts");
    /* harmony import */


    var _treinos_treino_form_treino_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./treinos/treino-form/treino-form.component */
    "./src/app/pages/configuracoes/treinos/treino-form/treino-form.component.ts");
    /* harmony import */


    var _treinos_treinos_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./treinos/treinos.component */
    "./src/app/pages/configuracoes/treinos/treinos.component.ts");

    var ConfiguracoesModule = /*#__PURE__*/_createClass(function ConfiguracoesModule() {
      _classCallCheck(this, ConfiguracoesModule);
    });

    ConfiguracoesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_configuracoes_component__WEBPACK_IMPORTED_MODULE_19__["ConfiguracoesComponent"], _doencas_doencas_component__WEBPACK_IMPORTED_MODULE_4__["DoencasComponent"], _imc_imc_component__WEBPACK_IMPORTED_MODULE_5__["IMCComponent"], _doencas_doenca_form_doenca_form_component__WEBPACK_IMPORTED_MODULE_6__["DoencaFormComponent"], _frequencias_de_atividades_frequencias_de_atividades_component__WEBPACK_IMPORTED_MODULE_8__["FrequenciasDeAtividadesComponent"], _frequencias_de_atividades_frequencia_form_frequencia_form_component__WEBPACK_IMPORTED_MODULE_9__["FrequenciaFormComponent"], _grupos_de_exames_grupos_de_exames_component__WEBPACK_IMPORTED_MODULE_10__["GruposDeExamesComponent"], _grupos_de_exames_grupo_form_grupo_form_component__WEBPACK_IMPORTED_MODULE_11__["GrupoFormComponent"], _imc_imc_form_imc_form_component__WEBPACK_IMPORTED_MODULE_12__["IMCFormComponent"], _metas_metas_component__WEBPACK_IMPORTED_MODULE_13__["MetasComponent"], _refeicoes_refeicoes_component__WEBPACK_IMPORTED_MODULE_14__["RefeicoesComponent"], _programas_programas_component__WEBPACK_IMPORTED_MODULE_15__["ProgramasComponent"], _metas_meta_form_meta_form_component__WEBPACK_IMPORTED_MODULE_16__["MetaFormComponent"], _programas_programa_form_programa_form_component__WEBPACK_IMPORTED_MODULE_17__["ProgramaFormComponent"], _refeicoes_refeicao_form_refeicao_form_component__WEBPACK_IMPORTED_MODULE_18__["RefeicaoFormComponent"], _dietas_dietas_component__WEBPACK_IMPORTED_MODULE_20__["DietasComponent"], _dietas_dieta_form_dieta_form_component__WEBPACK_IMPORTED_MODULE_22__["DietaFormComponent"], _dietas_item_dieta_form_item_dieta_form_component__WEBPACK_IMPORTED_MODULE_23__["ItemDietaFormComponent"], _treinos_treinos_component__WEBPACK_IMPORTED_MODULE_27__["TreinosComponent"], _treinos_treino_form_treino_form_component__WEBPACK_IMPORTED_MODULE_26__["TreinoFormComponent"], _treinos_item_treino_form_item_treino_form_component__WEBPACK_IMPORTED_MODULE_25__["ItemTreinoFormComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _configuracoes_routing_module__WEBPACK_IMPORTED_MODULE_3__["SettingsRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_21__["ComponentsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_24__["NgSelectModule"]]
    })], ConfiguracoesModule);
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/dietas/dieta-form/dieta-form.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/configuracoes/dietas/dieta-form/dieta-form.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfiguracoesDietasDietaFormDietaFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvZGlldGFzL2RpZXRhLWZvcm0vZGlldGEtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/dietas/dieta-form/dieta-form.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/configuracoes/dietas/dieta-form/dieta-form.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: DietaFormComponent */

  /***/
  function srcAppPagesConfiguracoesDietasDietaFormDietaFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DietaFormComponent", function () {
      return DietaFormComponent;
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


    var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/helpers/alert.helper */
    "./src/app/helpers/alert.helper.ts");
    /* harmony import */


    var src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/models/response-error */
    "./src/app/models/response-error.ts");
    /* harmony import */


    var src_app_services_dieta_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/dieta.service */
    "./src/app/services/dieta.service.ts");

    var DietaFormComponent = /*#__PURE__*/function () {
      function DietaFormComponent(bsModalRef, alertHelper, dietaService) {
        _classCallCheck(this, DietaFormComponent);

        this.bsModalRef = bsModalRef;
        this.alertHelper = alertHelper;
        this.dietaService = dietaService;
        this.loading = false;
        this.programaId = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.refeicaoId = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.itemId = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.mes = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.dia = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.isInvalid = false;
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(DietaFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.dieta) {
            this.programaId.setValue(this.dieta.programa_id);
            this.refeicaoId.setValue(this.dieta.refeicao_id);
            this.itemId.setValue(this.dieta.item_id);
            this.mes.setValue(this.dieta.mes);
            this.dia.setValue(this.dieta.dia);
          }

          this.meses = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
          this.dias = ['Segunda', 'Terca', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "close",
        value: function close() {
          this.bsModalRef.hide();
        }
      }, {
        key: "submit",
        value: function submit() {
          var _a;

          this.isInvalid = this.programaId.invalid || this.refeicaoId.invalid || this.itemId.invalid || this.mes.invalid || this.dia.invalid;

          if (!this.isInvalid) {
            var data = {
              programa_id: this.programaId.value,
              refeicao_id: this.refeicaoId.value,
              item_id: this.itemId.value,
              mes: this.mes.value,
              dia: this.dia.value
            };

            if ((_a = this.dieta) === null || _a === void 0 ? void 0 : _a.id) {
              data.id = this.dieta.id;
              this.updateDieta(data);
            } else {
              this.createDieta(data);
            }
          }
        }
      }, {
        key: "createDieta",
        value: function createDieta(data) {
          var _this = this;

          this.loading = true;
          this.dietaService.create(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(dieta) {
              _this.loading = false;
              _this.dieta = dieta;

              _this.alertHelper.toast('success', 'Dieta cadastrada com sucesso.');

              _this.onClose.next(dieta);

              _this.bsModalRef.hide();
            },
            error: function error(e) {
              _this.loading = false;

              if (e instanceof src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__["ResponseError"]) {
                _this.alertHelper.show('error', e.getMessage(), {
                  confirmButtonText: 'Entendi'
                });
              }
            }
          });
        }
      }, {
        key: "updateDieta",
        value: function updateDieta(data) {
          var _this2 = this;

          this.loading = true;
          this.dietaService.update(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(dieta) {
              _this2.loading = false;
              _this2.dieta = dieta;

              _this2.alertHelper.toast('success', 'Dieta atualizada com sucesso.');

              _this2.onClose.next(dieta);

              _this2.bsModalRef.hide();
            },
            error: function error() {
              _this2.loading = false;
            }
          });
        }
      }]);

      return DietaFormComponent;
    }();

    DietaFormComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"]
      }, {
        type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__["AlertHelper"]
      }, {
        type: src_app_services_dieta_service__WEBPACK_IMPORTED_MODULE_8__["DietaService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DietaFormComponent.prototype, "dieta", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DietaFormComponent.prototype, "itens", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DietaFormComponent.prototype, "programas", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DietaFormComponent.prototype, "refeicoes", void 0);
    DietaFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dieta-form',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dieta-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/dietas/dieta-form/dieta-form.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dieta-form.component.scss */
      "./src/app/pages/configuracoes/dietas/dieta-form/dieta-form.component.scss"))["default"]]
    })], DietaFormComponent);
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/dietas/dietas.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/pages/configuracoes/dietas/dietas.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfiguracoesDietasDietasComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvZGlldGFzL2RpZXRhcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/dietas/dietas.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/configuracoes/dietas/dietas.component.ts ***!
    \****************************************************************/

  /*! exports provided: DietasComponent */

  /***/
  function srcAppPagesConfiguracoesDietasDietasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DietasComponent", function () {
      return DietasComponent;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _dieta_form_dieta_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dieta-form/dieta-form.component */
    "./src/app/pages/configuracoes/dietas/dieta-form/dieta-form.component.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _item_dieta_form_item_dieta_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./item-dieta-form/item-dieta-form.component */
    "./src/app/pages/configuracoes/dietas/item-dieta-form/item-dieta-form.component.ts");
    /* harmony import */


    var src_app_services_refeicao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/refeicao.service */
    "./src/app/services/refeicao.service.ts");
    /* harmony import */


    var src_app_services_programa_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/programa.service */
    "./src/app/services/programa.service.ts");
    /* harmony import */


    var src_app_services_dieta_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/dieta.service */
    "./src/app/services/dieta.service.ts");
    /* harmony import */


    var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/helpers/alert.helper */
    "./src/app/helpers/alert.helper.ts");

    var DietasComponent = /*#__PURE__*/function () {
      function DietasComponent(dietaService, modalService, programaService, refeicaoService, alertHelper) {
        _classCallCheck(this, DietasComponent);

        this.dietaService = dietaService;
        this.modalService = modalService;
        this.programaService = programaService;
        this.refeicaoService = refeicaoService;
        this.alertHelper = alertHelper;
        this.loading = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(DietasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadDietas();
          this.loadItensDietas();
          this.loadProgramas();
          this.loadRefeicoes();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "openDietaForm",
        value: function openDietaForm(dieta) {
          var _this3 = this;

          this.bsModalRef = this.modalService.show(_dieta_form_dieta_form_component__WEBPACK_IMPORTED_MODULE_4__["DietaFormComponent"], {
            initialState: {
              dieta: dieta,
              itens: this.itensDieta,
              programas: this.programas,
              refeicoes: this.refeicoes
            }
          });
          var component = this.bsModalRef.content;
          component.onClose.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(dieta) {
              var index = _this3.dietas.findIndex(function (u) {
                return u.id == dieta.id;
              });

              if (index === -1) {
                _this3.dietas.push(dieta);
              } else {
                _this3.dietas[index] = dieta;
              }
            }
          });
        }
      }, {
        key: "openItemDietaForm",
        value: function openItemDietaForm(item) {
          var _this4 = this;

          this.bsModalRef = this.modalService.show(_item_dieta_form_item_dieta_form_component__WEBPACK_IMPORTED_MODULE_6__["ItemDietaFormComponent"], {
            initialState: {
              item: item
            }
          });
          var component = this.bsModalRef.content;
          component.onClose.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(dieta) {
              var index = _this4.itensDieta.findIndex(function (u) {
                return u.id == dieta.id;
              });

              if (index === -1) {
                _this4.itensDieta.push(dieta);
              } else {
                _this4.itensDieta[index] = dieta;
              }
            }
          });
        }
      }, {
        key: "deleteDieta",
        value: function deleteDieta(dieta) {
          var _this5 = this;

          this.alertHelper.show('warning', "Tem certeza que deseja remover a dieta #".concat(dieta.id, "?"), {
            showCancelButton: true
          }).then(function (confirmed) {
            if (confirmed) {
              _this5.loading = true;

              _this5.dietaService["delete"](dieta).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this5.unsubscribe$)).subscribe({
                next: function next(dieta) {
                  _this5.loading = false;

                  _this5.alertHelper.toast('success', 'Dieta deletada com sucesso.');

                  _this5.dietas = _this5.dietas.filter(function (d) {
                    return d.id != dieta.id;
                  });
                },
                error: function error() {
                  _this5.loading = false;
                }
              });
            }
          });
        }
      }, {
        key: "deleteItemDieta",
        value: function deleteItemDieta(item) {
          var _this6 = this;

          this.alertHelper.show('warning', "Tem certeza que deseja remover o item ".concat(item.desc, "?"), {
            showCancelButton: true
          }).then(function (confirmed) {
            if (confirmed) {
              _this6.loading = true;

              _this6.dietaService.deleteItem(item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this6.unsubscribe$)).subscribe({
                next: function next(item) {
                  _this6.loading = false;

                  _this6.alertHelper.toast('success', 'Item deletado com sucesso.');

                  _this6.itensDieta = _this6.itensDieta.filter(function (it) {
                    return it.id != item.id;
                  });
                },
                error: function error() {
                  _this6.loading = false;
                }
              });
            }
          });
        }
      }, {
        key: "loadDietas",
        value: function loadDietas() {
          var _this7 = this;

          this.loading = true;
          this.dietaService.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(dietas) {
              _this7.loading = false;
              _this7.dietas = dietas;
            },
            error: function error() {
              _this7.loading = false;
            }
          });
        }
      }, {
        key: "loadItensDietas",
        value: function loadItensDietas() {
          var _this8 = this;

          this.loading = true;
          this.dietaService.findAllItems().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(dietas) {
              _this8.loading = false;
              _this8.itensDieta = dietas;
            },
            error: function error() {
              _this8.loading = false;
            }
          });
        }
      }, {
        key: "loadProgramas",
        value: function loadProgramas() {
          var _this9 = this;

          this.programaService.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(programas) {
              _this9.programas = programas;
            }
          });
        }
      }, {
        key: "loadRefeicoes",
        value: function loadRefeicoes() {
          var _this10 = this;

          this.refeicaoService.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(refeicoes) {
              _this10.refeicoes = refeicoes;
            }
          });
        }
      }]);

      return DietasComponent;
    }();

    DietasComponent.ctorParameters = function () {
      return [{
        type: src_app_services_dieta_service__WEBPACK_IMPORTED_MODULE_9__["DietaService"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
      }, {
        type: src_app_services_programa_service__WEBPACK_IMPORTED_MODULE_8__["ProgramaService"]
      }, {
        type: src_app_services_refeicao_service__WEBPACK_IMPORTED_MODULE_7__["RefeicaoService"]
      }, {
        type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_10__["AlertHelper"]
      }];
    };

    DietasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dietas',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dietas.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/dietas/dietas.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dietas.component.scss */
      "./src/app/pages/configuracoes/dietas/dietas.component.scss"))["default"]]
    })], DietasComponent);
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/dietas/item-dieta-form/item-dieta-form.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/configuracoes/dietas/item-dieta-form/item-dieta-form.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfiguracoesDietasItemDietaFormItemDietaFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".img-thumbnail {\n  max-height: 150px;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29uZmlndXJhY29lcy9kaWV0YXMvaXRlbS1kaWV0YS1mb3JtL0M6XFxVc2Vyc1xcdXNlclxcRG9jdW1lbnRzXFxCMkIgSGVhbHRoXFxkYXNoYm9hcmQtYjJiLWhlYWx0aC9zcmNcXGFwcFxccGFnZXNcXGNvbmZpZ3VyYWNvZXNcXGRpZXRhc1xcaXRlbS1kaWV0YS1mb3JtXFxpdGVtLWRpZXRhLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvZGlldGFzL2l0ZW0tZGlldGEtZm9ybS9pdGVtLWRpZXRhLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb25maWd1cmFjb2VzL2RpZXRhcy9pdGVtLWRpZXRhLWZvcm0vaXRlbS1kaWV0YS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy10aHVtYm5haWwge1xyXG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuIiwiLmltZy10aHVtYm5haWwge1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/dietas/item-dieta-form/item-dieta-form.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/configuracoes/dietas/item-dieta-form/item-dieta-form.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ItemDietaFormComponent */

  /***/
  function srcAppPagesConfiguracoesDietasItemDietaFormItemDietaFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemDietaFormComponent", function () {
      return ItemDietaFormComponent;
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


    var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/helpers/alert.helper */
    "./src/app/helpers/alert.helper.ts");
    /* harmony import */


    var src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/models/response-error */
    "./src/app/models/response-error.ts");
    /* harmony import */


    var src_app_services_dieta_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/dieta.service */
    "./src/app/services/dieta.service.ts");

    var ItemDietaFormComponent = /*#__PURE__*/function () {
      function ItemDietaFormComponent(bsModalRef, alertHelper, dietaService) {
        _classCallCheck(this, ItemDietaFormComponent);

        this.bsModalRef = bsModalRef;
        this.alertHelper = alertHelper;
        this.dietaService = dietaService;
        this.loading = false;
        this.desc = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.isInvalid = false;
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(ItemDietaFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.item) {
            this.desc.setValue(this.item.desc);
            this.urlImg = this.item.url_img;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "close",
        value: function close() {
          this.bsModalRef.hide();
        }
      }, {
        key: "imageChanged",
        value: function imageChanged(event) {
          var _this11 = this;

          this.fileImg = event.target.files[0];
          var reader = new FileReader();

          reader.onload = function () {
            var _a;

            _this11.urlImg = reader.result.toString();

            if ((_a = _this11.item) === null || _a === void 0 ? void 0 : _a.id) {
              _this11.uploadImg();
            }
          };

          reader.readAsDataURL(this.fileImg);
        }
      }, {
        key: "submit",
        value: function submit() {
          var _a, _b;

          this.isInvalid = this.desc.invalid;

          if (((_a = this.item) === null || _a === void 0 ? void 0 : _a.id) == undefined && this.fileImg == undefined) {
            this.isInvalid = true;
          }

          if (!this.isInvalid) {
            this.item = Object.assign(Object.assign({}, this.item), {
              desc: this.desc.value
            });

            if ((_b = this.item) === null || _b === void 0 ? void 0 : _b.id) {
              this.updateItem();
            } else {
              this.item.file_img = this.fileImg;
              this.createItem();
            }
          }
        }
      }, {
        key: "createItem",
        value: function createItem() {
          var _this12 = this;

          this.loading = true;
          this.dietaService.createItem(this.item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(item) {
              _this12.loading = false;

              _this12.alertHelper.toast('success', 'Item cadastrado com sucesso.');

              _this12.onClose.next(item);

              _this12.bsModalRef.hide();
            },
            error: function error(e) {
              _this12.loading = false;

              if (e instanceof src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__["ResponseError"]) {
                _this12.alertHelper.show('error', e.getMessage(), {
                  confirmButtonText: 'Entendi'
                });
              }
            }
          });
        }
      }, {
        key: "updateItem",
        value: function updateItem() {
          var _this13 = this;

          this.loading = true;
          this.dietaService.updateItem(this.item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(item) {
              _this13.loading = false;

              _this13.alertHelper.toast('success', 'Item atualizado com sucesso.');

              _this13.onClose.next(item);

              _this13.bsModalRef.hide();
            },
            error: function error() {
              _this13.loading = false;
            }
          });
        }
      }, {
        key: "uploadImg",
        value: function uploadImg() {
          var _this14 = this;

          var _a;

          this.loading = true;
          this.dietaService.uploadImg((_a = this.item) === null || _a === void 0 ? void 0 : _a.id, this.fileImg).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(item) {
              _this14.loading = false;

              _this14.alertHelper.toast('success', 'Imagem atualizada com sucesso.');

              _this14.onClose.next(item);
            },
            error: function error() {
              _this14.loading = false;
            }
          });
        }
      }]);

      return ItemDietaFormComponent;
    }();

    ItemDietaFormComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"]
      }, {
        type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__["AlertHelper"]
      }, {
        type: src_app_services_dieta_service__WEBPACK_IMPORTED_MODULE_8__["DietaService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ItemDietaFormComponent.prototype, "item", void 0);
    ItemDietaFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-item-dieta-form',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./item-dieta-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/dietas/item-dieta-form/item-dieta-form.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./item-dieta-form.component.scss */
      "./src/app/pages/configuracoes/dietas/item-dieta-form/item-dieta-form.component.scss"))["default"]]
    })], ItemDietaFormComponent);
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/doencas/doenca-form/doenca-form.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/configuracoes/doencas/doenca-form/doenca-form.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfiguracoesDoencasDoencaFormDoencaFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvZG9lbmNhcy9kb2VuY2EtZm9ybS9kb2VuY2EtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/doencas/doenca-form/doenca-form.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/configuracoes/doencas/doenca-form/doenca-form.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: DoencaFormComponent */

  /***/
  function srcAppPagesConfiguracoesDoencasDoencaFormDoencaFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoencaFormComponent", function () {
      return DoencaFormComponent;
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


    var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/helpers/alert.helper */
    "./src/app/helpers/alert.helper.ts");
    /* harmony import */


    var src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/models/response-error */
    "./src/app/models/response-error.ts");
    /* harmony import */


    var src_app_services_doenca_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/doenca.service */
    "./src/app/services/doenca.service.ts");

    var DoencaFormComponent = /*#__PURE__*/function () {
      function DoencaFormComponent(bsModalRef, alertHelper, doencaService) {
        _classCallCheck(this, DoencaFormComponent);

        this.bsModalRef = bsModalRef;
        this.alertHelper = alertHelper;
        this.doencaService = doencaService;
        this.loading = false;
        this.desc = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.isInvalid = false;
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(DoencaFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.doenca) {
            this.desc.setValue(this.doenca.desc);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "close",
        value: function close() {
          this.bsModalRef.hide();
        }
      }, {
        key: "submit",
        value: function submit() {
          var _a;

          this.isInvalid = this.desc.invalid;

          if (!this.isInvalid) {
            this.doenca = Object.assign(Object.assign({}, this.doenca), {
              desc: this.desc.value
            });

            if ((_a = this.doenca) === null || _a === void 0 ? void 0 : _a.id) {
              this.updateDoenca();
            } else {
              this.createDoenca();
            }
          }
        }
      }, {
        key: "createDoenca",
        value: function createDoenca() {
          var _this15 = this;

          this.loading = true;
          this.doencaService.create(this.doenca).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(doenca) {
              _this15.loading = false;

              _this15.alertHelper.toast('success', 'Doença cadastrada com sucesso.');

              _this15.onClose.next(doenca);

              _this15.bsModalRef.hide();
            },
            error: function error(e) {
              _this15.loading = false;

              if (e instanceof src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__["ResponseError"]) {
                _this15.alertHelper.show('error', e.getMessage(), {
                  confirmButtonText: 'Entendi'
                });
              }
            }
          });
        }
      }, {
        key: "updateDoenca",
        value: function updateDoenca() {
          var _this16 = this;

          this.loading = true;
          this.doencaService.update(this.doenca).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(doenca) {
              _this16.loading = false;

              _this16.alertHelper.toast('success', 'Doença atualizada com sucesso.');

              _this16.onClose.next(doenca);

              _this16.bsModalRef.hide();
            },
            error: function error() {
              _this16.loading = false;
            }
          });
        }
      }]);

      return DoencaFormComponent;
    }();

    DoencaFormComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"]
      }, {
        type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__["AlertHelper"]
      }, {
        type: src_app_services_doenca_service__WEBPACK_IMPORTED_MODULE_8__["DoencaService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DoencaFormComponent.prototype, "doenca", void 0);
    DoencaFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-doenca-form',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./doenca-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/doencas/doenca-form/doenca-form.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./doenca-form.component.scss */
      "./src/app/pages/configuracoes/doencas/doenca-form/doenca-form.component.scss"))["default"]]
    })], DoencaFormComponent);
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/doencas/doencas.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/pages/configuracoes/doencas/doencas.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfiguracoesDoencasDoencasComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvZG9lbmNhcy9kb2VuY2FzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/doencas/doencas.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/configuracoes/doencas/doencas.component.ts ***!
    \******************************************************************/

  /*! exports provided: DoencasComponent */

  /***/
  function srcAppPagesConfiguracoesDoencasDoencasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoencasComponent", function () {
      return DoencasComponent;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_doenca_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/doenca.service */
    "./src/app/services/doenca.service.ts");
    /* harmony import */


    var _doenca_form_doenca_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./doenca-form/doenca-form.component */
    "./src/app/pages/configuracoes/doencas/doenca-form/doenca-form.component.ts");
    /* harmony import */


    var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/helpers/alert.helper */
    "./src/app/helpers/alert.helper.ts");

    var DoencasComponent = /*#__PURE__*/function () {
      function DoencasComponent(doencaService, modalService, alertHelper) {
        _classCallCheck(this, DoencasComponent);

        this.doencaService = doencaService;
        this.modalService = modalService;
        this.alertHelper = alertHelper;
        this.loading = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(DoencasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadDoencas();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "openDoencaForm",
        value: function openDoencaForm(doenca) {
          var _this17 = this;

          this.bsModalRef = this.modalService.show(_doenca_form_doenca_form_component__WEBPACK_IMPORTED_MODULE_6__["DoencaFormComponent"], {
            initialState: {
              doenca: doenca
            }
          });
          var component = this.bsModalRef.content;
          component.onClose.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(doenca) {
              var index = _this17.doencas.findIndex(function (u) {
                return u.id == doenca.id;
              });

              if (index === -1) {
                _this17.doencas.push(doenca);
              } else {
                _this17.doencas[index] = doenca;
              }
            }
          });
        }
      }, {
        key: "deleteDoenca",
        value: function deleteDoenca(doenca) {
          var _this18 = this;

          this.alertHelper.show('warning', "Tem certeza que deseja remover a doen\xE7a ".concat(doenca.desc, "?"), {
            showCancelButton: true
          }).then(function (confirmed) {
            if (confirmed) {
              _this18.loading = true;

              _this18.doencaService["delete"](doenca).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this18.unsubscribe$)).subscribe({
                next: function next(doenca) {
                  _this18.loading = false;
                  _this18.doencas = _this18.doencas.filter(function (d) {
                    return d.id != doenca.id;
                  });
                },
                error: function error() {
                  _this18.loading = false;
                }
              });
            }
          });
        }
      }, {
        key: "loadDoencas",
        value: function loadDoencas() {
          var _this19 = this;

          this.loading = true;
          this.doencaService.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(doencas) {
              _this19.loading = false;
              _this19.doencas = doencas;
            },
            error: function error() {
              _this19.loading = false;
            }
          });
        }
      }]);

      return DoencasComponent;
    }();

    DoencasComponent.ctorParameters = function () {
      return [{
        type: src_app_services_doenca_service__WEBPACK_IMPORTED_MODULE_5__["DoencaService"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
      }, {
        type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_7__["AlertHelper"]
      }];
    };

    DoencasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-doencas',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./doencas.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/doencas/doencas.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./doencas.component.scss */
      "./src/app/pages/configuracoes/doencas/doencas.component.scss"))["default"]]
    })], DoencasComponent);
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/frequencias-de-atividades/frequencia-form/frequencia-form.component.scss":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/pages/configuracoes/frequencias-de-atividades/frequencia-form/frequencia-form.component.scss ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfiguracoesFrequenciasDeAtividadesFrequenciaFormFrequenciaFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvZnJlcXVlbmNpYXMtZGUtYXRpdmlkYWRlcy9mcmVxdWVuY2lhLWZvcm0vZnJlcXVlbmNpYS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/frequencias-de-atividades/frequencia-form/frequencia-form.component.ts":
  /*!************************************************************************************************************!*\
    !*** ./src/app/pages/configuracoes/frequencias-de-atividades/frequencia-form/frequencia-form.component.ts ***!
    \************************************************************************************************************/

  /*! exports provided: FrequenciaFormComponent */

  /***/
  function srcAppPagesConfiguracoesFrequenciasDeAtividadesFrequenciaFormFrequenciaFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FrequenciaFormComponent", function () {
      return FrequenciaFormComponent;
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


    var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/helpers/alert.helper */
    "./src/app/helpers/alert.helper.ts");
    /* harmony import */


    var src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/models/response-error */
    "./src/app/models/response-error.ts");
    /* harmony import */


    var src_app_services_frequencia_atividade_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/frequencia-atividade.service */
    "./src/app/services/frequencia-atividade.service.ts");

    var FrequenciaFormComponent = /*#__PURE__*/function () {
      function FrequenciaFormComponent(bsModalRef, alertHelper, frequenciaAtividadeService) {
        _classCallCheck(this, FrequenciaFormComponent);

        this.bsModalRef = bsModalRef;
        this.alertHelper = alertHelper;
        this.frequenciaAtividadeService = frequenciaAtividadeService;
        this.loading = false;
        this.desc = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.isInvalid = false;
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(FrequenciaFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.frequenciaAtividade) {
            this.desc.setValue(this.frequenciaAtividade.desc);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "close",
        value: function close() {
          this.bsModalRef.hide();
        }
      }, {
        key: "submit",
        value: function submit() {
          var _a;

          this.isInvalid = this.desc.invalid;

          if (!this.isInvalid) {
            this.frequenciaAtividade = Object.assign(Object.assign({}, this.frequenciaAtividade), {
              desc: this.desc.value
            });

            if ((_a = this.frequenciaAtividade) === null || _a === void 0 ? void 0 : _a.id) {
              this.updateFrequenciaAtividade();
            } else {
              this.createFrequenciaAtividade();
            }
          }
        }
      }, {
        key: "createFrequenciaAtividade",
        value: function createFrequenciaAtividade() {
          var _this20 = this;

          this.loading = true;
          this.frequenciaAtividadeService.create(this.frequenciaAtividade).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(frequenciaAtividade) {
              _this20.loading = false;

              _this20.alertHelper.toast('success', 'Frequência de atividade cadastrada com sucesso.');

              _this20.onClose.next(frequenciaAtividade);

              _this20.bsModalRef.hide();
            },
            error: function error(e) {
              _this20.loading = false;

              if (e instanceof src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__["ResponseError"]) {
                _this20.alertHelper.show('error', e.getMessage(), {
                  confirmButtonText: 'Entendi'
                });
              }
            }
          });
        }
      }, {
        key: "updateFrequenciaAtividade",
        value: function updateFrequenciaAtividade() {
          var _this21 = this;

          this.loading = true;
          this.frequenciaAtividadeService.update(this.frequenciaAtividade).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(frequenciaAtividade) {
              _this21.loading = false;

              _this21.alertHelper.toast('success', 'Frequência de atividade atualizada com sucesso.');

              _this21.onClose.next(frequenciaAtividade);

              _this21.bsModalRef.hide();
            },
            error: function error() {
              _this21.loading = false;
            }
          });
        }
      }]);

      return FrequenciaFormComponent;
    }();

    FrequenciaFormComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"]
      }, {
        type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__["AlertHelper"]
      }, {
        type: src_app_services_frequencia_atividade_service__WEBPACK_IMPORTED_MODULE_8__["FrequenciaAtividadeService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FrequenciaFormComponent.prototype, "frequenciaAtividade", void 0);
    FrequenciaFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-frequencia-form',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./frequencia-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/frequencias-de-atividades/frequencia-form/frequencia-form.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./frequencia-form.component.scss */
      "./src/app/pages/configuracoes/frequencias-de-atividades/frequencia-form/frequencia-form.component.scss"))["default"]]
    })], FrequenciaFormComponent);
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/frequencias-de-atividades/frequencias-de-atividades.component.scss":
  /*!********************************************************************************************************!*\
    !*** ./src/app/pages/configuracoes/frequencias-de-atividades/frequencias-de-atividades.component.scss ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfiguracoesFrequenciasDeAtividadesFrequenciasDeAtividadesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvZnJlcXVlbmNpYXMtZGUtYXRpdmlkYWRlcy9mcmVxdWVuY2lhcy1kZS1hdGl2aWRhZGVzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/frequencias-de-atividades/frequencias-de-atividades.component.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/pages/configuracoes/frequencias-de-atividades/frequencias-de-atividades.component.ts ***!
    \******************************************************************************************************/

  /*! exports provided: FrequenciasDeAtividadesComponent */

  /***/
  function srcAppPagesConfiguracoesFrequenciasDeAtividadesFrequenciasDeAtividadesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FrequenciasDeAtividadesComponent", function () {
      return FrequenciasDeAtividadesComponent;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/helpers/alert.helper */
    "./src/app/helpers/alert.helper.ts");
    /* harmony import */


    var src_app_services_frequencia_atividade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/frequencia-atividade.service */
    "./src/app/services/frequencia-atividade.service.ts");
    /* harmony import */


    var _frequencia_form_frequencia_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./frequencia-form/frequencia-form.component */
    "./src/app/pages/configuracoes/frequencias-de-atividades/frequencia-form/frequencia-form.component.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var FrequenciasDeAtividadesComponent = /*#__PURE__*/function () {
      function FrequenciasDeAtividadesComponent(frequenciaAtividadeService, modalService, alertHelper) {
        _classCallCheck(this, FrequenciasDeAtividadesComponent);

        this.frequenciaAtividadeService = frequenciaAtividadeService;
        this.modalService = modalService;
        this.alertHelper = alertHelper;
        this.loading = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(FrequenciasDeAtividadesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadFrequenciasAtividades();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "openFrequenciaForm",
        value: function openFrequenciaForm(frequenciaAtividade) {
          var _this22 = this;

          this.bsModalRef = this.modalService.show(_frequencia_form_frequencia_form_component__WEBPACK_IMPORTED_MODULE_6__["FrequenciaFormComponent"], {
            initialState: {
              frequenciaAtividade: frequenciaAtividade
            }
          });
          var component = this.bsModalRef.content;
          component.onClose.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(frequenciaAtividade) {
              var index = _this22.frequenciasAtividades.findIndex(function (f) {
                return f.id == frequenciaAtividade.id;
              });

              if (index === -1) {
                _this22.frequenciasAtividades.push(frequenciaAtividade);
              } else {
                _this22.frequenciasAtividades[index] = frequenciaAtividade;
              }
            }
          });
        }
      }, {
        key: "deleteFrequenciaAtividade",
        value: function deleteFrequenciaAtividade(frequenciaAtividade) {
          var _this23 = this;

          this.alertHelper.show('warning', "Tem certeza que deseja remover a frequ\xEAncia de atividade ".concat(frequenciaAtividade.desc, "?"), {
            showCancelButton: true
          }).then(function (confirmed) {
            if (confirmed) {
              _this23.loading = true;

              _this23.frequenciaAtividadeService["delete"](frequenciaAtividade).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this23.unsubscribe$)).subscribe({
                next: function next(frequenciaAtividade) {
                  _this23.loading = false;
                  _this23.frequenciasAtividades = _this23.frequenciasAtividades.filter(function (f) {
                    return f.id != frequenciaAtividade.id;
                  });
                },
                error: function error() {
                  _this23.loading = false;
                }
              });
            }
          });
        }
      }, {
        key: "loadFrequenciasAtividades",
        value: function loadFrequenciasAtividades() {
          var _this24 = this;

          this.loading = true;
          this.frequenciaAtividadeService.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(FrequenciasAtividades) {
              _this24.loading = false;
              _this24.frequenciasAtividades = FrequenciasAtividades;
            },
            error: function error() {
              _this24.loading = false;
            }
          });
        }
      }]);

      return FrequenciasDeAtividadesComponent;
    }();

    FrequenciasDeAtividadesComponent.ctorParameters = function () {
      return [{
        type: src_app_services_frequencia_atividade_service__WEBPACK_IMPORTED_MODULE_5__["FrequenciaAtividadeService"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
      }, {
        type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_4__["AlertHelper"]
      }];
    };

    FrequenciasDeAtividadesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-frequencias-de-atividades',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./frequencias-de-atividades.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/frequencias-de-atividades/frequencias-de-atividades.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./frequencias-de-atividades.component.scss */
      "./src/app/pages/configuracoes/frequencias-de-atividades/frequencias-de-atividades.component.scss"))["default"]]
    })], FrequenciasDeAtividadesComponent);
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/grupos-de-exames/grupo-form/grupo-form.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/configuracoes/grupos-de-exames/grupo-form/grupo-form.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfiguracoesGruposDeExamesGrupoFormGrupoFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvZ3J1cG9zLWRlLWV4YW1lcy9ncnVwby1mb3JtL2dydXBvLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/grupos-de-exames/grupo-form/grupo-form.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/configuracoes/grupos-de-exames/grupo-form/grupo-form.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: GrupoFormComponent */

  /***/
  function srcAppPagesConfiguracoesGruposDeExamesGrupoFormGrupoFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GrupoFormComponent", function () {
      return GrupoFormComponent;
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


    var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/helpers/alert.helper */
    "./src/app/helpers/alert.helper.ts");
    /* harmony import */


    var src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/models/response-error */
    "./src/app/models/response-error.ts");
    /* harmony import */


    var src_app_services_grupo_exame_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/grupo-exame.service */
    "./src/app/services/grupo-exame.service.ts");

    var GrupoFormComponent = /*#__PURE__*/function () {
      function GrupoFormComponent(bsModalRef, alertHelper, grupoExameService) {
        _classCallCheck(this, GrupoFormComponent);

        this.bsModalRef = bsModalRef;
        this.alertHelper = alertHelper;
        this.grupoExameService = grupoExameService;
        this.loading = false;
        this.desc = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.isInvalid = false;
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(GrupoFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.grupoExame) {
            this.desc.setValue(this.grupoExame.desc);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "close",
        value: function close() {
          this.bsModalRef.hide();
        }
      }, {
        key: "submit",
        value: function submit() {
          var _a;

          this.isInvalid = this.desc.invalid;

          if (!this.isInvalid) {
            this.grupoExame = Object.assign(Object.assign({}, this.grupoExame), {
              desc: this.desc.value
            });

            if ((_a = this.grupoExame) === null || _a === void 0 ? void 0 : _a.id) {
              this.updateGrupoExame();
            } else {
              this.createGrupoExame();
            }
          }
        }
      }, {
        key: "createGrupoExame",
        value: function createGrupoExame() {
          var _this25 = this;

          this.loading = true;
          this.grupoExameService.create(this.grupoExame).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(grupoExame) {
              _this25.loading = false;

              _this25.alertHelper.toast('success', 'Grupo de exame cadastrado com sucesso.');

              _this25.onClose.next(grupoExame);

              _this25.bsModalRef.hide();
            },
            error: function error(e) {
              _this25.loading = false;

              if (e instanceof src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__["ResponseError"]) {
                _this25.alertHelper.show('error', e.getMessage(), {
                  confirmButtonText: 'Entendi'
                });
              }
            }
          });
        }
      }, {
        key: "updateGrupoExame",
        value: function updateGrupoExame() {
          var _this26 = this;

          this.loading = true;
          this.grupoExameService.update(this.grupoExame).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(grupoExame) {
              _this26.loading = false;

              _this26.alertHelper.toast('success', 'Grupo de exame atualizado com sucesso.');

              _this26.onClose.next(grupoExame);

              _this26.bsModalRef.hide();
            },
            error: function error() {
              _this26.loading = false;
            }
          });
        }
      }]);

      return GrupoFormComponent;
    }();

    GrupoFormComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"]
      }, {
        type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__["AlertHelper"]
      }, {
        type: src_app_services_grupo_exame_service__WEBPACK_IMPORTED_MODULE_8__["GrupoExameService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GrupoFormComponent.prototype, "grupoExame", void 0);
    GrupoFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-grupo-form',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./grupo-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/grupos-de-exames/grupo-form/grupo-form.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./grupo-form.component.scss */
      "./src/app/pages/configuracoes/grupos-de-exames/grupo-form/grupo-form.component.scss"))["default"]]
    })], GrupoFormComponent);
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/grupos-de-exames/grupos-de-exames.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/configuracoes/grupos-de-exames/grupos-de-exames.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfiguracoesGruposDeExamesGruposDeExamesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvZ3J1cG9zLWRlLWV4YW1lcy9ncnVwb3MtZGUtZXhhbWVzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/grupos-de-exames/grupos-de-exames.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/configuracoes/grupos-de-exames/grupos-de-exames.component.ts ***!
    \************************************************************************************/

  /*! exports provided: GruposDeExamesComponent */

  /***/
  function srcAppPagesConfiguracoesGruposDeExamesGruposDeExamesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GruposDeExamesComponent", function () {
      return GruposDeExamesComponent;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/helpers/alert.helper */
    "./src/app/helpers/alert.helper.ts");
    /* harmony import */


    var src_app_services_grupo_exame_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/grupo-exame.service */
    "./src/app/services/grupo-exame.service.ts");
    /* harmony import */


    var _grupo_form_grupo_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./grupo-form/grupo-form.component */
    "./src/app/pages/configuracoes/grupos-de-exames/grupo-form/grupo-form.component.ts");

    var GruposDeExamesComponent = /*#__PURE__*/function () {
      function GruposDeExamesComponent(grupoExameService, modalService, alertHelper) {
        _classCallCheck(this, GruposDeExamesComponent);

        this.grupoExameService = grupoExameService;
        this.modalService = modalService;
        this.alertHelper = alertHelper;
        this.loading = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(GruposDeExamesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadGruposExames();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "openGrupoForm",
        value: function openGrupoForm(grupoExame) {
          var _this27 = this;

          this.bsModalRef = this.modalService.show(_grupo_form_grupo_form_component__WEBPACK_IMPORTED_MODULE_7__["GrupoFormComponent"], {
            initialState: {
              grupoExame: grupoExame
            }
          });
          var component = this.bsModalRef.content;
          component.onClose.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(grupoExame) {
              var index = _this27.gruposExames.findIndex(function (g) {
                return g.id == grupoExame.id;
              });

              if (index === -1) {
                _this27.gruposExames.push(grupoExame);
              } else {
                _this27.gruposExames[index] = grupoExame;
              }
            }
          });
        }
      }, {
        key: "deleteGrupoExame",
        value: function deleteGrupoExame(grupoExame) {
          var _this28 = this;

          this.alertHelper.show('warning', "Tem certeza que deseja remover o grupo de exame ".concat(grupoExame.desc, "?"), {
            showCancelButton: true
          }).then(function (confirmed) {
            if (confirmed) {
              _this28.loading = true;

              _this28.grupoExameService["delete"](grupoExame).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this28.unsubscribe$)).subscribe({
                next: function next(grupoExame) {
                  _this28.loading = false;
                  _this28.gruposExames = _this28.gruposExames.filter(function (g) {
                    return g.id != grupoExame.id;
                  });
                },
                error: function error() {
                  _this28.loading = false;
                }
              });
            }
          });
        }
      }, {
        key: "loadGruposExames",
        value: function loadGruposExames() {
          var _this29 = this;

          this.loading = true;
          this.grupoExameService.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(gruposExames) {
              _this29.loading = false;
              _this29.gruposExames = gruposExames;
            },
            error: function error() {
              _this29.loading = false;
            }
          });
        }
      }]);

      return GruposDeExamesComponent;
    }();

    GruposDeExamesComponent.ctorParameters = function () {
      return [{
        type: src_app_services_grupo_exame_service__WEBPACK_IMPORTED_MODULE_6__["GrupoExameService"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
      }, {
        type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_5__["AlertHelper"]
      }];
    };

    GruposDeExamesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-grupos-de-exames',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./grupos-de-exames.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/grupos-de-exames/grupos-de-exames.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./grupos-de-exames.component.scss */
      "./src/app/pages/configuracoes/grupos-de-exames/grupos-de-exames.component.scss"))["default"]]
    })], GruposDeExamesComponent);
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/imc/imc-form/imc-form.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/configuracoes/imc/imc-form/imc-form.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfiguracoesImcImcFormImcFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvaW1jL2ltYy1mb3JtL2ltYy1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/imc/imc-form/imc-form.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/configuracoes/imc/imc-form/imc-form.component.ts ***!
    \************************************************************************/

  /*! exports provided: IMCFormComponent */

  /***/
  function srcAppPagesConfiguracoesImcImcFormImcFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IMCFormComponent", function () {
      return IMCFormComponent;
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


    var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/helpers/alert.helper */
    "./src/app/helpers/alert.helper.ts");
    /* harmony import */


    var src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/models/response-error */
    "./src/app/models/response-error.ts");
    /* harmony import */


    var src_app_services_imc_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/imc.service */
    "./src/app/services/imc.service.ts");

    var IMCFormComponent = /*#__PURE__*/function () {
      function IMCFormComponent(bsModalRef, alertHelper, imcService) {
        _classCallCheck(this, IMCFormComponent);

        this.bsModalRef = bsModalRef;
        this.alertHelper = alertHelper;
        this.imcService = imcService;
        this.loading = false;
        this.tipo = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.isInvalid = false;
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(IMCFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.imc) {
            this.tipo.setValue(this.imc.tipo);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "close",
        value: function close() {
          this.bsModalRef.hide();
        }
      }, {
        key: "submit",
        value: function submit() {
          var _a;

          this.isInvalid = this.tipo.invalid;

          if (!this.isInvalid) {
            this.imc = Object.assign(Object.assign({}, this.imc), {
              tipo: this.tipo.value
            });

            if ((_a = this.imc) === null || _a === void 0 ? void 0 : _a.id) {
              this.updateImc();
            } else {
              this.createImc();
            }
          }
        }
      }, {
        key: "createImc",
        value: function createImc() {
          var _this30 = this;

          this.loading = true;
          this.imcService.create(this.imc).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(imc) {
              _this30.loading = false;

              _this30.alertHelper.toast('success', 'IMC cadastrado com sucesso.');

              _this30.onClose.next(imc);

              _this30.bsModalRef.hide();
            },
            error: function error(e) {
              _this30.loading = false;

              if (e instanceof src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__["ResponseError"]) {
                _this30.alertHelper.show('error', e.getMessage(), {
                  confirmButtonText: 'Entendi'
                });
              }
            }
          });
        }
      }, {
        key: "updateImc",
        value: function updateImc() {
          var _this31 = this;

          this.loading = true;
          this.imcService.update(this.imc).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(imc) {
              _this31.loading = false;

              _this31.alertHelper.toast('success', 'IMC atualizado com sucesso.');

              _this31.onClose.next(imc);

              _this31.bsModalRef.hide();
            },
            error: function error() {
              _this31.loading = false;
            }
          });
        }
      }]);

      return IMCFormComponent;
    }();

    IMCFormComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"]
      }, {
        type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__["AlertHelper"]
      }, {
        type: src_app_services_imc_service__WEBPACK_IMPORTED_MODULE_8__["IMCService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], IMCFormComponent.prototype, "imc", void 0);
    IMCFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-imc-form',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./imc-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/imc/imc-form/imc-form.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./imc-form.component.scss */
      "./src/app/pages/configuracoes/imc/imc-form/imc-form.component.scss"))["default"]]
    })], IMCFormComponent);
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/imc/imc.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/pages/configuracoes/imc/imc.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfiguracoesImcImcComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvaW1jL2ltYy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/imc/imc.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/configuracoes/imc/imc.component.ts ***!
    \**********************************************************/

  /*! exports provided: IMCComponent */

  /***/
  function srcAppPagesConfiguracoesImcImcComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IMCComponent", function () {
      return IMCComponent;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/helpers/alert.helper */
    "./src/app/helpers/alert.helper.ts");
    /* harmony import */


    var src_app_services_imc_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/imc.service */
    "./src/app/services/imc.service.ts");
    /* harmony import */


    var _imc_form_imc_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./imc-form/imc-form.component */
    "./src/app/pages/configuracoes/imc/imc-form/imc-form.component.ts");

    var IMCComponent = /*#__PURE__*/function () {
      function IMCComponent(imcService, modalService, alertHelper) {
        _classCallCheck(this, IMCComponent);

        this.imcService = imcService;
        this.modalService = modalService;
        this.alertHelper = alertHelper;
        this.loading = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(IMCComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadImcArr();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "openImcForm",
        value: function openImcForm(imc) {
          var _this32 = this;

          this.bsModalRef = this.modalService.show(_imc_form_imc_form_component__WEBPACK_IMPORTED_MODULE_7__["IMCFormComponent"], {
            initialState: {
              imc: imc
            }
          });
          var component = this.bsModalRef.content;
          component.onClose.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(imc) {
              var index = _this32.imcArr.findIndex(function (u) {
                return u.id == imc.id;
              });

              if (index === -1) {
                _this32.imcArr.push(imc);
              } else {
                _this32.imcArr[index] = imc;
              }
            }
          });
        }
      }, {
        key: "deleteImc",
        value: function deleteImc(imc) {
          var _this33 = this;

          this.alertHelper.show('warning', "Tem certeza que deseja remover o IMC ".concat(imc.tipo, "?"), {
            showCancelButton: true
          }).then(function (confirmed) {
            if (confirmed) {
              _this33.loading = true;

              _this33.imcService["delete"](imc).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this33.unsubscribe$)).subscribe({
                next: function next(imc) {
                  _this33.loading = false;
                  _this33.imcArr = _this33.imcArr.filter(function (d) {
                    return d.id != imc.id;
                  });
                },
                error: function error() {
                  _this33.loading = false;
                }
              });
            }
          });
        }
      }, {
        key: "loadImcArr",
        value: function loadImcArr() {
          var _this34 = this;

          this.loading = true;
          this.imcService.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(imcArr) {
              _this34.loading = false;
              _this34.imcArr = imcArr;
            },
            error: function error() {
              _this34.loading = false;
            }
          });
        }
      }]);

      return IMCComponent;
    }();

    IMCComponent.ctorParameters = function () {
      return [{
        type: src_app_services_imc_service__WEBPACK_IMPORTED_MODULE_6__["IMCService"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
      }, {
        type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_5__["AlertHelper"]
      }];
    };

    IMCComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-imc',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./imc.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/imc/imc.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./imc.component.scss */
      "./src/app/pages/configuracoes/imc/imc.component.scss"))["default"]]
    })], IMCComponent);
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/metas/meta-form/meta-form.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/configuracoes/metas/meta-form/meta-form.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfiguracoesMetasMetaFormMetaFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvbWV0YXMvbWV0YS1mb3JtL21ldGEtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/metas/meta-form/meta-form.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/configuracoes/metas/meta-form/meta-form.component.ts ***!
    \****************************************************************************/

  /*! exports provided: MetaFormComponent */

  /***/
  function srcAppPagesConfiguracoesMetasMetaFormMetaFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MetaFormComponent", function () {
      return MetaFormComponent;
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


    var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/helpers/alert.helper */
    "./src/app/helpers/alert.helper.ts");
    /* harmony import */


    var src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/models/response-error */
    "./src/app/models/response-error.ts");
    /* harmony import */


    var src_app_services_meta_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/meta.service */
    "./src/app/services/meta.service.ts");

    var MetaFormComponent = /*#__PURE__*/function () {
      function MetaFormComponent(bsModalRef, alertHelper, metaService) {
        _classCallCheck(this, MetaFormComponent);

        this.bsModalRef = bsModalRef;
        this.alertHelper = alertHelper;
        this.metaService = metaService;
        this.loading = false;
        this.desc = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.isInvalid = false;
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(MetaFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.meta) {
            this.desc.setValue(this.meta.desc);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "close",
        value: function close() {
          this.bsModalRef.hide();
        }
      }, {
        key: "submit",
        value: function submit() {
          var _a;

          this.isInvalid = this.desc.invalid;

          if (!this.isInvalid) {
            this.meta = Object.assign(Object.assign({}, this.meta), {
              desc: this.desc.value
            });

            if ((_a = this.meta) === null || _a === void 0 ? void 0 : _a.id) {
              this.updateMeta();
            } else {
              this.createMeta();
            }
          }
        }
      }, {
        key: "createMeta",
        value: function createMeta() {
          var _this35 = this;

          this.loading = true;
          this.metaService.create(this.meta).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(meta) {
              _this35.loading = false;

              _this35.alertHelper.toast('success', 'Meta cadastrada com sucesso.');

              _this35.onClose.next(meta);

              _this35.bsModalRef.hide();
            },
            error: function error(e) {
              _this35.loading = false;

              if (e instanceof src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__["ResponseError"]) {
                _this35.alertHelper.show('error', e.getMessage(), {
                  confirmButtonText: 'Entendi'
                });
              }
            }
          });
        }
      }, {
        key: "updateMeta",
        value: function updateMeta() {
          var _this36 = this;

          this.loading = true;
          this.metaService.update(this.meta).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(meta) {
              _this36.loading = false;

              _this36.alertHelper.toast('success', 'Meta atualizada com sucesso.');

              _this36.onClose.next(meta);

              _this36.bsModalRef.hide();
            },
            error: function error() {
              _this36.loading = false;
            }
          });
        }
      }]);

      return MetaFormComponent;
    }();

    MetaFormComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"]
      }, {
        type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__["AlertHelper"]
      }, {
        type: src_app_services_meta_service__WEBPACK_IMPORTED_MODULE_8__["MetaService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MetaFormComponent.prototype, "meta", void 0);
    MetaFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-meta-form',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./meta-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/metas/meta-form/meta-form.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./meta-form.component.scss */
      "./src/app/pages/configuracoes/metas/meta-form/meta-form.component.scss"))["default"]]
    })], MetaFormComponent);
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/metas/metas.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/pages/configuracoes/metas/metas.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfiguracoesMetasMetasComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvbWV0YXMvbWV0YXMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/metas/metas.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/configuracoes/metas/metas.component.ts ***!
    \**************************************************************/

  /*! exports provided: MetasComponent */

  /***/
  function srcAppPagesConfiguracoesMetasMetasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MetasComponent", function () {
      return MetasComponent;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/helpers/alert.helper */
    "./src/app/helpers/alert.helper.ts");
    /* harmony import */


    var src_app_services_meta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/meta.service */
    "./src/app/services/meta.service.ts");
    /* harmony import */


    var _meta_form_meta_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./meta-form/meta-form.component */
    "./src/app/pages/configuracoes/metas/meta-form/meta-form.component.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var MetasComponent = /*#__PURE__*/function () {
      function MetasComponent(metaService, modalService, alertHelper) {
        _classCallCheck(this, MetasComponent);

        this.metaService = metaService;
        this.modalService = modalService;
        this.alertHelper = alertHelper;
        this.loading = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(MetasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadMetas();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "openMetaForm",
        value: function openMetaForm(meta) {
          var _this37 = this;

          this.bsModalRef = this.modalService.show(_meta_form_meta_form_component__WEBPACK_IMPORTED_MODULE_6__["MetaFormComponent"], {
            initialState: {
              meta: meta
            }
          });
          var component = this.bsModalRef.content;
          component.onClose.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(meta) {
              var index = _this37.metas.findIndex(function (m) {
                return m.id == meta.id;
              });

              if (index === -1) {
                _this37.metas.push(meta);
              } else {
                _this37.metas[index] = meta;
              }
            }
          });
        }
      }, {
        key: "deleteMeta",
        value: function deleteMeta(meta) {
          var _this38 = this;

          this.alertHelper.show('warning', "Tem certeza que deseja remover a meta ".concat(meta.desc, "?"), {
            showCancelButton: true
          }).then(function (confirmed) {
            if (confirmed) {
              _this38.loading = true;

              _this38.metaService["delete"](meta).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this38.unsubscribe$)).subscribe({
                next: function next(meta) {
                  _this38.loading = false;
                  _this38.metas = _this38.metas.filter(function (m) {
                    return m.id != meta.id;
                  });
                },
                error: function error() {
                  _this38.loading = false;
                }
              });
            }
          });
        }
      }, {
        key: "loadMetas",
        value: function loadMetas() {
          var _this39 = this;

          this.loading = true;
          this.metaService.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(metas) {
              _this39.loading = false;
              _this39.metas = metas;
            },
            error: function error() {
              _this39.loading = false;
            }
          });
        }
      }]);

      return MetasComponent;
    }();

    MetasComponent.ctorParameters = function () {
      return [{
        type: src_app_services_meta_service__WEBPACK_IMPORTED_MODULE_5__["MetaService"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
      }, {
        type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_4__["AlertHelper"]
      }];
    };

    MetasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-metas',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./metas.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/metas/metas.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./metas.component.scss */
      "./src/app/pages/configuracoes/metas/metas.component.scss"))["default"]]
    })], MetasComponent);
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/programas/programa-form/programa-form.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/configuracoes/programas/programa-form/programa-form.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfiguracoesProgramasProgramaFormProgramaFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvcHJvZ3JhbWFzL3Byb2dyYW1hLWZvcm0vcHJvZ3JhbWEtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/programas/programa-form/programa-form.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/pages/configuracoes/programas/programa-form/programa-form.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: ProgramaFormComponent */

  /***/
  function srcAppPagesConfiguracoesProgramasProgramaFormProgramaFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgramaFormComponent", function () {
      return ProgramaFormComponent;
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


    var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/helpers/alert.helper */
    "./src/app/helpers/alert.helper.ts");
    /* harmony import */


    var src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/models/response-error */
    "./src/app/models/response-error.ts");
    /* harmony import */


    var src_app_services_programa_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/programa.service */
    "./src/app/services/programa.service.ts");

    var ProgramaFormComponent = /*#__PURE__*/function () {
      function ProgramaFormComponent(bsModalRef, alertHelper, programaService) {
        _classCallCheck(this, ProgramaFormComponent);

        this.bsModalRef = bsModalRef;
        this.alertHelper = alertHelper;
        this.programaService = programaService;
        this.loading = false;
        this.desc = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.isInvalid = false;
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(ProgramaFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.programa) {
            this.desc.setValue(this.programa.desc);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "close",
        value: function close() {
          this.bsModalRef.hide();
        }
      }, {
        key: "submit",
        value: function submit() {
          var _a;

          this.isInvalid = this.desc.invalid;

          if (!this.isInvalid) {
            this.programa = Object.assign(Object.assign({}, this.programa), {
              desc: this.desc.value
            });

            if ((_a = this.programa) === null || _a === void 0 ? void 0 : _a.id) {
              this.updatePrograma();
            } else {
              this.createPrograma();
            }
          }
        }
      }, {
        key: "createPrograma",
        value: function createPrograma() {
          var _this40 = this;

          this.loading = true;
          this.programaService.create(this.programa).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(programa) {
              _this40.loading = false;

              _this40.alertHelper.toast('success', 'Programa cadastrado com sucesso.');

              _this40.onClose.next(programa);

              _this40.bsModalRef.hide();
            },
            error: function error(e) {
              _this40.loading = false;

              if (e instanceof src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__["ResponseError"]) {
                _this40.alertHelper.show('error', e.getMessage(), {
                  confirmButtonText: 'Entendi'
                });
              }
            }
          });
        }
      }, {
        key: "updatePrograma",
        value: function updatePrograma() {
          var _this41 = this;

          this.loading = true;
          this.programaService.update(this.programa).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(programa) {
              _this41.loading = false;

              _this41.alertHelper.toast('success', 'Programa atualizado com sucesso.');

              _this41.onClose.next(programa);

              _this41.bsModalRef.hide();
            },
            error: function error() {
              _this41.loading = false;
            }
          });
        }
      }]);

      return ProgramaFormComponent;
    }();

    ProgramaFormComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"]
      }, {
        type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__["AlertHelper"]
      }, {
        type: src_app_services_programa_service__WEBPACK_IMPORTED_MODULE_8__["ProgramaService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProgramaFormComponent.prototype, "programa", void 0);
    ProgramaFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-programa-form',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./programa-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/programas/programa-form/programa-form.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./programa-form.component.scss */
      "./src/app/pages/configuracoes/programas/programa-form/programa-form.component.scss"))["default"]]
    })], ProgramaFormComponent);
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/programas/programas.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/pages/configuracoes/programas/programas.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfiguracoesProgramasProgramasComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvcHJvZ3JhbWFzL3Byb2dyYW1hcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/programas/programas.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/configuracoes/programas/programas.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ProgramasComponent */

  /***/
  function srcAppPagesConfiguracoesProgramasProgramasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgramasComponent", function () {
      return ProgramasComponent;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/helpers/alert.helper */
    "./src/app/helpers/alert.helper.ts");
    /* harmony import */


    var src_app_services_programa_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/programa.service */
    "./src/app/services/programa.service.ts");
    /* harmony import */


    var _programa_form_programa_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./programa-form/programa-form.component */
    "./src/app/pages/configuracoes/programas/programa-form/programa-form.component.ts");

    var ProgramasComponent = /*#__PURE__*/function () {
      function ProgramasComponent(programaService, modalService, alertHelper) {
        _classCallCheck(this, ProgramasComponent);

        this.programaService = programaService;
        this.modalService = modalService;
        this.alertHelper = alertHelper;
        this.loading = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(ProgramasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadProgramas();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "openProgramaForm",
        value: function openProgramaForm(programa) {
          var _this42 = this;

          this.bsModalRef = this.modalService.show(_programa_form_programa_form_component__WEBPACK_IMPORTED_MODULE_7__["ProgramaFormComponent"], {
            initialState: {
              programa: programa
            }
          });
          var component = this.bsModalRef.content;
          component.onClose.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(programa) {
              var index = _this42.programas.findIndex(function (m) {
                return m.id == programa.id;
              });

              if (index === -1) {
                _this42.programas.push(programa);
              } else {
                _this42.programas[index] = programa;
              }
            }
          });
        }
      }, {
        key: "deletePrograma",
        value: function deletePrograma(programa) {
          var _this43 = this;

          this.alertHelper.show('warning', "Tem certeza que deseja remover o programa ".concat(programa.desc, "?"), {
            showCancelButton: true
          }).then(function (confirmed) {
            if (confirmed) {
              _this43.loading = true;

              _this43.programaService["delete"](programa).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this43.unsubscribe$)).subscribe({
                next: function next(programa) {
                  _this43.loading = false;
                  _this43.programas = _this43.programas.filter(function (m) {
                    return m.id != programa.id;
                  });
                },
                error: function error() {
                  _this43.loading = false;
                }
              });
            }
          });
        }
      }, {
        key: "loadProgramas",
        value: function loadProgramas() {
          var _this44 = this;

          this.loading = true;
          this.programaService.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(programas) {
              _this44.loading = false;
              _this44.programas = programas;
            },
            error: function error() {
              _this44.loading = false;
            }
          });
        }
      }]);

      return ProgramasComponent;
    }();

    ProgramasComponent.ctorParameters = function () {
      return [{
        type: src_app_services_programa_service__WEBPACK_IMPORTED_MODULE_6__["ProgramaService"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
      }, {
        type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_5__["AlertHelper"]
      }];
    };

    ProgramasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-programas',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./programas.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/programas/programas.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./programas.component.scss */
      "./src/app/pages/configuracoes/programas/programas.component.scss"))["default"]]
    })], ProgramasComponent);
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/refeicoes/refeicao-form/refeicao-form.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/configuracoes/refeicoes/refeicao-form/refeicao-form.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfiguracoesRefeicoesRefeicaoFormRefeicaoFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvcmVmZWljb2VzL3JlZmVpY2FvLWZvcm0vcmVmZWljYW8tZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/refeicoes/refeicao-form/refeicao-form.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/pages/configuracoes/refeicoes/refeicao-form/refeicao-form.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: RefeicaoFormComponent */

  /***/
  function srcAppPagesConfiguracoesRefeicoesRefeicaoFormRefeicaoFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RefeicaoFormComponent", function () {
      return RefeicaoFormComponent;
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


    var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/helpers/alert.helper */
    "./src/app/helpers/alert.helper.ts");
    /* harmony import */


    var src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/models/response-error */
    "./src/app/models/response-error.ts");
    /* harmony import */


    var src_app_services_refeicao_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/refeicao.service */
    "./src/app/services/refeicao.service.ts");

    var RefeicaoFormComponent = /*#__PURE__*/function () {
      function RefeicaoFormComponent(bsModalRef, alertHelper, refeicaoService) {
        _classCallCheck(this, RefeicaoFormComponent);

        this.bsModalRef = bsModalRef;
        this.alertHelper = alertHelper;
        this.refeicaoService = refeicaoService;
        this.loading = false;
        this.desc = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.isInvalid = false;
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(RefeicaoFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.refeicao) {
            this.desc.setValue(this.refeicao.desc);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "close",
        value: function close() {
          this.bsModalRef.hide();
        }
      }, {
        key: "submit",
        value: function submit() {
          var _a;

          this.isInvalid = this.desc.invalid;

          if (!this.isInvalid) {
            this.refeicao = Object.assign(Object.assign({}, this.refeicao), {
              desc: this.desc.value
            });

            if ((_a = this.refeicao) === null || _a === void 0 ? void 0 : _a.id) {
              this.updateRefeicao();
            } else {
              this.createRefeicao();
            }
          }
        }
      }, {
        key: "createRefeicao",
        value: function createRefeicao() {
          var _this45 = this;

          this.loading = true;
          this.refeicaoService.create(this.refeicao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(refeicao) {
              _this45.loading = false;

              _this45.alertHelper.toast('success', 'Refeicao cadastrado com sucesso.');

              _this45.onClose.next(refeicao);

              _this45.bsModalRef.hide();
            },
            error: function error(e) {
              _this45.loading = false;

              if (e instanceof src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__["ResponseError"]) {
                _this45.alertHelper.show('error', e.getMessage(), {
                  confirmButtonText: 'Entendi'
                });
              }
            }
          });
        }
      }, {
        key: "updateRefeicao",
        value: function updateRefeicao() {
          var _this46 = this;

          this.loading = true;
          this.refeicaoService.update(this.refeicao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(refeicao) {
              _this46.loading = false;

              _this46.alertHelper.toast('success', 'Refeicao atualizado com sucesso.');

              _this46.onClose.next(refeicao);

              _this46.bsModalRef.hide();
            },
            error: function error() {
              _this46.loading = false;
            }
          });
        }
      }]);

      return RefeicaoFormComponent;
    }();

    RefeicaoFormComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"]
      }, {
        type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__["AlertHelper"]
      }, {
        type: src_app_services_refeicao_service__WEBPACK_IMPORTED_MODULE_8__["RefeicaoService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RefeicaoFormComponent.prototype, "refeicao", void 0);
    RefeicaoFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-refeicao-form',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./refeicao-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/refeicoes/refeicao-form/refeicao-form.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./refeicao-form.component.scss */
      "./src/app/pages/configuracoes/refeicoes/refeicao-form/refeicao-form.component.scss"))["default"]]
    })], RefeicaoFormComponent);
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/refeicoes/refeicoes.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/pages/configuracoes/refeicoes/refeicoes.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfiguracoesRefeicoesRefeicoesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvcmVmZWljb2VzL3JlZmVpY29lcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/refeicoes/refeicoes.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/configuracoes/refeicoes/refeicoes.component.ts ***!
    \**********************************************************************/

  /*! exports provided: RefeicoesComponent */

  /***/
  function srcAppPagesConfiguracoesRefeicoesRefeicoesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RefeicoesComponent", function () {
      return RefeicoesComponent;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/helpers/alert.helper */
    "./src/app/helpers/alert.helper.ts");
    /* harmony import */


    var src_app_services_refeicao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/refeicao.service */
    "./src/app/services/refeicao.service.ts");
    /* harmony import */


    var _refeicao_form_refeicao_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./refeicao-form/refeicao-form.component */
    "./src/app/pages/configuracoes/refeicoes/refeicao-form/refeicao-form.component.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var RefeicoesComponent = /*#__PURE__*/function () {
      function RefeicoesComponent(refeicaoService, modalService, alertHelper) {
        _classCallCheck(this, RefeicoesComponent);

        this.refeicaoService = refeicaoService;
        this.modalService = modalService;
        this.alertHelper = alertHelper;
        this.loading = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(RefeicoesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadRefeicoes();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "openRefeicaoForm",
        value: function openRefeicaoForm(refeicao) {
          var _this47 = this;

          this.bsModalRef = this.modalService.show(_refeicao_form_refeicao_form_component__WEBPACK_IMPORTED_MODULE_6__["RefeicaoFormComponent"], {
            initialState: {
              refeicao: refeicao
            }
          });
          var component = this.bsModalRef.content;
          component.onClose.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(refeicao) {
              var index = _this47.refeicoes.findIndex(function (m) {
                return m.id == refeicao.id;
              });

              if (index === -1) {
                _this47.refeicoes.push(refeicao);
              } else {
                _this47.refeicoes[index] = refeicao;
              }
            }
          });
        }
      }, {
        key: "deleteRefeicao",
        value: function deleteRefeicao(refeicao) {
          var _this48 = this;

          this.alertHelper.show('warning', "Tem certeza que deseja remover a refei\xE7\xE3o ".concat(refeicao.desc, "?"), {
            showCancelButton: true
          }).then(function (confirmed) {
            if (confirmed) {
              _this48.loading = true;

              _this48.refeicaoService["delete"](refeicao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this48.unsubscribe$)).subscribe({
                next: function next(refeicao) {
                  _this48.loading = false;
                  _this48.refeicoes = _this48.refeicoes.filter(function (m) {
                    return m.id != refeicao.id;
                  });
                },
                error: function error() {
                  _this48.loading = false;
                }
              });
            }
          });
        }
      }, {
        key: "loadRefeicoes",
        value: function loadRefeicoes() {
          var _this49 = this;

          this.loading = true;
          this.refeicaoService.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(refeicoes) {
              _this49.loading = false;
              _this49.refeicoes = refeicoes;
            },
            error: function error() {
              _this49.loading = false;
            }
          });
        }
      }]);

      return RefeicoesComponent;
    }();

    RefeicoesComponent.ctorParameters = function () {
      return [{
        type: src_app_services_refeicao_service__WEBPACK_IMPORTED_MODULE_5__["RefeicaoService"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
      }, {
        type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_4__["AlertHelper"]
      }];
    };

    RefeicoesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-refeicoes',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./refeicoes.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/refeicoes/refeicoes.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./refeicoes.component.scss */
      "./src/app/pages/configuracoes/refeicoes/refeicoes.component.scss"))["default"]]
    })], RefeicoesComponent);
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/treinos/item-treino-form/item-treino-form.component.scss":
  /*!**********************************************************************************************!*\
    !*** ./src/app/pages/configuracoes/treinos/item-treino-form/item-treino-form.component.scss ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfiguracoesTreinosItemTreinoFormItemTreinoFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".img-thumbnail {\n  max-height: 150px;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29uZmlndXJhY29lcy90cmVpbm9zL2l0ZW0tdHJlaW5vLWZvcm0vQzpcXFVzZXJzXFx1c2VyXFxEb2N1bWVudHNcXEIyQiBIZWFsdGhcXGRhc2hib2FyZC1iMmItaGVhbHRoL3NyY1xcYXBwXFxwYWdlc1xcY29uZmlndXJhY29lc1xcdHJlaW5vc1xcaXRlbS10cmVpbm8tZm9ybVxcaXRlbS10cmVpbm8tZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29uZmlndXJhY29lcy90cmVpbm9zL2l0ZW0tdHJlaW5vLWZvcm0vaXRlbS10cmVpbm8tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvdHJlaW5vcy9pdGVtLXRyZWluby1mb3JtL2l0ZW0tdHJlaW5vLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXRodW1ibmFpbCB7XHJcbiAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4iLCIuaW1nLXRodW1ibmFpbCB7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/treinos/item-treino-form/item-treino-form.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/pages/configuracoes/treinos/item-treino-form/item-treino-form.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: ItemTreinoFormComponent */

  /***/
  function srcAppPagesConfiguracoesTreinosItemTreinoFormItemTreinoFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemTreinoFormComponent", function () {
      return ItemTreinoFormComponent;
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


    var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/helpers/alert.helper */
    "./src/app/helpers/alert.helper.ts");
    /* harmony import */


    var src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/models/response-error */
    "./src/app/models/response-error.ts");
    /* harmony import */


    var src_app_services_treino_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/treino.service */
    "./src/app/services/treino.service.ts");

    var ItemTreinoFormComponent = /*#__PURE__*/function () {
      function ItemTreinoFormComponent(bsModalRef, alertHelper, treinoService) {
        _classCallCheck(this, ItemTreinoFormComponent);

        this.bsModalRef = bsModalRef;
        this.alertHelper = alertHelper;
        this.treinoService = treinoService;
        this.loading = false;
        this.desc = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.metodologia = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.intervalo = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.isInvalid = false;
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(ItemTreinoFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.item) {
            this.desc.setValue(this.item.desc);
            this.urlImg = this.item.url_img;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "close",
        value: function close() {
          this.bsModalRef.hide();
        }
      }, {
        key: "imageChanged",
        value: function imageChanged(event) {
          var _this50 = this;

          this.fileImg = event.target.files[0];
          var reader = new FileReader();

          reader.onload = function () {
            var _a;

            _this50.urlImg = reader.result.toString();

            if ((_a = _this50.item) === null || _a === void 0 ? void 0 : _a.id) {
              _this50.uploadImg();
            }
          };

          reader.readAsDataURL(this.fileImg);
        }
      }, {
        key: "submit",
        value: function submit() {
          var _a, _b;

          this.isInvalid = this.desc.invalid;

          if (((_a = this.item) === null || _a === void 0 ? void 0 : _a.id) == undefined && this.fileImg == undefined) {
            this.isInvalid = true;
          }

          if (!this.isInvalid) {
            this.item = Object.assign(Object.assign({}, this.item), {
              desc: this.desc.value
            });

            if ((_b = this.item) === null || _b === void 0 ? void 0 : _b.id) {
              this.updateItem();
            } else {
              this.item.file_img = this.fileImg;
              this.createItem();
            }
          }
        }
      }, {
        key: "createItem",
        value: function createItem() {
          var _this51 = this;

          this.loading = true;
          this.item.metodologia = this.metodologia.value;
          this.item.intervalo = this.intervalo.value;
          this.treinoService.createItem(this.item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(item) {
              _this51.loading = false;

              _this51.alertHelper.toast('success', 'Item cadastrado com sucesso.');

              _this51.onClose.next(item);

              _this51.bsModalRef.hide();
            },
            error: function error(e) {
              _this51.loading = false;

              if (e instanceof src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__["ResponseError"]) {
                _this51.alertHelper.show('error', e.getMessage(), {
                  confirmButtonText: 'Entendi'
                });
              }
            }
          });
        }
      }, {
        key: "updateItem",
        value: function updateItem() {
          var _this52 = this;

          this.loading = true;
          this.treinoService.updateItem(this.item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(item) {
              _this52.loading = false;

              _this52.alertHelper.toast('success', 'Item atualizado com sucesso.');

              _this52.onClose.next(item);

              _this52.bsModalRef.hide();
            },
            error: function error() {
              _this52.loading = false;
            }
          });
        }
      }, {
        key: "uploadImg",
        value: function uploadImg() {
          var _this53 = this;

          var _a;

          this.loading = true;
          this.treinoService.uploadImg((_a = this.item) === null || _a === void 0 ? void 0 : _a.id, this.fileImg).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(item) {
              _this53.loading = false;

              _this53.alertHelper.toast('success', 'Imagem atualizada com sucesso.');

              _this53.onClose.next(item);
            },
            error: function error() {
              _this53.loading = false;
            }
          });
        }
      }]);

      return ItemTreinoFormComponent;
    }();

    ItemTreinoFormComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"]
      }, {
        type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__["AlertHelper"]
      }, {
        type: src_app_services_treino_service__WEBPACK_IMPORTED_MODULE_8__["TreinoService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ItemTreinoFormComponent.prototype, "item", void 0);
    ItemTreinoFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-item-treino-form',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./item-treino-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/treinos/item-treino-form/item-treino-form.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./item-treino-form.component.scss */
      "./src/app/pages/configuracoes/treinos/item-treino-form/item-treino-form.component.scss"))["default"]]
    })], ItemTreinoFormComponent);
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/treinos/treino-form/treino-form.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/configuracoes/treinos/treino-form/treino-form.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfiguracoesTreinosTreinoFormTreinoFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvdHJlaW5vcy90cmVpbm8tZm9ybS90cmVpbm8tZm9ybS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/treinos/treino-form/treino-form.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/configuracoes/treinos/treino-form/treino-form.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: TreinoFormComponent */

  /***/
  function srcAppPagesConfiguracoesTreinosTreinoFormTreinoFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreinoFormComponent", function () {
      return TreinoFormComponent;
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


    var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/helpers/alert.helper */
    "./src/app/helpers/alert.helper.ts");
    /* harmony import */


    var src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/models/response-error */
    "./src/app/models/response-error.ts");
    /* harmony import */


    var src_app_services_treino_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/treino.service */
    "./src/app/services/treino.service.ts");

    var TreinoFormComponent = /*#__PURE__*/function () {
      function TreinoFormComponent(bsModalRef, alertHelper, treinoService) {
        _classCallCheck(this, TreinoFormComponent);

        this.bsModalRef = bsModalRef;
        this.alertHelper = alertHelper;
        this.treinoService = treinoService;
        this.loading = false;
        this.programaId = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.itemId = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.mes = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.dia = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.isInvalid = false;
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(TreinoFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.treino) {
            this.programaId.setValue(this.treino.programa_id);
            this.itemId.setValue(this.treino.item_id);
            this.mes.setValue(this.treino.mes);
            this.dia.setValue(this.treino.dia);
          }

          this.dias = [{
            id: 1,
            nome: "Domingo"
          }, {
            id: 2,
            nome: "Segunda"
          }, {
            id: 3,
            nome: "Terça"
          }, {
            id: 4,
            nome: "Quarta"
          }, {
            id: 5,
            nome: "Quinta"
          }, {
            id: 6,
            nome: "Sexta"
          }, {
            id: 7,
            nome: "Sábado"
          }];
          this.meses = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "close",
        value: function close() {
          this.bsModalRef.hide();
        }
      }, {
        key: "submit",
        value: function submit() {
          var _a;

          this.isInvalid = this.programaId.invalid || this.itemId.invalid || this.mes.invalid || this.dia.invalid;

          if (!this.isInvalid) {
            var data = {
              programa_id: this.programaId.value,
              item_id: this.itemId.value,
              mes: this.mes.value,
              dia: this.dia.value
            };

            if ((_a = this.treino) === null || _a === void 0 ? void 0 : _a.id) {
              data.id = this.treino.id;
              this.updateTreino(data);
            } else {
              this.createTreino(data);
            }
          }
        }
      }, {
        key: "createTreino",
        value: function createTreino(data) {
          var _this54 = this;

          this.loading = true;
          this.treinoService.create(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(treino) {
              _this54.loading = false;
              _this54.treino = treino;

              _this54.alertHelper.toast('success', 'Treino cadastrado com sucesso.');

              _this54.onClose.next(treino);

              _this54.bsModalRef.hide();
            },
            error: function error(e) {
              _this54.loading = false;

              if (e instanceof src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__["ResponseError"]) {
                _this54.alertHelper.show('error', e.getMessage(), {
                  confirmButtonText: 'Entendi'
                });
              }
            }
          });
        }
      }, {
        key: "updateTreino",
        value: function updateTreino(data) {
          var _this55 = this;

          this.loading = true;
          this.treinoService.update(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(treino) {
              _this55.loading = false;
              _this55.treino = treino;

              _this55.alertHelper.toast('success', 'Treino atualizado com sucesso.');

              _this55.onClose.next(treino);

              _this55.bsModalRef.hide();
            },
            error: function error() {
              _this55.loading = false;
            }
          });
        }
      }]);

      return TreinoFormComponent;
    }();

    TreinoFormComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"]
      }, {
        type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__["AlertHelper"]
      }, {
        type: src_app_services_treino_service__WEBPACK_IMPORTED_MODULE_8__["TreinoService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TreinoFormComponent.prototype, "treino", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TreinoFormComponent.prototype, "itens", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TreinoFormComponent.prototype, "programas", void 0);
    TreinoFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-treino-form',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./treino-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/treinos/treino-form/treino-form.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./treino-form.component.scss */
      "./src/app/pages/configuracoes/treinos/treino-form/treino-form.component.scss"))["default"]]
    })], TreinoFormComponent);
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/treinos/treinos.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/pages/configuracoes/treinos/treinos.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfiguracoesTreinosTreinosComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvdHJlaW5vcy90cmVpbm9zLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/configuracoes/treinos/treinos.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/configuracoes/treinos/treinos.component.ts ***!
    \******************************************************************/

  /*! exports provided: TreinosComponent */

  /***/
  function srcAppPagesConfiguracoesTreinosTreinosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreinosComponent", function () {
      return TreinosComponent;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _treino_form_treino_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./treino-form/treino-form.component */
    "./src/app/pages/configuracoes/treinos/treino-form/treino-form.component.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _item_treino_form_item_treino_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./item-treino-form/item-treino-form.component */
    "./src/app/pages/configuracoes/treinos/item-treino-form/item-treino-form.component.ts");
    /* harmony import */


    var src_app_services_refeicao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/refeicao.service */
    "./src/app/services/refeicao.service.ts");
    /* harmony import */


    var src_app_services_programa_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/programa.service */
    "./src/app/services/programa.service.ts");
    /* harmony import */


    var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/helpers/alert.helper */
    "./src/app/helpers/alert.helper.ts");
    /* harmony import */


    var src_app_services_treino_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/services/treino.service */
    "./src/app/services/treino.service.ts");

    var TreinosComponent = /*#__PURE__*/function () {
      function TreinosComponent(treinoService, modalService, programaService, refeicaoService, alertHelper) {
        _classCallCheck(this, TreinosComponent);

        this.treinoService = treinoService;
        this.modalService = modalService;
        this.programaService = programaService;
        this.refeicaoService = refeicaoService;
        this.alertHelper = alertHelper;
        this.loading = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(TreinosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadTreinos();
          this.loadItensTreinos();
          this.loadProgramas();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "openTreinoForm",
        value: function openTreinoForm(treino) {
          var _this56 = this;

          this.bsModalRef = this.modalService.show(_treino_form_treino_form_component__WEBPACK_IMPORTED_MODULE_4__["TreinoFormComponent"], {
            initialState: {
              treino: treino,
              itens: this.itensTreino,
              programas: this.programas
            }
          });
          var component = this.bsModalRef.content;
          component.onClose.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(treino) {
              var index = _this56.treinos.findIndex(function (u) {
                return u.id == treino.id;
              });

              if (index === -1) {
                _this56.treinos.push(treino);
              } else {
                _this56.treinos[index] = treino;
              }
            }
          });
        }
      }, {
        key: "openItemTreinoForm",
        value: function openItemTreinoForm(item) {
          var _this57 = this;

          this.bsModalRef = this.modalService.show(_item_treino_form_item_treino_form_component__WEBPACK_IMPORTED_MODULE_6__["ItemTreinoFormComponent"], {
            initialState: {
              item: item
            }
          });
          var component = this.bsModalRef.content;
          component.onClose.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(treino) {
              var index = _this57.itensTreino.findIndex(function (u) {
                return u.id == treino.id;
              });

              if (index === -1) {
                _this57.itensTreino.push(treino);
              } else {
                _this57.itensTreino[index] = treino;
              }
            }
          });
        }
      }, {
        key: "deleteTreino",
        value: function deleteTreino(treino) {
          var _this58 = this;

          this.alertHelper.show('warning', "Tem certeza que deseja remover a treino #".concat(treino.id, "?"), {
            showCancelButton: true
          }).then(function (confirmed) {
            if (confirmed) {
              _this58.loading = true;

              _this58.treinoService["delete"](treino).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this58.unsubscribe$)).subscribe({
                next: function next(treino) {
                  _this58.loading = false;

                  _this58.alertHelper.toast('success', 'Treino deletado com sucesso.');

                  _this58.treinos = _this58.treinos.filter(function (d) {
                    return d.id != treino.id;
                  });
                },
                error: function error() {
                  _this58.loading = false;
                }
              });
            }
          });
        }
      }, {
        key: "deleteItemTreino",
        value: function deleteItemTreino(item) {
          var _this59 = this;

          this.alertHelper.show('warning', "Tem certeza que deseja remover o item ".concat(item.desc, "?"), {
            showCancelButton: true
          }).then(function (confirmed) {
            if (confirmed) {
              _this59.loading = true;

              _this59.treinoService.deleteItem(item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this59.unsubscribe$)).subscribe({
                next: function next(item) {
                  _this59.loading = false;

                  _this59.alertHelper.toast('success', 'Item deletado com sucesso.');

                  _this59.itensTreino = _this59.itensTreino.filter(function (it) {
                    return it.id != item.id;
                  });
                },
                error: function error() {
                  _this59.loading = false;
                }
              });
            }
          });
        }
      }, {
        key: "loadTreinos",
        value: function loadTreinos() {
          var _this60 = this;

          this.loading = true;
          this.treinoService.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(treinos) {
              _this60.loading = false;
              _this60.treinos = treinos;
            },
            error: function error() {
              _this60.loading = false;
            }
          });
        }
      }, {
        key: "loadItensTreinos",
        value: function loadItensTreinos() {
          var _this61 = this;

          this.loading = true;
          this.treinoService.findAllItems().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(treinos) {
              _this61.loading = false;
              _this61.itensTreino = treinos;
            },
            error: function error() {
              _this61.loading = false;
            }
          });
        }
      }, {
        key: "loadProgramas",
        value: function loadProgramas() {
          var _this62 = this;

          this.programaService.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe({
            next: function next(programas) {
              _this62.programas = programas;
            }
          });
        }
      }]);

      return TreinosComponent;
    }();

    TreinosComponent.ctorParameters = function () {
      return [{
        type: src_app_services_treino_service__WEBPACK_IMPORTED_MODULE_10__["TreinoService"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
      }, {
        type: src_app_services_programa_service__WEBPACK_IMPORTED_MODULE_8__["ProgramaService"]
      }, {
        type: src_app_services_refeicao_service__WEBPACK_IMPORTED_MODULE_7__["RefeicaoService"]
      }, {
        type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_9__["AlertHelper"]
      }];
    };

    TreinosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-treinos',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./treinos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/treinos/treinos.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./treinos.component.scss */
      "./src/app/pages/configuracoes/treinos/treinos.component.scss"))["default"]]
    })], TreinosComponent);
    /***/
  },

  /***/
  "./src/app/services/dieta.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/dieta.service.ts ***!
    \*******************************************/

  /*! exports provided: DietaService */

  /***/
  function srcAppServicesDietaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DietaService", function () {
      return DietaService;
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

    var DietaService = /*#__PURE__*/function () {
      function DietaService(http) {
        _classCallCheck(this, DietaService);

        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
      }

      _createClass(DietaService, [{
        key: "findAll",
        value: function findAll() {
          return this.http.get("".concat(this.apiUrl, "/dietas"));
        }
      }, {
        key: "create",
        value: function create(dieta) {
          return this.http.post("".concat(this.apiUrl, "/dietas"), dieta);
        }
      }, {
        key: "update",
        value: function update(dieta) {
          return this.http.put("".concat(this.apiUrl, "/dietas/").concat(dieta.id), dieta);
        }
      }, {
        key: "delete",
        value: function _delete(dieta) {
          return this.http["delete"]("".concat(this.apiUrl, "/dietas/").concat(dieta.id));
        }
      }, {
        key: "findAllItems",
        value: function findAllItems() {
          return this.http.get("".concat(this.apiUrl, "/itens-dietas"));
        }
      }, {
        key: "createItem",
        value: function createItem(item) {
          var formData = new FormData();
          formData.append('desc', item.desc);
          formData.append('file_img', item.file_img);
          return this.http.post("".concat(this.apiUrl, "/itens-dietas"), formData);
        }
      }, {
        key: "updateItem",
        value: function updateItem(item) {
          return this.http.put("".concat(this.apiUrl, "/itens-dietas/").concat(item.id), item);
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(item) {
          return this.http["delete"]("".concat(this.apiUrl, "/itens-dietas/").concat(item.id));
        }
      }, {
        key: "uploadImg",
        value: function uploadImg(itemId, fileImg) {
          var formData = new FormData();
          formData.append('id', itemId.toString());
          formData.append('file_img', fileImg);
          return this.http.post("".concat(this.apiUrl, "/itens-dietas/img"), formData);
        }
      }]);

      return DietaService;
    }();

    DietaService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    DietaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], DietaService);
    /***/
  },

  /***/
  "./src/app/services/doenca.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/doenca.service.ts ***!
    \********************************************/

  /*! exports provided: DoencaService */

  /***/
  function srcAppServicesDoencaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoencaService", function () {
      return DoencaService;
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

    var DoencaService = /*#__PURE__*/function () {
      function DoencaService(http) {
        _classCallCheck(this, DoencaService);

        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
      }

      _createClass(DoencaService, [{
        key: "findAll",
        value: function findAll() {
          return this.http.get("".concat(this.apiUrl, "/doencas"));
        }
      }, {
        key: "create",
        value: function create(doenca) {
          return this.http.post("".concat(this.apiUrl, "/doencas"), doenca);
        }
      }, {
        key: "update",
        value: function update(doenca) {
          return this.http.put("".concat(this.apiUrl, "/doencas/").concat(doenca.id), doenca);
        }
      }, {
        key: "delete",
        value: function _delete(doenca) {
          return this.http["delete"]("".concat(this.apiUrl, "/doencas/").concat(doenca.id));
        }
      }]);

      return DoencaService;
    }();

    DoencaService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    DoencaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], DoencaService);
    /***/
  },

  /***/
  "./src/app/services/frequencia-atividade.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/services/frequencia-atividade.service.ts ***!
    \**********************************************************/

  /*! exports provided: FrequenciaAtividadeService */

  /***/
  function srcAppServicesFrequenciaAtividadeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FrequenciaAtividadeService", function () {
      return FrequenciaAtividadeService;
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

    var FrequenciaAtividadeService = /*#__PURE__*/function () {
      function FrequenciaAtividadeService(http) {
        _classCallCheck(this, FrequenciaAtividadeService);

        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
      }

      _createClass(FrequenciaAtividadeService, [{
        key: "findAll",
        value: function findAll() {
          return this.http.get("".concat(this.apiUrl, "/frequencias-atividades"));
        }
      }, {
        key: "create",
        value: function create(frequenciaAtividade) {
          return this.http.post("".concat(this.apiUrl, "/frequencias-atividades"), frequenciaAtividade);
        }
      }, {
        key: "update",
        value: function update(frequenciaAtividade) {
          return this.http.put("".concat(this.apiUrl, "/frequencias-atividades/").concat(frequenciaAtividade.id), frequenciaAtividade);
        }
      }, {
        key: "delete",
        value: function _delete(frequenciaAtividade) {
          return this.http["delete"]("".concat(this.apiUrl, "/frequencias-atividades/").concat(frequenciaAtividade.id));
        }
      }]);

      return FrequenciaAtividadeService;
    }();

    FrequenciaAtividadeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    FrequenciaAtividadeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], FrequenciaAtividadeService);
    /***/
  },

  /***/
  "./src/app/services/grupo-exame.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/grupo-exame.service.ts ***!
    \*************************************************/

  /*! exports provided: GrupoExameService */

  /***/
  function srcAppServicesGrupoExameServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GrupoExameService", function () {
      return GrupoExameService;
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

    var GrupoExameService = /*#__PURE__*/function () {
      function GrupoExameService(http) {
        _classCallCheck(this, GrupoExameService);

        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
      }

      _createClass(GrupoExameService, [{
        key: "findAll",
        value: function findAll() {
          return this.http.get("".concat(this.apiUrl, "/grupos-exames"));
        }
      }, {
        key: "create",
        value: function create(grupoExame) {
          return this.http.post("".concat(this.apiUrl, "/grupos-exames"), grupoExame);
        }
      }, {
        key: "update",
        value: function update(grupoExame) {
          return this.http.put("".concat(this.apiUrl, "/grupos-exames/").concat(grupoExame.id), grupoExame);
        }
      }, {
        key: "delete",
        value: function _delete(grupoExame) {
          return this.http["delete"]("".concat(this.apiUrl, "/grupos-exames/").concat(grupoExame.id));
        }
      }]);

      return GrupoExameService;
    }();

    GrupoExameService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    GrupoExameService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], GrupoExameService);
    /***/
  },

  /***/
  "./src/app/services/imc.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/imc.service.ts ***!
    \*****************************************/

  /*! exports provided: IMCService */

  /***/
  function srcAppServicesImcServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IMCService", function () {
      return IMCService;
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

    var IMCService = /*#__PURE__*/function () {
      function IMCService(http) {
        _classCallCheck(this, IMCService);

        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
      }

      _createClass(IMCService, [{
        key: "findAll",
        value: function findAll() {
          return this.http.get("".concat(this.apiUrl, "/imc"));
        }
      }, {
        key: "create",
        value: function create(imc) {
          return this.http.post("".concat(this.apiUrl, "/imc"), imc);
        }
      }, {
        key: "update",
        value: function update(imc) {
          return this.http.put("".concat(this.apiUrl, "/imc/").concat(imc.id), imc);
        }
      }, {
        key: "delete",
        value: function _delete(imc) {
          return this.http["delete"]("".concat(this.apiUrl, "/imc/").concat(imc.id));
        }
      }]);

      return IMCService;
    }();

    IMCService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    IMCService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], IMCService);
    /***/
  },

  /***/
  "./src/app/services/meta.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/meta.service.ts ***!
    \******************************************/

  /*! exports provided: MetaService */

  /***/
  function srcAppServicesMetaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MetaService", function () {
      return MetaService;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var MetaService = /*#__PURE__*/function () {
      function MetaService(http) {
        _classCallCheck(this, MetaService);

        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
      }

      _createClass(MetaService, [{
        key: "findAll",
        value: function findAll() {
          return this.http.get("".concat(this.apiUrl, "/metas"));
        }
      }, {
        key: "create",
        value: function create(meta) {
          return this.http.post("".concat(this.apiUrl, "/metas"), meta);
        }
      }, {
        key: "update",
        value: function update(meta) {
          return this.http.put("".concat(this.apiUrl, "/metas/").concat(meta.id), meta);
        }
      }, {
        key: "delete",
        value: function _delete(meta) {
          return this.http["delete"]("".concat(this.apiUrl, "/metas/").concat(meta.id));
        }
      }]);

      return MetaService;
    }();

    MetaService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    MetaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MetaService);
    /***/
  },

  /***/
  "./src/app/services/programa.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/programa.service.ts ***!
    \**********************************************/

  /*! exports provided: ProgramaService */

  /***/
  function srcAppServicesProgramaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgramaService", function () {
      return ProgramaService;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ProgramaService = /*#__PURE__*/function () {
      function ProgramaService(http) {
        _classCallCheck(this, ProgramaService);

        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
      }

      _createClass(ProgramaService, [{
        key: "findAll",
        value: function findAll() {
          return this.http.get("".concat(this.apiUrl, "/programas"));
        }
      }, {
        key: "create",
        value: function create(programa) {
          return this.http.post("".concat(this.apiUrl, "/programas"), programa);
        }
      }, {
        key: "update",
        value: function update(programa) {
          return this.http.put("".concat(this.apiUrl, "/programas/").concat(programa.id), programa);
        }
      }, {
        key: "delete",
        value: function _delete(programa) {
          return this.http["delete"]("".concat(this.apiUrl, "/programas/").concat(programa.id));
        }
      }]);

      return ProgramaService;
    }();

    ProgramaService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ProgramaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProgramaService);
    /***/
  },

  /***/
  "./src/app/services/refeicao.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/refeicao.service.ts ***!
    \**********************************************/

  /*! exports provided: RefeicaoService */

  /***/
  function srcAppServicesRefeicaoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RefeicaoService", function () {
      return RefeicaoService;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var RefeicaoService = /*#__PURE__*/function () {
      function RefeicaoService(http) {
        _classCallCheck(this, RefeicaoService);

        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
      }

      _createClass(RefeicaoService, [{
        key: "findAll",
        value: function findAll() {
          return this.http.get("".concat(this.apiUrl, "/refeicoes"));
        }
      }, {
        key: "create",
        value: function create(refeicao) {
          return this.http.post("".concat(this.apiUrl, "/refeicoes"), refeicao);
        }
      }, {
        key: "update",
        value: function update(refeicao) {
          return this.http.put("".concat(this.apiUrl, "/refeicoes/").concat(refeicao.id), refeicao);
        }
      }, {
        key: "delete",
        value: function _delete(refeicao) {
          return this.http["delete"]("".concat(this.apiUrl, "/refeicoes/").concat(refeicao.id));
        }
      }]);

      return RefeicaoService;
    }();

    RefeicaoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    RefeicaoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RefeicaoService);
    /***/
  },

  /***/
  "./src/app/services/treino.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/treino.service.ts ***!
    \********************************************/

  /*! exports provided: TreinoService */

  /***/
  function srcAppServicesTreinoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreinoService", function () {
      return TreinoService;
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

    var TreinoService = /*#__PURE__*/function () {
      function TreinoService(http) {
        _classCallCheck(this, TreinoService);

        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
      }

      _createClass(TreinoService, [{
        key: "findAll",
        value: function findAll() {
          return this.http.get("".concat(this.apiUrl, "/treinos"));
        }
      }, {
        key: "create",
        value: function create(treino) {
          return this.http.post("".concat(this.apiUrl, "/treinos"), treino);
        }
      }, {
        key: "update",
        value: function update(treino) {
          return this.http.put("".concat(this.apiUrl, "/treinos/").concat(treino.id), treino);
        }
      }, {
        key: "delete",
        value: function _delete(treino) {
          return this.http["delete"]("".concat(this.apiUrl, "/treinos/").concat(treino.id));
        }
      }, {
        key: "findAllItems",
        value: function findAllItems() {
          return this.http.get("".concat(this.apiUrl, "/itens-treinos"));
        }
      }, {
        key: "createItem",
        value: function createItem(item) {
          var formData = new FormData();
          formData.append('desc', item.desc);
          formData.append('file_img', item.file_img);
          formData.append('metodologia', item.metodologia);
          formData.append('intervalo', item.intervalo);
          return this.http.post("".concat(this.apiUrl, "/itens-treinos"), formData);
        }
      }, {
        key: "updateItem",
        value: function updateItem(item) {
          return this.http.put("".concat(this.apiUrl, "/itens-treinos/").concat(item.id), item);
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(item) {
          return this.http["delete"]("".concat(this.apiUrl, "/itens-treinos/").concat(item.id));
        }
      }, {
        key: "uploadImg",
        value: function uploadImg(itemId, fileImg) {
          var formData = new FormData();
          formData.append('id', itemId.toString());
          formData.append('file_img', fileImg);
          return this.http.post("".concat(this.apiUrl, "/itens-treinos/img"), formData);
        }
      }]);

      return TreinoService;
    }();

    TreinoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    TreinoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], TreinoService);
    /***/
  }
}]);
//# sourceMappingURL=pages-configuracoes-configuracoes-module-es5.js.map