import { Summary } from '@fe/ws/sumary.ws';
import { Bill } from '@fe/ws/bill.ws'
import { Sender } from '@fe/common/abstract';
import { Client } from 'soap';
import { summary } from '@fe/common/data'

export class WSSenderResolver
{
    private client?: Client;
    private summary?: any[];

    /**
     * @Constructor
     * Set Client Soap 
     * @param {Client} client 
     */
    constructor(client: Client)
    {
        this.client = client;
        this.summary = summary;
    }

    /**
     * @description
     * Find Sender Web Service For 
     * Send Documents To SUNAT
     * ? Summary -> Guias de Remisión
     * ? Bill -> Boletas, Facturas
     * @param {string} documentType
     * @returns {Sender}
     */
    public find(documentType: string): Sender
    {
        const sender = this.summary.some(s => s.code === documentType) 
            ? new Summary() 
            : new Bill();

        sender.client = this.client;
        return sender;
    }
}