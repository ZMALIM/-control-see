import { plainToClass } from 'class-transformer';
import { IFeFactory, Builder, PdfBuilder } from '@fe/common/abstract';
import { Response, PDocument, XML, CDR, PDF, Error } from '@fe/common/exchange';
import { CPE } from '@fe/common/models';
import { Sender, Signer, Serializer } from '@fe/common/abstract';
import { FileSee } from '@fe/common/types';

export class FeFactory implements IFeFactory
{
    private _builder?: Builder;
    private _pdfBuilder?: PdfBuilder;
    private _sender?: Sender;
    private _signer?: Signer;
    private _serializer?: Serializer;
    private _lastfile?: FileSee;

    /**
     * @description
     * Get Xml Builder
     * @returns {Builder}
     */
    public get builder(): Builder
    {
        return this._builder;
    }

    /**
     * @description
     * Set Xml Builder 
     * @feBuilder
     * @param {Builder} builder 
     */
    public set builder(builder: Builder)
    {
        this._builder = builder;
    }

    /**
     * @description
     * Get Pdf Builder
     * @returns {PdfBuilder}
     */
    public get pdfBuilder(): PdfBuilder
    {
        return this._pdfBuilder;
    }
 
     /**
      * @description
      * Set Pdf Builder 
      * @feBuilder
      * @param {PdfBuilder} pdfBuilder 
      */
    public set pdfBuilder(pdfBuilder: PdfBuilder)
    {
        this._pdfBuilder = pdfBuilder;
    }

    /**
     * @description
     * Get Sender
     * @returns {Sender}
     */
    public get sender(): Sender
    {
        return this._sender;
    }

    /**
     * @description
     * Set Sender
     * @param {Sender} sender
     */
    public set sender(sender: Sender)
    {
        this._sender = sender;
    }

    /**
     * @description
     * Get Signer 
     * @feSigned
     * @returns {Signer} 
     */
    public get signer(): Signer
    {
        return this._signer;
    }

    /**
     * @description
     * Set Signer 
     * @feSigned
     * @param {Signer} signer 
     */
    public set signer(signer: Signer)
    {
        this._signer = signer;
    }

    /**
     * @description
     * Get Serializer
     * @returns {Serializer}
     */
    public get serializer(): Serializer
    {
        return this._serializer;
    }

    /**
     * @description
     * Set Serializer
     * @param {Serializer} serializer 
     */
    public set serializer(serializer: Serializer)
    {
        this._serializer = serializer;
    }

    /**
     * @description
     * Last File
     * @returns {FileSee}
     */
    public get lastFile(): FileSee
    {
        return this._lastfile;
    }

    /**
     * @description
     * Last File
     * @param lastFile
     */
    public set lastFile(lastFile: FileSee)
    {
        this._lastfile = lastFile;
    }

    /**
     * @description
     * Serializa Documento Electronico
     * Genera Documento Electronico
     * Firma Documento Electronico
     * Envia Documento Electronico
     * @param {CPE} document 
     * @returns {Response}
     */
    public async send(document: CPE): Promise<Response>
    {
        try {
            const response = new Response();

            // Documento Electronico
            const documentElectronic = plainToClass(CPE, document);
    
            // Serializar y Generar Documento [.xml]
            response.xml = await this.getXmlSigned(document);
    
            // Verificar que El Firmado de Documento Salio Bien
            if (!response.xml.success)
            {
                throw response.xml;
            }
    
            // Comprimir y Serializar a Base64 Documento Electronico
            const zipResponse = await this.serializer.zipCompress(response.xml.xmlDocument, documentElectronic.fileName());
                    
            // Verificar que El Archivo Zip Se Genero Correctamente
            if (!zipResponse.success)
            {
                throw zipResponse;
            }     
    
            // Establecer Nombre de Archivo del Zip
            // response.zip.fileName = documentElectronic.fileName();
    
             // Envio de Documento Electronico Comprimido en Formato Base64 a SUNAT
             const wsResponse = await this.sender.send({
                fileName: documentElectronic.fileName(),
                zip: zipResponse.contentFile
            });
    
            // Verificar que el Documento se Envió Correctamente o NO
            if (!wsResponse.success) throw wsResponse;
    
            // Recuperar y Parsear Documento de Respuesta de SUNAT/OSEA
            response.cdr = await this.serializer.documentResponseGenerate(wsResponse.constancyOfRecepty);
    
            // Generar Pdf de Comproabante Electronico
            response.pdf = await this.getPdf(document);
    
            // Establecer Nombre de Archivo Zip
            // Establecer Archivo Zip Generado en Froamto Base64
            // Establecer Nombre de CDR
            // Establecer Archivo de Contancia de Recepción Formato Base64
            this.lastFile = {
                ...this.lastFile,
                ZIP: {
                    fileName: documentElectronic.fileName(),
                    contentFile: zipResponse.contentFile
                },
                CDR: {
                    fileName: response.cdr.fileName,
                    contentFile: wsResponse.constancyOfRecepty
                }
            };
            return response;
        } catch (e) {
            throw new Error(e, 'Generar, Firmar, Comprimir, Enviar CPE.');
        }
    }

    /**
     * @description
     * Send Document Electronic
     * Serialized And Generate
     * @param doc 
     */
    public async sendXml(document: PDocument): Promise<CDR>
    {
        try {
            // Envio de Documento Electronico Comprimido Base64 a SUNAT
            const wsResponse = await this.sender.send({
                fileName: document.fileName,
                zip: document.zip
            });

            // Verificar que el envió de documento sea correcto
            if (!wsResponse.success)
            {
                throw wsResponse;
            }

            // Recuperar y Parsear Documento de Respuesta de SUNAT/OSEA
        return this.serializer.documentResponseGenerate(wsResponse.constancyOfRecepty);
        } catch (e) {
            throw new Error(e, 'Enviar CPE.');
        }
    }

    /**
     * @description
     * Generar Pdf 
     * De Comprobante Electronico
     * @param {CPE} document 
     * @returns {void} 
     */
    public async getPdf(document: CPE): Promise<PDF>
    {
        try {
            // Pdf Respuesta
            let pdf = new PDF();

            // Documento Electronico
            const documentElectronic = plainToClass(CPE, document);

            // Serializar Documento Electronico a PDF
            const zipResponse = await this.pdfBuilder.generate(document);

            if (!zipResponse.success)
            {
                throw zipResponse;
            }

            // Establecer Archivo Pdf Serializado
            const { contentFile, ...rest } = zipResponse;
            pdf = {...rest};

            // Establecer Nombre de Archivo en la respuesta Pdf
            pdf.fileName = documentElectronic.fileName();

            // Establecer Nombre y Contenido de Archivo Pdf
            this.lastFile = {
                ...this.lastFile,
                PDF: {  
                    fileName: documentElectronic.fileName(), 
                    contentFile: zipResponse.contentFile 
                }
            };

            return pdf;
        } catch (e) {
            throw new Error(e, 'Generar Pdf.');
        }
    }

    /**
     * @description
     * Serialize, Generate
     * And Signed Xml Document
     * @returns {XML}
     */
     public async getXmlSigned(document: CPE): Promise<XML>
    {
        try {
            // Xml Respuesta
            let xml = new XML();

            // Documento Electronico
            const documentElectronic = plainToClass(CPE, document);

            // Serializar Documento Electronico
            const xmlDocument = this.builder.generate(document);

            // Generar Documento Elect. Serializado
            const xmlGenerate = this.serializer.xmlGenerate(xmlDocument);

            // Verificar que el Generado de Xml Salio Bien
            if (!xmlGenerate.success)
            {
                throw xmlGenerate;
            }

            // Firmar Documento Serializado y Generado
            const responseXml = await this.signer.xml(xmlGenerate.xmlDocument);

            if (!responseXml.success)
            {
                throw xml;
            }

            // Establecer Archivo Xml Firmado
            xml = { ...responseXml };

            // Establecer Nombre de Archivo en la respuesta XML
            xml.fileName = documentElectronic.fileName();

            // Establecer Nombre y Contenido de Archivo Xml
            this.lastFile = {
                ...this.lastFile,
                XML: {  
                    fileName: documentElectronic.fileName(), 
                    contentFile: responseXml.xmlDocument 
                }
            };

            return xml;
        } catch (e) {
            throw new Error(e, 'Generar Xml.');
        }
    }
}