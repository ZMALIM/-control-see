import { PdfSerializer } from '@fe/common/exchange';
import { CpeUtils } from '@fe/utils';
import { HtmlPdf } from '@fe/pdf/html-pdf';
import { toBuffer } from 'bwip-js';
import * as handlebars from 'handlebars';
import * as moment from 'moment';
import * as fs from 'fs';
export class Pdf {
    constructor() {
        this.utils = new CpeUtils();
    }
    get config() {
        return this._config;
    }
    set config(config) {
        this._config = config;
    }
    render(data) {
        const source = fs.readFileSync('./src/@fe/pdf/cpe/cpe.hbs', 'utf8').toString();
        const template = handlebars.compile(source);
        const output = template(data, {
            helpers: {
                'ifEquals': (a, b, options) => {
                    if (a === b) {
                        return options.fn(this);
                    }
                    return options.inverse(this);
                }
            }
        });
        return output;
    }
    async barcode(text, type) {
        return toBuffer({
            bcid: type,
            text: text,
            scale: 3,
            height: type === 'qrcode' ? 60 : 20,
            width: 60,
            includetext: true,
            textxalign: 'center',
        });
    }
    barcodeQRInfo(cpe) {
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
    async generate(cpe) {
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
            await htmlPdf.close();
            return pdfResponse;
        }
        catch (e) {
            pdfResponse.success = false;
            pdfResponse.message = e;
            pdfResponse.origin = 'GenerarPdf';
            throw pdfResponse;
        }
    }
}
//# sourceMappingURL=pdf.js.map