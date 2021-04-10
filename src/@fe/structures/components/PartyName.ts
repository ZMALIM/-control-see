import { XMLElement, XMLChild } from 'xml-serializer-ts';
import { create } from 'xmlbuilder';
import { prefix } from '@fe/common/constants';

const { CAC, CBC } = prefix;

@XMLElement({ root: CAC })
export class PartyName 
{
    @XMLChild({ namespace: CBC, name: 'Name' })
    public name?: string;

    constructor(pn: PartyName) 
    {
        // const xml = create('a').cdata(pn.name).end().toString();
        // const xml = new XMLCData();
        this.name = pn.name;
    }
}
