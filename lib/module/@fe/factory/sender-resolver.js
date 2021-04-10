"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WSSenderResolver = void 0;
const sumary_ws_1 = require("@fe/ws/sumary.ws");
const bill_ws_1 = require("@fe/ws/bill.ws");
const data_1 = require("@fe/common/data");
class WSSenderResolver {
    constructor(client) {
        this.client = client;
        this.summary = data_1.summary;
    }
    find(documentType) {
        const sender = this.summary.some(s => s.code === documentType)
            ? new sumary_ws_1.Summary()
            : new bill_ws_1.Bill();
        sender.client = this.client;
        return sender;
    }
}
exports.WSSenderResolver = WSSenderResolver;
//# sourceMappingURL=sender-resolver.js.map