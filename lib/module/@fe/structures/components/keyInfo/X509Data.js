var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { XMLChild } from 'xml-serializer-ts';
export class X509Data {
    constructor(x509Data) {
        this.X509SubjectName = x509Data.X509SubjectName;
        this.X509Certificate = x509Data.X509Certificate;
    }
}
__decorate([
    XMLChild({ namespace: '' }),
    __metadata("design:type", String)
], X509Data.prototype, "X509SubjectName", void 0);
__decorate([
    XMLChild({ namespace: '' }),
    __metadata("design:type", String)
], X509Data.prototype, "X509Certificate", void 0);
//# sourceMappingURL=X509Data.js.map