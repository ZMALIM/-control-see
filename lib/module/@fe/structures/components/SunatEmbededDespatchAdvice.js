"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SunatEmbededDespatchAdvice = void 0;
const AgentParty_1 = require("./AgentParty");
const SunatRoadTransport_1 = require("./SunatRoadTransport");
class SunatEmbededDespatchAdvice {
    constructor() {
        this.driverParty = new AgentParty_1.AgentParty();
        this.sunatRoadTransport = new SunatRoadTransport_1.SunatRoadTransport();
    }
}
exports.SunatEmbededDespatchAdvice = SunatEmbededDespatchAdvice;
//# sourceMappingURL=SunatEmbededDespatchAdvice.js.map