var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { XMLElement, XMLAttribute, XMLText } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';
const { CBC } = prefix;
let TaxSchemeId = class TaxSchemeId {
    constructor(tsi) {
        this.schemeID = tsi.schemeID;
        this.schemeName = tsi.schemeName;
        this.schemeAgencyID = tsi.schemeAgencyID;
        this.schemeAgencyName = tsi.schemeAgencyName;
        this.schemeURI = tsi.schemeURI;
        this.value = tsi.value;
    }
};
__decorate([
    XMLAttribute({ namespace: '' }),
    __metadata("design:type", String)
], TaxSchemeId.prototype, "schemeID", void 0);
__decorate([
    XMLAttribute({ namespace: '' }),
    __metadata("design:type", String)
], TaxSchemeId.prototype, "schemeName", void 0);
__decorate([
    XMLAttribute({ namespace: '' }),
    __metadata("design:type", String)
], TaxSchemeId.prototype, "schemeAgencyID", void 0);
__decorate([
    XMLAttribute({ namespace: '' }),
    __metadata("design:type", String)
], TaxSchemeId.prototype, "schemeAgencyName", void 0);
__decorate([
    XMLAttribute({ namespace: '' }),
    __metadata("design:type", String)
], TaxSchemeId.prototype, "schemeURI", void 0);
__decorate([
    XMLText({ name: '' }),
    __metadata("design:type", Number)
], TaxSchemeId.prototype, "value", void 0);
TaxSchemeId = __decorate([
    XMLElement({ root: CBC }),
    __metadata("design:paramtypes", [TaxSchemeId])
], TaxSchemeId);
export { TaxSchemeId };
//# sourceMappingURL=TaxSchemeId.js.map