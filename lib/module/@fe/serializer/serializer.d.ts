import { RDocument, CDR, ZipSerializer } from '@fe/common/exchange';
import { Serializer, XmlDocument } from '@fe/common/abstract';
export declare class XMLSerializer implements Serializer {
    private readonly utils;
    constructor();
    xmlGenerate(xmlStructure: XmlDocument): RDocument;
    zipGenerate(xml: string, fileName: string): Promise<ZipSerializer>;
    zipCompress(xml: string, fileName: string): Promise<ZipSerializer>;
    documentResponseGenerate(constancy: string): Promise<CDR>;
}
