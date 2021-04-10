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
const { CAC, CBC } = prefix;
let PartyName = class PartyName {
    constructor(pn) {
        this.name = pn.name;
    }
};
__decorate([
    XMLChild({ namespace: CBC, name: 'Name' }),
    __metadata("design:type", String)
], PartyName.prototype, "name", void 0);
PartyName = __decorate([
    XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [PartyName])
], PartyName);
export { PartyName };
//# sourceMappingURL=PartyName.js.map