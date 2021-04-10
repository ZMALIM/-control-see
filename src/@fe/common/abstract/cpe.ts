import { Response, XML } from '@fe/common/exchange';
import { CPE } from '@fe/common/models';

export abstract class SeeCPE
{
    /**
     * @property string
     * Tipo de documento
     *  @ejemplo
     * [Factura][Boleta][NotaCredito][NotaDebito]
     */
    public document?: string;

    /**
     * @description
     * Genera Documento [.xml]
     * Firma Documento [.xml]
     * Envia Documento [.xml]
     * @param {CPE} documentDto 
     * @returns {Response}
     */
    public abstract send(document: CPE): Promise<Response>;

    /**
     * @description [Generar] Documento Xml
     * @description [Firmar] Documento Xml
     * @description [Comprimir] Documento Xml generado [.Zip]
     *
     * @param {CPE} document
     * @returns [string]
     * retorna .zip convertido a string [base64]
     * @returns {XML}
     * @XML
     */
    public abstract xml(document: CPE): Promise<XML>;
}