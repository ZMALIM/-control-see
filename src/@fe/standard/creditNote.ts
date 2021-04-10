import { XMLElement, XMLChild, XMLAttribute } from 'xml-serializer-ts';
import { Namespaces, prefix } from '@fe/common/constants';
import { 
    UblExtensions, 
    DiscrepancyResponse, 
    BillingReference, 
    InvoiceDocumentReference,
    SignatureCac,
    AccountingSupplierParty,
    TaxTotal,
    LegalMonetaryTotal,
    InvoiceLine,
} from '@fe/structures';

const { CREDIT_NOTE, EXT, CAC, CBC } = prefix;

@XMLElement({ root: CREDIT_NOTE })
export class CreditNote 
{
    @XMLAttribute({ name: '' })
    protected readonly xmlns: string;
    @XMLAttribute({ namespace: 'xmlns' })
    protected readonly cac: string;
    @XMLAttribute({ namespace: 'xmlns' })
    protected readonly cbc: string;
    @XMLAttribute({ namespace: 'xmlns' })
    protected readonly ccts: string;
    @XMLAttribute({ namespace: 'xmlns' })
    protected readonly ds: string;
    @XMLAttribute({ namespace: 'xmlns' })
    protected readonly ext: string;
    @XMLAttribute({ namespace: 'xmlns' })
    protected readonly qdt: string;
    @XMLAttribute({ namespace: 'xmlns' })
    protected readonly  sac: string;
    @XMLAttribute({ namespace: 'xmlns' })
    protected readonly  udt: string;
    @XMLAttribute({ namespace: 'xmlns' })
    protected readonly xsi: string;

    @XMLChild({ namespace: EXT, name: 'UBLExtensions' })
    public ublExtensions: UblExtensions;

    @XMLChild({ namespace: CBC, name: 'UBLVersionID' })
    public ublVersionID: string;

    @XMLChild({ namespace: CBC, name: 'CustomizationID' })
    public customizationID: string;

    @XMLChild({ namespace: CBC, name: 'ID' })
    public id: string;

    @XMLChild({ namespace: CBC, name: 'IssueDate' })
    public issueDate: string;

    @XMLChild({ namespace: CBC, name: 'DocumentCurrencyCode' })
    public documentCurrencyCode: string;

    @XMLChild({ namespace: CAC, name: 'DiscrepancyResponse' })
    public discrepancyResponses: DiscrepancyResponse[];

    @XMLChild({ namespace: CAC, name: 'BillingReference' })
    public billingReferences: BillingReference[];

    @XMLChild({ namespace: CAC, name: 'DespatchDocumentReference' })
    public despatchDocumentReferences: InvoiceDocumentReference[];

    @XMLChild({ namespace: CAC, name: 'AdditionalDocumentReference' })
    public additionalDocumentReferences: InvoiceDocumentReference[];

    @XMLChild({ namespace: CAC, name: 'Signature' })
    public signature: SignatureCac;

    @XMLChild({ namespace: CAC, name: 'AccountingSupplierParty' })
    public accountingSupplierParty: AccountingSupplierParty;
   
    @XMLChild({ namespace: CAC, name: 'AccountingCustomerParty' })
    public accountingCustomerParty: AccountingSupplierParty;

    @XMLChild({ namespace: CAC, name: 'TaxTotal' })
    public taxTotals: TaxTotal[];

    @XMLChild({ namespace: CAC, name: 'LegalMonetaryTotal' })
    public legalMonetaryTotal: LegalMonetaryTotal;

    @XMLChild({ namespace: CAC, name: 'CreditNoteLine' })
    public creditNoteLines: InvoiceLine[];

    constructor() 
    {
        this.xmlns = Namespaces.xmlnsCreditNote;
        this.cac = Namespaces.cac;
        this.cbc = Namespaces.cbc;
        this.ccts = Namespaces.ccts;
        this.ds = Namespaces.ds;
        this.ext = Namespaces.ext;
        this.qdt = Namespaces.qdt;
        this.sac = Namespaces.sac;
        this.udt = Namespaces.udt;
        this.xsi = Namespaces.xsi;
        this.discrepancyResponses = new Array<DiscrepancyResponse>();
        this.billingReferences = new Array<BillingReference>();
        this.despatchDocumentReferences = new Array<InvoiceDocumentReference>();
        this.additionalDocumentReferences = new Array<InvoiceDocumentReference>();
        this.taxTotals = new Array<TaxTotal>();
        this.creditNoteLines = new Array<InvoiceLine>();
    }
}
