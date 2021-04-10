import { PartyIdentification } from './PartyIdentification';
import { PartyName } from './PartyName';
export declare class SignatoryParty {
    private _partyIdentification?;
    private _partyName?;
    get partyIdentification(): PartyIdentification;
    set partyIdentification(partyIdentification: PartyIdentification);
    get partyName(): PartyName;
    set partyName(partyName: PartyName);
    constructor(sp: SignatoryParty);
}
