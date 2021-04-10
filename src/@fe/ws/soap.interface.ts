import { Client } from "soap";
import { WSConfig } from "@fe/common/exchange";

export interface ISoap 
{
    /**
     * @description
     * Get WSConfig 
     * For Connections With Web Services SUNAT
     * @SUNAT
     * @OSENUBEFACT
     * @returns {WSConfig}
     */
    wsConfig: WSConfig;

    /**
     * @description
     * Create And Auth 
     * Client SOAP
     * Connection withs Web Service
     * SUNAT
     * @returns {Client}
     */
     client: Promise<Client>
}