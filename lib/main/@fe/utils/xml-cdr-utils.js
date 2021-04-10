"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XmlUtilsCDR = void 0;
const exchange_1 = require("@fe/common/exchange");
const xmlCore = require("xml-core");
class XmlUtilsCDR {
    constructor(xml) {
        this.xmlCdr = xmlCore.Parse(xml);
    }
    get applicationResponseNode() {
        return this.xmlCdr.getElementsByTagName('ar:ApplicationResponse').item(0);
    }
    get hashNode() {
        return this.applicationResponseNode
            .getElementsByTagName('ext:ExtensionContent').item(0)
            .getElementsByTagName('Signature').item(0)
            .getElementsByTagName('SignedInfo').item(0)
            .getElementsByTagName('Reference').item(0)
            .getElementsByTagName('DigestValue').item(0);
    }
    get responseNode() {
        return this.applicationResponseNode
            .getElementsByTagName('cac:DocumentResponse').item(0)
            .getElementsByTagName('cac:Response').item(0);
    }
    get statusNode() {
        return this.responseNode
            .getElementsByTagName('cac:Status');
    }
    get hashCDR() {
        return this.hashNode.textContent;
    }
    get date() {
        let date = this.applicationResponseNode.getElementsByTagName('cbc:ResponseDate').item(0).textContent.split('-');
        let time = this.applicationResponseNode.getElementsByTagName('cbc:ResponseTime').item(0).textContent.split(':');
        return new Date(Number(date[0]), Number(date[1]) - 1, Number(date[2]), Number(time[0]), Number(time[1]), Number(time[2]));
    }
    get code() {
        return this.responseNode
            .getElementsByTagName('cbc:ResponseCode').item(0)
            .textContent;
    }
    get referenceID() {
        return this.responseNode
            .getElementsByTagName('cbc:ReferenceID').item(0)
            .textContent;
    }
    get description() {
        return this.responseNode
            .getElementsByTagName('cbc:Description').item(0)
            .textContent;
    }
    get status() {
        let status = new Array();
        for (let i = 0; i < this.statusNode.length; i++) {
            if (!this.statusNode.item(i).hasChildNodes())
                break;
            status.push({
                code: this.statusNode.item(i).getElementsByTagName('cbc:StatusReasonCode').item(0).textContent,
                reason: this.statusNode.item(i).getElementsByTagName('cbc:StatusReason').item(0).textContent
            });
        }
        return status;
    }
    get reponseCDR() {
        const cdr = new exchange_1.CDR();
        cdr.hash = this.hashCDR;
        cdr.date = this.date;
        cdr.code = this.code;
        cdr.referenceID = this.referenceID;
        cdr.description = this.description;
        cdr.status = this.status;
        return cdr;
    }
}
exports.XmlUtilsCDR = XmlUtilsCDR;
//# sourceMappingURL=xml-cdr-utils.js.map