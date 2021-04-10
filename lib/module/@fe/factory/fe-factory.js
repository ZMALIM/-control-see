import { plainToClass } from 'class-transformer';
import { Response, XML, PDF, Error } from '@fe/common/exchange';
import { CPE } from '@fe/common/models';
export class FeFactory {
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
    async send(document) {
        try {
            const response = new Response();
            const documentElectronic = plainToClass(CPE, document);
            response.xml = await this.getXmlSigned(document);
            if (!response.xml.success) {
                throw response.xml;
            }
            const zipResponse = await this.serializer.zipCompress(response.xml.xmlDocument, documentElectronic.fileName());
            if (!zipResponse.success) {
                throw zipResponse;
            }
            const wsResponse = await this.sender.send({
                fileName: documentElectronic.fileName(),
                zip: zipResponse.contentFile
            });
            if (!wsResponse.success)
                throw wsResponse;
            response.cdr = await this.serializer.documentResponseGenerate(wsResponse.constancyOfRecepty);
            response.pdf = await this.getPdf(document);
            this.lastFile = {
                ...this.lastFile,
                ZIP: {
                    fileName: documentElectronic.fileName(),
                    contentFile: zipResponse.contentFile
                },
                CDR: {
                    fileName: response.cdr.fileName,
                    contentFile: wsResponse.constancyOfRecepty
                }
            };
            return response;
        }
        catch (e) {
            throw new Error(e, 'Generar, Firmar, Comprimir, Enviar CPE.');
        }
    }
    async sendXml(document) {
        try {
            const wsResponse = await this.sender.send({
                fileName: document.fileName,
                zip: document.zip
            });
            if (!wsResponse.success) {
                throw wsResponse;
            }
            return this.serializer.documentResponseGenerate(wsResponse.constancyOfRecepty);
        }
        catch (e) {
            throw new Error(e, 'Enviar CPE.');
        }
    }
    async getPdf(document) {
        try {
            let pdf = new PDF();
            const documentElectronic = plainToClass(CPE, document);
            const zipResponse = await this.pdfBuilder.generate(document);
            if (!zipResponse.success) {
                throw zipResponse;
            }
            const { contentFile, ...rest } = zipResponse;
            pdf = { ...rest };
            pdf.fileName = documentElectronic.fileName();
            this.lastFile = {
                ...this.lastFile,
                PDF: {
                    fileName: documentElectronic.fileName(),
                    contentFile: zipResponse.contentFile
                }
            };
            return pdf;
        }
        catch (e) {
            throw new Error(e, 'Generar Pdf.');
        }
    }
    async getXmlSigned(document) {
        try {
            let xml = new XML();
            const documentElectronic = plainToClass(CPE, document);
            const xmlDocument = this.builder.generate(document);
            const xmlGenerate = this.serializer.xmlGenerate(xmlDocument);
            if (!xmlGenerate.success) {
                throw xmlGenerate;
            }
            const responseXml = await this.signer.xml(xmlGenerate.xmlDocument);
            if (!responseXml.success) {
                throw xml;
            }
            xml = { ...responseXml };
            xml.fileName = documentElectronic.fileName();
            this.lastFile = {
                ...this.lastFile,
                XML: {
                    fileName: documentElectronic.fileName(),
                    contentFile: responseXml.xmlDocument
                }
            };
            return xml;
        }
        catch (e) {
            throw new Error(e, 'Generar Xml.');
        }
    }
}
//# sourceMappingURL=fe-factory.js.map