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
let ItemClassificationCode = class ItemClassificationCode {
    constructor(acp) {
        this.listID = acp.listID;
        this.listAgencyName = acp.listAgencyName;
        this.listName = acp.listName;
        this.value = acp.value;
    }
};
__decorate([
    XMLAttribute({ namespace: '' }),
    __metadata("design:type", String)
], ItemClassificationCode.prototype, "listID", void 0);
__decorate([
    XMLAttribute({ namespace: '' }),
    __metadata("design:type", String)
], ItemClassificationCode.prototype, "listAgencyName", void 0);
__decorate([
    XMLAttribute({ namespace: '' }),
    __metadata("design:type", String)
], ItemClassificationCode.prototype, "listName", void 0);
__decorate([
    XMLText({ name: '' }),
    __metadata("design:type", String)
], ItemClassificationCode.prototype, "value", void 0);
ItemClassificationCode = __decorate([
    XMLElement({ root: CBC }),
    __metadata("design:paramtypes", [ItemClassificationCode])
], ItemClassificationCode);
export { ItemClassificationCode };
//# sourceMappingURL=ItemClassificationCode.js.map