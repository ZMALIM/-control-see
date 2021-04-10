import { XMLElement, XMLAttribute, XMLText } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';

const { CBC } = prefix;

@XMLElement({ root: CBC })
export class TaxExemptionReasonCode 
{
    @XMLAttribute({ namespace: '' })
    public listAgencyName?: string;

    @XMLAttribute({ namespace: '' })
    public listName?: string;

    @XMLAttribute({ namespace: '' })
    public listURI?: string;

    @XMLText({ name: '' })
    public value?: string;

    constructor(terc: TaxExemptionReasonCode) 
    {
        this.listAgencyName = terc.listAgencyName;
        this.listName = terc.listName;
        this.listURI = terc.listURI;
        this.value = terc.value;
    }
}
