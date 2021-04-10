import { BoletaXML } from "@fe/xml";
export class XmlBuilderResolver {
    constructor() {
    }
    find(documentType) {
        switch (documentType) {
            case '01':
                return new BoletaXML();
            case '03':
                return new BoletaXML();
            default:
                return new BoletaXML();
        }
    }
}
//# sourceMappingURL=builder-resolver.js.map