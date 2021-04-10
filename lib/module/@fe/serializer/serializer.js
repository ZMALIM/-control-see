import { xml } from 'xml-serializer-ts';
import { RDocument, CDR, ZipSerializer } from '@fe/common/exchange';
import { Utils, XmlUtilsCDR } from '@fe/utils';
import * as AdmZip from 'adm-zip';
import * as jszip from 'jszip';
export class XMLSerializer {
    constructor() {
        this.utils = new Utils();
    }
    xmlGenerate(xmlStructure) {
        const document = new RDocument();
        try {
            document.xmlDocument = xml.serialize(xmlStructure);
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
    async zipGenerate(xml, fileName) {
        const rzip = new ZipSerializer();
        try {
            const zip = new jszip();
            zip.file(`${fileName}.xml`, xml);
            rzip.contentFile = await zip.generateAsync({ type: 'base64' });
            rzip.success = true;
            return rzip;
        }
        catch (e) {
            rzip.success = false;
            rzip.message = e;
            rzip.origin = 'GenerarZip';
            throw rzip;
        }
    }
    async zipCompress(xml, fileName) {
        const rzip = new ZipSerializer();
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
    }
    async documentResponseGenerate(constancy) {
        let cdr = new CDR();
        try {
            const zip = await jszip.loadAsync(constancy, { base64: true });
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
                    const xmlDoc = await zip.file(fileName).async('text');
                    const xmlUtil = new XmlUtilsCDR(xmlDoc);
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
    }
}
//# sourceMappingURL=serializer.js.map