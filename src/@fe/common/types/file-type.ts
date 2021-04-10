export class FileType
{
    /**
     * @description
     * Nombre de Archivo
     * Nombre Establecido en las documentaciones de 
     * SUNAT
     */
    public fileName: string;

    /**
     * @description
     * Contenido De Archivo
     * El contenido del archivo puedes
     * entre string ó buffer
     */
    public contentFile: string | Buffer;
}