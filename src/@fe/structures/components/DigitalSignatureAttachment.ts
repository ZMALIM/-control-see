import { XMLElement, XMLChild } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';
import { ExternalReference } from './ExternalReference';

const { CAC, CBC } = prefix;

@XMLElement({ root: CAC })
export class DigitalSignatureAttachment 
{
    private _externalReference?: ExternalReference;

    @XMLChild({ namespace: CAC, name: 'ExternalReference' })
    get externalReference(): ExternalReference 
    {
        return this._externalReference;
    }

    set externalReference(externalReference: ExternalReference)
    {
        this._externalReference = externalReference;
    }

    constructor(dsa: DigitalSignatureAttachment) 
    {
        this.externalReference = dsa.externalReference;
    }
}
