import { XMLElement, XMLChild} from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';
import { ExtensionContent } from './ExtensionContent';

const { EXT } = prefix;

@XMLElement({ root: EXT })
export class UblExtension 
{
    private _extensionContent?: string;

    @XMLChild({ namespace: EXT, name: 'ExtensionContent' })
    get extensionContent(): string 
    {
        return this._extensionContent;
    }

    set extensionContent(extensionContent: string) 
    {
        this._extensionContent = extensionContent;
    }

    constructor() 
    {
        this.extensionContent = '';
    }
}
