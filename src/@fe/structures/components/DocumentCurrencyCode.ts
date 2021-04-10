import { XMLElement, XMLAttribute, XMLText } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';

const { CBC } = prefix;

@XMLElement({ root: CBC})
export class DocumentCurrencyCode 
{
    @XMLAttribute({ name: '' })
    public listID?: string;

    @XMLAttribute({ name: '' })
    public listName?: string;

    @XMLAttribute({ name: '' })
    public listAgencyName?: string;

    @XMLText({ name: '' })
    public value: string;

    constructor(dcc: DocumentCurrencyCode) 
    {
        this.listID = dcc.listID;
        this.listName = dcc.listName;
        this.listAgencyName = dcc.listAgencyName;
        this.value = dcc.value;
    }
}
