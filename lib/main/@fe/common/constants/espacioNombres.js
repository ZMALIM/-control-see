"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Namespaces = void 0;
exports.Namespaces = {
    xmlnsInvoice: 'urn:oasis:names:specification:ubl:schema:xsd:Invoice-2',
    xmlnsCreditNote: 'urn:oasis:names:specification:ubl:schema:xsd:CreditNote-2',
    xmlnsDebitNote: 'urn:oasis:names:specification:ubl:schema:xsd:DebitNote-2',
    xmlnsVoidedDocuments: 'urn:sunat:names:specification:ubl:peru:schema:xsd:VoidedDocuments-1',
    xmlnsSummaryDocuments: 'urn:sunat:names:specification:ubl:peru:schema:xsd:SummaryDocuments-1',
    xmlnsRetention: 'urn:sunat:names:specification:ubl:peru:schema:xsd:Retention-1',
    xmlnsPerception: 'urn:sunat:names:specification:ubl:peru:schema:xsd:Perception-1',
    xmlnsDespatchAdvice: 'urn:oasis:names:specification:ubl:schema:xsd:DespatchAdvice-2',
    sac: 'urn:sunat:names:specification:ubl:peru:schema:xsd:SunatAggregateComponents-1',
    cac: 'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
    cbc: 'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
    udt: 'urn:un:unece:uncefact:data:specification:UnqualifiedDataTypesSchemaModule:2',
    ccts: 'urn:un:unece:uncefact:documentation:2',
    ext: 'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2',
    qdt: 'urn:oasis:names:specification:ubl:schema:xsd:QualifiedDatatypes-2',
    ds: 'http://www.w3.org/2000/09/xmldsig#',
    xsi: 'http://www.w3.org/2001/XMLSchema-instance',
    ar: 'urn:oasis:names:specification:ubl:schema:xsd:ApplicationResponse-2',
    wssecurity: 'http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd',
    nodoId: '/ar:ApplicationResponse/cbc:ID',
    nodoResponseDate: '/ar:ApplicationResponse/cbc:ResponseDate',
    nodoResponseTime: 'ar:ApplicationResponse/cbc:ResponseTime',
    nodoResponseCode: '/ar:ApplicationResponse/cac:DocumentResponse/cac:Response/cbc:ResponseCode',
    nodoDescription: '/ar:ApplicationResponse/cac:DocumentResponse/cac:Response/cbc:Description',
};
//# sourceMappingURL=espacioNombres.js.map