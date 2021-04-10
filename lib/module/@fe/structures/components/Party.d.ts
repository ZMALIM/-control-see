import { PartyName } from './PartyName';
import { PostalAddress } from './PostalAddress';
import { PartyLegalEntity } from './PartyLegalEntity';
import { PartyIdentification } from './PartyIdentification';
import { PartyTaxScheme } from './PartyTaxScheme';
export declare class Party {
    partyIdentification?: PartyIdentification;
    partyName?: PartyName;
    partyTaxScheme?: PartyTaxScheme;
    postalAddress?: PostalAddress;
    partyLegalEntity?: PartyLegalEntity;
    constructor(party: Party);
}
