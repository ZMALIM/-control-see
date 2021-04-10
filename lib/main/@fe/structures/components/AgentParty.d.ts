import { PartyIdentification } from './PartyIdentification';
import { PartyName } from './PartyName';
import { PostalAddress } from './PostalAddress';
import { PartyLegalEntity } from './PartyLegalEntity';
export declare class AgentParty {
    private _partyIdentification?;
    private _partyName?;
    private _postalAddress?;
    private _partyLegalEntity?;
    get partyIdentification(): PartyIdentification;
    set partyIdentification(partyIdentification: PartyIdentification);
    get partyName(): PartyName;
    set partyName(partyName: PartyName);
    get postalAddress(): PostalAddress;
    set postalAddress(postalAddress: PostalAddress);
    get partyLegalEntity(): PartyLegalEntity;
    set partyLegalEntity(partyLegalEntity: PartyLegalEntity);
}
