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
Object.defineProperty(exports, "__esModule", { value: true });
exports.See = void 0;
const fe_factory_1 = require("@fe/factory/fe-factory");
const soap_1 = require("@fe/ws/soap");
const serializer_1 = require("@fe/serializer");
const signer_1 = require("@fe/signer");
const sender_resolver_1 = require("@fe/factory/sender-resolver");
const builder_resolver_1 = require("@fe/factory/builder-resolver");
const pdf_1 = require("@fe/pdf");
class See {
    constructor() {
        this.factory = new fe_factory_1.FeFactory();
        this.wsSoap = new soap_1.Soap();
        this.signer = new signer_1.XMLSigner();
        this.serializer = new serializer_1.XMLSerializer();
        this.pdfBuilder = new pdf_1.Pdf();
        this.factory.pdfBuilder = this.pdfBuilder;
        this.factory.signer = this.signer;
        this.factory.serializer = this.serializer;
    }
    set wsConfig(wsConfig) {
        this.wsSoap.wsConfig = wsConfig;
    }
    set signedConfig(config) {
        this.signer.config = config;
    }
    set pdfConfig(config) {
        this.pdfBuilder.config = config;
    }
    getXmlSigned(document) {
        const buildResolver = new builder_resolver_1.XmlBuilderResolver();
        this.factory.builder = buildResolver.find(document.tipoDocumento);
        return this.factory.getXmlSigned(document);
    }
    send(document) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.configureFactory(document.tipoDocumento);
            return this.factory.send(document);
        });
    }
    getPdf(document) {
        return this.factory.getPdf(document);
    }
    sendXml(document) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.configureFactory(document.documentType);
            return this.factory.sendXml(document);
        });
    }
    configureFactory(documentType) {
        return __awaiter(this, void 0, void 0, function* () {
            const builderResolver = new builder_resolver_1.XmlBuilderResolver();
            const senderResolver = new sender_resolver_1.WSSenderResolver(yield this.wsSoap.client);
            this.factory.builder = builderResolver.find(documentType);
            this.factory.sender = senderResolver.find(documentType);
        });
    }
}
exports.See = See;
//# sourceMappingURL=index.js.map