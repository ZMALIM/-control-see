import { XMLElement, XMLAttribute, XMLText } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';

const { CBC } = prefix;

@XMLElement({ root: CBC })
export class ProfileID
{
    @XMLAttribute({namespace: ''})
    public schemeName?: string;

    @XMLAttribute({namespace: ''})
    public schemeAgencyName?: string;

    @XMLAttribute({namespace: ''})
    public schemeURI?: string;

    @XMLText({name: ''})
    public value: string;

    constructor(pi?: ProfileID) 
    {
        this.schemeName =  pi.schemeName;
        this.schemeAgencyName = pi.schemeAgencyName;
        this.schemeURI = pi.schemeURI;
        this.value = pi.value;
    }
}
