import { XMLElement, XMLChild, XMLAttribute } from 'xml-serializer-ts';
import { Namespaces, prefix } from '@fe/common/constants';
import { 
    UblExtensions, 
    InvoiceDocumentReference,
    SignatureCac,
    AccountingSupplierParty,
    TaxTotal,
    LegalMonetaryTotal,
    InvoiceLine,
    InvoiceTypeCode,
    Note,
    DocumentCurrencyCode,
    PrepaidPayment,
    OrderReference,
    DespatchDocumentReference,
    AllowanceCharge,
    ProfileID
} from '@fe/structures';

const { INVOICE, EXT, CAC, CBC} = prefix;

@XMLElement({ root: INVOICE})
export class Invoice 
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
    
    @XMLChild({ namespace: CBC, name: 'ProfileID' })
    public profileID: ProfileID;

    @XMLChild({ namespace: CBC, name: 'ID' })
    public id: string;

    @XMLChild({ namespace: CBC, name: 'IssueDate' })
    public issueDate: string;

    @XMLChild({ namespace: CBC, name: 'IssueTime' })
    public issueTime: string;

    @XMLChild({ namespace: CBC, name: 'DueDate' })
    public dueDate: string;

    @XMLChild({ namespace: CBC, name: 'InvoiceTypeCode' })
    public invoiceTypeCode: InvoiceTypeCode;

    @XMLChild({ namespace: CBC, name: 'Note' })
    public note: Note;

    @XMLChild({ namespace: CBC, name: 'DocumentCurrencyCode' })
    public documentCurrencyCode: DocumentCurrencyCode;

    @XMLChild({ namespace: CBC, name: 'LineCountNumeric' })
    public lineCountNumeric: string;

    @XMLChild({ namespace: CAC, name: 'AdditionalDocumentReference' })
    public additionalDocumentReferences: InvoiceDocumentReference[];

    @XMLChild({ namespace: CAC, name: 'Signature' })
    public signature: SignatureCac;
    
    @XMLChild({ namespace: CAC, name: 'AccountingSupplierParty' })
    public accountingSupplierParty: AccountingSupplierParty;

    @XMLChild({ namespace: CAC, name: 'AccountingCustomerParty' })
    public accountingCustomerParty: AccountingSupplierParty;
   
    @XMLChild({ namespace: CAC, name: 'PrepaidPayment' })
    public prepaidPayment: PrepaidPayment;

    @XMLChild({ namespace: CAC, name: 'AllowanceCharge' })
    public allowanceCharge?: AllowanceCharge;

    @XMLChild({ namespace: CAC, name: 'TaxTotal' })
    public taxTotals: TaxTotal[];

    @XMLChild({ namespace: CAC, name: 'OrderReference' })
    public orderReference: OrderReference;

    @XMLChild({ namespace: CAC, name: 'DespatchDocumentReference' })
    public despatchDocumentReferences: DespatchDocumentReference[];

    @XMLChild({ namespace: CAC, name: 'LegalMonetaryTotal' })
    public legalMonetaryTotal: LegalMonetaryTotal;
    
    @XMLChild({ namespace: CAC, name: 'InvoiceLine' })
    public invoiceLine: InvoiceLine[];

    constructor() 
    {
        this.xmlns = Namespaces.xmlnsInvoice;
        this.cac = Namespaces.cac;
        this.cbc = Namespaces.cbc;
        this.ccts = Namespaces.ccts;
        this.ds = Namespaces.ds;
        this.ext = Namespaces.ext;
        this.qdt = Namespaces.qdt;
        this.sac = Namespaces.sac;
        this.udt = Namespaces.udt;
        this.xsi = Namespaces.xsi;
        this.additionalDocumentReferences = new Array<InvoiceDocumentReference>();
        this.taxTotals = new Array<TaxTotal>();
        this.invoiceLine = new Array<InvoiceLine>();
        this.despatchDocumentReferences = new Array<DespatchDocumentReference>();
    }
}
