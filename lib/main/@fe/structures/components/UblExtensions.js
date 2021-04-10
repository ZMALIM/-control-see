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
exports.UblExtensions = void 0;
const xml_serializer_ts_1 = require("xml-serializer-ts");
const constants_1 = require("@fe/common/constants");
const UblExtension_1 = require("./UblExtension");
const { EXT } = constants_1.prefix;
let UblExtensions = class UblExtensions {
    constructor() {
        this.ublExtension = new UblExtension_1.UblExtension();
    }
};
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: EXT, name: 'UBLExtension' }),
    __metadata("design:type", UblExtension_1.UblExtension)
], UblExtensions.prototype, "ublExtension", void 0);
UblExtensions = __decorate([
    xml_serializer_ts_1.XMLElement({ root: EXT }),
    __metadata("design:paramtypes", [])
], UblExtensions);
exports.UblExtensions = UblExtensions;
//# sourceMappingURL=UblExtensions.js.map