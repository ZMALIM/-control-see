import { Signed } from './sign';

export class XML extends Signed
{
    /**
     * @description
     * Url del Archivo Xml
     * Almacenado en El Servidor
     */
    public url?: string;

    /**
     * @description
     * Nombre de Archivo
     */
    public fileName?: string;
}