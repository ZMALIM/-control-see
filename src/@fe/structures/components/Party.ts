import { XMLElement, XMLChild} from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';
import { PartyName } from './PartyName';
import { PostalAddress } from './PostalAddress';
import { PartyLegalEntity } from './PartyLegalEntity';
import { PartyIdentification } from './PartyIdentification';
import { PartyTaxScheme } from './PartyTaxScheme';

const { CAC } = prefix;

@XMLElement({ root: CAC })
export class Party 
{

    @XMLChild({ namespace: CAC, name: 'PartyIdentification' })
    public partyIdentification?: PartyIdentification;

    @XMLChild({ namespace: CAC, name: 'PartyName' })
    public partyName?: PartyName;

    @XMLChild({ namespace: CAC, name: 'PartyTaxScheme' })
    public partyTaxScheme?: PartyTaxScheme;

    @XMLChild({ namespace: CAC, name: 'PostalAddress' })
    public postalAddress?: PostalAddress;

    @XMLChild({ namespace: CAC, name: 'PartyLegalEntity' })
    public partyLegalEntity?: PartyLegalEntity;

    constructor(party: Party) 
    {
        this.partyIdentification = party.partyIdentification;
        this.partyName = party.partyName;
        this.partyTaxScheme = party.partyTaxScheme;
        this.postalAddress = party.postalAddress;
        this.partyLegalEntity = party.partyLegalEntity;
    }
}
