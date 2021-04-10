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
exports.XMLSerializer = void 0;
const xml_serializer_ts_1 = require("xml-serializer-ts");
const exchange_1 = require("@fe/common/exchange");
const utils_1 = require("@fe/utils");
const AdmZip = require("adm-zip");
const jszip = require("jszip");
class XMLSerializer {
    constructor() {
        this.utils = new utils_1.Utils();
    }
    xmlGenerate(xmlStructure) {
        const document = new exchange_1.RDocument();
        try {
            document.xmlDocument = xml_serializer_ts_1.xml.serialize(xmlStructure);
            document.success = true;
            return document;
        }
        catch (e) {
            document.success = false;
            document.message = e.toString();
            document.origin = 'GenerarXML';
            throw document;
        }
    }
    zipGenerate(xml, fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            const rzip = new exchange_1.ZipSerializer();
            try {
                const zip = new jszip();
                zip.file(`${fileName}.xml`, xml);
                rzip.contentFile = yield zip.generateAsync({ type: 'base64' });
                rzip.success = true;
                return rzip;
            }
            catch (e) {
                rzip.success = false;
                rzip.message = e;
                rzip.origin = 'GenerarZip';
                throw rzip;
            }
        });
    }
    zipCompress(xml, fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            const rzip = new exchange_1.ZipSerializer();
            try {
                const zip = new AdmZip();
                zip.addFile(`${fileName}.xml`, Buffer.from(xml, 'utf-8'));
                rzip.contentFile = zip.toBuffer().toString('base64');
                rzip.success = true;
                return rzip;
            }
            catch (e) {
                rzip.success = false;
                rzip.message = e;
                rzip.origin = 'ComprimirZip';
                throw rzip;
            }
        });
    }
    documentResponseGenerate(constancy) {
        return __awaiter(this, void 0, void 0, function* () {
            let cdr = new exchange_1.CDR();
            try {
                const zip = yield jszip.loadAsync(constancy, { base64: true });
                const files = Object.keys(zip.files);
                if (files.length === 0) {
                    cdr.message = 'Respuesta de SUNAT vacio.';
                    cdr.success = false;
                }
                else {
                    for (let i = 0; i < files.length; i++) {
                        const fileName = zip.files[files[i]].name;
                        if (!fileName.endsWith('.xml'))
                            continue;
                        const xmlDoc = yield zip.file(fileName).async('text');
                        const xmlUtil = new utils_1.XmlUtilsCDR(xmlDoc);
                        cdr = xmlUtil.reponseCDR;
                        cdr.fileName = fileName.split('.').shift();
                        cdr.success = true;
                    }
                }
                return cdr;
            }
            catch (e) {
                cdr.success = false;
                cdr.message = e;
                cdr.origin = 'GenerarArchivoCDR';
                throw cdr;
            }
        });
    }
}
exports.XMLSerializer = XMLSerializer;
//# sourceMappingURL=serializer.js.map