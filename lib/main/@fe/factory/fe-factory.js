"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeFactory = void 0;
const class_transformer_1 = require("class-transformer");
const exchange_1 = require("@fe/common/exchange");
const models_1 = require("@fe/common/models");
class FeFactory {
    get builder() {
        return this._builder;
    }
    set builder(builder) {
        this._builder = builder;
    }
    get pdfBuilder() {
        return this._pdfBuilder;
    }
    set pdfBuilder(pdfBuilder) {
        this._pdfBuilder = pdfBuilder;
    }
    get sender() {
        return this._sender;
    }
    set sender(sender) {
        this._sender = sender;
    }
    get signer() {
        return this._signer;
    }
    set signer(signer) {
        this._signer = signer;
    }
    get serializer() {
        return this._serializer;
    }
    set serializer(serializer) {
        this._serializer = serializer;
    }
    get lastFile() {
        return this._lastfile;
    }
    set lastFile(lastFile) {
        this._lastfile = lastFile;
    }
    send(document) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = new exchange_1.Response();
                const documentElectronic = class_transformer_1.plainToClass(models_1.CPE, document);
                response.xml = yield this.getXmlSigned(document);
                if (!response.xml.success) {
                    throw response.xml;
                }
                const zipResponse = yield this.serializer.zipCompress(response.xml.xmlDocument, documentElectronic.fileName());
                if (!zipResponse.success) {
                    throw zipResponse;
                }
                const wsResponse = yield this.sender.send({
                    fileName: documentElectronic.fileName(),
                    zip: zipResponse.contentFile
                });
                if (!wsResponse.success)
                    throw wsResponse;
                response.cdr = yield this.serializer.documentResponseGenerate(wsResponse.constancyOfRecepty);
                response.pdf = yield this.getPdf(document);
                this.lastFile = Object.assign(Object.assign({}, this.lastFile), { ZIP: {
                        fileName: documentElectronic.fileName(),
                        contentFile: zipResponse.contentFile
                    }, CDR: {
                        fileName: response.cdr.fileName,
                        contentFile: wsResponse.constancyOfRecepty
                    } });
                return response;
            }
            catch (e) {
                throw new exchange_1.Error(e, 'Generar, Firmar, Comprimir, Enviar CPE.');
            }
        });
    }
    sendXml(document) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const wsResponse = yield this.sender.send({
                    fileName: document.fileName,
                    zip: document.zip
                });
                if (!wsResponse.success) {
                    throw wsResponse;
                }
                return this.serializer.documentResponseGenerate(wsResponse.constancyOfRecepty);
            }
            catch (e) {
                throw new exchange_1.Error(e, 'Enviar CPE.');
            }
        });
    }
    getPdf(document) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let pdf = new exchange_1.PDF();
                const documentElectronic = class_transformer_1.plainToClass(models_1.CPE, document);
                const zipResponse = yield this.pdfBuilder.generate(document);
                if (!zipResponse.success) {
                    throw zipResponse;
                }
                const { contentFile } = zipResponse, rest = __rest(zipResponse, ["contentFile"]);
                pdf = Object.assign({}, rest);
                pdf.fileName = documentElectronic.fileName();
                this.lastFile = Object.assign(Object.assign({}, this.lastFile), { PDF: {
                        fileName: documentElectronic.fileName(),
                        contentFile: zipResponse.contentFile
                    } });
                return pdf;
            }
            catch (e) {
                throw new exchange_1.Error(e, 'Generar Pdf.');
            }
        });
    }
    getXmlSigned(document) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let xml = new exchange_1.XML();
                const documentElectronic = class_transformer_1.plainToClass(models_1.CPE, document);
                const xmlDocument = this.builder.generate(document);
                const xmlGenerate = this.serializer.xmlGenerate(xmlDocument);
                if (!xmlGenerate.success) {
                    throw xmlGenerate;
                }
                const responseXml = yield this.signer.xml(xmlGenerate.xmlDocument);
                if (!responseXml.success) {
                    throw xml;
                }
                xml = Object.assign({}, responseXml);
                xml.fileName = documentElectronic.fileName();
                this.lastFile = Object.assign(Object.assign({}, this.lastFile), { XML: {
                        fileName: documentElectronic.fileName(),
                        contentFile: responseXml.xmlDocument
                    } });
                return xml;
            }
            catch (e) {
                throw new exchange_1.Error(e, 'Generar Xml.');
            }
        });
    }
}
exports.FeFactory = FeFactory;
//# sourceMappingURL=fe-factory.js.map