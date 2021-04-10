import { RDocument, CDR, ZipSerializer } from '@fe/common/exchange';
import { XmlDocument } from './xml-document';
export declare abstract class Serializer {
    abstract xmlGenerate(xmlStructure: XmlDocument): RDocument;
    abstract zipCompress(xml: string, fileName: string): Promise<ZipSerializer>;
    abstract documentResponseGenerate(constancy: string): Promise<CDR>;
}
