import { Response, XML } from '@fe/common/exchange';
import { CPE } from '@fe/common/models';
export declare abstract class SeeCPE {
    document?: string;
    abstract send(document: CPE): Promise<Response>;
    abstract xml(document: CPE): Promise<XML>;
}
