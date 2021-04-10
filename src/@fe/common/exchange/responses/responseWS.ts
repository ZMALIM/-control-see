import { Comun } from './comun';

export class ResponseWS extends Comun 
{
    /**
     * @descripcion
     * El documento electrónico de respuesta de SUNAT para todos los documentos
     * electrónicos enviados es la Constancia de Recepción (CDR).
     * Este documento informa al empresa el resultado del envío, y podrá tener
     * el estado de aceptada o rechazada. Las implicancias de la aceptación o rechazo
     * se explican en el numeral 4.1 del presente manual.
     *
     */
    public constancyOfRecepty?: string;

    /**
     * @descripcion
     * ticket con el que posteriormente utilizando el método getStatus
     * se puede obtener la constancia de aceptación o rechazo de cada documento.
     */
    public ticket?: string;
}
