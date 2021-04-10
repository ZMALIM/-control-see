import { XMLElement, XMLChild } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';
import { TaxScheme } from './TaxScheme';
import { TaxExemptionReasonCode } from './TaxExemptionReasonCode';
import { TaxCategoryId } from './TaxCategoryId';

const { CAC, CBC } = prefix;

@XMLElement({ root: CAC })
export class TaxCategory 
{
    @XMLChild({ namespace: CBC, name: 'ID' })
    public id?: TaxCategoryId;
    
    @XMLChild({ namespace: CBC, name: 'Percent' })
    public percent?: string;

    @XMLChild({ namespace: CBC, name: 'TaxExemptionReasonCode' })
    public taxExemptionReasonCode?: TaxExemptionReasonCode;
    
    @XMLChild({ namespace: CBC, name: 'TierRange' })
    public tierRange?: string;
    
    @XMLChild({ namespace: CAC, name: 'TaxScheme' })
    public taxScheme?: TaxScheme;

    constructor(tc: TaxCategory) 
    {
        this.percent = tc.percent;
        this.taxExemptionReasonCode = tc.taxExemptionReasonCode;
        this.tierRange = tc.tierRange;
        this.taxScheme = tc.taxScheme;
        this.id = tc.id;
    }
}
