import { PdfConfig, PdfSerializer } from '@fe/common/exchange';
import { CPE } from '@fe/common/models';
export declare abstract class PdfBuilder {
    config: PdfConfig;
    abstract generate(document: CPE): Promise<PdfSerializer>;
}
