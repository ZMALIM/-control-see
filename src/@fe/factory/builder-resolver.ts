import { Builder } from "@fe/common/abstract";
import { BoletaXML, InvoiceXML } from "@fe/xml";

export class XmlBuilderResolver 
{
    /**
     * @constructor
     */
    constructor()
    {
    }

    /**
     * @description
     * Find Builder Resolver 
     * Builder that will generate the xml documents
     * @param {string} documentType 
     * @returns {Builder}
     */
    public find(documentType: string): Builder
    {
        switch(documentType)
        {
            case '01': /** ? Factura */
                return new BoletaXML();
            case '03': /** ? Boleta */
                return new BoletaXML();
            default:
                return new BoletaXML();
        }
    }
}