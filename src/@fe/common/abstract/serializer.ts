import { RDocument, CDR, ZipSerializer } from '@fe/common/exchange';
import { XmlDocument } from './xml-document';

export abstract class Serializer 
{
    /**
     * @description Genera el XML basado en una clase con el atributo Serializable
     * @param xmlStructure IEstructura -> Clase a serializar
     * @return Devuelve una cadena Base64 del archivo XML
     *
     */
    public abstract xmlGenerate(xmlStructure: XmlDocument): RDocument;

    /**
     *
     * @description Genera el ZIP del XML basandose en la trama del XML.
     * @param xml string -> Cadena Base64 con el contenido del XML
     * @param fileName string -> Nombre del archivo ZIP
     * @return Devuelve Cadena Base64 del archizo ZIP
     *
     */
    public abstract zipCompress(xml: string, fileName: string): Promise<ZipSerializer>;

    /**
     * @description Lee la Constancia de Recepción SUNAT y devuelve el contenido
     * @param constancy string
     * @return CDR
     *
     */
    public abstract documentResponseGenerate(constancy: string): Promise<CDR>;
}
