import { XmlDocument } from '@fe/common/abstract';
import { CPE } from '@fe/common/models';
export declare abstract class Builder {
    abstract generate(document: CPE): XmlDocument;
}
