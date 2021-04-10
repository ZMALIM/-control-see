"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorWS = void 0;
const responses_1 = require("@fe/common/exchange/responses");
class ErrorWS extends responses_1.Comun {
    constructor(e) {
        super();
        this.success = false;
        this.origin = 'Enviar Comprobante';
        if (e instanceof TypeError || e instanceof String) {
            this.message = 'Surgieron problemas internos al realizar esta operación.';
        }
        else if (e instanceof Error) {
            if (e['Fault']) {
                this.code = e['Fault']['faultcode'];
                ;
                this.detail = e['Fault']['faultstring'];
                this.message = e['Fault']['detail'];
            }
            else {
                let Fault = e['root']['Envelope']['Body']['Fault'];
                this.code = Fault.detail ? Fault.faultstring : Fault.faultcode;
                this.message = Fault.detail ? Fault.detail.message : Fault.faultstring;
            }
        }
        else {
            throw e;
        }
    }
}
exports.ErrorWS = ErrorWS;
//# sourceMappingURL=errorWS.js.map