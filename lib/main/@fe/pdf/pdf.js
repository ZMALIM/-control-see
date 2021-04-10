"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pdf = void 0;
const exchange_1 = require("@fe/common/exchange");
const utils_1 = require("@fe/utils");
const html_pdf_1 = require("@fe/pdf/html-pdf");
const bwip_js_1 = require("bwip-js");
const handlebars = require("handlebars");
const moment = require("moment");
const fs = require("fs");
class Pdf {
    constructor() {
        this.utils = new utils_1.CpeUtils();
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
    barcode(text, type) {
        return __awaiter(this, void 0, void 0, function* () {
            return bwip_js_1.toBuffer({
                bcid: type,
                text: text,
                scale: 3,
                height: type === 'qrcode' ? 60 : 20,
                width: 60,
                includetext: true,
                textxalign: 'center',
            });
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
    generate(cpe) {
        return __awaiter(this, void 0, void 0, function* () {
            const pdfResponse = new exchange_1.PdfSerializer();
            try {
                const barcode = yield this.barcode(this.barcodeQRInfo(cpe), 'qrcode');
                const html = this.render(Object.assign(Object.assign({}, this.utils.formatInObj(cpe)), { barcode: 'data:image/png;base64,' + barcode.toString('base64') }));
                const htmlPdf = new html_pdf_1.HtmlPdf({
                    inputBody: html,
                    pdf: {
                        format: 'a4',
                        printBackground: true,
                        margin: { top: 60, left: 60, right: 60, bottom: 60 }
                    },
                    include: ['./templates/cpe/css/style.css']
                });
                yield htmlPdf.start();
                pdfResponse.success = true;
                pdfResponse.contentFile = yield htmlPdf.build();
                yield htmlPdf.close();
                return pdfResponse;
            }
            catch (e) {
                pdfResponse.success = false;
                pdfResponse.message = e;
                pdfResponse.origin = 'GenerarPdf';
                throw pdfResponse;
            }
        });
    }
}
exports.Pdf = Pdf;
//# sourceMappingURL=pdf.js.map