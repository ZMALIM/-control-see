import { IFeFactory, Builder, PdfBuilder } from '@fe/common/abstract';
import { Response, PDocument, XML, CDR, PDF } from '@fe/common/exchange';
import { CPE } from '@fe/common/models';
import { Sender, Signer, Serializer } from '@fe/common/abstract';
import { FileSee } from '@fe/common/types';
export declare class FeFactory implements IFeFactory {
    private _builder?;
    private _pdfBuilder?;
    private _sender?;
    private _signer?;
    private _serializer?;
    private _lastfile?;
    get builder(): Builder;
    set builder(builder: Builder);
    get pdfBuilder(): PdfBuilder;
    set pdfBuilder(pdfBuilder: PdfBuilder);
    get sender(): Sender;
    set sender(sender: Sender);
    get signer(): Signer;
    set signer(signer: Signer);
    get serializer(): Serializer;
    set serializer(serializer: Serializer);
    get lastFile(): FileSee;
    set lastFile(lastFile: FileSee);
    send(document: CPE): Promise<Response>;
    sendXml(document: PDocument): Promise<CDR>;
    getPdf(document: CPE): Promise<PDF>;
    getXmlSigned(document: CPE): Promise<XML>;
}
