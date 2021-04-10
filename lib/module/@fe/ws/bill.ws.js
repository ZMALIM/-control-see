"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bill = void 0;
const exchange_1 = require("@fe/common/exchange");
const ws_base_1 = require("@fe/ws/ws-base");
class Bill extends ws_base_1.WSBase {
    send(document) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const responseWS = new exchange_1.ResponseWS();
                const [{ applicationResponse }] = yield this.client.sendBillAsync({
                    fileName: document.fileName.concat('.zip'),
                    contentFile: document.zip,
                });
                responseWS.constancyOfRecepty = applicationResponse;
                responseWS.success = true;
                return responseWS;
            }
            catch (e) {
                throw new exchange_1.ErrorWS(e);
            }
        });
    }
}
exports.Bill = Bill;
//# sourceMappingURL=bill.ws.js.map