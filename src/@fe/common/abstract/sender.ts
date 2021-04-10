import { PDocument, ResponseWS } from "@fe/common/exchange";

export abstract class Sender 
{
    /**
     * @description
     * Send Documento to SUNAT
     * @param {PDocument} document
     * @returns {ResponseWS}
     */
    public abstract send(document: PDocument): Promise<ResponseWS> 
}