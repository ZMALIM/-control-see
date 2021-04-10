import { XMLElement, XMLChild } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';
import { PartyIdentification } from './PartyIdentification';
import { PartyName } from './PartyName';

const { CAC } = prefix;

@XMLElement({ root: CAC })
export class SignatoryParty 
{
    private _partyIdentification?: PartyIdentification;
    private _partyName?: PartyName;

    @XMLChild({ namespace: CAC, name: 'PartyIdentification' })
    get partyIdentification(): PartyIdentification 
    {
        return this._partyIdentification;
    }

    set partyIdentification(partyIdentification: PartyIdentification) 
    {
        this._partyIdentification = partyIdentification;
    }

    @XMLChild({ namespace: CAC, name: 'PartyName' })
    get partyName(): PartyName 
    {
        return this._partyName;
    }

    set partyName(partyName: PartyName) {
        this._partyName = partyName;
    }

    constructor(sp: SignatoryParty) 
    {
        this.partyIdentification = sp.partyIdentification;
        this.partyName = sp.partyName;
    }
}
