import { Sender } from "@fe/common/abstract";
import { PDocument, ResponseWS, ErrorWS } from "@fe/common/exchange";
import { WSBase } from '@fe/ws/ws-base';

export class Bill extends WSBase implements Sender
{
    /**
     * @description
     * Para enviar comprobantes (FAC, BOL, NCR, NDB, RET, PERC, GRM).
     * Send Document to Web Service Sunat
     * @fileName [string]
     * @contentFile [.zip]
     * @param {PDocument} document
     * @returns {ResponseWS} 
     */
    public async send(document: PDocument): Promise<ResponseWS> 
    {
        try 
        {
            const responseWS = new ResponseWS();
            const [ { applicationResponse } ] = await this.client.sendBillAsync({
                fileName: document.fileName.concat('.zip'),
                contentFile: document.zip,
            });
            responseWS.constancyOfRecepty = applicationResponse;
            responseWS.success = true;
            return responseWS;
        } 
        catch (e)
        {
            throw new ErrorWS(e);
        }
    }
}