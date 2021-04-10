"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatosGuia = void 0;
const Contribuyente_1 = require("./Contribuyente");
class DatosGuia {
    constructor() {
        this.direccionDestino = new Contribuyente_1.Contribuyente();
        this.direccionOrigen = new Contribuyente_1.Contribuyente();
    }
}
exports.DatosGuia = DatosGuia;
//# sourceMappingURL=datos-guia.js.map