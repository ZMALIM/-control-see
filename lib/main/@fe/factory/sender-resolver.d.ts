import { Sender } from '@fe/common/abstract';
import { Client } from 'soap';
export declare class WSSenderResolver {
    private client?;
    private summary?;
    constructor(client: Client);
    find(documentType: string): Sender;
}
