import { XMLElement, XMLAttribute, XMLText } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';

const { CBC } = prefix;

@XMLElement({ root: CBC})
export class IdentificationCode 
{
    @XMLAttribute({ name: '' })
    public listID?: string;

    @XMLAttribute({ name: '' })
    public listAgencyName?: string;

    @XMLAttribute({ name: '' })
    public listName?: string;

    @XMLText({ name: '' })
    public value: string;

    constructor(ic: IdentificationCode) 
    {
        this.listID = ic.listID;
        this.listAgencyName = ic.listAgencyName;
        this.listName = ic.listName;
        this.value = ic.value;
    }
}
