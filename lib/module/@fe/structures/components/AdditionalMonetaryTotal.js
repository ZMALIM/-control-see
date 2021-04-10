export class AdditionalMonetaryTotal {
    constructor(amt) {
        this.id = amt.id;
        this.payableAmount = amt.payableAmount;
        this.referenceAmount = amt.referenceAmount;
        this.totalAmount = amt.totalAmount;
        this.percent = amt.percent;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get payableAmount() {
        return this._payableAmount;
    }
    set payableAmount(pa) {
        this._payableAmount = pa;
    }
    get referenceAmount() {
        return this._referenceAmount;
    }
    set referenceAmount(ra) {
        this._referenceAmount = ra;
    }
    get totalAmount() {
        return this._totalAmount;
    }
    set totalAmount(ta) {
        this._totalAmount = ta;
    }
    get percent() {
        return this._percent;
    }
    set percent(percent) {
        this._percent = percent;
    }
}
//# sourceMappingURL=AdditionalMonetaryTotal.js.map