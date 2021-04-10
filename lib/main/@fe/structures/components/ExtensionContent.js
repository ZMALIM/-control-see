"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionContent = void 0;
const xml_serializer_ts_1 = require("xml-serializer-ts");
const constants_1 = require("@fe/common/constants");
const AdditionalInformation_1 = require("./AdditionalInformation");
const { CAC } = constants_1.prefix;
let ExtensionContent = class ExtensionContent {
    constructor() {
        this.additionalInformation = new AdditionalInformation_1.AdditionalInformation();
    }
    get additionalInformation() {
        return this._additionalInformation;
    }
    set additionalInformation(additionalInformation) {
        this._additionalInformation = additionalInformation;
    }
};
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CAC, name: 'AdditionalInformation' }),
    __metadata("design:type", AdditionalInformation_1.AdditionalInformation),
    __metadata("design:paramtypes", [AdditionalInformation_1.AdditionalInformation])
], ExtensionContent.prototype, "additionalInformation", null);
ExtensionContent = __decorate([
    xml_serializer_ts_1.XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [])
], ExtensionContent);
exports.ExtensionContent = ExtensionContent;
//# sourceMappingURL=ExtensionContent.js.map