import { XMLElement, XMLText, XMLAttribute } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';

const { CBC } = prefix;

@XMLElement({ root: CBC })
export class InvoicedQuantity 
{
    @XMLAttribute({ namespace: '' })
    public unitCode?: string;

    @XMLAttribute({ namespace: '' })
    public unitCodeListID?: string;

    @XMLAttribute({ namespace: '' })
    public unitCodeListAgencyName?: string;

    @XMLText({ name: '' })
    public value: number;

    constructor(iq: InvoicedQuantity) 
    {
        this.unitCode = iq.unitCode;
        this.unitCodeListID = iq.unitCodeListID;
        this.unitCodeListAgencyName = iq.unitCodeListAgencyName;
        this.value = iq.value;
    }
}
