import { Contribuyente } from './Contribuyente';
export declare class DatosGuia {
    direccionDestino?: Contribuyente;
    direccionOrigen?: Contribuyente;
    rucTransportista?: string;
    tipoDocTransportista?: string;
    nombreTransportista?: string;
    nroLicenciaConducir?: string;
    placaVehiculo?: string;
    codigoAutorizacion?: string;
    marcaVehiculo?: string;
    modoTransporte?: string;
    unidadMedida?: string;
    pesoBruto?: number;
    constructor();
}
