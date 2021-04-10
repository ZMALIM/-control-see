import { XMLElement, XMLAttribute, XMLText } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';

const { CBC } = prefix;

@XMLElement({ root: CBC })
export class TaxSchemeId 
{
    @XMLAttribute({ namespace: '' })
    public schemeID?: string;

    @XMLAttribute({ namespace: '' })
    public schemeName?: string;

    @XMLAttribute({ namespace: '' })
    public schemeAgencyID?: string;

    @XMLAttribute({ namespace: '' })
    public schemeAgencyName?: string;

    @XMLAttribute({ namespace: '' })
    public schemeURI?: string;

    @XMLText({ name: '' })
    public value: number;

    constructor(tsi: TaxSchemeId) {
        this.schemeID = tsi.schemeID;
        this.schemeName = tsi.schemeName;
        this.schemeAgencyID = tsi.schemeAgencyID;
        this.schemeAgencyName = tsi.schemeAgencyName;
        this.schemeURI = tsi.schemeURI;
        this.value = tsi.value;
    }
}
