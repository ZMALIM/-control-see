import { CPE } from '@fe/common/models';
import { PdfConfig, PdfSerializer } from '@fe/common/exchange';
import { PdfBuilder } from '@fe/common/abstract';
export declare class Pdf implements PdfBuilder {
    private utils;
    private _config;
    constructor();
    get config(): PdfConfig;
    set config(config: PdfConfig);
    private render;
    private barcode;
    private barcodeQRInfo;
    generate(cpe: CPE): Promise<PdfSerializer>;
}
