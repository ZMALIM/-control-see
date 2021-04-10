var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { XMLElement, XMLChild } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';
import { RegistrationAddress } from './RegistrationAddress';
const { CAC, CBC } = prefix;
let PartyLegalEntity = class PartyLegalEntity {
    constructor(ple) {
        this.registrationName = ple.registrationName;
        this.registrationAddress = ple.registrationAddress;
    }
};
__decorate([
    XMLChild({ namespace: CBC, name: 'RegistrationName' }),
    __metadata("design:type", String)
], PartyLegalEntity.prototype, "registrationName", void 0);
__decorate([
    XMLChild({ namespace: CAC, name: 'RegistrationAddress' }),
    __metadata("design:type", RegistrationAddress)
], PartyLegalEntity.prototype, "registrationAddress", void 0);
PartyLegalEntity = __decorate([
    XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [PartyLegalEntity])
], PartyLegalEntity);
export { PartyLegalEntity };
//# sourceMappingURL=PartyLegalEntity.js.map