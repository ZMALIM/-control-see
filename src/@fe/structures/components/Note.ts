import { XMLElement, XMLAttribute, XMLText } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';

const { CBC } = prefix;

@XMLElement({ root: CBC})
export class Note 
{
    @XMLAttribute({ name: '' })
    public languageLocaleID?: string;

    @XMLText({ name: '' })
    public value: string;

    constructor(ni: Note) 
    {
        this.languageLocaleID = ni.languageLocaleID;
        this.value = ni.value;
    }
}
