import { CDR, StatusCDR } from '@fe/common/exchange';
import * as xmlCore from 'xml-core';

export class XmlUtilsCDR
{
    private xmlCdr: Document;

    /**
     * * Constructor
     * @param {string} xml 
     */
    constructor(xml: string)
    {
        this.xmlCdr = xmlCore.Parse(xml);
    }

    /**
     * @description
     * Get Aplication Response 
     * Node from CDR
     * @returns {Element}
     */
    private get applicationResponseNode(): Element
    {
        return this.xmlCdr.getElementsByTagName('ar:ApplicationResponse').item(0);
    }

    /**
     * @description
     * Get Hash Node CDR
     * @returns {Element}
     */
    private get hashNode(): Element
    {
        return this.applicationResponseNode
            .getElementsByTagName('ext:ExtensionContent').item(0)
            .getElementsByTagName('Signature').item(0)
            .getElementsByTagName('SignedInfo').item(0)
            .getElementsByTagName('Reference').item(0)
            .getElementsByTagName('DigestValue').item(0);
    }

    /**
     * @description
     * Get Reponse Node From CDR
     * @returns {Element}
     */
    private get responseNode(): Element
    {
        return this.applicationResponseNode
            .getElementsByTagName('cac:DocumentResponse').item(0)
            .getElementsByTagName('cac:Response').item(0);
    }

    /**
     * @description
     * Get Status Node From CDR
     * @returns {HTMLCollectionOf<Element>}
     */
    private get statusNode(): HTMLCollectionOf<Element>
    {
        return this.responseNode
            .getElementsByTagName('cac:Status');
    }

    /**
     * @description
     * Get Hash CDR 
     * @returns {string}
     */
    private get hashCDR(): string
    {
        return this.hashNode.textContent;
    }

    /**
     * @description
     * Get Date from CDR
     * * Date
     * * Time
     * @returns {Date}
     */
    private get date(): Date
    {
        let date = this.applicationResponseNode.getElementsByTagName('cbc:ResponseDate').item(0).textContent.split('-');
        let time = this.applicationResponseNode.getElementsByTagName('cbc:ResponseTime').item(0).textContent.split(':');
        return new Date(
            Number(date[0]),  /** Año */
            Number(date[1]) - 1, /** Mes */
            Number(date[2]), /** Dia */
            Number(time[0]), /** Hora */
            Number(time[1]), /** Minuto */
            Number(time[2]) /** Segundo */
        );
    }

    /**
     * @description
     * Get Code from CDR 
     * @returns {string}
     */
    private get code(): string
    {
        return this.responseNode
            .getElementsByTagName('cbc:ResponseCode').item(0)
            .textContent;
    }

    /**
     * @description
     * Get ReferenceID from CDR
     * @returns {string}
     */
    private get referenceID(): string
    {
        return this.responseNode
            .getElementsByTagName('cbc:ReferenceID').item(0)
            .textContent;
    }

    /**
     * @description
     * Get Description from CDR
     * @returns {string}
     */
    private get description(): string
    {
        return this.responseNode
            .getElementsByTagName('cbc:Description').item(0)
            .textContent;
    }

    /**
     * @description
     * Get Status from CDR
     * @returns {StatusCDR[]}
     */
    private get status(): StatusCDR[]
    {
        let status = new Array<StatusCDR>();

        for (let i = 0; i < this.statusNode.length; i++)
        {
            if (!this.statusNode.item(i).hasChildNodes()) break;
            status.push({
                code: this.statusNode.item(i).getElementsByTagName('cbc:StatusReasonCode').item(0).textContent,
                reason: this.statusNode.item(i).getElementsByTagName('cbc:StatusReason').item(0).textContent
            });
        }

        return status;
    }

    /**
     * @description
     * Get Full Response from CDR
     * @returns {CDR}
     */
    public get reponseCDR(): CDR
    {
        const cdr = new CDR();
        cdr.hash = this.hashCDR;
        cdr.date = this.date;
        cdr.code = this.code;
        cdr.referenceID = this.referenceID;
        cdr.description = this.description;
        cdr.status = this.status;
        return cdr;
    }
}