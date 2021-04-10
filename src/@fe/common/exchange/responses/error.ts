import { Comun, ErrorWS } from '@fe/common/exchange/responses';

export class Error extends Comun
{
    constructor(e: any, origin: string)
    {
        super();
        this.success = false;
        this.origin = origin;
        if (e instanceof TypeError || e instanceof Error || e instanceof String)
        {
            this.message = 'Surgieron problemas internos al realizar esta operación.';
        }
        else if (e instanceof ErrorWS)
        {
            throw e;
        }
        else
        {
            this.message = e.toString();
        }
    }
}