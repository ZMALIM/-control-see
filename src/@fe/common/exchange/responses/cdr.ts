import { File } from './file';
import { StatusCDR } from './statusCDR';

export class CDR extends File
{
    public zipCDR: string;
    public hash: string;
    public url: string;
    public referenceID: string;
    public description: string;
    public code: string;
    public date: Date;
    public status: StatusCDR[];

    constructor() 
    {
        super();
        this.status = new Array<StatusCDR>();
    }
}
