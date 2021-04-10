import { xml } from 'xml-serializer-ts';
import { RDocument, CDR, ZipSerializer } from '@fe/common/exchange';
import { Serializer, XmlDocument } from '@fe/common/abstract';
import { Utils, XmlUtilsCDR } from '@fe/utils';
import * as AdmZip from 'adm-zip';
import * as jszip from 'jszip';

export class XMLSerializer implements Serializer 
{
    private readonly utils: Utils;

    constructor() 
    {
        this.utils = new Utils();
    }

    /**
     * @description Genera el XML basado en una clase con el atributo Serializable
     * @param xmlStructure IEstructura -> Clase a serializar
     * @return Devuelve una cadena Base64 del archivo XML
     *
     */
    public xmlGenerate(xmlStructure: XmlDocument): RDocument 
    {
        const document = new RDocument();
        try {
            document.xmlDocument = xml.serialize(xmlStructure);
            document.success = true;
            return document;
        } catch (e) {
            document.success = false;
            document.message = e.toString();
            document.origin = 'GenerarXML';
            throw document;
        }
    }

    /**
     *
     * @description Genera el ZIP del XML basandose en la trama del XML.
     * @param xml string -> Cadena Base64 con el contenido del XML
     * @param fileName string -> Nombre del archivo ZIP
     * @return Devuelve Cadena Base64 del archizo ZIP
     *
     */
    public async zipGenerate(xml: string, fileName: string): Promise<ZipSerializer> 
    {
        const rzip = new ZipSerializer();
        try {
            const zip = new jszip();
            zip.file(`${fileName}.xml`, xml);
            rzip.contentFile = await zip.generateAsync({ type: 'base64' });
            rzip.success = true;
            return rzip;
        } catch (e) {
            rzip.success = false;
            rzip.message = e;
            rzip.origin = 'GenerarZip';
            throw rzip;
        }
    }

    /**
     *
     * @description Genera el ZIP del XML basandose en la trama del XML.
     * @param xml string -> Cadena Base64 con el contenido del XML
     * @param fileName string -> Nombre del archivo ZIP
     * @return Devuelve Cadena Base64 del archizo ZIP
     *
     */
    public async zipCompress(xml: string, fileName: string): Promise<ZipSerializer> 
    {
        const rzip = new ZipSerializer();
        try {
            const zip = new AdmZip();
            zip.addFile(`${fileName}.xml`, Buffer.from(xml, 'utf-8'));
            rzip.contentFile = zip.toBuffer().toString('base64');
            rzip.success = true;
            return rzip;
        } catch (e) {
            rzip.success = false;
            rzip.message = e;
            rzip.origin = 'ComprimirZip';
            throw rzip;
        }
    }

    /**
     * @description 
     * Lee la Constancia de Recepción 
     * SUNAT y devuelve el contenido
     * @param {string} constancy
     * @return {CDR}
     */
    public async documentResponseGenerate(constancy: string): Promise<CDR> 
    {
        let cdr = new CDR();
        try {
            const zip = await jszip.loadAsync(constancy, { base64: true });
            const files = Object.keys(zip.files);
            if (files.length === 0) 
            {
                cdr.message = 'Respuesta de SUNAT vacio.';
                cdr.success = false;
            }
            else 
            {
                for (let i = 0; i < files.length; i++) 
                {
                    const fileName = zip.files[files[i]].name;
                    if (!fileName.endsWith('.xml')) continue;
                    const xmlDoc = await zip.file(fileName).async('text');
                    const xmlUtil = new XmlUtilsCDR(xmlDoc);
                    cdr = xmlUtil.reponseCDR;
                    cdr.fileName = fileName.split('.').shift();
                    cdr.success = true;
                }
            }
            return cdr;
        } catch (e) {
            cdr.success = false;
            cdr.message = e;
            cdr.origin = 'GenerarArchivoCDR';
            throw cdr;
        }
    }
}
