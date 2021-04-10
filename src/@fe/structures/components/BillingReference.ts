import { XMLElement, XMLChild } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';
import { InvoiceDocumentReference } from './InvoiceDocumentReference';

const { CAC } = prefix;

@XMLElement({ root: CAC })
export class BillingReference 
{
    private _invoiceDocumentReference?: InvoiceDocumentReference;

    @XMLChild({ namespace: CAC, name: 'InvoiceDocumentReference' })
    get invoiceDocumentReference(): InvoiceDocumentReference 
    {
        return this._invoiceDocumentReference;
    }

    set invoiceDocumentReference(invoiceDocumentReference: InvoiceDocumentReference) 
    {
        this._invoiceDocumentReference = invoiceDocumentReference;
    }

    constructor(idr: InvoiceDocumentReference) 
    {
        this.invoiceDocumentReference = idr;
    }
}
