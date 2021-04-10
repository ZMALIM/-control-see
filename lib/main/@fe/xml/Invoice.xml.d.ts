import { CPE } from '@fe/common/models';
import { XmlDocument, Builder } from '@fe/common/abstract';
export declare class InvoiceXML implements Builder {
    generate(document: CPE): XmlDocument;
}
