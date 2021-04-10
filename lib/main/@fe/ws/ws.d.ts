import { Client } from 'soap';
import { WSConfig, ResponseWS, PDocument, PStatusCDR } from '@fe/common/exchange';
export declare class WS {
    protected client: Client;
    private utils;
    constructor();
    auth(wsConfig: WSConfig): Promise<void>;
    sendBill(document: PDocument): Promise<ResponseWS>;
    sendSumary(document: PDocument): Promise<ResponseWS>;
    getStatus(ticket: string): Promise<ResponseWS>;
    getStatusCDR(statusCDR: PStatusCDR): Promise<ResponseWS>;
}
