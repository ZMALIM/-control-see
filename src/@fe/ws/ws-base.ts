import { Client } from "soap";

export class WSBase 
{
    /**
     * @description
     * Client 
     */
    private _client: Client;

    /**
     * @description
     * Get Client SOAP WS Sunat
     * @returns {Client}
     */
    public get client(): Client
    {
        return this._client;
    }

    /**
     * @description
     * Set Client SOAP WS Sunat
     * @param {Client} client
     */
    public set client(client: Client)
    {
        this._client = client;
    }
}
