"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPE = void 0;
const moneda_1 = require("./moneda");
class CPE {
    constructor(documento) {
        documento = documento || {};
        this.ublVersion = documento.ublVersion || '2.1';
        this.serie = documento.serie || null;
        this.correlativo = documento.correlativo || null;
        this.tipoDocumento = documento.tipoDocumento || '01';
        this.empresa = documento.empresa || null;
        this.cliente = documento.cliente || null;
        this.fechaEmision = documento.fechaEmision || new Date();
        this.fechaVencimiento = documento.fechaVencimiento || new Date();
        this.moneda = documento.moneda || new moneda_1.Moneda();
        this.tipoOperacion = documento.tipoOperacion || '01';
        this.catImpuesto = documento.catImpuesto || 'O';
        this.pjeImpuesto = documento.pjeImpuesto || 18.00;
        this.gravadas = documento.gravadas || 0.00;
        this.gratuitas = documento.gratuitas || 0.00;
        this.inafectas = documento.inafectas || 0.00;
        this.exoneradas = documento.exoneradas || 0.00;
        this.descuentoGlobal = documento.descuentoGlobal || 0.00;
        this.items = documento.items || new Array();
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
        this.datosAdicionales = documento.datosAdicionales || new Array();
        this.tipoDocAnticipo = documento.tipoDocAnticipo || null;
        this.docAnticipo = documento.docAnticipo || null;
        this.monedaAnticipo = documento.monedaAnticipo || null;
        this.montoAnticipo = documento.montoAnticipo || null;
        this.datosGuiaTransportista = documento.datosGuiaTransportista || null;
        this.relacionados = documento.relacionados || new Array();
        this.otrosDocumentosRelacionados = documento.otrosDocumentosRelacionados || new Array();
        this.discrepancias = documento.discrepancias || new Array();
        this.nroOrdenCompra = documento.nroOrdenCompra || null;
        this.calculoIgv = documento.calculoIgv || 0.18;
        this.calculoIsc = documento.calculoIsc || 0.10;
        this.calculoDetraccion = documento.calculoDetraccion || 0.00;
    }
    get comprobante() {
        let comprobante = [
            this.serie,
            this.correlativo
        ];
        return comprobante.join('-');
    }
    fileName() {
        const nombre = [
            this.empresa.nroDocumento,
            this.tipoDocumento,
            this.serie,
            this.correlativo,
        ];
        return nombre.join('-');
    }
}
exports.CPE = CPE;
//# sourceMappingURL=cpe.js.map