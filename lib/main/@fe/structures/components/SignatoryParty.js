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
exports.SignatoryParty = void 0;
const xml_serializer_ts_1 = require("xml-serializer-ts");
const constants_1 = require("@fe/common/constants");
const PartyIdentification_1 = require("./PartyIdentification");
const PartyName_1 = require("./PartyName");
const { CAC } = constants_1.prefix;
let SignatoryParty = class SignatoryParty {
    constructor(sp) {
        this.partyIdentification = sp.partyIdentification;
        this.partyName = sp.partyName;
    }
    get partyIdentification() {
        return this._partyIdentification;
    }
    set partyIdentification(partyIdentification) {
        this._partyIdentification = partyIdentification;
    }
    get partyName() {
        return this._partyName;
    }
    set partyName(partyName) {
        this._partyName = partyName;
    }
};
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CAC, name: 'PartyIdentification' }),
    __metadata("design:type", PartyIdentification_1.PartyIdentification),
    __metadata("design:paramtypes", [PartyIdentification_1.PartyIdentification])
], SignatoryParty.prototype, "partyIdentification", null);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CAC, name: 'PartyName' }),
    __metadata("design:type", PartyName_1.PartyName),
    __metadata("design:paramtypes", [PartyName_1.PartyName])
], SignatoryParty.prototype, "partyName", null);
SignatoryParty = __decorate([
    xml_serializer_ts_1.XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [SignatoryParty])
], SignatoryParty);
exports.SignatoryParty = SignatoryParty;
//# sourceMappingURL=SignatoryParty.js.map