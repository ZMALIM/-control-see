"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = void 0;
const responses_1 = require("@fe/common/exchange/responses");
class Error extends responses_1.Comun {
    constructor(e, origin) {
        super();
        this.success = false;
        this.origin = origin;
        if (e instanceof TypeError || e instanceof Error || e instanceof String) {
            this.message = 'Surgieron problemas internos al realizar esta operación.';
        }
        else if (e instanceof responses_1.ErrorWS) {
            throw e;
        }
        else {
            this.message = e.toString();
        }
    }
}
exports.Error = Error;
//# sourceMappingURL=error.js.map