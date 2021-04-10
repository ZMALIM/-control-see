import { createClientAsync, WSSecurity } from 'soap';
import { ResponseWS } from '@fe/common/exchange';
import { Utils } from '@fe/utils';
export class WS {
    constructor() {
        this.utils = new Utils();
    }
    async auth(wsConfig) {
        try {
            this.client = await createClientAsync(wsConfig.ws, {
                returnFault: true,
                disableCache: true
            });
            this.client.setSecurity(new WSSecurity(wsConfig.ruc.concat(wsConfig.userSOL), wsConfig.passwordSOL));
            if (wsConfig.endPoint !== '') {
                this.client.setEndpoint(wsConfig.endPoint);
            }
        }
        catch (e) {
            throw e;
        }
    }
    async sendBill(document) {
        const responseWS = new ResponseWS();
        try {
            const [{ applicationResponse }] = await this.client.sendBillAsync({
                fileName: document.fileName.concat('.zip'),
                contentFile: document.zip,
            });
            responseWS.constancyOfRecepty = applicationResponse;
            responseWS.success = true;
        }
        catch (e) {
            responseWS.success = false;
            responseWS.origin = 'EnviarComprobante';
        }
        return responseWS;
    }
    async sendSumary(document) {
        const responseWS = new ResponseWS();
        try {
            const [{ ticket }] = await this.client.sendSummaryAync({
                fileName: document.fileName.concat('.zip'),
                contentFile: document.zip,
            });
            responseWS.ticket = ticket;
            responseWS.success = true;
        }
        catch (e) {
            responseWS.success = false;
            responseWS.origin = 'EnviarResumen';
        }
        return responseWS;
    }
    async getStatus(ticket) {
        const responseWS = new ResponseWS();
        try {
            const [{ status: { statusCode, content } }] = await this.client.getSatusAsync({ ticket });
            if (this.utils.processed(statusCode)) {
                responseWS.constancyOfRecepty = content;
                responseWS.success = true;
            }
            else {
                responseWS.success = false;
                responseWS.message = 'En proceso';
            }
        }
        catch (e) {
            responseWS.success = false;
            responseWS.origin = 'EstadoDocumento';
        }
        return responseWS;
    }
    async getStatusCDR(statusCDR) {
        const responseWS = new ResponseWS();
        try {
            const [{ status: { statusCode, content } }] = await this.client.getStatusCdrAsync({
                rucComprobante: statusCDR.voucherRUC,
                tipoComprobante: statusCDR.voucherType,
                serieComprobante: statusCDR.voucherSerie,
                numeroComprobante: statusCDR.voucherNumber,
            });
            if (this.utils.processed(statusCode)) {
                responseWS.constancyOfRecepty = content;
                responseWS.success = true;
            }
            else {
                responseWS.success = false;
                responseWS.message = 'En proceso';
            }
        }
        catch (e) {
            responseWS.success = false;
            responseWS.origin = 'ConsultarCDR';
        }
        return responseWS;
    }
}
//# sourceMappingURL=ws.js.map