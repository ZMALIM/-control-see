import { Client } from "soap";
export declare class WSBase {
    private _client;
    get client(): Client;
    set client(client: Client);
}
