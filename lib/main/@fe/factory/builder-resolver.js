"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XmlBuilderResolver = void 0;
const xml_1 = require("@fe/xml");
class XmlBuilderResolver {
    constructor() {
    }
    find(documentType) {
        switch (documentType) {
            case '01':
                return new xml_1.BoletaXML();
            case '03':
                return new xml_1.BoletaXML();
            default:
                return new xml_1.BoletaXML();
        }
    }
}
exports.XmlBuilderResolver = XmlBuilderResolver;
//# sourceMappingURL=builder-resolver.js.map