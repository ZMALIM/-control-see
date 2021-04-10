import { FeFactory } from "@fe/factory/fe-factory";
import { Soap } from "@fe/ws/soap";
import { PdfBuilder, Serializer, Signer } from '@fe/common/abstract';
import { SendBill, CDR, Response, XML, WSConfig, SignatureConfig, PdfConfig } from "@fe/common/exchange";
import { PDF } from '@fe/common/exchange';
import { CPE } from '@fe/common/models';
export declare class See {
    factory: FeFactory;
    wsSoap: Soap;
    serializer: Serializer;
    signer: Signer;
    builder: any;
    pdfBuilder: PdfBuilder;
    constructor();
    set wsConfig(wsConfig: WSConfig);
    set signedConfig(config: SignatureConfig);
    set pdfConfig(config: PdfConfig);
    getXmlSigned(document: CPE): Promise<XML>;
    send(document: CPE): Promise<Response>;
    getPdf(document: CPE): Promise<PDF>;
    sendXml(document: SendBill): Promise<CDR>;
    private configureFactory;
}
