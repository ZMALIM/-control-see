import { SunatEmbededDespatchAdvice } from './SunatEmbededDespatchAdvice';
import { SunatCosts } from './SunatCosts';
import { SunatTransaction } from './SunatTransaction';
export class AdditionalInformation {
    constructor() {
        this.additionalMonetaryTotals = new Array();
        this.additionalProperties = new Array();
        this.sunatEmbededDespatchAdvice = new SunatEmbededDespatchAdvice();
        this.sunatTransaction = new SunatTransaction();
        this.sunatCosts = new SunatCosts();
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
//# sourceMappingURL=AdditionalInformation.js.map