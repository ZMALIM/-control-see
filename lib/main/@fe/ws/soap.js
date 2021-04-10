"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Soap = void 0;
const soap_1 = require("soap");
const request = require("request");
class Soap {
    constructor() {
    }
    get wsConfig() {
        return this._wsConfig;
    }
    set wsConfig(wsConfig) {
        this._wsConfig = wsConfig;
    }
    get client() {
        return new Promise((resolve, reject) => {
            soap_1.createClientAsync(this.wsConfig.ws, {
                returnFault: true,
                disableCache: true,
                request: this.wsConfig.proxy
                    ? request.defaults({ 'proxy': `http://${this.wsConfig.proxy}`, 'timeout': 5000, 'connection': 'keep-alive' })
                    : null
            })
                .then((client) => {
                client.setSecurity(new soap_1.WSSecurity(this.wsConfig.ruc.concat(this.wsConfig.userSOL), this.wsConfig.passwordSOL));
                if (this.wsConfig.endPoint !== '') {
                    client.setEndpoint(this.wsConfig.endPoint);
                }
                resolve(client);
            })
                .catch(e => resolve(e));
        });
    }
}
exports.Soap = Soap;
//# sourceMappingURL=soap.js.map