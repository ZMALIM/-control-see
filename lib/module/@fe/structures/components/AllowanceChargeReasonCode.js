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
let AllowanceChargeReasonCode = class AllowanceChargeReasonCode {
    constructor(atc) {
        this.listAgencyName = atc.listAgencyName || 'PE:SUNAT';
        this.listName = atc.listName || 'Cargo/descuento';
        this.listURI = atc.listURI || 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo53';
        this.value = atc.value;
    }
};
__decorate([
    XMLAttribute({ name: '' }),
    __metadata("design:type", String)
], AllowanceChargeReasonCode.prototype, "listAgencyName", void 0);
__decorate([
    XMLAttribute({ name: '' }),
    __metadata("design:type", String)
], AllowanceChargeReasonCode.prototype, "listName", void 0);
__decorate([
    XMLAttribute({ name: '' }),
    __metadata("design:type", String)
], AllowanceChargeReasonCode.prototype, "listURI", void 0);
__decorate([
    XMLText({ name: '' }),
    __metadata("design:type", String)
], AllowanceChargeReasonCode.prototype, "value", void 0);
AllowanceChargeReasonCode = __decorate([
    XMLElement({ root: CBC }),
    __metadata("design:paramtypes", [AllowanceChargeReasonCode])
], AllowanceChargeReasonCode);
export { AllowanceChargeReasonCode };
//# sourceMappingURL=AllowanceChargeReasonCode.js.map