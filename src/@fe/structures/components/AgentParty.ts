import { PartyIdentification } from './PartyIdentification';
import { PartyName } from './PartyName';
import { PostalAddress } from './PostalAddress';
import { PartyLegalEntity } from './PartyLegalEntity';

export class AgentParty 
{
    private _partyIdentification?: PartyIdentification;
    private _partyName?: PartyName;
    private _postalAddress?: PostalAddress;
    private _partyLegalEntity?: PartyLegalEntity;
    
    get partyIdentification(): PartyIdentification 
    {
        return this._partyIdentification;
    }

    set partyIdentification(partyIdentification: PartyIdentification) 
    {
        this._partyIdentification = partyIdentification;
    }

    get partyName(): PartyName 
    {
        return this._partyName;
    }

    set partyName(partyName: PartyName) 
    {
        this._partyName = partyName;
    }

    get postalAddress(): PostalAddress 
    {
        return this._postalAddress;
    }

    set postalAddress(postalAddress: PostalAddress) 
    {
        this._postalAddress = postalAddress;
    }

    get partyLegalEntity(): PartyLegalEntity 
    {
        return this._partyLegalEntity;
    }

    set partyLegalEntity(partyLegalEntity: PartyLegalEntity) 
    {
        this._partyLegalEntity = partyLegalEntity;
    }
}
