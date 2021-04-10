import { InvoiceDocumentReference } from './InvoiceDocumentReference';
export declare class BillingReference {
    private _invoiceDocumentReference?;
    get invoiceDocumentReference(): InvoiceDocumentReference;
    set invoiceDocumentReference(invoiceDocumentReference: InvoiceDocumentReference);
    constructor(idr: InvoiceDocumentReference);
}
