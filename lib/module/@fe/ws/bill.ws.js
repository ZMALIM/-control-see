import { ResponseWS, ErrorWS } from "@fe/common/exchange";
import { WSBase } from '@fe/ws/ws-base';
export class Bill extends WSBase {
    async send(document) {
        try {
            const responseWS = new ResponseWS();
            const [{ applicationResponse }] = await this.client.sendBillAsync({
                fileName: document.fileName.concat('.zip'),
                contentFile: document.zip,
            });
            responseWS.constancyOfRecepty = applicationResponse;
            responseWS.success = true;
            return responseWS;
        }
        catch (e) {
            throw new ErrorWS(e);
        }
    }
}
//# sourceMappingURL=bill.ws.js.map