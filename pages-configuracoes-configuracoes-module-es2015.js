(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-configuracoes-configuracoes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/dietas/dieta-form/dieta-form.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/dietas/dieta-form/dieta-form.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Dieta</h4>\n  <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"close()\">\n    <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form id=\"doencaForm\" (ngSubmit)=\"submit()\">\n    <div class=\"form-group\">\n      <label for=\"programaId\">Programa *</label>\n      <ng-select [formControl]=\"programaId\" [class.is-invalid]=\"isInvalid && programaId.invalid\" id=\"programaId\">\n        <ng-option [value]=\"programa.id\" *ngFor=\"let programa of programas\">{{ programa.desc }}</ng-option>\n      </ng-select>\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && programaId.errors?.required\">\n        Programa é obrigatório.\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"refeicaoId\">Refeição *</label>\n      <ng-select [formControl]=\"refeicaoId\" [class.is-invalid]=\"isInvalid && refeicaoId.invalid\" id=\"refeicaoId\">\n        <ng-option [value]=\"refeicao.id\" *ngFor=\"let refeicao of refeicoes\">{{ refeicao.desc }}</ng-option>\n      </ng-select>\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && refeicaoId.errors?.required\">\n        Refeição é obrigatória.\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"itemId\">Item *</label>\n      <ng-select [formControl]=\"itemId\" [class.is-invalid]=\"isInvalid && itemId.invalid\" id=\"itemId\">\n        <ng-option [value]=\"item.id\" *ngFor=\"let item of itens\">{{ item.desc }}</ng-option>\n      </ng-select>\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && itemId.errors?.required\">\n        Item é obrigatório.\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"mes\">Dia *</label>\n      <ng-select [formControl]=\"dia\" [class.is-invalid]=\"isInvalid && mes.invalid\" id=\"dia\">\n        <ng-option [value]=\"i+1\" *ngFor=\"let dia of dias; let i=index\">{{ dia }}</ng-option>\n      </ng-select>\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && dia.errors?.required\">\n        Dia é obrigatório.\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"mes\">Mês *</label>\n      <ng-select [formControl]=\"mes\" [class.is-invalid]=\"isInvalid && mes.invalid\" id=\"mes\">\n        <ng-option [value]=\"i+1\" *ngFor=\"let mes of meses; let i=index\">{{ mes }}</ng-option>\n      </ng-select>\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && mes.errors?.required\">\n        Mês é obrigatório.\n      </div>\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <app-button type=\"reset\" form=\"doencaForm\" color=\"light\" (click)=\"close()\">Cancelar</app-button>\n  <app-button type=\"submit\" form=\"doencaForm\" [loading]=\"loading\">Salvar</app-button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/dietas/dietas.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/dietas/dietas.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-lg-12\">\r\n    <app-card bodyClass=\"p-0\" [header]=\"false\">\r\n      <div class=\"iq-edit-list\" body>\r\n        <ul class=\"iq-edit-profile d-flex nav nav-pills\">\r\n          <li class=\"col-md-6 p-0\">\r\n            <a class=\"nav-link active\" data-toggle=\"pill\" href=\"#dietas\">\r\n              Dietas\r\n            </a>\r\n          </li>\r\n          <li class=\"col-md-6 p-0\">\r\n            <a class=\"nav-link\" data-toggle=\"pill\" href=\"#itens-dieta\">\r\n              Itens\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-lg-12\">\r\n    <div class=\"iq-edit-list-data\">\r\n      <div class=\"tab-content\">\r\n        <div class=\"tab-pane fade active show\" id=\"dietas\" role=\"tabpanel\">\r\n          <app-card [backdrop]=\"true\" [loading]=\"loading\">\r\n            <div class=\"d-flex justify-content-between align-items-center\" header>\r\n              <h4>Dietas</h4>\r\n              <app-button rounded=\"pill\" (click)=\"openDietaForm()\">\r\n                <i class=\"ri-add-line mr-1\"></i>\r\n                Nova Dieta\r\n              </app-button>\r\n            </div>\r\n            <div body>\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-striped table-borderless\">\r\n                  <thead>\r\n                        <tr>\r\n                            <th scope=\"col\">#</th>\r\n                            <th scope=\"col\" class=\"text-center\">Mês</th>\r\n                            <th scope=\"col\" class=\"text-center\">Dia</th>\r\n                            <th scope=\"col\">Programa</th>\r\n                            <th scope=\"col\">Refeição</th>\r\n                            <th scope=\"col\">Item</th>\r\n                        </tr>\r\n                    </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let dieta of dietas\">\r\n                      <td class=\"align-middle\">{{ dieta.id }}</td>\r\n                      <td class=\"align-middle text-center\">{{ dieta.mes }}</td>\r\n                      <td class=\"align-middle text-center\">{{ dieta.dia }}</td>\r\n                      <td class=\"align-middle\">{{ dieta.programa.desc }}</td>\r\n                      <td class=\"align-middle\">{{ dieta.refeicao.desc }}</td>\r\n                      <td class=\"align-middle\">{{ dieta.item.desc }}</td>\r\n                      <td class=\"d-flex flex-nowrap align-items-center justify-content-end\">\r\n                        <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"openDietaForm(dieta)\">\r\n                          <i class=\"ri-edit-box-line\"></i>\r\n                        </app-button>\r\n                        <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"deleteDieta(dieta)\">\r\n                          <i class=\"ri-delete-bin-line\"></i>\r\n                        </app-button>\r\n                      </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"dietas?.length == 0\">\r\n                      <td colspan=\"6\" class=\"text-center\">Nenhuma dieta encontrada</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </app-card>\r\n        </div>\r\n        <div class=\"tab-pane fade\" id=\"itens-dieta\" role=\"tabpanel\">\r\n          <app-card [backdrop]=\"true\" [loading]=\"loading\">\r\n            <div class=\"d-flex justify-content-between align-items-center\" header>\r\n              <h4>Itens</h4>\r\n              <app-button rounded=\"pill\" (click)=\"openItemDietaForm()\">\r\n                <i class=\"ri-add-line mr-1\"></i>\r\n                Novo Item\r\n              </app-button>\r\n            </div>\r\n            <div body>\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-striped table-borderless\">\r\n                  <thead>\r\n                        <tr>\r\n                            <th scope=\"col\">#</th>\r\n                            <th scope=\"col\">Imagem</th>\r\n                            <th scope=\"col\">Descrição</th>\r\n                        </tr>\r\n                    </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let item of itensDieta\">\r\n                      <td class=\"align-middle\">{{ item.id }}</td>\r\n                      <td class=\"align-middle\">\r\n                        <img class=\"rounded\" [src]=\"item.url_img\" height=\"80px\" />\r\n                      </td>\r\n                      <td class=\"align-middle\">{{ item.desc }}</td>\r\n                      <td class=\"align-middle\">\r\n                        <div class=\"d-flex flex-nowrap align-items-center justify-content-end\">\r\n                          <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"openItemDietaForm(item)\">\r\n                            <i class=\"ri-edit-box-line\"></i>\r\n                          </app-button>\r\n                          <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"deleteItemDieta(item)\">\r\n                            <i class=\"ri-delete-bin-line\"></i>\r\n                          </app-button>\r\n                        </div>\r\n                      </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"itensDieta?.length == 0\">\r\n                      <td colspan=\"6\" class=\"text-center\">Nenhum item encontrado</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </app-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/dietas/item-dieta-form/item-dieta-form.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/dietas/item-dieta-form/item-dieta-form.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">Item Dieta</h4>\r\n  <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form id=\"doencaForm\" (ngSubmit)=\"submit()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"desc\">Descrição *</label>\r\n      <input\r\n        type=\"text\"\r\n        id=\"desc\"\r\n        class=\"form-control\"\r\n        [class.is-invalid]=\"isInvalid && desc.invalid\"\r\n        [formControl]=\"desc\" />\r\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && desc.errors?.required\">\r\n        Descrição é obrigatório.\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"validatedCustomFile\">Imagem</label>\r\n      <div class=\"custom-file\">\r\n        <input\r\n          type=\"file\"\r\n          class=\"custom-file-input\"\r\n          id=\"validatedCustomFile\"\r\n          accept=\"image/*\"\r\n          (change)=\"imageChanged($event)\">\r\n        <label\r\n          class=\"custom-file-label\"\r\n          for=\"validatedCustomFile\"\r\n          [class.is-invalid]=\"isInvalid && !urlImg\">\r\n          Escolha uma imagem...\r\n        </label>\r\n        <div class=\"invalid-feedback\" *ngIf=\"isInvalid && !urlImg\">\r\n          Imagem é obrigatória.\r\n        </div>\r\n      </div>\r\n      <img [src]=\"urlImg\" class=\"img-thumbnail\" *ngIf=\"urlImg\">\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <app-button type=\"reset\" form=\"doencaForm\" color=\"light\" (click)=\"close()\">Cancelar</app-button>\r\n  <app-button type=\"submit\" form=\"doencaForm\" [loading]=\"loading\">Salvar</app-button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/doencas/doenca-form/doenca-form.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/doencas/doenca-form/doenca-form.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">Doença</h4>\r\n  <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form id=\"doencaForm\" (ngSubmit)=\"submit()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"desc\">Descrição *</label>\r\n      <input\r\n        type=\"text\"\r\n        id=\"desc\"\r\n        class=\"form-control\"\r\n        [class.is-invalid]=\"isInvalid && desc.invalid\"\r\n        [formControl]=\"desc\" />\r\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && desc.errors?.required\">\r\n        Descrição é obrigatório.\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <app-button type=\"reset\" form=\"doencaForm\" color=\"light\" (click)=\"close()\">Cancelar</app-button>\r\n  <app-button type=\"submit\" form=\"doencaForm\" [loading]=\"loading\">Salvar</app-button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/doencas/doencas.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/doencas/doencas.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [backdrop]=\"true\" [loading]=\"loading\">\r\n      <div class=\"d-flex justify-content-between align-items-center\" header>\r\n        <h4>Doenças</h4>\r\n        <app-button rounded=\"pill\" (click)=\"openDoencaForm()\">\r\n          <i class=\"ri-add-line mr-1\"></i>\r\n          Nova Doença\r\n        </app-button>\r\n      </div>\r\n      <div body>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped table-borderless\">\r\n            <thead>\r\n                  <tr>\r\n                      <th scope=\"col\">#</th>\r\n                      <th scope=\"col\">Descrição</th>\r\n                      <th scope=\"col\"></th>\r\n                  </tr>\r\n              </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let doenca of doencas\">\r\n                <td class=\"align-middle\">{{ doenca.id }}</td>\r\n                <td class=\"align-middle\">{{ doenca.desc }}</td>\r\n                <td class=\"d-flex flex-nowrap align-items-center justify-content-end\">\r\n                  <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"openDoencaForm(doenca)\">\r\n                    <i class=\"ri-edit-box-line\"></i>\r\n                  </app-button>\r\n                  <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"deleteDoenca(doenca)\">\r\n                    <i class=\"ri-delete-bin-line\"></i>\r\n                  </app-button>\r\n                </td>\r\n              </tr>\r\n              <tr *ngIf=\"doencas?.length == 0\">\r\n                <td colspan=\"6\" class=\"text-center\">Nenhuma doença encontrada</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/frequencias-de-atividades/frequencia-form/frequencia-form.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/frequencias-de-atividades/frequencia-form/frequencia-form.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">Frequência de Atividade</h4>\r\n  <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form id=\"freqAtivForm\" (ngSubmit)=\"submit()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"desc\">Descrição *</label>\r\n      <input\r\n        type=\"text\"\r\n        id=\"desc\"\r\n        class=\"form-control\"\r\n        [class.is-invalid]=\"isInvalid && desc.invalid\"\r\n        [formControl]=\"desc\" />\r\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && desc.errors?.required\">\r\n        Descrição é obrigatório.\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <app-button type=\"reset\" form=\"freqAtivForm\" color=\"light\" (click)=\"close()\">Cancelar</app-button>\r\n  <app-button type=\"submit\" form=\"freqAtivForm\" [loading]=\"loading\">Salvar</app-button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/frequencias-de-atividades/frequencias-de-atividades.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/frequencias-de-atividades/frequencias-de-atividades.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [backdrop]=\"true\" [loading]=\"loading\">\r\n      <div class=\"d-flex justify-content-between align-items-center\" header>\r\n        <h4>Frequências de Atividades</h4>\r\n        <app-button rounded=\"pill\" (click)=\"openFrequenciaForm()\">\r\n          <i class=\"ri-add-line mr-1\"></i>\r\n          Nova Frequência\r\n        </app-button>\r\n      </div>\r\n      <div body>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped table-borderless\">\r\n            <thead>\r\n                  <tr>\r\n                      <th scope=\"col\">#</th>\r\n                      <th scope=\"col\">Descrição</th>\r\n                      <th scope=\"col\"></th>\r\n                  </tr>\r\n              </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let freqAtiv of frequenciasAtividades\">\r\n                <td class=\"align-middle\">{{ freqAtiv.id }}</td>\r\n                <td class=\"align-middle\">{{ freqAtiv.desc }}</td>\r\n                <td class=\"d-flex flex-nowrap align-items-center justify-content-end\">\r\n                  <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"openFrequenciaForm(freqAtiv)\">\r\n                    <i class=\"ri-edit-box-line\"></i>\r\n                  </app-button>\r\n                  <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"deleteFrequenciaAtividade(freqAtiv)\">\r\n                    <i class=\"ri-delete-bin-line\"></i>\r\n                  </app-button>\r\n                </td>\r\n              </tr>\r\n              <tr *ngIf=\"frequenciasAtividades?.length == 0\">\r\n                <td colspan=\"6\" class=\"text-center\">Nenhum frequência de atividade encontrada</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/grupos-de-exames/grupo-form/grupo-form.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/grupos-de-exames/grupo-form/grupo-form.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">Grupo de Exame</h4>\r\n  <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form id=\"grupoExameForm\" (ngSubmit)=\"submit()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"desc\">Descrição *</label>\r\n      <input\r\n        type=\"text\"\r\n        id=\"desc\"\r\n        class=\"form-control\"\r\n        [class.is-invalid]=\"isInvalid && desc.invalid\"\r\n        [formControl]=\"desc\" />\r\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && desc.errors?.required\">\r\n        Descrição é obrigatório.\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <app-button type=\"reset\" form=\"grupoExameForm\" color=\"light\" (click)=\"close()\">Cancelar</app-button>\r\n  <app-button type=\"submit\" form=\"grupoExameForm\" [loading]=\"loading\">Salvar</app-button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/grupos-de-exames/grupos-de-exames.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/grupos-de-exames/grupos-de-exames.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [backdrop]=\"true\" [loading]=\"loading\">\r\n      <div class=\"d-flex justify-content-between align-items-center\" header>\r\n        <h4>Grupos de Exames</h4>\r\n        <app-button rounded=\"pill\" (click)=\"openGrupoForm()\">\r\n          <i class=\"ri-add-line mr-1\"></i>\r\n          Novo Grupo\r\n        </app-button>\r\n      </div>\r\n      <div body>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped table-borderless\">\r\n            <thead>\r\n                  <tr>\r\n                      <th scope=\"col\">#</th>\r\n                      <th scope=\"col\">Descrição</th>\r\n                      <th scope=\"col\"></th>\r\n                  </tr>\r\n              </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let grupoExame of gruposExames\">\r\n                <td class=\"align-middle\">{{ grupoExame.id }}</td>\r\n                <td class=\"align-middle\">{{ grupoExame.desc }}</td>\r\n                <td class=\"d-flex flex-nowrap align-items-center justify-content-end\">\r\n                  <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"openGrupoForm(grupoExame)\">\r\n                    <i class=\"ri-edit-box-line\"></i>\r\n                  </app-button>\r\n                  <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"deleteGrupoExame(grupoExame)\">\r\n                    <i class=\"ri-delete-bin-line\"></i>\r\n                  </app-button>\r\n                </td>\r\n              </tr>\r\n              <tr *ngIf=\"gruposExames?.length == 0\">\r\n                <td colspan=\"6\" class=\"text-center\">Nenhum grupo de exame encontrado</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/imc/imc-form/imc-form.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/imc/imc-form/imc-form.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">IMC</h4>\r\n  <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form id=\"imcForm\" (ngSubmit)=\"submit()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"tipo\">Tipo *</label>\r\n      <input\r\n        type=\"text\"\r\n        id=\"tipo\"\r\n        class=\"form-control\"\r\n        [class.is-invalid]=\"isInvalid && tipo.invalid\"\r\n        [formControl]=\"tipo\" />\r\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && tipo.errors?.required\">\r\n        Tipo é obrigatório.\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <app-button type=\"reset\" form=\"imcForm\" color=\"light\" (click)=\"close()\">Cancelar</app-button>\r\n  <app-button type=\"submit\" form=\"imcForm\" [loading]=\"loading\">Salvar</app-button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/imc/imc.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/imc/imc.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [backdrop]=\"true\" [loading]=\"loading\">\r\n      <div class=\"d-flex justify-content-between align-items-center\" header>\r\n        <h4>IMC</h4>\r\n        <app-button rounded=\"pill\" (click)=\"openImcForm()\">\r\n          <i class=\"ri-add-line mr-1\"></i>\r\n          Novo IMC\r\n        </app-button>\r\n      </div>\r\n      <div body>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped table-borderless\">\r\n            <thead>\r\n                  <tr>\r\n                      <th scope=\"col\">#</th>\r\n                      <th scope=\"col\">Tipo</th>\r\n                      <th scope=\"col\"></th>\r\n                  </tr>\r\n              </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let imc of imcArr\">\r\n                <td class=\"align-middle\">{{ imc.id }}</td>\r\n                <td class=\"align-middle\">{{ imc.tipo }}</td>\r\n                <td class=\"d-flex flex-nowrap align-items-center justify-content-end\">\r\n                  <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"openImcForm(imc)\">\r\n                    <i class=\"ri-edit-box-line\"></i>\r\n                  </app-button>\r\n                  <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"deleteImc(imc)\">\r\n                    <i class=\"ri-delete-bin-line\"></i>\r\n                  </app-button>\r\n                </td>\r\n              </tr>\r\n              <tr *ngIf=\"imcArr?.length == 0\">\r\n                <td colspan=\"6\" class=\"text-center\">Nenhum IMC encontrado</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/metas/meta-form/meta-form.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/metas/meta-form/meta-form.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">Meta</h4>\r\n  <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form id=\"metaForm\" (ngSubmit)=\"submit()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"desc\">Descrição *</label>\r\n      <input\r\n        type=\"text\"\r\n        id=\"desc\"\r\n        class=\"form-control\"\r\n        [class.is-invalid]=\"isInvalid && desc.invalid\"\r\n        [formControl]=\"desc\" />\r\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && desc.errors?.required\">\r\n        Descrição é obrigatório.\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <app-button type=\"reset\" form=\"metaForm\" color=\"light\" (click)=\"close()\">Cancelar</app-button>\r\n  <app-button type=\"submit\" form=\"metaForm\" [loading]=\"loading\">Salvar</app-button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/metas/metas.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/metas/metas.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [backdrop]=\"true\" [loading]=\"loading\">\r\n      <div class=\"d-flex justify-content-between align-items-center\" header>\r\n        <h4>Metas</h4>\r\n        <app-button rounded=\"pill\" (click)=\"openMetaForm()\">\r\n          <i class=\"ri-add-line mr-1\"></i>\r\n          Nova Meta\r\n        </app-button>\r\n      </div>\r\n      <div body>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped table-borderless\">\r\n            <thead>\r\n                  <tr>\r\n                      <th scope=\"col\">#</th>\r\n                      <th scope=\"col\">Descrição</th>\r\n                      <th scope=\"col\"></th>\r\n                  </tr>\r\n              </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let meta of metas\">\r\n                <td class=\"align-middle\">{{ meta.id }}</td>\r\n                <td class=\"align-middle\">{{ meta.desc }}</td>\r\n                <td class=\"d-flex flex-nowrap align-items-center justify-content-end\">\r\n                  <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"openMetaForm(meta)\">\r\n                    <i class=\"ri-edit-box-line\"></i>\r\n                  </app-button>\r\n                  <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"deleteMeta(meta)\">\r\n                    <i class=\"ri-delete-bin-line\"></i>\r\n                  </app-button>\r\n                </td>\r\n              </tr>\r\n              <tr *ngIf=\"metas?.length == 0\">\r\n                <td colspan=\"6\" class=\"text-center\">Nenhum meta encontrada</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/programas/programa-form/programa-form.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/programas/programa-form/programa-form.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">Programa</h4>\r\n  <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form id=\"programaForm\" (ngSubmit)=\"submit()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"desc\">Descrição *</label>\r\n      <input\r\n        type=\"text\"\r\n        id=\"desc\"\r\n        class=\"form-control\"\r\n        [class.is-invalid]=\"isInvalid && desc.invalid\"\r\n        [formControl]=\"desc\" />\r\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && desc.errors?.required\">\r\n        Descrição é obrigatório.\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <app-button type=\"reset\" form=\"programaForm\" color=\"light\" (click)=\"close()\">Cancelar</app-button>\r\n  <app-button type=\"submit\" form=\"programaForm\" [loading]=\"loading\">Salvar</app-button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/programas/programas.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/programas/programas.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [backdrop]=\"true\" [loading]=\"loading\">\r\n      <div class=\"d-flex justify-content-between align-items-center\" header>\r\n        <h4>Programas</h4>\r\n        <app-button rounded=\"pill\" (click)=\"openProgramaForm()\">\r\n          <i class=\"ri-add-line mr-1\"></i>\r\n          Novo Programa\r\n        </app-button>\r\n      </div>\r\n      <div body>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped table-borderless\">\r\n            <thead>\r\n                  <tr>\r\n                      <th scope=\"col\">#</th>\r\n                      <th scope=\"col\">Descrição</th>\r\n                      <th scope=\"col\"></th>\r\n                  </tr>\r\n              </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let programa of programas\">\r\n                <td class=\"align-middle\">{{ programa.id }}</td>\r\n                <td class=\"align-middle\">{{ programa.desc }}</td>\r\n                <td class=\"d-flex flex-nowrap align-items-center justify-content-end\">\r\n                  <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"openProgramaForm(programa)\">\r\n                    <i class=\"ri-edit-box-line\"></i>\r\n                  </app-button>\r\n                  <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"deletePrograma(programa)\">\r\n                    <i class=\"ri-delete-bin-line\"></i>\r\n                  </app-button>\r\n                </td>\r\n              </tr>\r\n              <tr *ngIf=\"programas?.length == 0\">\r\n                <td colspan=\"6\" class=\"text-center\">Nenhum programa encontrada</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/refeicoes/refeicao-form/refeicao-form.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/refeicoes/refeicao-form/refeicao-form.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">Refeição</h4>\r\n  <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form id=\"refeicaoForm\" (ngSubmit)=\"submit()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"desc\">Descrição *</label>\r\n      <input\r\n        type=\"text\"\r\n        id=\"desc\"\r\n        class=\"form-control\"\r\n        [class.is-invalid]=\"isInvalid && desc.invalid\"\r\n        [formControl]=\"desc\" />\r\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && desc.errors?.required\">\r\n        Descrição é obrigatório.\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <app-button type=\"reset\" form=\"refeicaoForm\" color=\"light\" (click)=\"close()\">Cancelar</app-button>\r\n  <app-button type=\"submit\" form=\"refeicaoForm\" [loading]=\"loading\">Salvar</app-button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/refeicoes/refeicoes.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/refeicoes/refeicoes.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [backdrop]=\"true\" [loading]=\"loading\">\r\n      <div class=\"d-flex justify-content-between align-items-center\" header>\r\n        <h4>Refeições</h4>\r\n        <app-button rounded=\"pill\" (click)=\"openRefeicaoForm()\">\r\n          <i class=\"ri-add-line mr-1\"></i>\r\n          Nova Refeição\r\n        </app-button>\r\n      </div>\r\n      <div body>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped table-borderless\">\r\n            <thead>\r\n                  <tr>\r\n                      <th scope=\"col\">#</th>\r\n                      <th scope=\"col\">Descrição</th>\r\n                      <th scope=\"col\"></th>\r\n                  </tr>\r\n              </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let refeicao of refeicoes\">\r\n                <td class=\"align-middle\">{{ refeicao.id }}</td>\r\n                <td class=\"align-middle\">{{ refeicao.desc }}</td>\r\n                <td class=\"d-flex flex-nowrap align-items-center justify-content-end\">\r\n                  <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"openRefeicaoForm(refeicao)\">\r\n                    <i class=\"ri-edit-box-line\"></i>\r\n                  </app-button>\r\n                  <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"deleteRefeicao(refeicao)\">\r\n                    <i class=\"ri-delete-bin-line\"></i>\r\n                  </app-button>\r\n                </td>\r\n              </tr>\r\n              <tr *ngIf=\"refeicoes?.length == 0\">\r\n                <td colspan=\"6\" class=\"text-center\">Nenhuma refeição encontrada</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/treinos/item-treino-form/item-treino-form.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/treinos/item-treino-form/item-treino-form.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Item Treino</h4>\n  <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"close()\">\n    <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form id=\"doencaForm\" (ngSubmit)=\"submit()\">\n    <div class=\"form-group\">\n      <label for=\"desc\">Descrição *</label>\n      <input\n        type=\"text\"\n        id=\"desc\"\n        class=\"form-control\"\n        [class.is-invalid]=\"isInvalid && desc.invalid\"\n        [formControl]=\"desc\" />\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && desc.errors?.required\">\n        Descrição é obrigatório.\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"desc\">Metodologia</label>\n      <input\n        type=\"text\"\n        id=\"metodologia\"\n        class=\"form-control\"\n        [formControl]=\"metodologia\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"desc\">Intervalo</label>\n      <input\n        type=\"text\"\n        id=\"intervalo\"\n        class=\"form-control\"\n        [formControl]=\"intervalo\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"validatedCustomFile\">Imagem</label>\n      <div class=\"custom-file\">\n        <input\n          type=\"file\"\n          class=\"custom-file-input\"\n          id=\"validatedCustomFile\"\n          accept=\"image/*\"\n          (change)=\"imageChanged($event)\">\n        <label\n          class=\"custom-file-label\"\n          for=\"validatedCustomFile\"\n          [class.is-invalid]=\"isInvalid && !urlImg\">\n          Escolha uma imagem...\n        </label>\n        <div class=\"invalid-feedback\" *ngIf=\"isInvalid && !urlImg\">\n          Imagem é obrigatória.\n        </div>\n      </div>\n      <img [src]=\"urlImg\" class=\"img-thumbnail\" *ngIf=\"urlImg\">\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <app-button type=\"reset\" form=\"doencaForm\" color=\"light\" (click)=\"close()\">Cancelar</app-button>\n  <app-button type=\"submit\" form=\"doencaForm\" [loading]=\"loading\">Salvar</app-button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/treinos/treino-form/treino-form.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/treinos/treino-form/treino-form.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Treino</h4>\n  <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"close()\">\n    <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form id=\"doencaForm\" (ngSubmit)=\"submit()\">\n    <div class=\"form-group\">\n      <label for=\"programaId\">Programa *</label>\n      <ng-select [formControl]=\"programaId\" [class.is-invalid]=\"isInvalid && programaId.invalid\" id=\"programaId\">\n        <ng-option [value]=\"programa.id\" *ngFor=\"let programa of programas\">{{ programa.desc }}</ng-option>\n      </ng-select>\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && programaId.errors?.required\">\n        Programa é obrigatório.\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"itemId\">Item *</label>\n      <ng-select [formControl]=\"itemId\" [class.is-invalid]=\"isInvalid && itemId.invalid\" id=\"itemId\">\n        <ng-option [value]=\"item.id\" *ngFor=\"let item of itens\">{{ item.desc }}</ng-option>\n      </ng-select>\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && itemId.errors?.required\">\n        Item é obrigatório.\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"dia\">Dia *</label>\n      <ng-select [formControl]=\"dia\" [class.is-invalid]=\"isInvalid && itemId.invalid\" id=\"itemId\">\n        <ng-option [value]=\"dia.id\" *ngFor=\"let dia of dias\">{{ dia.nome }}</ng-option>\n      </ng-select>\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && dia.errors?.required\">\n        Item é obrigatório.\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"mes\">Mês *</label>\n      <ng-select [formControl]=\"mes\" [class.is-invalid]=\"isInvalid && mes.invalid\" id=\"mes\">\n        <ng-option [value]=\"i+1\" *ngFor=\"let mes of meses; let i=index\">{{ mes }}</ng-option>\n      </ng-select>\n      <div class=\"invalid-feedback\" *ngIf=\"isInvalid && mes.errors?.required\">\n        Mês é obrigatório.\n      </div>\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <app-button type=\"reset\" form=\"doencaForm\" color=\"light\" (click)=\"close()\">Cancelar</app-button>\n  <app-button type=\"submit\" form=\"doencaForm\" [loading]=\"loading\">Salvar</app-button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/treinos/treinos.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/treinos/treinos.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <app-card bodyClass=\"p-0\" [header]=\"false\">\n      <div class=\"iq-edit-list\" body>\n        <ul class=\"iq-edit-profile d-flex nav nav-pills\">\n          <li class=\"col-md-6 p-0\">\n            <a class=\"nav-link active\" data-toggle=\"pill\" href=\"#treinos\">\n              Treinos\n            </a>\n          </li>\n          <li class=\"col-md-6 p-0\">\n            <a class=\"nav-link\" data-toggle=\"pill\" href=\"#itens-treino\">\n              Itens\n            </a>\n          </li>\n        </ul>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-lg-12\">\n    <div class=\"iq-edit-list-data\">\n      <div class=\"tab-content\">\n        <div class=\"tab-pane fade active show\" id=\"treinos\" role=\"tabpanel\">\n          <app-card [backdrop]=\"true\" [loading]=\"loading\">\n            <div class=\"d-flex justify-content-between align-items-center\" header>\n              <h4>Treinos</h4>\n              <app-button rounded=\"pill\" (click)=\"openTreinoForm()\">\n                <i class=\"ri-add-line mr-1\"></i>\n                Nova Treino\n              </app-button>\n            </div>\n            <div body>\n              <div class=\"table-responsive\">\n                <table class=\"table table-striped table-borderless\">\n                  <thead>\n                        <tr>\n                            <th scope=\"col\">#</th>\n                            <th scope=\"col\" class=\"text-center\">Mês</th>\n                            <th scope=\"col\" class=\"text-center\">Dia</th>\n                            <th scope=\"col\">Programa</th>\n                            <th scope=\"col\">Item</th>\n                        </tr>\n                    </thead>\n                  <tbody>\n                    <tr *ngFor=\"let treino of treinos\">\n                      <td class=\"align-middle\">{{ treino.id }}</td>\n                      <td class=\"align-middle text-center\">{{ treino.mes }}</td>\n                      <ng-container *ngIf=\"treino.dia === 1\">\n                        <td class=\"align-middle text-center\">Domingo</td>\n                      </ng-container>\n                      <ng-container *ngIf=\"treino.dia === 2\">\n                        <td class=\"align-middle text-center\">Segunda</td>\n                      </ng-container>\n                      <ng-container *ngIf=\"treino.dia === 3\">\n                        <td class=\"align-middle text-center\">Terça</td>\n                      </ng-container>\n                      <ng-container *ngIf=\"treino.dia === 4\">\n                        <td class=\"align-middle text-center\">Quarta</td>\n                      </ng-container>\n                      <ng-container *ngIf=\"treino.dia === 5\">\n                        <td class=\"align-middle text-center\">Quinta</td>\n                      </ng-container>\n                      <ng-container *ngIf=\"treino.dia === 6\">\n                        <td class=\"align-middle text-center\">Sexta</td>\n                      </ng-container>\n                      <ng-container *ngIf=\"treino.dia === 7\">\n                        <td class=\"align-middle text-center\">Sábado</td>\n                      </ng-container>\n\n                      <td class=\"align-middle\">{{ treino.programa.desc }}</td>\n                      <td class=\"align-middle\">{{ treino.item.desc }}</td>\n                      <td class=\"d-flex flex-nowrap align-items-center justify-content-end\">\n                        <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"openTreinoForm(treino)\">\n                          <i class=\"ri-edit-box-line\"></i>\n                        </app-button>\n                        <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"deleteTreino(treino)\">\n                          <i class=\"ri-delete-bin-line\"></i>\n                        </app-button>\n                      </td>\n                    </tr>\n                    <tr *ngIf=\"treinos?.length == 0\">\n                      <td colspan=\"6\" class=\"text-center\">Nenhuma treino encontrada</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </app-card>\n        </div>\n        <div class=\"tab-pane fade\" id=\"itens-treino\" role=\"tabpanel\">\n          <app-card [backdrop]=\"true\" [loading]=\"loading\">\n            <div class=\"d-flex justify-content-between align-items-center\" header>\n              <h4>Itens</h4>\n              <app-button rounded=\"pill\" (click)=\"openItemTreinoForm()\">\n                <i class=\"ri-add-line mr-1\"></i>\n                Novo Item\n              </app-button>\n            </div>\n            <div body>\n              <div class=\"table-responsive\">\n                <table class=\"table table-striped table-borderless\">\n                  <thead>\n                        <tr>\n                            <th scope=\"col\">#</th>\n                            <th scope=\"col\">Imagem</th>\n                            <th scope=\"col\">Descrição</th>\n                            <th scope=\"col\">Metodologia</th>\n                            <th scope=\"col\">Intervalo</th>\n                        </tr>\n                    </thead>\n                  <tbody>\n                    <tr *ngFor=\"let item of itensTreino\">\n                      <td class=\"align-middle\">{{ item.id }}</td>\n                      <td class=\"align-middle\">\n                        <img class=\"rounded\" [src]=\"item.url_img\" height=\"80px\" />\n                      </td>\n                      <td class=\"align-middle\">{{ item.desc }}</td>\n                      <td class=\"align-middle\">{{ item.metodologia }}</td>\n                      <td class=\"align-middle\">{{ item.intervalo }}</td>\n                      <td class=\"align-middle\">\n                        <div class=\"d-flex flex-nowrap align-items-center justify-content-end\">\n                          <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"openItemTreinoForm(item)\">\n                            <i class=\"ri-edit-box-line\"></i>\n                          </app-button>\n                          <app-button class=\"mx-1\" color=\"primary\" size=\"small\" rounded=\"circle\" (click)=\"deleteItemTreino(item)\">\n                            <i class=\"ri-delete-bin-line\"></i>\n                          </app-button>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr *ngIf=\"itensTreino?.length == 0\">\n                      <td colspan=\"6\" class=\"text-center\">Nenhum item encontrado</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </app-card>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/pages/configuracoes/configuracoes-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/configuracoes/configuracoes-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _doencas_doencas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doencas/doencas.component */ "./src/app/pages/configuracoes/doencas/doencas.component.ts");
/* harmony import */ var _imc_imc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imc/imc.component */ "./src/app/pages/configuracoes/imc/imc.component.ts");
/* harmony import */ var _frequencias_de_atividades_frequencias_de_atividades_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./frequencias-de-atividades/frequencias-de-atividades.component */ "./src/app/pages/configuracoes/frequencias-de-atividades/frequencias-de-atividades.component.ts");
/* harmony import */ var _grupos_de_exames_grupos_de_exames_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grupos-de-exames/grupos-de-exames.component */ "./src/app/pages/configuracoes/grupos-de-exames/grupos-de-exames.component.ts");
/* harmony import */ var _metas_metas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./metas/metas.component */ "./src/app/pages/configuracoes/metas/metas.component.ts");
/* harmony import */ var _refeicoes_refeicoes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./refeicoes/refeicoes.component */ "./src/app/pages/configuracoes/refeicoes/refeicoes.component.ts");
/* harmony import */ var _programas_programas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./programas/programas.component */ "./src/app/pages/configuracoes/programas/programas.component.ts");
/* harmony import */ var _configuracoes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./configuracoes.component */ "./src/app/pages/configuracoes/configuracoes.component.ts");
/* harmony import */ var _dietas_dietas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dietas/dietas.component */ "./src/app/pages/configuracoes/dietas/dietas.component.ts");
/* harmony import */ var _treinos_treinos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./treinos/treinos.component */ "./src/app/pages/configuracoes/treinos/treinos.component.ts");













const routes = [
    {
        path: '',
        component: _configuracoes_component__WEBPACK_IMPORTED_MODULE_10__["ConfiguracoesComponent"],
        children: [
            {
                path: 'doencas',
                component: _doencas_doencas_component__WEBPACK_IMPORTED_MODULE_3__["DoencasComponent"]
            },
            {
                path: 'frequencias-de-atividades',
                component: _frequencias_de_atividades_frequencias_de_atividades_component__WEBPACK_IMPORTED_MODULE_5__["FrequenciasDeAtividadesComponent"]
            },
            {
                path: 'grupos-de-exames',
                component: _grupos_de_exames_grupos_de_exames_component__WEBPACK_IMPORTED_MODULE_6__["GruposDeExamesComponent"]
            },
            {
                path: 'imc',
                component: _imc_imc_component__WEBPACK_IMPORTED_MODULE_4__["IMCComponent"]
            },
            {
                path: 'metas',
                component: _metas_metas_component__WEBPACK_IMPORTED_MODULE_7__["MetasComponent"]
            },
            {
                path: 'programas',
                component: _programas_programas_component__WEBPACK_IMPORTED_MODULE_9__["ProgramasComponent"]
            },
            {
                path: 'refeicoes',
                component: _refeicoes_refeicoes_component__WEBPACK_IMPORTED_MODULE_8__["RefeicoesComponent"]
            },
            {
                path: 'dietas',
                component: _dietas_dietas_component__WEBPACK_IMPORTED_MODULE_11__["DietasComponent"]
            },
            {
                path: 'treinos',
                component: _treinos_treinos_component__WEBPACK_IMPORTED_MODULE_12__["TreinosComponent"]
            },
            {
                path: '**',
                redirectTo: 'doencas'
            }
        ]
    }
];
let SettingsRoutingModule = class SettingsRoutingModule {
};
SettingsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SettingsRoutingModule);



/***/ }),

/***/ "./src/app/pages/configuracoes/configuracoes.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/configuracoes/configuracoes.component.ts ***!
  \****************************************************************/
/*! exports provided: ConfiguracoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesComponent", function() { return ConfiguracoesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ConfiguracoesComponent = class ConfiguracoesComponent {
};
ConfiguracoesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-configuracoes',
        template: '<router-outlet></router-outlet>',
    })
], ConfiguracoesComponent);



/***/ }),

/***/ "./src/app/pages/configuracoes/configuracoes.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/configuracoes/configuracoes.module.ts ***!
  \*************************************************************/
/*! exports provided: ConfiguracoesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesModule", function() { return ConfiguracoesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _configuracoes_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuracoes-routing.module */ "./src/app/pages/configuracoes/configuracoes-routing.module.ts");
/* harmony import */ var _doencas_doencas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./doencas/doencas.component */ "./src/app/pages/configuracoes/doencas/doencas.component.ts");
/* harmony import */ var _imc_imc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imc/imc.component */ "./src/app/pages/configuracoes/imc/imc.component.ts");
/* harmony import */ var _doencas_doenca_form_doenca_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doencas/doenca-form/doenca-form.component */ "./src/app/pages/configuracoes/doencas/doenca-form/doenca-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _frequencias_de_atividades_frequencias_de_atividades_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./frequencias-de-atividades/frequencias-de-atividades.component */ "./src/app/pages/configuracoes/frequencias-de-atividades/frequencias-de-atividades.component.ts");
/* harmony import */ var _frequencias_de_atividades_frequencia_form_frequencia_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./frequencias-de-atividades/frequencia-form/frequencia-form.component */ "./src/app/pages/configuracoes/frequencias-de-atividades/frequencia-form/frequencia-form.component.ts");
/* harmony import */ var _grupos_de_exames_grupos_de_exames_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./grupos-de-exames/grupos-de-exames.component */ "./src/app/pages/configuracoes/grupos-de-exames/grupos-de-exames.component.ts");
/* harmony import */ var _grupos_de_exames_grupo_form_grupo_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./grupos-de-exames/grupo-form/grupo-form.component */ "./src/app/pages/configuracoes/grupos-de-exames/grupo-form/grupo-form.component.ts");
/* harmony import */ var _imc_imc_form_imc_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./imc/imc-form/imc-form.component */ "./src/app/pages/configuracoes/imc/imc-form/imc-form.component.ts");
/* harmony import */ var _metas_metas_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./metas/metas.component */ "./src/app/pages/configuracoes/metas/metas.component.ts");
/* harmony import */ var _refeicoes_refeicoes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./refeicoes/refeicoes.component */ "./src/app/pages/configuracoes/refeicoes/refeicoes.component.ts");
/* harmony import */ var _programas_programas_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./programas/programas.component */ "./src/app/pages/configuracoes/programas/programas.component.ts");
/* harmony import */ var _metas_meta_form_meta_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./metas/meta-form/meta-form.component */ "./src/app/pages/configuracoes/metas/meta-form/meta-form.component.ts");
/* harmony import */ var _programas_programa_form_programa_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./programas/programa-form/programa-form.component */ "./src/app/pages/configuracoes/programas/programa-form/programa-form.component.ts");
/* harmony import */ var _refeicoes_refeicao_form_refeicao_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./refeicoes/refeicao-form/refeicao-form.component */ "./src/app/pages/configuracoes/refeicoes/refeicao-form/refeicao-form.component.ts");
/* harmony import */ var _configuracoes_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./configuracoes.component */ "./src/app/pages/configuracoes/configuracoes.component.ts");
/* harmony import */ var _dietas_dietas_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dietas/dietas.component */ "./src/app/pages/configuracoes/dietas/dietas.component.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _dietas_dieta_form_dieta_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dietas/dieta-form/dieta-form.component */ "./src/app/pages/configuracoes/dietas/dieta-form/dieta-form.component.ts");
/* harmony import */ var _dietas_item_dieta_form_item_dieta_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dietas/item-dieta-form/item-dieta-form.component */ "./src/app/pages/configuracoes/dietas/item-dieta-form/item-dieta-form.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _treinos_item_treino_form_item_treino_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./treinos/item-treino-form/item-treino-form.component */ "./src/app/pages/configuracoes/treinos/item-treino-form/item-treino-form.component.ts");
/* harmony import */ var _treinos_treino_form_treino_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./treinos/treino-form/treino-form.component */ "./src/app/pages/configuracoes/treinos/treino-form/treino-form.component.ts");
/* harmony import */ var _treinos_treinos_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./treinos/treinos.component */ "./src/app/pages/configuracoes/treinos/treinos.component.ts");




























let ConfiguracoesModule = class ConfiguracoesModule {
};
ConfiguracoesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _configuracoes_component__WEBPACK_IMPORTED_MODULE_19__["ConfiguracoesComponent"],
            _doencas_doencas_component__WEBPACK_IMPORTED_MODULE_4__["DoencasComponent"],
            _imc_imc_component__WEBPACK_IMPORTED_MODULE_5__["IMCComponent"],
            _doencas_doenca_form_doenca_form_component__WEBPACK_IMPORTED_MODULE_6__["DoencaFormComponent"],
            _frequencias_de_atividades_frequencias_de_atividades_component__WEBPACK_IMPORTED_MODULE_8__["FrequenciasDeAtividadesComponent"],
            _frequencias_de_atividades_frequencia_form_frequencia_form_component__WEBPACK_IMPORTED_MODULE_9__["FrequenciaFormComponent"],
            _grupos_de_exames_grupos_de_exames_component__WEBPACK_IMPORTED_MODULE_10__["GruposDeExamesComponent"],
            _grupos_de_exames_grupo_form_grupo_form_component__WEBPACK_IMPORTED_MODULE_11__["GrupoFormComponent"],
            _imc_imc_form_imc_form_component__WEBPACK_IMPORTED_MODULE_12__["IMCFormComponent"],
            _metas_metas_component__WEBPACK_IMPORTED_MODULE_13__["MetasComponent"],
            _refeicoes_refeicoes_component__WEBPACK_IMPORTED_MODULE_14__["RefeicoesComponent"],
            _programas_programas_component__WEBPACK_IMPORTED_MODULE_15__["ProgramasComponent"],
            _metas_meta_form_meta_form_component__WEBPACK_IMPORTED_MODULE_16__["MetaFormComponent"],
            _programas_programa_form_programa_form_component__WEBPACK_IMPORTED_MODULE_17__["ProgramaFormComponent"],
            _refeicoes_refeicao_form_refeicao_form_component__WEBPACK_IMPORTED_MODULE_18__["RefeicaoFormComponent"],
            _dietas_dietas_component__WEBPACK_IMPORTED_MODULE_20__["DietasComponent"],
            _dietas_dieta_form_dieta_form_component__WEBPACK_IMPORTED_MODULE_22__["DietaFormComponent"],
            _dietas_item_dieta_form_item_dieta_form_component__WEBPACK_IMPORTED_MODULE_23__["ItemDietaFormComponent"],
            _treinos_treinos_component__WEBPACK_IMPORTED_MODULE_27__["TreinosComponent"],
            _treinos_treino_form_treino_form_component__WEBPACK_IMPORTED_MODULE_26__["TreinoFormComponent"],
            _treinos_item_treino_form_item_treino_form_component__WEBPACK_IMPORTED_MODULE_25__["ItemTreinoFormComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _configuracoes_routing_module__WEBPACK_IMPORTED_MODULE_3__["SettingsRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_21__["ComponentsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_24__["NgSelectModule"]
        ]
    })
], ConfiguracoesModule);



/***/ }),

/***/ "./src/app/pages/configuracoes/dietas/dieta-form/dieta-form.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/configuracoes/dietas/dieta-form/dieta-form.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvZGlldGFzL2RpZXRhLWZvcm0vZGlldGEtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/configuracoes/dietas/dieta-form/dieta-form.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/configuracoes/dietas/dieta-form/dieta-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DietaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietaFormComponent", function() { return DietaFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helpers/alert.helper */ "./src/app/helpers/alert.helper.ts");
/* harmony import */ var src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/response-error */ "./src/app/models/response-error.ts");
/* harmony import */ var src_app_services_dieta_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/dieta.service */ "./src/app/services/dieta.service.ts");









let DietaFormComponent = class DietaFormComponent {
    constructor(bsModalRef, alertHelper, dietaService) {
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
    ngOnInit() {
        if (this.dieta) {
            this.programaId.setValue(this.dieta.programa_id);
            this.refeicaoId.setValue(this.dieta.refeicao_id);
            this.itemId.setValue(this.dieta.item_id);
            this.mes.setValue(this.dieta.mes);
            this.dia.setValue(this.dieta.dia);
        }
        this.meses = [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
        ];
        this.dias = [
            'Segunda',
            'Terca',
            'Quarta',
            'Quinta',
            'Sexta',
            'Sábado',
            'Domingo'
        ];
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    close() {
        this.bsModalRef.hide();
    }
    submit() {
        var _a;
        this.isInvalid = this.programaId.invalid
            || this.refeicaoId.invalid
            || this.itemId.invalid
            || this.mes.invalid
            || this.dia.invalid;
        if (!this.isInvalid) {
            const data = {
                programa_id: this.programaId.value,
                refeicao_id: this.refeicaoId.value,
                item_id: this.itemId.value,
                mes: this.mes.value,
                dia: this.dia.value,
            };
            if ((_a = this.dieta) === null || _a === void 0 ? void 0 : _a.id) {
                data.id = this.dieta.id;
                this.updateDieta(data);
            }
            else {
                this.createDieta(data);
            }
        }
    }
    createDieta(data) {
        this.loading = true;
        this.dietaService.create(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (dieta) => {
                this.loading = false;
                this.dieta = dieta;
                this.alertHelper.toast('success', 'Dieta cadastrada com sucesso.');
                this.onClose.next(dieta);
                this.bsModalRef.hide();
            },
            error: (e) => {
                this.loading = false;
                if (e instanceof src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__["ResponseError"]) {
                    this.alertHelper.show('error', e.getMessage(), {
                        confirmButtonText: 'Entendi'
                    });
                }
            }
        });
    }
    updateDieta(data) {
        this.loading = true;
        this.dietaService.update(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (dieta) => {
                this.loading = false;
                this.dieta = dieta;
                this.alertHelper.toast('success', 'Dieta atualizada com sucesso.');
                this.onClose.next(dieta);
                this.bsModalRef.hide();
            },
            error: () => {
                this.loading = false;
            }
        });
    }
};
DietaFormComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
    { type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__["AlertHelper"] },
    { type: src_app_services_dieta_service__WEBPACK_IMPORTED_MODULE_8__["DietaService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DietaFormComponent.prototype, "dieta", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DietaFormComponent.prototype, "itens", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DietaFormComponent.prototype, "programas", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DietaFormComponent.prototype, "refeicoes", void 0);
DietaFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dieta-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dieta-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/dietas/dieta-form/dieta-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dieta-form.component.scss */ "./src/app/pages/configuracoes/dietas/dieta-form/dieta-form.component.scss")).default]
    })
], DietaFormComponent);



/***/ }),

/***/ "./src/app/pages/configuracoes/dietas/dietas.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/configuracoes/dietas/dietas.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvZGlldGFzL2RpZXRhcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/configuracoes/dietas/dietas.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/configuracoes/dietas/dietas.component.ts ***!
  \****************************************************************/
/*! exports provided: DietasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietasComponent", function() { return DietasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _dieta_form_dieta_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dieta-form/dieta-form.component */ "./src/app/pages/configuracoes/dietas/dieta-form/dieta-form.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _item_dieta_form_item_dieta_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-dieta-form/item-dieta-form.component */ "./src/app/pages/configuracoes/dietas/item-dieta-form/item-dieta-form.component.ts");
/* harmony import */ var src_app_services_refeicao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/refeicao.service */ "./src/app/services/refeicao.service.ts");
/* harmony import */ var src_app_services_programa_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/programa.service */ "./src/app/services/programa.service.ts");
/* harmony import */ var src_app_services_dieta_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/dieta.service */ "./src/app/services/dieta.service.ts");
/* harmony import */ var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/helpers/alert.helper */ "./src/app/helpers/alert.helper.ts");











let DietasComponent = class DietasComponent {
    constructor(dietaService, modalService, programaService, refeicaoService, alertHelper) {
        this.dietaService = dietaService;
        this.modalService = modalService;
        this.programaService = programaService;
        this.refeicaoService = refeicaoService;
        this.alertHelper = alertHelper;
        this.loading = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.loadDietas();
        this.loadItensDietas();
        this.loadProgramas();
        this.loadRefeicoes();
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    openDietaForm(dieta) {
        this.bsModalRef = this.modalService.show(_dieta_form_dieta_form_component__WEBPACK_IMPORTED_MODULE_4__["DietaFormComponent"], {
            initialState: {
                dieta,
                itens: this.itensDieta,
                programas: this.programas,
                refeicoes: this.refeicoes,
            }
        });
        const component = this.bsModalRef.content;
        component.onClose
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (dieta) => {
                const index = this.dietas.findIndex(u => u.id == dieta.id);
                if (index === -1) {
                    this.dietas.push(dieta);
                }
                else {
                    this.dietas[index] = dieta;
                }
            }
        });
    }
    openItemDietaForm(item) {
        this.bsModalRef = this.modalService.show(_item_dieta_form_item_dieta_form_component__WEBPACK_IMPORTED_MODULE_6__["ItemDietaFormComponent"], {
            initialState: { item }
        });
        const component = this.bsModalRef.content;
        component.onClose
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (dieta) => {
                const index = this.itensDieta.findIndex(u => u.id == dieta.id);
                if (index === -1) {
                    this.itensDieta.push(dieta);
                }
                else {
                    this.itensDieta[index] = dieta;
                }
            }
        });
    }
    deleteDieta(dieta) {
        this.alertHelper.show('warning', `Tem certeza que deseja remover a dieta #${dieta.id}?`, { showCancelButton: true })
            .then(confirmed => {
            if (confirmed) {
                this.loading = true;
                this.dietaService.delete(dieta)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
                    .subscribe({
                    next: (dieta) => {
                        this.loading = false;
                        this.alertHelper.toast('success', 'Dieta deletada com sucesso.');
                        this.dietas = this.dietas.filter(d => d.id != dieta.id);
                    },
                    error: () => {
                        this.loading = false;
                    }
                });
            }
        });
    }
    deleteItemDieta(item) {
        this.alertHelper.show('warning', `Tem certeza que deseja remover o item ${item.desc}?`, { showCancelButton: true })
            .then(confirmed => {
            if (confirmed) {
                this.loading = true;
                this.dietaService.deleteItem(item)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
                    .subscribe({
                    next: (item) => {
                        this.loading = false;
                        this.alertHelper.toast('success', 'Item deletado com sucesso.');
                        this.itensDieta = this.itensDieta.filter(it => it.id != item.id);
                    },
                    error: () => {
                        this.loading = false;
                    }
                });
            }
        });
    }
    loadDietas() {
        this.loading = true;
        this.dietaService.findAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (dietas) => {
                this.loading = false;
                this.dietas = dietas;
            },
            error: () => {
                this.loading = false;
            }
        });
    }
    loadItensDietas() {
        this.loading = true;
        this.dietaService.findAllItems()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (dietas) => {
                this.loading = false;
                this.itensDieta = dietas;
            },
            error: () => {
                this.loading = false;
            }
        });
    }
    loadProgramas() {
        this.programaService.findAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (programas) => {
                this.programas = programas;
            }
        });
    }
    loadRefeicoes() {
        this.refeicaoService.findAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (refeicoes) => {
                this.refeicoes = refeicoes;
            }
        });
    }
};
DietasComponent.ctorParameters = () => [
    { type: src_app_services_dieta_service__WEBPACK_IMPORTED_MODULE_9__["DietaService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
    { type: src_app_services_programa_service__WEBPACK_IMPORTED_MODULE_8__["ProgramaService"] },
    { type: src_app_services_refeicao_service__WEBPACK_IMPORTED_MODULE_7__["RefeicaoService"] },
    { type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_10__["AlertHelper"] }
];
DietasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dietas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dietas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/dietas/dietas.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dietas.component.scss */ "./src/app/pages/configuracoes/dietas/dietas.component.scss")).default]
    })
], DietasComponent);



/***/ }),

/***/ "./src/app/pages/configuracoes/dietas/item-dieta-form/item-dieta-form.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/configuracoes/dietas/item-dieta-form/item-dieta-form.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-thumbnail {\n  max-height: 150px;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29uZmlndXJhY29lcy9kaWV0YXMvaXRlbS1kaWV0YS1mb3JtL0M6XFxVc2Vyc1xcdXNlclxcRG9jdW1lbnRzXFxCMkIgSGVhbHRoXFxkYXNoYm9hcmQtYjJiLWhlYWx0aC9zcmNcXGFwcFxccGFnZXNcXGNvbmZpZ3VyYWNvZXNcXGRpZXRhc1xcaXRlbS1kaWV0YS1mb3JtXFxpdGVtLWRpZXRhLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvZGlldGFzL2l0ZW0tZGlldGEtZm9ybS9pdGVtLWRpZXRhLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb25maWd1cmFjb2VzL2RpZXRhcy9pdGVtLWRpZXRhLWZvcm0vaXRlbS1kaWV0YS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy10aHVtYm5haWwge1xyXG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuIiwiLmltZy10aHVtYm5haWwge1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/configuracoes/dietas/item-dieta-form/item-dieta-form.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/configuracoes/dietas/item-dieta-form/item-dieta-form.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ItemDietaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDietaFormComponent", function() { return ItemDietaFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helpers/alert.helper */ "./src/app/helpers/alert.helper.ts");
/* harmony import */ var src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/response-error */ "./src/app/models/response-error.ts");
/* harmony import */ var src_app_services_dieta_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/dieta.service */ "./src/app/services/dieta.service.ts");









let ItemDietaFormComponent = class ItemDietaFormComponent {
    constructor(bsModalRef, alertHelper, dietaService) {
        this.bsModalRef = bsModalRef;
        this.alertHelper = alertHelper;
        this.dietaService = dietaService;
        this.loading = false;
        this.desc = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.isInvalid = false;
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        if (this.item) {
            this.desc.setValue(this.item.desc);
            this.urlImg = this.item.url_img;
        }
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    close() {
        this.bsModalRef.hide();
    }
    imageChanged(event) {
        this.fileImg = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            var _a;
            this.urlImg = reader.result.toString();
            if ((_a = this.item) === null || _a === void 0 ? void 0 : _a.id) {
                this.uploadImg();
            }
        };
        reader.readAsDataURL(this.fileImg);
    }
    submit() {
        var _a, _b;
        this.isInvalid = this.desc.invalid;
        if (((_a = this.item) === null || _a === void 0 ? void 0 : _a.id) == undefined && this.fileImg == undefined) {
            this.isInvalid = true;
        }
        if (!this.isInvalid) {
            this.item = Object.assign(Object.assign({}, this.item), { desc: this.desc.value });
            if ((_b = this.item) === null || _b === void 0 ? void 0 : _b.id) {
                this.updateItem();
            }
            else {
                this.item.file_img = this.fileImg;
                this.createItem();
            }
        }
    }
    createItem() {
        this.loading = true;
        this.dietaService.createItem(this.item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (item) => {
                this.loading = false;
                this.alertHelper.toast('success', 'Item cadastrado com sucesso.');
                this.onClose.next(item);
                this.bsModalRef.hide();
            },
            error: (e) => {
                this.loading = false;
                if (e instanceof src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__["ResponseError"]) {
                    this.alertHelper.show('error', e.getMessage(), {
                        confirmButtonText: 'Entendi'
                    });
                }
            }
        });
    }
    updateItem() {
        this.loading = true;
        this.dietaService.updateItem(this.item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (item) => {
                this.loading = false;
                this.alertHelper.toast('success', 'Item atualizado com sucesso.');
                this.onClose.next(item);
                this.bsModalRef.hide();
            },
            error: () => {
                this.loading = false;
            }
        });
    }
    uploadImg() {
        var _a;
        this.loading = true;
        this.dietaService.uploadImg((_a = this.item) === null || _a === void 0 ? void 0 : _a.id, this.fileImg)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (item) => {
                this.loading = false;
                this.alertHelper.toast('success', 'Imagem atualizada com sucesso.');
                this.onClose.next(item);
            },
            error: () => {
                this.loading = false;
            }
        });
    }
};
ItemDietaFormComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
    { type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__["AlertHelper"] },
    { type: src_app_services_dieta_service__WEBPACK_IMPORTED_MODULE_8__["DietaService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ItemDietaFormComponent.prototype, "item", void 0);
ItemDietaFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-dieta-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-dieta-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/dietas/item-dieta-form/item-dieta-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-dieta-form.component.scss */ "./src/app/pages/configuracoes/dietas/item-dieta-form/item-dieta-form.component.scss")).default]
    })
], ItemDietaFormComponent);



/***/ }),

/***/ "./src/app/pages/configuracoes/doencas/doenca-form/doenca-form.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/configuracoes/doencas/doenca-form/doenca-form.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvZG9lbmNhcy9kb2VuY2EtZm9ybS9kb2VuY2EtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/configuracoes/doencas/doenca-form/doenca-form.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/configuracoes/doencas/doenca-form/doenca-form.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DoencaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoencaFormComponent", function() { return DoencaFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helpers/alert.helper */ "./src/app/helpers/alert.helper.ts");
/* harmony import */ var src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/response-error */ "./src/app/models/response-error.ts");
/* harmony import */ var src_app_services_doenca_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/doenca.service */ "./src/app/services/doenca.service.ts");









let DoencaFormComponent = class DoencaFormComponent {
    constructor(bsModalRef, alertHelper, doencaService) {
        this.bsModalRef = bsModalRef;
        this.alertHelper = alertHelper;
        this.doencaService = doencaService;
        this.loading = false;
        this.desc = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.isInvalid = false;
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        if (this.doenca) {
            this.desc.setValue(this.doenca.desc);
        }
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    close() {
        this.bsModalRef.hide();
    }
    submit() {
        var _a;
        this.isInvalid = this.desc.invalid;
        if (!this.isInvalid) {
            this.doenca = Object.assign(Object.assign({}, this.doenca), { desc: this.desc.value });
            if ((_a = this.doenca) === null || _a === void 0 ? void 0 : _a.id) {
                this.updateDoenca();
            }
            else {
                this.createDoenca();
            }
        }
    }
    createDoenca() {
        this.loading = true;
        this.doencaService.create(this.doenca)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (doenca) => {
                this.loading = false;
                this.alertHelper.toast('success', 'Doença cadastrada com sucesso.');
                this.onClose.next(doenca);
                this.bsModalRef.hide();
            },
            error: (e) => {
                this.loading = false;
                if (e instanceof src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__["ResponseError"]) {
                    this.alertHelper.show('error', e.getMessage(), {
                        confirmButtonText: 'Entendi'
                    });
                }
            }
        });
    }
    updateDoenca() {
        this.loading = true;
        this.doencaService.update(this.doenca)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (doenca) => {
                this.loading = false;
                this.alertHelper.toast('success', 'Doença atualizada com sucesso.');
                this.onClose.next(doenca);
                this.bsModalRef.hide();
            },
            error: () => {
                this.loading = false;
            }
        });
    }
};
DoencaFormComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
    { type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__["AlertHelper"] },
    { type: src_app_services_doenca_service__WEBPACK_IMPORTED_MODULE_8__["DoencaService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DoencaFormComponent.prototype, "doenca", void 0);
DoencaFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doenca-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./doenca-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/doencas/doenca-form/doenca-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./doenca-form.component.scss */ "./src/app/pages/configuracoes/doencas/doenca-form/doenca-form.component.scss")).default]
    })
], DoencaFormComponent);



/***/ }),

/***/ "./src/app/pages/configuracoes/doencas/doencas.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/configuracoes/doencas/doencas.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvZG9lbmNhcy9kb2VuY2FzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/configuracoes/doencas/doencas.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/configuracoes/doencas/doencas.component.ts ***!
  \******************************************************************/
/*! exports provided: DoencasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoencasComponent", function() { return DoencasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_doenca_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/doenca.service */ "./src/app/services/doenca.service.ts");
/* harmony import */ var _doenca_form_doenca_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doenca-form/doenca-form.component */ "./src/app/pages/configuracoes/doencas/doenca-form/doenca-form.component.ts");
/* harmony import */ var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/helpers/alert.helper */ "./src/app/helpers/alert.helper.ts");








let DoencasComponent = class DoencasComponent {
    constructor(doencaService, modalService, alertHelper) {
        this.doencaService = doencaService;
        this.modalService = modalService;
        this.alertHelper = alertHelper;
        this.loading = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.loadDoencas();
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    openDoencaForm(doenca) {
        this.bsModalRef = this.modalService.show(_doenca_form_doenca_form_component__WEBPACK_IMPORTED_MODULE_6__["DoencaFormComponent"], {
            initialState: { doenca }
        });
        const component = this.bsModalRef.content;
        component.onClose
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (doenca) => {
                const index = this.doencas.findIndex(u => u.id == doenca.id);
                if (index === -1) {
                    this.doencas.push(doenca);
                }
                else {
                    this.doencas[index] = doenca;
                }
            }
        });
    }
    deleteDoenca(doenca) {
        this.alertHelper.show('warning', `Tem certeza que deseja remover a doença ${doenca.desc}?`, { showCancelButton: true })
            .then(confirmed => {
            if (confirmed) {
                this.loading = true;
                this.doencaService.delete(doenca)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
                    .subscribe({
                    next: (doenca) => {
                        this.loading = false;
                        this.doencas = this.doencas.filter(d => d.id != doenca.id);
                    },
                    error: () => {
                        this.loading = false;
                    }
                });
            }
        });
    }
    loadDoencas() {
        this.loading = true;
        this.doencaService.findAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (doencas) => {
                this.loading = false;
                this.doencas = doencas;
            },
            error: () => {
                this.loading = false;
            }
        });
    }
};
DoencasComponent.ctorParameters = () => [
    { type: src_app_services_doenca_service__WEBPACK_IMPORTED_MODULE_5__["DoencaService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
    { type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_7__["AlertHelper"] }
];
DoencasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doencas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./doencas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/doencas/doencas.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./doencas.component.scss */ "./src/app/pages/configuracoes/doencas/doencas.component.scss")).default]
    })
], DoencasComponent);



/***/ }),

/***/ "./src/app/pages/configuracoes/frequencias-de-atividades/frequencia-form/frequencia-form.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/configuracoes/frequencias-de-atividades/frequencia-form/frequencia-form.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvZnJlcXVlbmNpYXMtZGUtYXRpdmlkYWRlcy9mcmVxdWVuY2lhLWZvcm0vZnJlcXVlbmNpYS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/configuracoes/frequencias-de-atividades/frequencia-form/frequencia-form.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/configuracoes/frequencias-de-atividades/frequencia-form/frequencia-form.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: FrequenciaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrequenciaFormComponent", function() { return FrequenciaFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helpers/alert.helper */ "./src/app/helpers/alert.helper.ts");
/* harmony import */ var src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/response-error */ "./src/app/models/response-error.ts");
/* harmony import */ var src_app_services_frequencia_atividade_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/frequencia-atividade.service */ "./src/app/services/frequencia-atividade.service.ts");









let FrequenciaFormComponent = class FrequenciaFormComponent {
    constructor(bsModalRef, alertHelper, frequenciaAtividadeService) {
        this.bsModalRef = bsModalRef;
        this.alertHelper = alertHelper;
        this.frequenciaAtividadeService = frequenciaAtividadeService;
        this.loading = false;
        this.desc = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.isInvalid = false;
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        if (this.frequenciaAtividade) {
            this.desc.setValue(this.frequenciaAtividade.desc);
        }
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    close() {
        this.bsModalRef.hide();
    }
    submit() {
        var _a;
        this.isInvalid = this.desc.invalid;
        if (!this.isInvalid) {
            this.frequenciaAtividade = Object.assign(Object.assign({}, this.frequenciaAtividade), { desc: this.desc.value });
            if ((_a = this.frequenciaAtividade) === null || _a === void 0 ? void 0 : _a.id) {
                this.updateFrequenciaAtividade();
            }
            else {
                this.createFrequenciaAtividade();
            }
        }
    }
    createFrequenciaAtividade() {
        this.loading = true;
        this.frequenciaAtividadeService.create(this.frequenciaAtividade)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (frequenciaAtividade) => {
                this.loading = false;
                this.alertHelper.toast('success', 'Frequência de atividade cadastrada com sucesso.');
                this.onClose.next(frequenciaAtividade);
                this.bsModalRef.hide();
            },
            error: (e) => {
                this.loading = false;
                if (e instanceof src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__["ResponseError"]) {
                    this.alertHelper.show('error', e.getMessage(), {
                        confirmButtonText: 'Entendi'
                    });
                }
            }
        });
    }
    updateFrequenciaAtividade() {
        this.loading = true;
        this.frequenciaAtividadeService.update(this.frequenciaAtividade)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (frequenciaAtividade) => {
                this.loading = false;
                this.alertHelper.toast('success', 'Frequência de atividade atualizada com sucesso.');
                this.onClose.next(frequenciaAtividade);
                this.bsModalRef.hide();
            },
            error: () => {
                this.loading = false;
            }
        });
    }
};
FrequenciaFormComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
    { type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__["AlertHelper"] },
    { type: src_app_services_frequencia_atividade_service__WEBPACK_IMPORTED_MODULE_8__["FrequenciaAtividadeService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FrequenciaFormComponent.prototype, "frequenciaAtividade", void 0);
FrequenciaFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-frequencia-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./frequencia-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/frequencias-de-atividades/frequencia-form/frequencia-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./frequencia-form.component.scss */ "./src/app/pages/configuracoes/frequencias-de-atividades/frequencia-form/frequencia-form.component.scss")).default]
    })
], FrequenciaFormComponent);



/***/ }),

/***/ "./src/app/pages/configuracoes/frequencias-de-atividades/frequencias-de-atividades.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/configuracoes/frequencias-de-atividades/frequencias-de-atividades.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvZnJlcXVlbmNpYXMtZGUtYXRpdmlkYWRlcy9mcmVxdWVuY2lhcy1kZS1hdGl2aWRhZGVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/configuracoes/frequencias-de-atividades/frequencias-de-atividades.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/configuracoes/frequencias-de-atividades/frequencias-de-atividades.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: FrequenciasDeAtividadesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrequenciasDeAtividadesComponent", function() { return FrequenciasDeAtividadesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/helpers/alert.helper */ "./src/app/helpers/alert.helper.ts");
/* harmony import */ var src_app_services_frequencia_atividade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/frequencia-atividade.service */ "./src/app/services/frequencia-atividade.service.ts");
/* harmony import */ var _frequencia_form_frequencia_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./frequencia-form/frequencia-form.component */ "./src/app/pages/configuracoes/frequencias-de-atividades/frequencia-form/frequencia-form.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








let FrequenciasDeAtividadesComponent = class FrequenciasDeAtividadesComponent {
    constructor(frequenciaAtividadeService, modalService, alertHelper) {
        this.frequenciaAtividadeService = frequenciaAtividadeService;
        this.modalService = modalService;
        this.alertHelper = alertHelper;
        this.loading = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.loadFrequenciasAtividades();
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    openFrequenciaForm(frequenciaAtividade) {
        this.bsModalRef = this.modalService.show(_frequencia_form_frequencia_form_component__WEBPACK_IMPORTED_MODULE_6__["FrequenciaFormComponent"], {
            initialState: { frequenciaAtividade }
        });
        const component = this.bsModalRef.content;
        component.onClose
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (frequenciaAtividade) => {
                const index = this.frequenciasAtividades.findIndex(f => f.id == frequenciaAtividade.id);
                if (index === -1) {
                    this.frequenciasAtividades.push(frequenciaAtividade);
                }
                else {
                    this.frequenciasAtividades[index] = frequenciaAtividade;
                }
            }
        });
    }
    deleteFrequenciaAtividade(frequenciaAtividade) {
        this.alertHelper.show('warning', `Tem certeza que deseja remover a frequência de atividade ${frequenciaAtividade.desc}?`, { showCancelButton: true })
            .then(confirmed => {
            if (confirmed) {
                this.loading = true;
                this.frequenciaAtividadeService.delete(frequenciaAtividade)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$))
                    .subscribe({
                    next: (frequenciaAtividade) => {
                        this.loading = false;
                        this.frequenciasAtividades = this.frequenciasAtividades.filter(f => f.id != frequenciaAtividade.id);
                    },
                    error: () => {
                        this.loading = false;
                    }
                });
            }
        });
    }
    loadFrequenciasAtividades() {
        this.loading = true;
        this.frequenciaAtividadeService.findAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (FrequenciasAtividades) => {
                this.loading = false;
                this.frequenciasAtividades = FrequenciasAtividades;
            },
            error: () => {
                this.loading = false;
            }
        });
    }
};
FrequenciasDeAtividadesComponent.ctorParameters = () => [
    { type: src_app_services_frequencia_atividade_service__WEBPACK_IMPORTED_MODULE_5__["FrequenciaAtividadeService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
    { type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_4__["AlertHelper"] }
];
FrequenciasDeAtividadesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-frequencias-de-atividades',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./frequencias-de-atividades.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/frequencias-de-atividades/frequencias-de-atividades.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./frequencias-de-atividades.component.scss */ "./src/app/pages/configuracoes/frequencias-de-atividades/frequencias-de-atividades.component.scss")).default]
    })
], FrequenciasDeAtividadesComponent);



/***/ }),

/***/ "./src/app/pages/configuracoes/grupos-de-exames/grupo-form/grupo-form.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/configuracoes/grupos-de-exames/grupo-form/grupo-form.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvZ3J1cG9zLWRlLWV4YW1lcy9ncnVwby1mb3JtL2dydXBvLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/configuracoes/grupos-de-exames/grupo-form/grupo-form.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/configuracoes/grupos-de-exames/grupo-form/grupo-form.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: GrupoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoFormComponent", function() { return GrupoFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helpers/alert.helper */ "./src/app/helpers/alert.helper.ts");
/* harmony import */ var src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/response-error */ "./src/app/models/response-error.ts");
/* harmony import */ var src_app_services_grupo_exame_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/grupo-exame.service */ "./src/app/services/grupo-exame.service.ts");









let GrupoFormComponent = class GrupoFormComponent {
    constructor(bsModalRef, alertHelper, grupoExameService) {
        this.bsModalRef = bsModalRef;
        this.alertHelper = alertHelper;
        this.grupoExameService = grupoExameService;
        this.loading = false;
        this.desc = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.isInvalid = false;
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        if (this.grupoExame) {
            this.desc.setValue(this.grupoExame.desc);
        }
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    close() {
        this.bsModalRef.hide();
    }
    submit() {
        var _a;
        this.isInvalid = this.desc.invalid;
        if (!this.isInvalid) {
            this.grupoExame = Object.assign(Object.assign({}, this.grupoExame), { desc: this.desc.value });
            if ((_a = this.grupoExame) === null || _a === void 0 ? void 0 : _a.id) {
                this.updateGrupoExame();
            }
            else {
                this.createGrupoExame();
            }
        }
    }
    createGrupoExame() {
        this.loading = true;
        this.grupoExameService.create(this.grupoExame)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (grupoExame) => {
                this.loading = false;
                this.alertHelper.toast('success', 'Grupo de exame cadastrado com sucesso.');
                this.onClose.next(grupoExame);
                this.bsModalRef.hide();
            },
            error: (e) => {
                this.loading = false;
                if (e instanceof src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__["ResponseError"]) {
                    this.alertHelper.show('error', e.getMessage(), {
                        confirmButtonText: 'Entendi'
                    });
                }
            }
        });
    }
    updateGrupoExame() {
        this.loading = true;
        this.grupoExameService.update(this.grupoExame)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (grupoExame) => {
                this.loading = false;
                this.alertHelper.toast('success', 'Grupo de exame atualizado com sucesso.');
                this.onClose.next(grupoExame);
                this.bsModalRef.hide();
            },
            error: () => {
                this.loading = false;
            }
        });
    }
};
GrupoFormComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
    { type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__["AlertHelper"] },
    { type: src_app_services_grupo_exame_service__WEBPACK_IMPORTED_MODULE_8__["GrupoExameService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GrupoFormComponent.prototype, "grupoExame", void 0);
GrupoFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grupo-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./grupo-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/grupos-de-exames/grupo-form/grupo-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./grupo-form.component.scss */ "./src/app/pages/configuracoes/grupos-de-exames/grupo-form/grupo-form.component.scss")).default]
    })
], GrupoFormComponent);



/***/ }),

/***/ "./src/app/pages/configuracoes/grupos-de-exames/grupos-de-exames.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/configuracoes/grupos-de-exames/grupos-de-exames.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvZ3J1cG9zLWRlLWV4YW1lcy9ncnVwb3MtZGUtZXhhbWVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/configuracoes/grupos-de-exames/grupos-de-exames.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/configuracoes/grupos-de-exames/grupos-de-exames.component.ts ***!
  \************************************************************************************/
/*! exports provided: GruposDeExamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruposDeExamesComponent", function() { return GruposDeExamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/helpers/alert.helper */ "./src/app/helpers/alert.helper.ts");
/* harmony import */ var src_app_services_grupo_exame_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/grupo-exame.service */ "./src/app/services/grupo-exame.service.ts");
/* harmony import */ var _grupo_form_grupo_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./grupo-form/grupo-form.component */ "./src/app/pages/configuracoes/grupos-de-exames/grupo-form/grupo-form.component.ts");








let GruposDeExamesComponent = class GruposDeExamesComponent {
    constructor(grupoExameService, modalService, alertHelper) {
        this.grupoExameService = grupoExameService;
        this.modalService = modalService;
        this.alertHelper = alertHelper;
        this.loading = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.loadGruposExames();
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    openGrupoForm(grupoExame) {
        this.bsModalRef = this.modalService.show(_grupo_form_grupo_form_component__WEBPACK_IMPORTED_MODULE_7__["GrupoFormComponent"], {
            initialState: { grupoExame }
        });
        const component = this.bsModalRef.content;
        component.onClose
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (grupoExame) => {
                const index = this.gruposExames.findIndex(g => g.id == grupoExame.id);
                if (index === -1) {
                    this.gruposExames.push(grupoExame);
                }
                else {
                    this.gruposExames[index] = grupoExame;
                }
            }
        });
    }
    deleteGrupoExame(grupoExame) {
        this.alertHelper.show('warning', `Tem certeza que deseja remover o grupo de exame ${grupoExame.desc}?`, { showCancelButton: true })
            .then(confirmed => {
            if (confirmed) {
                this.loading = true;
                this.grupoExameService.delete(grupoExame)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
                    .subscribe({
                    next: (grupoExame) => {
                        this.loading = false;
                        this.gruposExames = this.gruposExames.filter(g => g.id != grupoExame.id);
                    },
                    error: () => {
                        this.loading = false;
                    }
                });
            }
        });
    }
    loadGruposExames() {
        this.loading = true;
        this.grupoExameService.findAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (gruposExames) => {
                this.loading = false;
                this.gruposExames = gruposExames;
            },
            error: () => {
                this.loading = false;
            }
        });
    }
};
GruposDeExamesComponent.ctorParameters = () => [
    { type: src_app_services_grupo_exame_service__WEBPACK_IMPORTED_MODULE_6__["GrupoExameService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
    { type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_5__["AlertHelper"] }
];
GruposDeExamesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grupos-de-exames',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./grupos-de-exames.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/grupos-de-exames/grupos-de-exames.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./grupos-de-exames.component.scss */ "./src/app/pages/configuracoes/grupos-de-exames/grupos-de-exames.component.scss")).default]
    })
], GruposDeExamesComponent);



/***/ }),

/***/ "./src/app/pages/configuracoes/imc/imc-form/imc-form.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/configuracoes/imc/imc-form/imc-form.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvaW1jL2ltYy1mb3JtL2ltYy1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/configuracoes/imc/imc-form/imc-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/configuracoes/imc/imc-form/imc-form.component.ts ***!
  \************************************************************************/
/*! exports provided: IMCFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMCFormComponent", function() { return IMCFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helpers/alert.helper */ "./src/app/helpers/alert.helper.ts");
/* harmony import */ var src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/response-error */ "./src/app/models/response-error.ts");
/* harmony import */ var src_app_services_imc_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/imc.service */ "./src/app/services/imc.service.ts");









let IMCFormComponent = class IMCFormComponent {
    constructor(bsModalRef, alertHelper, imcService) {
        this.bsModalRef = bsModalRef;
        this.alertHelper = alertHelper;
        this.imcService = imcService;
        this.loading = false;
        this.tipo = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.isInvalid = false;
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        if (this.imc) {
            this.tipo.setValue(this.imc.tipo);
        }
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    close() {
        this.bsModalRef.hide();
    }
    submit() {
        var _a;
        this.isInvalid = this.tipo.invalid;
        if (!this.isInvalid) {
            this.imc = Object.assign(Object.assign({}, this.imc), { tipo: this.tipo.value });
            if ((_a = this.imc) === null || _a === void 0 ? void 0 : _a.id) {
                this.updateImc();
            }
            else {
                this.createImc();
            }
        }
    }
    createImc() {
        this.loading = true;
        this.imcService.create(this.imc)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (imc) => {
                this.loading = false;
                this.alertHelper.toast('success', 'IMC cadastrado com sucesso.');
                this.onClose.next(imc);
                this.bsModalRef.hide();
            },
            error: (e) => {
                this.loading = false;
                if (e instanceof src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__["ResponseError"]) {
                    this.alertHelper.show('error', e.getMessage(), {
                        confirmButtonText: 'Entendi'
                    });
                }
            }
        });
    }
    updateImc() {
        this.loading = true;
        this.imcService.update(this.imc)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (imc) => {
                this.loading = false;
                this.alertHelper.toast('success', 'IMC atualizado com sucesso.');
                this.onClose.next(imc);
                this.bsModalRef.hide();
            },
            error: () => {
                this.loading = false;
            }
        });
    }
};
IMCFormComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
    { type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__["AlertHelper"] },
    { type: src_app_services_imc_service__WEBPACK_IMPORTED_MODULE_8__["IMCService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], IMCFormComponent.prototype, "imc", void 0);
IMCFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-imc-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./imc-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/imc/imc-form/imc-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./imc-form.component.scss */ "./src/app/pages/configuracoes/imc/imc-form/imc-form.component.scss")).default]
    })
], IMCFormComponent);



/***/ }),

/***/ "./src/app/pages/configuracoes/imc/imc.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/configuracoes/imc/imc.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvaW1jL2ltYy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/configuracoes/imc/imc.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/configuracoes/imc/imc.component.ts ***!
  \**********************************************************/
/*! exports provided: IMCComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMCComponent", function() { return IMCComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/helpers/alert.helper */ "./src/app/helpers/alert.helper.ts");
/* harmony import */ var src_app_services_imc_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/imc.service */ "./src/app/services/imc.service.ts");
/* harmony import */ var _imc_form_imc_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./imc-form/imc-form.component */ "./src/app/pages/configuracoes/imc/imc-form/imc-form.component.ts");








let IMCComponent = class IMCComponent {
    constructor(imcService, modalService, alertHelper) {
        this.imcService = imcService;
        this.modalService = modalService;
        this.alertHelper = alertHelper;
        this.loading = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.loadImcArr();
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    openImcForm(imc) {
        this.bsModalRef = this.modalService.show(_imc_form_imc_form_component__WEBPACK_IMPORTED_MODULE_7__["IMCFormComponent"], {
            initialState: { imc }
        });
        const component = this.bsModalRef.content;
        component.onClose
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (imc) => {
                const index = this.imcArr.findIndex(u => u.id == imc.id);
                if (index === -1) {
                    this.imcArr.push(imc);
                }
                else {
                    this.imcArr[index] = imc;
                }
            }
        });
    }
    deleteImc(imc) {
        this.alertHelper.show('warning', `Tem certeza que deseja remover o IMC ${imc.tipo}?`, { showCancelButton: true })
            .then(confirmed => {
            if (confirmed) {
                this.loading = true;
                this.imcService.delete(imc)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
                    .subscribe({
                    next: (imc) => {
                        this.loading = false;
                        this.imcArr = this.imcArr.filter(d => d.id != imc.id);
                    },
                    error: () => {
                        this.loading = false;
                    }
                });
            }
        });
    }
    loadImcArr() {
        this.loading = true;
        this.imcService.findAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (imcArr) => {
                this.loading = false;
                this.imcArr = imcArr;
            },
            error: () => {
                this.loading = false;
            }
        });
    }
};
IMCComponent.ctorParameters = () => [
    { type: src_app_services_imc_service__WEBPACK_IMPORTED_MODULE_6__["IMCService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
    { type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_5__["AlertHelper"] }
];
IMCComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-imc',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./imc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/imc/imc.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./imc.component.scss */ "./src/app/pages/configuracoes/imc/imc.component.scss")).default]
    })
], IMCComponent);



/***/ }),

/***/ "./src/app/pages/configuracoes/metas/meta-form/meta-form.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/configuracoes/metas/meta-form/meta-form.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvbWV0YXMvbWV0YS1mb3JtL21ldGEtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/configuracoes/metas/meta-form/meta-form.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/configuracoes/metas/meta-form/meta-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: MetaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaFormComponent", function() { return MetaFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helpers/alert.helper */ "./src/app/helpers/alert.helper.ts");
/* harmony import */ var src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/response-error */ "./src/app/models/response-error.ts");
/* harmony import */ var src_app_services_meta_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/meta.service */ "./src/app/services/meta.service.ts");









let MetaFormComponent = class MetaFormComponent {
    constructor(bsModalRef, alertHelper, metaService) {
        this.bsModalRef = bsModalRef;
        this.alertHelper = alertHelper;
        this.metaService = metaService;
        this.loading = false;
        this.desc = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.isInvalid = false;
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        if (this.meta) {
            this.desc.setValue(this.meta.desc);
        }
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    close() {
        this.bsModalRef.hide();
    }
    submit() {
        var _a;
        this.isInvalid = this.desc.invalid;
        if (!this.isInvalid) {
            this.meta = Object.assign(Object.assign({}, this.meta), { desc: this.desc.value });
            if ((_a = this.meta) === null || _a === void 0 ? void 0 : _a.id) {
                this.updateMeta();
            }
            else {
                this.createMeta();
            }
        }
    }
    createMeta() {
        this.loading = true;
        this.metaService.create(this.meta)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (meta) => {
                this.loading = false;
                this.alertHelper.toast('success', 'Meta cadastrada com sucesso.');
                this.onClose.next(meta);
                this.bsModalRef.hide();
            },
            error: (e) => {
                this.loading = false;
                if (e instanceof src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__["ResponseError"]) {
                    this.alertHelper.show('error', e.getMessage(), {
                        confirmButtonText: 'Entendi'
                    });
                }
            }
        });
    }
    updateMeta() {
        this.loading = true;
        this.metaService.update(this.meta)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (meta) => {
                this.loading = false;
                this.alertHelper.toast('success', 'Meta atualizada com sucesso.');
                this.onClose.next(meta);
                this.bsModalRef.hide();
            },
            error: () => {
                this.loading = false;
            }
        });
    }
};
MetaFormComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
    { type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__["AlertHelper"] },
    { type: src_app_services_meta_service__WEBPACK_IMPORTED_MODULE_8__["MetaService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MetaFormComponent.prototype, "meta", void 0);
MetaFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-meta-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./meta-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/metas/meta-form/meta-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./meta-form.component.scss */ "./src/app/pages/configuracoes/metas/meta-form/meta-form.component.scss")).default]
    })
], MetaFormComponent);



/***/ }),

/***/ "./src/app/pages/configuracoes/metas/metas.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/configuracoes/metas/metas.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvbWV0YXMvbWV0YXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/configuracoes/metas/metas.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/configuracoes/metas/metas.component.ts ***!
  \**************************************************************/
/*! exports provided: MetasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetasComponent", function() { return MetasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/helpers/alert.helper */ "./src/app/helpers/alert.helper.ts");
/* harmony import */ var src_app_services_meta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/meta.service */ "./src/app/services/meta.service.ts");
/* harmony import */ var _meta_form_meta_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./meta-form/meta-form.component */ "./src/app/pages/configuracoes/metas/meta-form/meta-form.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








let MetasComponent = class MetasComponent {
    constructor(metaService, modalService, alertHelper) {
        this.metaService = metaService;
        this.modalService = modalService;
        this.alertHelper = alertHelper;
        this.loading = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.loadMetas();
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    openMetaForm(meta) {
        this.bsModalRef = this.modalService.show(_meta_form_meta_form_component__WEBPACK_IMPORTED_MODULE_6__["MetaFormComponent"], {
            initialState: { meta }
        });
        const component = this.bsModalRef.content;
        component.onClose
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (meta) => {
                const index = this.metas.findIndex(m => m.id == meta.id);
                if (index === -1) {
                    this.metas.push(meta);
                }
                else {
                    this.metas[index] = meta;
                }
            }
        });
    }
    deleteMeta(meta) {
        this.alertHelper.show('warning', `Tem certeza que deseja remover a meta ${meta.desc}?`, { showCancelButton: true })
            .then(confirmed => {
            if (confirmed) {
                this.loading = true;
                this.metaService.delete(meta)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$))
                    .subscribe({
                    next: (meta) => {
                        this.loading = false;
                        this.metas = this.metas.filter(m => m.id != meta.id);
                    },
                    error: () => {
                        this.loading = false;
                    }
                });
            }
        });
    }
    loadMetas() {
        this.loading = true;
        this.metaService.findAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (metas) => {
                this.loading = false;
                this.metas = metas;
            },
            error: () => {
                this.loading = false;
            }
        });
    }
};
MetasComponent.ctorParameters = () => [
    { type: src_app_services_meta_service__WEBPACK_IMPORTED_MODULE_5__["MetaService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
    { type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_4__["AlertHelper"] }
];
MetasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-metas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./metas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/metas/metas.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./metas.component.scss */ "./src/app/pages/configuracoes/metas/metas.component.scss")).default]
    })
], MetasComponent);



/***/ }),

/***/ "./src/app/pages/configuracoes/programas/programa-form/programa-form.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/configuracoes/programas/programa-form/programa-form.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvcHJvZ3JhbWFzL3Byb2dyYW1hLWZvcm0vcHJvZ3JhbWEtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/configuracoes/programas/programa-form/programa-form.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/configuracoes/programas/programa-form/programa-form.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ProgramaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramaFormComponent", function() { return ProgramaFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helpers/alert.helper */ "./src/app/helpers/alert.helper.ts");
/* harmony import */ var src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/response-error */ "./src/app/models/response-error.ts");
/* harmony import */ var src_app_services_programa_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/programa.service */ "./src/app/services/programa.service.ts");









let ProgramaFormComponent = class ProgramaFormComponent {
    constructor(bsModalRef, alertHelper, programaService) {
        this.bsModalRef = bsModalRef;
        this.alertHelper = alertHelper;
        this.programaService = programaService;
        this.loading = false;
        this.desc = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.isInvalid = false;
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        if (this.programa) {
            this.desc.setValue(this.programa.desc);
        }
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    close() {
        this.bsModalRef.hide();
    }
    submit() {
        var _a;
        this.isInvalid = this.desc.invalid;
        if (!this.isInvalid) {
            this.programa = Object.assign(Object.assign({}, this.programa), { desc: this.desc.value });
            if ((_a = this.programa) === null || _a === void 0 ? void 0 : _a.id) {
                this.updatePrograma();
            }
            else {
                this.createPrograma();
            }
        }
    }
    createPrograma() {
        this.loading = true;
        this.programaService.create(this.programa)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (programa) => {
                this.loading = false;
                this.alertHelper.toast('success', 'Programa cadastrado com sucesso.');
                this.onClose.next(programa);
                this.bsModalRef.hide();
            },
            error: (e) => {
                this.loading = false;
                if (e instanceof src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__["ResponseError"]) {
                    this.alertHelper.show('error', e.getMessage(), {
                        confirmButtonText: 'Entendi'
                    });
                }
            }
        });
    }
    updatePrograma() {
        this.loading = true;
        this.programaService.update(this.programa)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (programa) => {
                this.loading = false;
                this.alertHelper.toast('success', 'Programa atualizado com sucesso.');
                this.onClose.next(programa);
                this.bsModalRef.hide();
            },
            error: () => {
                this.loading = false;
            }
        });
    }
};
ProgramaFormComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
    { type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__["AlertHelper"] },
    { type: src_app_services_programa_service__WEBPACK_IMPORTED_MODULE_8__["ProgramaService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgramaFormComponent.prototype, "programa", void 0);
ProgramaFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-programa-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./programa-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/programas/programa-form/programa-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./programa-form.component.scss */ "./src/app/pages/configuracoes/programas/programa-form/programa-form.component.scss")).default]
    })
], ProgramaFormComponent);



/***/ }),

/***/ "./src/app/pages/configuracoes/programas/programas.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/configuracoes/programas/programas.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvcHJvZ3JhbWFzL3Byb2dyYW1hcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/configuracoes/programas/programas.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/configuracoes/programas/programas.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProgramasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramasComponent", function() { return ProgramasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/helpers/alert.helper */ "./src/app/helpers/alert.helper.ts");
/* harmony import */ var src_app_services_programa_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/programa.service */ "./src/app/services/programa.service.ts");
/* harmony import */ var _programa_form_programa_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./programa-form/programa-form.component */ "./src/app/pages/configuracoes/programas/programa-form/programa-form.component.ts");








let ProgramasComponent = class ProgramasComponent {
    constructor(programaService, modalService, alertHelper) {
        this.programaService = programaService;
        this.modalService = modalService;
        this.alertHelper = alertHelper;
        this.loading = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.loadProgramas();
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    openProgramaForm(programa) {
        this.bsModalRef = this.modalService.show(_programa_form_programa_form_component__WEBPACK_IMPORTED_MODULE_7__["ProgramaFormComponent"], {
            initialState: { programa }
        });
        const component = this.bsModalRef.content;
        component.onClose
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (programa) => {
                const index = this.programas.findIndex(m => m.id == programa.id);
                if (index === -1) {
                    this.programas.push(programa);
                }
                else {
                    this.programas[index] = programa;
                }
            }
        });
    }
    deletePrograma(programa) {
        this.alertHelper.show('warning', `Tem certeza que deseja remover o programa ${programa.desc}?`, { showCancelButton: true })
            .then(confirmed => {
            if (confirmed) {
                this.loading = true;
                this.programaService.delete(programa)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
                    .subscribe({
                    next: (programa) => {
                        this.loading = false;
                        this.programas = this.programas.filter(m => m.id != programa.id);
                    },
                    error: () => {
                        this.loading = false;
                    }
                });
            }
        });
    }
    loadProgramas() {
        this.loading = true;
        this.programaService.findAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (programas) => {
                this.loading = false;
                this.programas = programas;
            },
            error: () => {
                this.loading = false;
            }
        });
    }
};
ProgramasComponent.ctorParameters = () => [
    { type: src_app_services_programa_service__WEBPACK_IMPORTED_MODULE_6__["ProgramaService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
    { type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_5__["AlertHelper"] }
];
ProgramasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-programas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./programas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/programas/programas.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./programas.component.scss */ "./src/app/pages/configuracoes/programas/programas.component.scss")).default]
    })
], ProgramasComponent);



/***/ }),

/***/ "./src/app/pages/configuracoes/refeicoes/refeicao-form/refeicao-form.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/configuracoes/refeicoes/refeicao-form/refeicao-form.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvcmVmZWljb2VzL3JlZmVpY2FvLWZvcm0vcmVmZWljYW8tZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/configuracoes/refeicoes/refeicao-form/refeicao-form.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/configuracoes/refeicoes/refeicao-form/refeicao-form.component.ts ***!
  \****************************************************************************************/
/*! exports provided: RefeicaoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefeicaoFormComponent", function() { return RefeicaoFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helpers/alert.helper */ "./src/app/helpers/alert.helper.ts");
/* harmony import */ var src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/response-error */ "./src/app/models/response-error.ts");
/* harmony import */ var src_app_services_refeicao_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/refeicao.service */ "./src/app/services/refeicao.service.ts");









let RefeicaoFormComponent = class RefeicaoFormComponent {
    constructor(bsModalRef, alertHelper, refeicaoService) {
        this.bsModalRef = bsModalRef;
        this.alertHelper = alertHelper;
        this.refeicaoService = refeicaoService;
        this.loading = false;
        this.desc = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.isInvalid = false;
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        if (this.refeicao) {
            this.desc.setValue(this.refeicao.desc);
        }
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    close() {
        this.bsModalRef.hide();
    }
    submit() {
        var _a;
        this.isInvalid = this.desc.invalid;
        if (!this.isInvalid) {
            this.refeicao = Object.assign(Object.assign({}, this.refeicao), { desc: this.desc.value });
            if ((_a = this.refeicao) === null || _a === void 0 ? void 0 : _a.id) {
                this.updateRefeicao();
            }
            else {
                this.createRefeicao();
            }
        }
    }
    createRefeicao() {
        this.loading = true;
        this.refeicaoService.create(this.refeicao)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (refeicao) => {
                this.loading = false;
                this.alertHelper.toast('success', 'Refeicao cadastrado com sucesso.');
                this.onClose.next(refeicao);
                this.bsModalRef.hide();
            },
            error: (e) => {
                this.loading = false;
                if (e instanceof src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__["ResponseError"]) {
                    this.alertHelper.show('error', e.getMessage(), {
                        confirmButtonText: 'Entendi'
                    });
                }
            }
        });
    }
    updateRefeicao() {
        this.loading = true;
        this.refeicaoService.update(this.refeicao)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (refeicao) => {
                this.loading = false;
                this.alertHelper.toast('success', 'Refeicao atualizado com sucesso.');
                this.onClose.next(refeicao);
                this.bsModalRef.hide();
            },
            error: () => {
                this.loading = false;
            }
        });
    }
};
RefeicaoFormComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
    { type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__["AlertHelper"] },
    { type: src_app_services_refeicao_service__WEBPACK_IMPORTED_MODULE_8__["RefeicaoService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RefeicaoFormComponent.prototype, "refeicao", void 0);
RefeicaoFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-refeicao-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./refeicao-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/refeicoes/refeicao-form/refeicao-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./refeicao-form.component.scss */ "./src/app/pages/configuracoes/refeicoes/refeicao-form/refeicao-form.component.scss")).default]
    })
], RefeicaoFormComponent);



/***/ }),

/***/ "./src/app/pages/configuracoes/refeicoes/refeicoes.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/configuracoes/refeicoes/refeicoes.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvcmVmZWljb2VzL3JlZmVpY29lcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/configuracoes/refeicoes/refeicoes.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/configuracoes/refeicoes/refeicoes.component.ts ***!
  \**********************************************************************/
/*! exports provided: RefeicoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefeicoesComponent", function() { return RefeicoesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/helpers/alert.helper */ "./src/app/helpers/alert.helper.ts");
/* harmony import */ var src_app_services_refeicao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/refeicao.service */ "./src/app/services/refeicao.service.ts");
/* harmony import */ var _refeicao_form_refeicao_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./refeicao-form/refeicao-form.component */ "./src/app/pages/configuracoes/refeicoes/refeicao-form/refeicao-form.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








let RefeicoesComponent = class RefeicoesComponent {
    constructor(refeicaoService, modalService, alertHelper) {
        this.refeicaoService = refeicaoService;
        this.modalService = modalService;
        this.alertHelper = alertHelper;
        this.loading = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.loadRefeicoes();
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    openRefeicaoForm(refeicao) {
        this.bsModalRef = this.modalService.show(_refeicao_form_refeicao_form_component__WEBPACK_IMPORTED_MODULE_6__["RefeicaoFormComponent"], {
            initialState: { refeicao }
        });
        const component = this.bsModalRef.content;
        component.onClose
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (refeicao) => {
                const index = this.refeicoes.findIndex(m => m.id == refeicao.id);
                if (index === -1) {
                    this.refeicoes.push(refeicao);
                }
                else {
                    this.refeicoes[index] = refeicao;
                }
            }
        });
    }
    deleteRefeicao(refeicao) {
        this.alertHelper.show('warning', `Tem certeza que deseja remover a refeição ${refeicao.desc}?`, { showCancelButton: true })
            .then(confirmed => {
            if (confirmed) {
                this.loading = true;
                this.refeicaoService.delete(refeicao)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$))
                    .subscribe({
                    next: (refeicao) => {
                        this.loading = false;
                        this.refeicoes = this.refeicoes.filter(m => m.id != refeicao.id);
                    },
                    error: () => {
                        this.loading = false;
                    }
                });
            }
        });
    }
    loadRefeicoes() {
        this.loading = true;
        this.refeicaoService.findAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (refeicoes) => {
                this.loading = false;
                this.refeicoes = refeicoes;
            },
            error: () => {
                this.loading = false;
            }
        });
    }
};
RefeicoesComponent.ctorParameters = () => [
    { type: src_app_services_refeicao_service__WEBPACK_IMPORTED_MODULE_5__["RefeicaoService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
    { type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_4__["AlertHelper"] }
];
RefeicoesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-refeicoes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./refeicoes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/refeicoes/refeicoes.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./refeicoes.component.scss */ "./src/app/pages/configuracoes/refeicoes/refeicoes.component.scss")).default]
    })
], RefeicoesComponent);



/***/ }),

/***/ "./src/app/pages/configuracoes/treinos/item-treino-form/item-treino-form.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/configuracoes/treinos/item-treino-form/item-treino-form.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-thumbnail {\n  max-height: 150px;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29uZmlndXJhY29lcy90cmVpbm9zL2l0ZW0tdHJlaW5vLWZvcm0vQzpcXFVzZXJzXFx1c2VyXFxEb2N1bWVudHNcXEIyQiBIZWFsdGhcXGRhc2hib2FyZC1iMmItaGVhbHRoL3NyY1xcYXBwXFxwYWdlc1xcY29uZmlndXJhY29lc1xcdHJlaW5vc1xcaXRlbS10cmVpbm8tZm9ybVxcaXRlbS10cmVpbm8tZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29uZmlndXJhY29lcy90cmVpbm9zL2l0ZW0tdHJlaW5vLWZvcm0vaXRlbS10cmVpbm8tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvdHJlaW5vcy9pdGVtLXRyZWluby1mb3JtL2l0ZW0tdHJlaW5vLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXRodW1ibmFpbCB7XHJcbiAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4iLCIuaW1nLXRodW1ibmFpbCB7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/configuracoes/treinos/item-treino-form/item-treino-form.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/configuracoes/treinos/item-treino-form/item-treino-form.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ItemTreinoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemTreinoFormComponent", function() { return ItemTreinoFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helpers/alert.helper */ "./src/app/helpers/alert.helper.ts");
/* harmony import */ var src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/response-error */ "./src/app/models/response-error.ts");
/* harmony import */ var src_app_services_treino_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/treino.service */ "./src/app/services/treino.service.ts");









let ItemTreinoFormComponent = class ItemTreinoFormComponent {
    constructor(bsModalRef, alertHelper, treinoService) {
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
    ngOnInit() {
        if (this.item) {
            this.desc.setValue(this.item.desc);
            this.urlImg = this.item.url_img;
        }
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    close() {
        this.bsModalRef.hide();
    }
    imageChanged(event) {
        this.fileImg = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            var _a;
            this.urlImg = reader.result.toString();
            if ((_a = this.item) === null || _a === void 0 ? void 0 : _a.id) {
                this.uploadImg();
            }
        };
        reader.readAsDataURL(this.fileImg);
    }
    submit() {
        var _a, _b;
        this.isInvalid = this.desc.invalid;
        if (((_a = this.item) === null || _a === void 0 ? void 0 : _a.id) == undefined && this.fileImg == undefined) {
            this.isInvalid = true;
        }
        if (!this.isInvalid) {
            this.item = Object.assign(Object.assign({}, this.item), { desc: this.desc.value });
            if ((_b = this.item) === null || _b === void 0 ? void 0 : _b.id) {
                this.updateItem();
            }
            else {
                this.item.file_img = this.fileImg;
                this.createItem();
            }
        }
    }
    createItem() {
        this.loading = true;
        this.item.metodologia = this.metodologia.value;
        this.item.intervalo = this.intervalo.value;
        this.treinoService.createItem(this.item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (item) => {
                this.loading = false;
                this.alertHelper.toast('success', 'Item cadastrado com sucesso.');
                this.onClose.next(item);
                this.bsModalRef.hide();
            },
            error: (e) => {
                this.loading = false;
                if (e instanceof src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__["ResponseError"]) {
                    this.alertHelper.show('error', e.getMessage(), {
                        confirmButtonText: 'Entendi'
                    });
                }
            }
        });
    }
    updateItem() {
        this.loading = true;
        this.treinoService.updateItem(this.item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (item) => {
                this.loading = false;
                this.alertHelper.toast('success', 'Item atualizado com sucesso.');
                this.onClose.next(item);
                this.bsModalRef.hide();
            },
            error: () => {
                this.loading = false;
            }
        });
    }
    uploadImg() {
        var _a;
        this.loading = true;
        this.treinoService.uploadImg((_a = this.item) === null || _a === void 0 ? void 0 : _a.id, this.fileImg)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (item) => {
                this.loading = false;
                this.alertHelper.toast('success', 'Imagem atualizada com sucesso.');
                this.onClose.next(item);
            },
            error: () => {
                this.loading = false;
            }
        });
    }
};
ItemTreinoFormComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
    { type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__["AlertHelper"] },
    { type: src_app_services_treino_service__WEBPACK_IMPORTED_MODULE_8__["TreinoService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ItemTreinoFormComponent.prototype, "item", void 0);
ItemTreinoFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-treino-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-treino-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/treinos/item-treino-form/item-treino-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-treino-form.component.scss */ "./src/app/pages/configuracoes/treinos/item-treino-form/item-treino-form.component.scss")).default]
    })
], ItemTreinoFormComponent);



/***/ }),

/***/ "./src/app/pages/configuracoes/treinos/treino-form/treino-form.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/configuracoes/treinos/treino-form/treino-form.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvdHJlaW5vcy90cmVpbm8tZm9ybS90cmVpbm8tZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/configuracoes/treinos/treino-form/treino-form.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/configuracoes/treinos/treino-form/treino-form.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TreinoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreinoFormComponent", function() { return TreinoFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helpers/alert.helper */ "./src/app/helpers/alert.helper.ts");
/* harmony import */ var src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/response-error */ "./src/app/models/response-error.ts");
/* harmony import */ var src_app_services_treino_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/treino.service */ "./src/app/services/treino.service.ts");









let TreinoFormComponent = class TreinoFormComponent {
    constructor(bsModalRef, alertHelper, treinoService) {
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
    ngOnInit() {
        if (this.treino) {
            this.programaId.setValue(this.treino.programa_id);
            this.itemId.setValue(this.treino.item_id);
            this.mes.setValue(this.treino.mes);
            this.dia.setValue(this.treino.dia);
        }
        this.dias = [
            {
                id: 1,
                nome: "Domingo",
            },
            {
                id: 2,
                nome: "Segunda",
            },
            {
                id: 3,
                nome: "Terça",
            },
            {
                id: 4,
                nome: "Quarta",
            },
            {
                id: 5,
                nome: "Quinta",
            },
            {
                id: 6,
                nome: "Sexta",
            },
            {
                id: 7,
                nome: "Sábado",
            },
        ];
        this.meses = [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
        ];
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    close() {
        this.bsModalRef.hide();
    }
    submit() {
        var _a;
        this.isInvalid = this.programaId.invalid
            || this.itemId.invalid
            || this.mes.invalid
            || this.dia.invalid;
        if (!this.isInvalid) {
            const data = {
                programa_id: this.programaId.value,
                item_id: this.itemId.value,
                mes: this.mes.value,
                dia: this.dia.value,
            };
            if ((_a = this.treino) === null || _a === void 0 ? void 0 : _a.id) {
                data.id = this.treino.id;
                this.updateTreino(data);
            }
            else {
                this.createTreino(data);
            }
        }
    }
    createTreino(data) {
        this.loading = true;
        this.treinoService.create(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (treino) => {
                this.loading = false;
                this.treino = treino;
                this.alertHelper.toast('success', 'Treino cadastrado com sucesso.');
                this.onClose.next(treino);
                this.bsModalRef.hide();
            },
            error: (e) => {
                this.loading = false;
                if (e instanceof src_app_models_response_error__WEBPACK_IMPORTED_MODULE_7__["ResponseError"]) {
                    this.alertHelper.show('error', e.getMessage(), {
                        confirmButtonText: 'Entendi'
                    });
                }
            }
        });
    }
    updateTreino(data) {
        this.loading = true;
        this.treinoService.update(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (treino) => {
                this.loading = false;
                this.treino = treino;
                this.alertHelper.toast('success', 'Treino atualizado com sucesso.');
                this.onClose.next(treino);
                this.bsModalRef.hide();
            },
            error: () => {
                this.loading = false;
            }
        });
    }
};
TreinoFormComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
    { type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_6__["AlertHelper"] },
    { type: src_app_services_treino_service__WEBPACK_IMPORTED_MODULE_8__["TreinoService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TreinoFormComponent.prototype, "treino", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TreinoFormComponent.prototype, "itens", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TreinoFormComponent.prototype, "programas", void 0);
TreinoFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-treino-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./treino-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/treinos/treino-form/treino-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./treino-form.component.scss */ "./src/app/pages/configuracoes/treinos/treino-form/treino-form.component.scss")).default]
    })
], TreinoFormComponent);



/***/ }),

/***/ "./src/app/pages/configuracoes/treinos/treinos.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/configuracoes/treinos/treinos.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvdHJlaW5vcy90cmVpbm9zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/configuracoes/treinos/treinos.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/configuracoes/treinos/treinos.component.ts ***!
  \******************************************************************/
/*! exports provided: TreinosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreinosComponent", function() { return TreinosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _treino_form_treino_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./treino-form/treino-form.component */ "./src/app/pages/configuracoes/treinos/treino-form/treino-form.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _item_treino_form_item_treino_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-treino-form/item-treino-form.component */ "./src/app/pages/configuracoes/treinos/item-treino-form/item-treino-form.component.ts");
/* harmony import */ var src_app_services_refeicao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/refeicao.service */ "./src/app/services/refeicao.service.ts");
/* harmony import */ var src_app_services_programa_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/programa.service */ "./src/app/services/programa.service.ts");
/* harmony import */ var src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/helpers/alert.helper */ "./src/app/helpers/alert.helper.ts");
/* harmony import */ var src_app_services_treino_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/treino.service */ "./src/app/services/treino.service.ts");











let TreinosComponent = class TreinosComponent {
    constructor(treinoService, modalService, programaService, refeicaoService, alertHelper) {
        this.treinoService = treinoService;
        this.modalService = modalService;
        this.programaService = programaService;
        this.refeicaoService = refeicaoService;
        this.alertHelper = alertHelper;
        this.loading = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.loadTreinos();
        this.loadItensTreinos();
        this.loadProgramas();
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    openTreinoForm(treino) {
        this.bsModalRef = this.modalService.show(_treino_form_treino_form_component__WEBPACK_IMPORTED_MODULE_4__["TreinoFormComponent"], {
            initialState: {
                treino,
                itens: this.itensTreino,
                programas: this.programas,
            }
        });
        const component = this.bsModalRef.content;
        component.onClose
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (treino) => {
                const index = this.treinos.findIndex(u => u.id == treino.id);
                if (index === -1) {
                    this.treinos.push(treino);
                }
                else {
                    this.treinos[index] = treino;
                }
            }
        });
    }
    openItemTreinoForm(item) {
        this.bsModalRef = this.modalService.show(_item_treino_form_item_treino_form_component__WEBPACK_IMPORTED_MODULE_6__["ItemTreinoFormComponent"], {
            initialState: { item }
        });
        const component = this.bsModalRef.content;
        component.onClose
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (treino) => {
                const index = this.itensTreino.findIndex(u => u.id == treino.id);
                if (index === -1) {
                    this.itensTreino.push(treino);
                }
                else {
                    this.itensTreino[index] = treino;
                }
            }
        });
    }
    deleteTreino(treino) {
        this.alertHelper.show('warning', `Tem certeza que deseja remover a treino #${treino.id}?`, { showCancelButton: true })
            .then(confirmed => {
            if (confirmed) {
                this.loading = true;
                this.treinoService.delete(treino)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
                    .subscribe({
                    next: (treino) => {
                        this.loading = false;
                        this.alertHelper.toast('success', 'Treino deletado com sucesso.');
                        this.treinos = this.treinos.filter(d => d.id != treino.id);
                    },
                    error: () => {
                        this.loading = false;
                    }
                });
            }
        });
    }
    deleteItemTreino(item) {
        this.alertHelper.show('warning', `Tem certeza que deseja remover o item ${item.desc}?`, { showCancelButton: true })
            .then(confirmed => {
            if (confirmed) {
                this.loading = true;
                this.treinoService.deleteItem(item)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
                    .subscribe({
                    next: (item) => {
                        this.loading = false;
                        this.alertHelper.toast('success', 'Item deletado com sucesso.');
                        this.itensTreino = this.itensTreino.filter(it => it.id != item.id);
                    },
                    error: () => {
                        this.loading = false;
                    }
                });
            }
        });
    }
    loadTreinos() {
        this.loading = true;
        this.treinoService.findAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (treinos) => {
                this.loading = false;
                this.treinos = treinos;
            },
            error: () => {
                this.loading = false;
            }
        });
    }
    loadItensTreinos() {
        this.loading = true;
        this.treinoService.findAllItems()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (treinos) => {
                this.loading = false;
                this.itensTreino = treinos;
            },
            error: () => {
                this.loading = false;
            }
        });
    }
    loadProgramas() {
        this.programaService.findAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe({
            next: (programas) => {
                this.programas = programas;
            }
        });
    }
};
TreinosComponent.ctorParameters = () => [
    { type: src_app_services_treino_service__WEBPACK_IMPORTED_MODULE_10__["TreinoService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
    { type: src_app_services_programa_service__WEBPACK_IMPORTED_MODULE_8__["ProgramaService"] },
    { type: src_app_services_refeicao_service__WEBPACK_IMPORTED_MODULE_7__["RefeicaoService"] },
    { type: src_app_helpers_alert_helper__WEBPACK_IMPORTED_MODULE_9__["AlertHelper"] }
];
TreinosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-treinos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./treinos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuracoes/treinos/treinos.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./treinos.component.scss */ "./src/app/pages/configuracoes/treinos/treinos.component.scss")).default]
    })
], TreinosComponent);



/***/ }),

/***/ "./src/app/services/dieta.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/dieta.service.ts ***!
  \*******************************************/
/*! exports provided: DietaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietaService", function() { return DietaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let DietaService = class DietaService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    findAll() {
        return this.http.get(`${this.apiUrl}/dietas`);
    }
    create(dieta) {
        return this.http.post(`${this.apiUrl}/dietas`, dieta);
    }
    update(dieta) {
        return this.http.put(`${this.apiUrl}/dietas/${dieta.id}`, dieta);
    }
    delete(dieta) {
        return this.http.delete(`${this.apiUrl}/dietas/${dieta.id}`);
    }
    findAllItems() {
        return this.http.get(`${this.apiUrl}/itens-dietas`);
    }
    createItem(item) {
        const formData = new FormData();
        formData.append('desc', item.desc);
        formData.append('file_img', item.file_img);
        return this.http.post(`${this.apiUrl}/itens-dietas`, formData);
    }
    updateItem(item) {
        return this.http.put(`${this.apiUrl}/itens-dietas/${item.id}`, item);
    }
    deleteItem(item) {
        return this.http.delete(`${this.apiUrl}/itens-dietas/${item.id}`);
    }
    uploadImg(itemId, fileImg) {
        const formData = new FormData();
        formData.append('id', itemId.toString());
        formData.append('file_img', fileImg);
        return this.http.post(`${this.apiUrl}/itens-dietas/img`, formData);
    }
};
DietaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DietaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], DietaService);



/***/ }),

/***/ "./src/app/services/doenca.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/doenca.service.ts ***!
  \********************************************/
/*! exports provided: DoencaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoencaService", function() { return DoencaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let DoencaService = class DoencaService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    findAll() {
        return this.http.get(`${this.apiUrl}/doencas`);
    }
    create(doenca) {
        return this.http.post(`${this.apiUrl}/doencas`, doenca);
    }
    update(doenca) {
        return this.http.put(`${this.apiUrl}/doencas/${doenca.id}`, doenca);
    }
    delete(doenca) {
        return this.http.delete(`${this.apiUrl}/doencas/${doenca.id}`);
    }
};
DoencaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DoencaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], DoencaService);



/***/ }),

/***/ "./src/app/services/frequencia-atividade.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/frequencia-atividade.service.ts ***!
  \**********************************************************/
/*! exports provided: FrequenciaAtividadeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrequenciaAtividadeService", function() { return FrequenciaAtividadeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let FrequenciaAtividadeService = class FrequenciaAtividadeService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    findAll() {
        return this.http.get(`${this.apiUrl}/frequencias-atividades`);
    }
    create(frequenciaAtividade) {
        return this.http.post(`${this.apiUrl}/frequencias-atividades`, frequenciaAtividade);
    }
    update(frequenciaAtividade) {
        return this.http.put(`${this.apiUrl}/frequencias-atividades/${frequenciaAtividade.id}`, frequenciaAtividade);
    }
    delete(frequenciaAtividade) {
        return this.http.delete(`${this.apiUrl}/frequencias-atividades/${frequenciaAtividade.id}`);
    }
};
FrequenciaAtividadeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
FrequenciaAtividadeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], FrequenciaAtividadeService);



/***/ }),

/***/ "./src/app/services/grupo-exame.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/grupo-exame.service.ts ***!
  \*************************************************/
/*! exports provided: GrupoExameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoExameService", function() { return GrupoExameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let GrupoExameService = class GrupoExameService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    findAll() {
        return this.http.get(`${this.apiUrl}/grupos-exames`);
    }
    create(grupoExame) {
        return this.http.post(`${this.apiUrl}/grupos-exames`, grupoExame);
    }
    update(grupoExame) {
        return this.http.put(`${this.apiUrl}/grupos-exames/${grupoExame.id}`, grupoExame);
    }
    delete(grupoExame) {
        return this.http.delete(`${this.apiUrl}/grupos-exames/${grupoExame.id}`);
    }
};
GrupoExameService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
GrupoExameService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], GrupoExameService);



/***/ }),

/***/ "./src/app/services/imc.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/imc.service.ts ***!
  \*****************************************/
/*! exports provided: IMCService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMCService", function() { return IMCService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let IMCService = class IMCService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    findAll() {
        return this.http.get(`${this.apiUrl}/imc`);
    }
    create(imc) {
        return this.http.post(`${this.apiUrl}/imc`, imc);
    }
    update(imc) {
        return this.http.put(`${this.apiUrl}/imc/${imc.id}`, imc);
    }
    delete(imc) {
        return this.http.delete(`${this.apiUrl}/imc/${imc.id}`);
    }
};
IMCService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
IMCService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], IMCService);



/***/ }),

/***/ "./src/app/services/meta.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/meta.service.ts ***!
  \******************************************/
/*! exports provided: MetaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaService", function() { return MetaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




let MetaService = class MetaService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    findAll() {
        return this.http.get(`${this.apiUrl}/metas`);
    }
    create(meta) {
        return this.http.post(`${this.apiUrl}/metas`, meta);
    }
    update(meta) {
        return this.http.put(`${this.apiUrl}/metas/${meta.id}`, meta);
    }
    delete(meta) {
        return this.http.delete(`${this.apiUrl}/metas/${meta.id}`);
    }
};
MetaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
MetaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MetaService);



/***/ }),

/***/ "./src/app/services/programa.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/programa.service.ts ***!
  \**********************************************/
/*! exports provided: ProgramaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramaService", function() { return ProgramaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




let ProgramaService = class ProgramaService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    findAll() {
        return this.http.get(`${this.apiUrl}/programas`);
    }
    create(programa) {
        return this.http.post(`${this.apiUrl}/programas`, programa);
    }
    update(programa) {
        return this.http.put(`${this.apiUrl}/programas/${programa.id}`, programa);
    }
    delete(programa) {
        return this.http.delete(`${this.apiUrl}/programas/${programa.id}`);
    }
};
ProgramaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ProgramaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProgramaService);



/***/ }),

/***/ "./src/app/services/refeicao.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/refeicao.service.ts ***!
  \**********************************************/
/*! exports provided: RefeicaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefeicaoService", function() { return RefeicaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




let RefeicaoService = class RefeicaoService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    findAll() {
        return this.http.get(`${this.apiUrl}/refeicoes`);
    }
    create(refeicao) {
        return this.http.post(`${this.apiUrl}/refeicoes`, refeicao);
    }
    update(refeicao) {
        return this.http.put(`${this.apiUrl}/refeicoes/${refeicao.id}`, refeicao);
    }
    delete(refeicao) {
        return this.http.delete(`${this.apiUrl}/refeicoes/${refeicao.id}`);
    }
};
RefeicaoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
RefeicaoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RefeicaoService);



/***/ }),

/***/ "./src/app/services/treino.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/treino.service.ts ***!
  \********************************************/
/*! exports provided: TreinoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreinoService", function() { return TreinoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let TreinoService = class TreinoService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    findAll() {
        return this.http.get(`${this.apiUrl}/treinos`);
    }
    create(treino) {
        return this.http.post(`${this.apiUrl}/treinos`, treino);
    }
    update(treino) {
        return this.http.put(`${this.apiUrl}/treinos/${treino.id}`, treino);
    }
    delete(treino) {
        return this.http.delete(`${this.apiUrl}/treinos/${treino.id}`);
    }
    findAllItems() {
        return this.http.get(`${this.apiUrl}/itens-treinos`);
    }
    createItem(item) {
        const formData = new FormData();
        formData.append('desc', item.desc);
        formData.append('file_img', item.file_img);
        formData.append('metodologia', item.metodologia);
        formData.append('intervalo', item.intervalo);
        return this.http.post(`${this.apiUrl}/itens-treinos`, formData);
    }
    updateItem(item) {
        return this.http.put(`${this.apiUrl}/itens-treinos/${item.id}`, item);
    }
    deleteItem(item) {
        return this.http.delete(`${this.apiUrl}/itens-treinos/${item.id}`);
    }
    uploadImg(itemId, fileImg) {
        const formData = new FormData();
        formData.append('id', itemId.toString());
        formData.append('file_img', fileImg);
        return this.http.post(`${this.apiUrl}/itens-treinos/img`, formData);
    }
};
TreinoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
TreinoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], TreinoService);



/***/ })

}]);
//# sourceMappingURL=pages-configuracoes-configuracoes-module-es2015.js.map