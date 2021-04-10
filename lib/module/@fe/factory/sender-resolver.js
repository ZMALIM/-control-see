import { Summary } from '@fe/ws/sumary.ws';
import { Bill } from '@fe/ws/bill.ws';
import { summary } from '@fe/common/data';
export class WSSenderResolver {
    constructor(client) {
        this.client = client;
        this.summary = summary;
    }
    find(documentType) {
        const sender = this.summary.some(s => s.code === documentType)
            ? new Summary()
            : new Bill();
        sender.client = this.client;
        return sender;
    }
}
//# sourceMappingURL=sender-resolver.js.map