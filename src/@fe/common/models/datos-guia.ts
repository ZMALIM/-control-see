import { Contribuyente } from './Contribuyente';

export class DatosGuia 
{
    public direccionDestino?: Contribuyente;
    public direccionOrigen?: Contribuyente;
    public rucTransportista?: string;
    public tipoDocTransportista?: string;
    public nombreTransportista?: string;
    public nroLicenciaConducir?: string;
    public placaVehiculo?: string;
    public codigoAutorizacion?: string;
    public marcaVehiculo?: string;
    public modoTransporte?: string;
    public unidadMedida?: string;
    public pesoBruto?: number;

    constructor() 
    {
        this.direccionDestino = new Contribuyente();
        this.direccionOrigen = new Contribuyente();
    }
}
