import { XMLElement, XMLChild } from 'xml-serializer-ts';
import { create } from 'xmlbuilder';
import { prefix } from '@fe/common/constants';
import { TaxScheme } from './TaxScheme';
import { CompanyID } from './CompanyID';
import { RegistrationAddress } from './RegistrationAddress';

const { CAC, CBC } = prefix;

@XMLElement({ root: CAC })
export class PartyTaxScheme 
{
    @XMLChild({ namespace: CBC, name: 'RegistrationName' })
    public registrationName?: string;

    @XMLChild({ namespace: CBC, name: 'CompanyID' })
    public companyID?: CompanyID;

    @XMLChild({ namespace: CAC, name: 'TaxScheme' })
    public taxScheme?: TaxScheme;

    @XMLChild({ namespace: CAC, name: 'RegistrationAddress' })
    public registrationAddress?: RegistrationAddress;

    constructor(pts: PartyTaxScheme) 
    {
        // const xml = new XMLCData();
        // const xml = create('').cdata(pts.registrationName).toString();
        this.registrationName =  pts.registrationName;
        this.companyID = pts.companyID;
        this.taxScheme = pts.taxScheme;
        this.registrationAddress = pts.registrationAddress;
    }
}
