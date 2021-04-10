import { Client } from 'soap';
import { WSConfig } from '@fe/common/exchange';
import { ISoap } from '@fe/ws/soap.interface';
export declare class Soap implements ISoap {
    private _wsConfig?;
    constructor();
    get wsConfig(): WSConfig;
    set wsConfig(wsConfig: WSConfig);
    get client(): Promise<Client>;
}
