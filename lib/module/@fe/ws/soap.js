import { createClientAsync, WSSecurity } from 'soap';
import * as request from 'request';
export class Soap {
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
            createClientAsync(this.wsConfig.ws, {
                returnFault: true,
                disableCache: true,
                request: this.wsConfig.proxy
                    ? request.defaults({ 'proxy': `http://${this.wsConfig.proxy}`, 'timeout': 5000, 'connection': 'keep-alive' })
                    : null
            })
                .then((client) => {
                client.setSecurity(new WSSecurity(this.wsConfig.ruc.concat(this.wsConfig.userSOL), this.wsConfig.passwordSOL));
                if (this.wsConfig.endPoint !== '') {
                    client.setEndpoint(this.wsConfig.endPoint);
                }
                resolve(client);
            })
                .catch(e => resolve(e));
        });
    }
}
//# sourceMappingURL=soap.js.map