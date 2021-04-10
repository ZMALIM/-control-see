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
import { AddressTypeCode } from './AddressTypeCode';
import { AddressLine } from './AddressLine';
import { Country } from './Country';
const { CAC, CBC } = prefix;
let RegistrationAddress = class RegistrationAddress {
    constructor(ra) {
        this.addressTypeCode = ra.addressTypeCode;
        this.cityName = ra.cityName;
        this.countrySubentity = ra.countrySubentity;
        this.district = ra.district;
        this.addressLine = ra.addressLine;
        this.country = ra.country;
    }
};
__decorate([
    XMLChild({ namespace: CBC, name: 'AddressTypeCode' }),
    __metadata("design:type", AddressTypeCode)
], RegistrationAddress.prototype, "addressTypeCode", void 0);
__decorate([
    XMLChild({ namespace: CBC, name: 'CityName' }),
    __metadata("design:type", String)
], RegistrationAddress.prototype, "cityName", void 0);
__decorate([
    XMLChild({ namespace: CBC, name: 'CountrySubentity' }),
    __metadata("design:type", String)
], RegistrationAddress.prototype, "countrySubentity", void 0);
__decorate([
    XMLChild({ namespace: CBC, name: 'District' }),
    __metadata("design:type", String)
], RegistrationAddress.prototype, "district", void 0);
__decorate([
    XMLChild({ namespace: CAC, name: 'AddressLine' }),
    __metadata("design:type", AddressLine)
], RegistrationAddress.prototype, "addressLine", void 0);
__decorate([
    XMLChild({ namespace: CAC, name: 'Country' }),
    __metadata("design:type", Country)
], RegistrationAddress.prototype, "country", void 0);
RegistrationAddress = __decorate([
    XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [RegistrationAddress])
], RegistrationAddress);
export { RegistrationAddress };
//# sourceMappingURL=RegistrationAddress.js.map