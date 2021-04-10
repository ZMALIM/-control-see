import { XMLElement, XMLChild } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';

const { CAC, CBC } = prefix;

@XMLElement({ root: CAC })
export class ExternalReference 
{
    private _uri?: string;

    @XMLChild({ namespace: CBC, name: 'URI' })
    get uri(): string {
        return this._uri;
    }

    set uri(uri: string) {
        this._uri = uri;
    }

    constructor(er?: ExternalReference) 
    {
        this.uri = er.uri;
    }
}
