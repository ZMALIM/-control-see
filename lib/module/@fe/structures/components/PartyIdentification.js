var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { XMLElement, XMLChild, XMLAttribute } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';
import { PartyIdentificationId } from './PartyIdentificationId';
const { CAC, CBC } = prefix;
let PartyIdentification = class PartyIdentification {
    constructor(pi) {
        this.id = pi.id;
    }
};
__decorate([
    XMLChild({ namespace: CBC, name: 'ID' }),
    __metadata("design:type", PartyIdentificationId)
], PartyIdentification.prototype, "id", void 0);
__decorate([
    XMLAttribute({ namespace: CBC }),
    __metadata("design:type", String)
], PartyIdentification.prototype, "schemeID", void 0);
__decorate([
    XMLAttribute({ namespace: CBC }),
    __metadata("design:type", String)
], PartyIdentification.prototype, "schemeName", void 0);
__decorate([
    XMLAttribute({ namespace: CBC }),
    __metadata("design:type", String)
], PartyIdentification.prototype, "schemeAgencyName", void 0);
__decorate([
    XMLAttribute({ namespace: CBC }),
    __metadata("design:type", String)
], PartyIdentification.prototype, "schemeURI", void 0);
PartyIdentification = __decorate([
    XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [PartyIdentification])
], PartyIdentification);
export { PartyIdentification };
//# sourceMappingURL=PartyIdentification.js.map