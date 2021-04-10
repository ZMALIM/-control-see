import { FeFactory } from "@fe/factory/fe-factory";
import { Soap } from "@fe/ws/soap";
import { XMLSerializer } from "@fe/serializer";
import { XMLSigner } from "@fe/signer";
import { WSSenderResolver } from "@fe/factory/sender-resolver";
import { XmlBuilderResolver } from "@fe/factory/builder-resolver";
import { Pdf } from "@fe/pdf";
export class See {
    constructor() {
        this.factory = new FeFactory();
        this.wsSoap = new Soap();
        this.signer = new XMLSigner();
        this.serializer = new XMLSerializer();
        this.pdfBuilder = new Pdf();
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
        const buildResolver = new XmlBuilderResolver();
        this.factory.builder = buildResolver.find(document.tipoDocumento);
        return this.factory.getXmlSigned(document);
    }
    async send(document) {
        await this.configureFactory(document.tipoDocumento);
        return this.factory.send(document);
    }
    getPdf(document) {
        return this.factory.getPdf(document);
    }
    async sendXml(document) {
        await this.configureFactory(document.documentType);
        return this.factory.sendXml(document);
    }
    async configureFactory(documentType) {
        const builderResolver = new XmlBuilderResolver();
        const senderResolver = new WSSenderResolver(await this.wsSoap.client);
        this.factory.builder = builderResolver.find(documentType);
        this.factory.sender = senderResolver.find(documentType);
    }
}
//# sourceMappingURL=index.js.map