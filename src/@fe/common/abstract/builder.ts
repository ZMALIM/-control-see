import { XmlDocument } from '@fe/common/abstract';
import { CPE } from '@fe/common/models';

export abstract class Builder 
{
    /**
     * @description
     * Genera Documento Electronico
     * 
     * @param {CPE} document
     * @returns {Builder} 
     */
    public abstract generate(document: CPE): XmlDocument;
}
