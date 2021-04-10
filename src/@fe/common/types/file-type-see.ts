import { FileType } from '@fe/common/types/file-type';

export class FileSee
{
    /**
     * @description
     * Trama Xml de Documento Electronico
     */
    public XML: FileType;

    /**
     * @description
     * Archivo Zip de Documento Electronico
     * Archivo se muestra en Formato [base64]
     */
    public ZIP: FileType;

    /**
     * @description
     * Archivo Pdf de Documento Electronico
     * Archivo se muestra en Formato [Buffer]
     */
     public PDF: FileType;

    /**
     * @description
     * Archivo Zip de Constancia de Recepción
     * Archivo se muestra en Formato [base64]
     */
    public CDR: FileType;
}