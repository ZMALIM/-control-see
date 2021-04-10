import { XMLElement, XMLChild } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';

const { CAC, CBC } = prefix;

@XMLElement({ root: CAC})
export class OrderReference 
{
    @XMLChild({ namespace: CBC, name: 'ID' })
    public id?: string;

    constructor(or: OrderReference) 
    {
        this.id = or.id;
    }
}
