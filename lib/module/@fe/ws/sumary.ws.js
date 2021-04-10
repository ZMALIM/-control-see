import { ResponseWS, ErrorWS } from "@fe/common/exchange";
import { WSBase } from '@fe/ws/ws-base';
export class Summary extends WSBase {
    async send(document) {
        try {
            const responseWS = new ResponseWS();
            const [{ ticket }] = await this.client.sendSummaryAync({
                fileName: document.fileName.concat('.zip'),
                contentFile: document.zip,
            });
            responseWS.ticket = ticket;
            responseWS.success = true;
            return responseWS;
        }
        catch (e) {
            throw new ErrorWS(e);
        }
    }
}
//# sourceMappingURL=sumary.ws.js.map