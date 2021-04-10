import { Sender } from "@fe/common/abstract";
import { PDocument, ResponseWS, ErrorWS } from "@fe/common/exchange";
import { WSBase } from '@fe/ws/ws-base';

export class Summary extends WSBase implements Sender
{
    /**
     * @description
     * Para enviar resumen diario, comuncaiones de baja, reversiones.
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
            const [ { ticket } ] = await this.client.sendSummaryAync({
                fileName: document.fileName.concat('.zip'),
                contentFile: document.zip,
            });
            responseWS.ticket = ticket;
            responseWS.success = true;
            return responseWS;
        }
        catch (e) 
        {
            throw new ErrorWS(e);
        }
    }
}