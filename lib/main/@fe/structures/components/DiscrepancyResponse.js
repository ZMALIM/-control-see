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
exports.DiscrepancyResponse = void 0;
const xml_serializer_ts_1 = require("xml-serializer-ts");
const constants_1 = require("@fe/common/constants");
const { CAC, CBC } = constants_1.prefix;
let DiscrepancyResponse = class DiscrepancyResponse {
    constructor(dr) {
        this.referenceID = dr.referenceID;
        this.responseCode = dr.responseCode;
        this.description = dr.description;
    }
    get referenceID() {
        return this._referenceId;
    }
    set referenceID(referenceId) {
        this._referenceId = referenceId;
    }
    get responseCode() {
        return this._responseCode;
    }
    set responseCode(responseCode) {
        this._responseCode = responseCode;
    }
    get description() {
        return this._description;
    }
    set description(description) {
        this._description = description;
    }
};
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'ReferenceID' }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], DiscrepancyResponse.prototype, "referenceID", null);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'ResponseCode' }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], DiscrepancyResponse.prototype, "responseCode", null);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'Description' }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], DiscrepancyResponse.prototype, "description", null);
DiscrepancyResponse = __decorate([
    xml_serializer_ts_1.XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [DiscrepancyResponse])
], DiscrepancyResponse);
exports.DiscrepancyResponse = DiscrepancyResponse;
//# sourceMappingURL=DiscrepancyResponse.js.map