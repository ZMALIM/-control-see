import { XMLElement, XMLChild } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';

const { CAC, CBC } = prefix;

@XMLElement({ root: CAC })
export class AddressLine 
{
    @XMLChild({ namespace: CBC, name: 'Line' })
    public line?: string;

    constructor(al: AddressLine) 
    {
        this.line = al.line;
    }
}
