import { XMLElement, XMLChild } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';
import { AddressTypeCode } from './AddressTypeCode';
import { AddressLine } from './AddressLine';
import { Country } from './Country';

const { CAC, CBC } = prefix;

@XMLElement({ root: CAC })
export class RegistrationAddress 
{
    @XMLChild({ namespace: CBC, name: 'AddressTypeCode' })
    public addressTypeCode?: AddressTypeCode;
    
    @XMLChild({ namespace: CBC, name: 'CityName' })
    public cityName?: string;

    @XMLChild({ namespace: CBC, name: 'CountrySubentity' })
    public countrySubentity?: string;

    @XMLChild({ namespace: CBC, name: 'District' })
    public district?: string;

    @XMLChild({ namespace: CAC, name: 'AddressLine' })
    public addressLine?: AddressLine;

    @XMLChild({ namespace: CAC, name: 'Country' })
    public country?: Country;

    constructor(ra: RegistrationAddress) 
    {
        this.addressTypeCode = ra.addressTypeCode;
        this.cityName = ra.cityName;
        this.countrySubentity = ra.countrySubentity;
        this.district = ra.district;
        this.addressLine = ra.addressLine;
        this.country = ra.country;
    }
}
