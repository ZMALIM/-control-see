import { XMLElement, XMLChild} from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';
import { AdditionalInformation } from './AdditionalInformation';

const { CAC } = prefix;

@XMLElement({ root: CAC })
export class ExtensionContent 
{
    private _additionalInformation?: AdditionalInformation;

    @XMLChild({ namespace: CAC, name: 'AdditionalInformation' })
    get additionalInformation(): AdditionalInformation 
    {
        return this._additionalInformation;
    }

    set additionalInformation(additionalInformation: AdditionalInformation) 
    {
        this._additionalInformation = additionalInformation;
    }

    constructor() 
    {
        this.additionalInformation = new AdditionalInformation();
    }
}
