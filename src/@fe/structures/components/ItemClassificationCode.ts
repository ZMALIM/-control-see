import { XMLElement, XMLAttribute, XMLText } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';

const { CBC } = prefix;

@XMLElement({ root: CBC })
export class ItemClassificationCode 
{
    @XMLAttribute({ namespace: '' })
    public listID?: string;

    @XMLAttribute({ namespace: '' })
    public listAgencyName?: string;

    @XMLAttribute({ namespace: '' })
    public listName?: string;

    @XMLText({ name: '' })
    public value?: string;

    constructor(acp: ItemClassificationCode) 
    {
        this.listID = acp.listID;
        this.listAgencyName = acp.listAgencyName;
        this.listName = acp.listName;
        this.value = acp.value;
    }
}
