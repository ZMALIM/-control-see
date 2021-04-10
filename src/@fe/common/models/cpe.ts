import { Contribuyente } from './contribuyente';
import { Moneda } from './moneda';
import { DetalleCPE } from './detalle-cpe';
import { DatoAdicional } from './dato-adicional';
import { DatosGuia } from './datos-guia';
import { DocumentoRelacionado } from './documento-relacionado';
import { Discrepancia } from './discrepancia';

export class CPE 
{
    public ublVersion?: string;
    public tipoOperacion?: string;
    public tipoDocumento?: string;
    public serie?: string;
    public correlativo?: string;
    public empresa?: Contribuyente;
    public cliente?: Contribuyente;
    public fechaEmision?: Date;
    public fechaVencimiento?: Date;
    public moneda?: Moneda;
    public catImpuesto?: string;
    public pjeImpuesto?: number;
    public gravadas?: number;
    public gratuitas?: number;
    public inafectas?: number;
    public exoneradas?: number;
    public descuentoGlobal?: number;
    public items?: DetalleCPE[];
    public subTotal?: number;
    public totalVenta?: number;
    public totalIgv?: number;
    public totalIsc?: number;
    public totalOtrosTributos?: number;
    public totalOtrosCargos?: number;
    public montoLetras?: string;
    public placaVehiculo?: string;
    public montoPercepcion?: number;
    public montoDetraccion?: number;
    public datosAdicionales?: DatoAdicional[];
    public tipoDocAnticipo?: string;
    public docAnticipo?: string;
    public monedaAnticipo?: string;
    public montoAnticipo?: number;
    public datosGuiaTransportista?: DatosGuia;
    public relacionados?: DocumentoRelacionado[];
    public otrosDocumentosRelacionados?: DocumentoRelacionado[];
    public discrepancias?: Discrepancia[];
    public nroOrdenCompra?: string;
    public calculoIgv: number;
    public calculoIsc: number;
    public calculoDetraccion: number;

    private _comprobante?: string;

    constructor(documento?) 
    {
        documento = documento || {};
        this.ublVersion = documento.ublVersion || '2.1';
        this.serie = documento.serie || null;
        this.correlativo = documento.correlativo || null;
        this.tipoDocumento = documento.tipoDocumento || '01';
        this.empresa = documento.empresa || null;
        this.cliente = documento.cliente || null;
        this.fechaEmision = documento.fechaEmision || new Date();
        this.fechaVencimiento = documento.fechaVencimiento || new Date();
        this.moneda = documento.moneda || new Moneda();
        this.tipoOperacion = documento.tipoOperacion || '01';
        this.catImpuesto = documento.catImpuesto || 'O';
        this.pjeImpuesto = documento.pjeImpuesto || 18.00;
        this.gravadas = documento.gravadas || 0.00;
        this.gratuitas = documento.gratuitas || 0.00;
        this.inafectas = documento.inafectas || 0.00;
        this.exoneradas = documento.exoneradas || 0.00;
        this.descuentoGlobal = documento.descuentoGlobal || 0.00;
        this.items = documento.items || new Array<DetalleCPE>();
        this.subTotal = documento.subTotal || 0.00;
        this.totalVenta = documento.totalVenta || 0.00;
        this.totalIgv = documento.totalIgv || 0.00;
        this.totalIsc = documento.totalIsc || 0.00;
        this.totalOtrosTributos = documento.totalOtrosTributos || 0.00;
        this.totalOtrosCargos = documento.totalOtrosCargos || 0.00;
        this.montoLetras = documento.montoLetras || '';
        this.placaVehiculo = documento.placaVehiculo || null;
        this.montoPercepcion = documento.montoPercepcion || 0.00;
        this.montoDetraccion = documento.montoDetraccion || 0.00;
        this.datosAdicionales = documento.datosAdicionales || new Array<DatoAdicional>();
        this.tipoDocAnticipo = documento.tipoDocAnticipo || null;
        this.docAnticipo = documento.docAnticipo || null;
        this.monedaAnticipo = documento.monedaAnticipo || null;
        this.montoAnticipo = documento.montoAnticipo || null;
        this.datosGuiaTransportista = documento.datosGuiaTransportista || null;
        this.relacionados = documento.relacionados || new Array<DocumentoRelacionado>();
        this.otrosDocumentosRelacionados = documento.otrosDocumentosRelacionados || new Array<DocumentoRelacionado>();
        this.discrepancias = documento.discrepancias || new Array<Discrepancia>();
        this.nroOrdenCompra = documento.nroOrdenCompra || null;
        this.calculoIgv = documento.calculoIgv || 0.18;
        this.calculoIsc = documento.calculoIsc || 0.10;
        this.calculoDetraccion = documento.calculoDetraccion || 0.00;
    }

    /**
     * @description
     * Nro. y Serie de Comprobante
     * @returns {string}
     */
    public get comprobante(): string
    {
        let comprobante = [
            this.serie,
            this.correlativo
        ];

        return comprobante.join('-');
    }

    /**
     * @description
     * Nombre de Archivo
     * @returns
     */
    public fileName(): string 
    {
        const nombre: string[] = [
            this.empresa.nroDocumento,
            this.tipoDocumento,
            this.serie,
            this.correlativo,
        ];
        return nombre.join('-');
    }
}
