import { Response } from '@fe/common/exchange';
import { CPE } from '@fe/common/models';

export abstract class IFeFactory 
{
    /**
     * @description
     * Serializer Documento to Xml
     * Send Document Xml to SUNAT
     * @param {CPE} document
     * @returns {Response}
     */
    public abstract send(document: CPE): Promise<Response>;
}