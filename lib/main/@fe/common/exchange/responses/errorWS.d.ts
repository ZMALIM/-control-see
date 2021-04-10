import { Comun } from '@fe/common/exchange/responses';
export declare class ErrorWS extends Comun {
    code?: string;
    description?: string;
    detail?: string;
    constructor(e: any);
}
