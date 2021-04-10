import { File } from './file';
import { StatusCDR } from './statusCDR';
export declare class CDR extends File {
    zipCDR: string;
    hash: string;
    url: string;
    referenceID: string;
    description: string;
    code: string;
    date: Date;
    status: StatusCDR[];
    constructor();
}
