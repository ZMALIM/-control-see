import { XMLElement, XMLChild } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';
import { TaxSchemeId } from './TaxSchemeId';

const { CAC, CBC } = prefix;

@XMLElement({ root: CAC })
export class TaxScheme 
{
    @XMLChild({ namespace: CBC, name: 'ID' })
    public id?: TaxSchemeId;

    @XMLChild({ namespace: CBC, name: 'Name' })
    public name?: string;

    @XMLChild({ namespace: CBC, name: 'TaxTypeCode' })
    public taxTypeCode?: string;

    constructor(te: TaxScheme) {
        this.id = te.id;
        this.name = te.name;
        this.taxTypeCode = te.taxTypeCode;
    }
}
