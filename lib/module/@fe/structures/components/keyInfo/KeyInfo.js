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
import { X509Data } from './X509Data';
const { KEY_INFO } = prefix;
let KeyInfo = class KeyInfo {
    constructor(keyInfo) {
        this.X509Data = keyInfo.X509Data;
    }
};
__decorate([
    XMLChild({ namespace: '' }),
    __metadata("design:type", X509Data)
], KeyInfo.prototype, "X509Data", void 0);
KeyInfo = __decorate([
    XMLElement({ root: KEY_INFO }),
    __metadata("design:paramtypes", [KeyInfo])
], KeyInfo);
export { KeyInfo };
//# sourceMappingURL=KeyInfo.js.map