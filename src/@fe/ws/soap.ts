import { Client, createClientAsync,  WSSecurity } from 'soap';
import { WSConfig } from '@fe/common/exchange';
import { ISoap } from '@fe/ws/soap.interface';
import * as request from 'request'
export class Soap implements ISoap
{
    private _wsConfig?: WSConfig;

    /**
     * @constructor
     */
    constructor()
    {
    }

    /**
     * @description
     * Get WSConfig 
     * @returns {WSConfig}
     */
    public get wsConfig(): WSConfig
    {
        return this._wsConfig;
    }

    /**
     * @description
     * Set WSConfig For Soap WS
     * @param {WSConfig} wsConfig
     */
    public set wsConfig(wsConfig: WSConfig)
    {
        this._wsConfig = wsConfig;
    }

    /**
     * @description
     * Create And Auth 
     * Client SOAP
     * Connection withs Web Service
     * SUNAT
     * @returns {Client}
     */
    public get client(): Promise<Client>
    {
        return new Promise<Client>((resolve, reject) => {
            createClientAsync(this.wsConfig.ws, {
                returnFault: true,
                disableCache: true,
                request: this.wsConfig.proxy 
                    ? request.defaults({'proxy': `http://${this.wsConfig.proxy}`, 'timeout': 5000, 'connection': 'keep-alive'})
                    : null
            })
            .then((client) => {
                client.setSecurity(new WSSecurity(
                    this.wsConfig.ruc.concat(this.wsConfig.userSOL), 
                    this.wsConfig.passwordSOL,
                ));

                if (this.wsConfig.endPoint !== '') 
                {
                    client.setEndpoint(this.wsConfig.endPoint);
                }

                resolve(client);
            })
            .catch(e => resolve(e))
        });
    }
}