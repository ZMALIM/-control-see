"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdditionalInformation = void 0;
const SunatEmbededDespatchAdvice_1 = require("./SunatEmbededDespatchAdvice");
const SunatCosts_1 = require("./SunatCosts");
const SunatTransaction_1 = require("./SunatTransaction");
class AdditionalInformation {
    constructor() {
        this.additionalMonetaryTotals = new Array();
        this.additionalProperties = new Array();
        this.sunatEmbededDespatchAdvice = new SunatEmbededDespatchAdvice_1.SunatEmbededDespatchAdvice();
        this.sunatTransaction = new SunatTransaction_1.SunatTransaction();
        this.sunatCosts = new SunatCosts_1.SunatCosts();
    }
    get additionalMonetaryTotals() {
        return this._additionalMonetaryTotals;
    }
    set additionalMonetaryTotals(additionalMonetaryTotals) {
        this._additionalMonetaryTotals = additionalMonetaryTotals;
    }
    get additionalProperties() {
        return this._additionalProperties;
    }
    set additionalProperties(additionalProperties) {
        this._additionalProperties = additionalProperties;
    }
    get sunatEmbededDespatchAdvice() {
        return this._sunatEmbededDespatchAdvice;
    }
    set sunatEmbededDespatchAdvice(sunatEmbededDespatchAdvice) {
        this._sunatEmbededDespatchAdvice = sunatEmbededDespatchAdvice;
    }
    get sunatCosts() {
        return this._sunatCosts;
    }
    set sunatCosts(sunatCosts) {
        this._sunatCosts = sunatCosts;
    }
    get sunatTransaction() {
        return this._sunatTransaction;
    }
    set sunatTransaction(sunatTransaction) {
        this._sunatTransaction = sunatTransaction;
    }
}
exports.AdditionalInformation = AdditionalInformation;
//# sourceMappingURL=AdditionalInformation.js.map