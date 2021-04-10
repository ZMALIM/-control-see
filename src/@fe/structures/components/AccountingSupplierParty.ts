import { XMLElement, XMLChild } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';
import { Party } from './Party';

const { CAC, CBC } = prefix;

@XMLElement({ root: CAC })
export class AccountingSupplierParty 
{
    @XMLChild({ namespace: CBC, name: 'CustomerAssignedAccountID' })
    public customerAssignedAccountID?: string;

    @XMLChild({ namespace: CBC, name: 'AdditionalAccountID' })
    public additionalAccountID?: string;

    @XMLChild({ namespace: CAC, name: 'Party' })
    public party?: Party;

    constructor(asp: AccountingSupplierParty) 
    {
        this.customerAssignedAccountID = asp.customerAssignedAccountID;
        this.additionalAccountID = asp.additionalAccountID;
        this.party = asp.party;
    }
}
