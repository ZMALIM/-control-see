import { Response } from '@fe/common/exchange';
import { CPE } from '@fe/common/models';
export declare abstract class IFeFactory {
    abstract send(document: CPE): Promise<Response>;
}
