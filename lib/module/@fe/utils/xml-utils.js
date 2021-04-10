"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XmlUtils = void 0;
const xmldsigjs_1 = require("xmldsigjs");
const constants_1 = require("@fe/common/constants");
class XmlUtils {
    constructor(xml) {
        this.xml = xmldsigjs_1.Parse(xml);
    }
    convertCDataXml() {
        const partyNames = this.xml.getElementsByTagNameNS(constants_1.Namespaces.cac, 'PartyName');
        for (let i = 0; i < partyNames.length; i++) {
            let pName = partyNames.item(i).getElementsByTagNameNS(constants_1.Namespaces.cbc, 'Name').item(0);
            let name = pName.textContent;
            let cData = this.xml.createCDATASection(name);
            let elemName = this.xml.createElement('cbc:Name');
            elemName.appendChild(cData);
            console.log(elemName.innerHTML);
            pName.replaceChild(elemName, pName);
        }
        const registrationNames = this.xml.getElementsByTagName('cbc:RegistrationName');
        for (let i = 0; i < registrationNames.length; i++) {
            let regis = registrationNames.item(i);
            let cd = this.xml.createCDATASection(regis.textContent);
            let elem = this.xml.createElement('cbc:RegistrationName');
            elem.appendChild(cd);
            regis.replaceChild(elem, regis);
        }
        return this.xml;
    }
    get nodeHash() {
        return this.xml
            .getElementsByTagNameNS(constants_1.Namespaces.ext, 'ExtensionContent')[0]
            .getElementsByTagNameNS(constants_1.Namespaces.ds, 'Signature')[0]
            .getElementsByTagNameNS(constants_1.Namespaces.ds, 'SignedInfo')[0]
            .getElementsByTagNameNS(constants_1.Namespaces.ds, 'Reference');
    }
    getHash(reference) {
        return reference.getElementsByTagNameNS(constants_1.Namespaces.ds, 'DigestValue').item(0).textContent;
    }
    get hash() {
        let hash = '';
        for (let i = 0; i < this.nodeHash.length; i++) {
            if (!this.nodeHash.item(i).hasChildNodes()) {
                break;
            }
            hash = this.getHash(this.nodeHash.item(i));
        }
        return hash;
    }
}
exports.XmlUtils = XmlUtils;
//# sourceMappingURL=xml-utils.js.map