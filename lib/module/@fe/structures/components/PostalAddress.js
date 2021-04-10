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
exports.PostalAddress = void 0;
const xml_serializer_ts_1 = require("xml-serializer-ts");
const constants_1 = require("@fe/common/constants");
const Country_1 = require("./Country");
const { CAC, CBC } = constants_1.prefix;
let PostalAddress = class PostalAddress {
    constructor(pa) {
        this.id = pa.id;
        this.streetName = pa.streetName;
        this.citySubdivisionName = pa.citySubdivisionName;
        this.cityName = pa.cityName;
        this.countrySubentity = pa.countrySubentity;
        this.district = pa.district;
        this.country = pa.country;
    }
};
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'ID' }),
    __metadata("design:type", String)
], PostalAddress.prototype, "id", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'StreetName' }),
    __metadata("design:type", String)
], PostalAddress.prototype, "streetName", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'CitySubdivisionName' }),
    __metadata("design:type", String)
], PostalAddress.prototype, "citySubdivisionName", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'CityName' }),
    __metadata("design:type", String)
], PostalAddress.prototype, "cityName", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'CountrySubentity' }),
    __metadata("design:type", String)
], PostalAddress.prototype, "countrySubentity", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'District' }),
    __metadata("design:type", String)
], PostalAddress.prototype, "district", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CAC, name: 'Country' }),
    __metadata("design:type", Country_1.Country)
], PostalAddress.prototype, "country", void 0);
PostalAddress = __decorate([
    xml_serializer_ts_1.XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [PostalAddress])
], PostalAddress);
exports.PostalAddress = PostalAddress;
//# sourceMappingURL=PostalAddress.js.map