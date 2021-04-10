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
exports.DespatchDocumentReference = void 0;
const xml_serializer_ts_1 = require("xml-serializer-ts");
const constants_1 = require("@fe/common/constants");
const DocumentTypeCode_1 = require("./DocumentTypeCode");
const { CAC, CBC } = constants_1.prefix;
let DespatchDocumentReference = class DespatchDocumentReference {
    constructor(ddr) {
        this.id = ddr.id;
        this.documentTypeCode = ddr.documentTypeCode;
    }
};
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'ID' }),
    __metadata("design:type", String)
], DespatchDocumentReference.prototype, "id", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'DocumentTypeCode' }),
    __metadata("design:type", DocumentTypeCode_1.DocumentTypeCode)
], DespatchDocumentReference.prototype, "documentTypeCode", void 0);
DespatchDocumentReference = __decorate([
    xml_serializer_ts_1.XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [Object])
], DespatchDocumentReference);
exports.DespatchDocumentReference = DespatchDocumentReference;
//# sourceMappingURL=DespatchDocumentReference.js.map