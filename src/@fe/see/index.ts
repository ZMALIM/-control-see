import { FeFactory } from "@fe/factory/fe-factory";
import { Soap } from "@fe/ws/soap";
import { XMLSerializer } from "@fe/serializer";
import { XMLSigner } from "@fe/signer";
import { WSSenderResolver } from "@fe/factory/sender-resolver";
import { XmlBuilderResolver } from "@fe/factory/builder-resolver";
import { PdfBuilder, Serializer, Signer } from '@fe/common/abstract';
import { 
    SendBill, 
    CDR, 
    Response, 
    XML, 
    WSConfig, 
    SignatureConfig, 
    PdfConfig
} from "@fe/common/exchange";
import { PDF } from '@fe/common/exchange'
import { CPE } from '@fe/common/models';
import { Pdf } from "@fe/pdf";

export class See 
{
    public factory: FeFactory;
    public wsSoap: Soap;
    public serializer: Serializer;
    public signer: Signer;
    public builder: any;
    public pdfBuilder: PdfBuilder;

    /**
     * @constructor
     */
    constructor()
    {
        this.factory = new FeFactory();
        this.wsSoap = new Soap();
        this.signer = new XMLSigner();
        this.serializer = new XMLSerializer();
        this.pdfBuilder = new Pdf();
        this.factory.pdfBuilder = this.pdfBuilder;
        this.factory.signer = this.signer;
        this.factory.serializer = this.serializer;
    }

    /**
     * @description
     * Set Config For Connection
     *  Web Services SUNAT
     * @param {WSConfig} connection
     */
    public set wsConfig(wsConfig: WSConfig)
    {
        this.wsSoap.wsConfig = wsConfig; 
    }

    /**
     * @description
     * Set Config For Sigened
     * Documents Electronics
     * @param {SignatureConfig} config
     */
    public set signedConfig(config: SignatureConfig)
    {
        this.signer.config = config;
    }

    /**
     * @description
     * Set Config For Build Pdf
     * @param document 
     * @returns 
     */
    public set pdfConfig(config: PdfConfig)
    {
        this.pdfBuilder.config = config;
    }

    /**
     * @description
     * Serialize, Generate
     * And Signed Xml Document
     * @returns {XML}
     */
    public getXmlSigned(document: CPE): Promise<XML>
    {
        const buildResolver = new XmlBuilderResolver();
        this.factory.builder = buildResolver.find(document.tipoDocumento);
        return this.factory.getXmlSigned(document);
    }

    /**
     * @description
     * Serializa Documento Electronico
     * Genera Documento Electronico
     * Firma Documento Electronico
     * Envia Documento Electronico
     * @param {CPE} document 
     * @returns {Response}
     */
    public async send(document: CPE): Promise<Response>
    {
        await this.configureFactory(document.tipoDocumento);
        return this.factory.send(document);
    }

    /**
     * @description
     * Genera Pdf A partir de
     * un Comprobante Electronico
     * @param {CPE} document 
     * @returns {void}
     */
    public getPdf(document: CPE): Promise<PDF>
    {
        return this.factory.getPdf(document);
    }

    /**
     * @description
     * Enviar Documento Electronico Xml Generado
     * A traves de las Web Services de la SUNAT
     * @param {SendBill} document 
     * @returns {CDR}
     */
    public async sendXml(document: SendBill): Promise<CDR>
    {
        await this.configureFactory(document.documentType);
        return this.factory.sendXml(document);
    }

    /**
     * @description
     * Configure Factory Fe
     * Configure Builder Xml Documents
     * Configure Sender WS Services 
     * @param {string} documentType 
     */
    private async configureFactory(documentType: string): Promise<void>
    {
        const builderResolver = new XmlBuilderResolver();
        const senderResolver = new WSSenderResolver(await this.wsSoap.client);
        this.factory.builder = builderResolver.find(documentType);
        this.factory.sender = senderResolver.find(documentType);
    }
}