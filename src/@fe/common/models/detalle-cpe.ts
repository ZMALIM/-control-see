export class DetalleCPE 
{
    public id?: number;
    public cantidad?: number;
    public unidadMedida?: string;
    public codigoItem?: string;
    public descripcion?: string;
    public precioUnitario?: number;
    public precioReferencial?: number;
    public tipoPrecio?: string;
    public tipoImpuesto?: string;
    public impuesto?: number;
    public impuestoSelectivo?: number;
    public otroImpuesto?: number;
    public descuento?: number;
    public placaVehiculo?: string;
    public totalVenta?: number;
    public suma?: number;

    constructor() 
    {
        this.id = 1;
        this.unidadMedida = 'NIU';
        this.tipoPrecio = '01';
        this.tipoImpuesto = '10';
    }
}
