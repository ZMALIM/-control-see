import { CPE } from '@fe/common/models';
import { PdfConfig, PdfSerializer } from '@fe/common/exchange'
import { PdfBuilder } from '@fe/common/abstract';
import { CpeUtils } from '@fe/utils';
import { HtmlPdf } from '@fe/pdf/html-pdf';
import { toBuffer } from 'bwip-js';
import * as handlebars from 'handlebars';
import * as moment from 'moment';
import * as fs from 'fs';

export class Pdf implements PdfBuilder
{
    private utils: CpeUtils;
    private _config: PdfConfig;

    /**
     * @constructor
     */
    constructor()
    {
        this.utils = new CpeUtils();
    }

    /**
     * @description
     * Get Pdf Config 
     * @returns {PdfConfig}
     */
    public get config(): PdfConfig
    {
        return this._config;
    }

    /**
     * @description
     * Set Pdf Config
     * @param {PdfConfig} config 
     */
    public set config(config: PdfConfig)
    {
        this._config = config;
    }

    /**
     * @description
     * Lee Template del 
     * Comprobante Electronico
     * @param {any} data 
     * @returns {any}
     */
    private render(data): any
    {
        const source = fs.readFileSync('./src/@fe/pdf/cpe/cpe.hbs','utf8').toString();
        const template = handlebars.compile(source);
        const output = template(data, {
            helpers: {
                'ifEquals': (a, b, options) => {
                    if (a === b) 
                    {
                        return options.fn(this);
                    }
                    return options.inverse(this);
                }
            }
        });
        return output;
    }

    /**
     * @description
     * Generación del código de barras
     * @enum {qrcode}
     * RUC | TIPO DE DOCUMENTO | SERIE | NUMERO | MTO TOTAL IGV | 
     * MTO TOTAL DEL COMPROBANTE | FECHA DE EMISION | TIPO DE 
     * DOCUMENTO ADQUIRENTE | NUMERO DE DOCUMENTO ADQUIRENTE |
     * @enum {pdf417}
     * RUC | TIPO DE DOCUMENTO | SERIE | NUMERO | MTO TOTAL IGV | MTO 
     * TOTAL DEL COMPROBANTE | FECHA DE EMISION | TIPO DE 
     * DOCUMENTO ADQUIRENTE | NUMERO DE DOCUMENTO ADQUIRENTE |
     * VALOR RESUMEN | VALOR DE LA FIRMA |
     * @param {string} text 
     * @param {string} type 
     * @returns {Buffer}
     */
    private async barcode(text: string, type: 'qrcode' | 'pdf417'): Promise<Buffer>
    {
        return toBuffer({
            bcid:        type,       // Barcode type
            text:        text,    // Text to encode
            scale:       3,               // 3x scaling factor
            height:      type === 'qrcode' ? 60 : 20,              // Bar height, in millimeters
            width:       60,
            includetext: true,            // Show human-readable text
            textxalign:  'center',        // Always good to set this
        });
    }

    /**
     * @description
     * La información señalada en los incisos anteriores de este numeral debe 
     * consignarse con el mismo formato empleado en el comprobante de pago 
     * electrónico o la nota electrónica y se estructura de acuerdo al siguiente orden, 
     * siendo el separador de campo el carácter pipe (“|”):
     * @example
     * RUC | TIPO DE DOCUMENTO | SERIE | NUMERO | MTO TOTAL IGV | 
     * MTO TOTAL DEL COMPROBANTE | FECHA DE EMISION | TIPO DE 
     * DOCUMENTO ADQUIRENTE | NUMERO DE DOCUMENTO ADQUIRENTE |
     * @param {cpe} cpe 
     * @returns {string}
     */
    private barcodeQRInfo(cpe: CPE): string
    {
        const info = `
            ${cpe.empresa.nroDocumento} | 
            ${cpe.tipoDocumento} | 
            ${cpe.serie} | 
            ${cpe.correlativo} | 
            ${cpe.totalIgv.toFixed(2)} | 
            ${cpe.totalVenta.toFixed(2)} | 
            ${moment(cpe.fechaEmision).format('DD-MM-YYYY')} | 
            ${cpe.cliente.tipoDocumento} | 
            ${cpe.cliente.nroDocumento} |`;
        return info.replace(/\s+/g, ' ').trim();
    }

    /**
     * @description
     * Generar Comprobante Electronico
     * En Formato [.pdf]
     * @param {CPE} cpe
     * @returns {}
     */
    public async generate(cpe: CPE): Promise<PdfSerializer>
    {
        const pdfResponse = new PdfSerializer();
        try {
            const barcode = await this.barcode(this.barcodeQRInfo(cpe), 'qrcode');
            
            const html = this.render({
                ...this.utils.formatInObj(cpe),
                barcode: 'data:image/png;base64,' + barcode.toString('base64'),
            });

            const htmlPdf = new HtmlPdf({
                inputBody: html,
                pdf: { 
                    format: 'a4',
                    printBackground: true,
                    margin: { top: 60, left: 60, right: 60, bottom: 60 }
                },
                include: ['./templates/cpe/css/style.css']
            });
             
            await htmlPdf.start();
            pdfResponse.success = true;
            pdfResponse.contentFile = await htmlPdf.build();
            await htmlPdf.close()
            return pdfResponse;
        } catch (e) {
            pdfResponse.success = false;
            pdfResponse.message = e;
            pdfResponse.origin = 'GenerarPdf';
            throw pdfResponse;
        }
    }
}