import { PostalAddress } from './PostalAddress';
import { AccountingSupplierParty } from './AccountingSupplierParty';
import { AgentParty } from './AgentParty';
import { SunatRoadTransport } from './SunatRoadTransport';
import { InvoicedQuantity } from './InvoicedQuantity';

export class SunatEmbededDespatchAdvice 
{
    private deliveryAddress: PostalAddress;
    private originAddress: PostalAddress;
    private sunatCarrierParty: AccountingSupplierParty;
    private driverParty: AgentParty;
    private sunatRoadTransport: SunatRoadTransport;
    private transportModeCode: string;
    private grossWeightMeasure: InvoicedQuantity;

    constructor() {
        // this.DeliveryAddress = new PostalAddress();
        // this.OriginAddress = new PostalAddress();
        this.driverParty = new AgentParty();
        this.sunatRoadTransport = new SunatRoadTransport();
        // this.GrossWeightMeasure = new InvoicedQuantity();
    }
}
