import { XMLElement, XMLAttribute, XMLText } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';

const { CBC } = prefix;

@XMLElement({ root: CBC })
export class TaxCategoryId
{
    @XMLAttribute({ namespace: '' })
    public schemeID?: string;

    @XMLAttribute({ namespace: '' })
    public schemeName?: string;

    @XMLAttribute({ namespace: '' })
    public schemeAgencyName?: string;

    @XMLText({ name: '' })
    public value: string;

    constructor(tci: TaxCategoryId) 
    {
        this.schemeID = tci.schemeID || 'UN/ECE 5305';
        this.schemeName = tci.schemeName || 'Tax Category Identifier';
        this.schemeAgencyName = tci.schemeAgencyName || 'United Nations Economic Commission for Europe';
        this.value = tci.value;
    }
}
