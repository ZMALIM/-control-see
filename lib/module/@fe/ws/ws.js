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
exports.WS = void 0;
const soap_1 = require("soap");
const exchange_1 = require("@fe/common/exchange");
const utils_1 = require("@fe/utils");
class WS {
    constructor() {
        this.utils = new utils_1.Utils();
    }
    auth(wsConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.client = yield soap_1.createClientAsync(wsConfig.ws, {
                    returnFault: true,
                    disableCache: true
                });
                this.client.setSecurity(new soap_1.WSSecurity(wsConfig.ruc.concat(wsConfig.userSOL), wsConfig.passwordSOL));
                if (wsConfig.endPoint !== '') {
                    this.client.setEndpoint(wsConfig.endPoint);
                }
            }
            catch (e) {
                throw e;
            }
        });
    }
    sendBill(document) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseWS = new exchange_1.ResponseWS();
            try {
                const [{ applicationResponse }] = yield this.client.sendBillAsync({
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
        });
    }
    sendSumary(document) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseWS = new exchange_1.ResponseWS();
            try {
                const [{ ticket }] = yield this.client.sendSummaryAync({
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
        });
    }
    getStatus(ticket) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseWS = new exchange_1.ResponseWS();
            try {
                const [{ status: { statusCode, content } }] = yield this.client.getSatusAsync({ ticket });
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
        });
    }
    getStatusCDR(statusCDR) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseWS = new exchange_1.ResponseWS();
            try {
                const [{ status: { statusCode, content } }] = yield this.client.getStatusCdrAsync({
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
        });
    }
}
exports.WS = WS;
//# sourceMappingURL=ws.js.map