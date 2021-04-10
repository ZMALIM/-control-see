import { XMLElement, XMLAttribute, XMLText } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';

const { CBC } = prefix;

@XMLElement({ root: CBC})
export class InvoiceTypeCode 
{
    @XMLAttribute({ name: '' })
    public listAgencyName?: string;

    @XMLAttribute({ name: '' })
    public listName?: string;

    @XMLAttribute({ name: '' })
    public listURI?: string;

    @XMLAttribute({ name: '' })
    public listID?: string;

    @XMLAttribute({ name: '' })
    public name?: string;

    @XMLAttribute({ name: '' })
    public listSchemeURI?: string;

    @XMLText({ name: '' })
    public value?: string;

    constructor(itc: InvoiceTypeCode) 
    {
        this.listAgencyName = itc.listAgencyName;
        this.listName = itc.listName;
        this.listURI = itc.listURI;
        this.listID = itc.listID;
        this.name = itc.name;
        this.listSchemeURI = itc.listSchemeURI;
        this.value = itc.value;
    }
}
