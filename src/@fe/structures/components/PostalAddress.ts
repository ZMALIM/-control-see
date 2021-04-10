import { XMLElement, XMLChild} from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';
import { Country } from './Country';

const { CAC, CBC } = prefix;

@XMLElement({ root: CAC })
export class PostalAddress 
{
    @XMLChild({ namespace: CBC, name: 'ID' })
    public id?: string;

    @XMLChild({ namespace: CBC, name: 'StreetName' })
    public streetName?: string;

    @XMLChild({ namespace: CBC, name: 'CitySubdivisionName' })
    public citySubdivisionName?: string;

    @XMLChild({ namespace: CBC, name: 'CityName' })
    public cityName?: string;

    @XMLChild({ namespace: CBC, name: 'CountrySubentity' })
    public countrySubentity?: string;

    @XMLChild({ namespace: CBC, name: 'District' })
    public district?: string;

    @XMLChild({ namespace: CAC, name: 'Country' })
    public country?: Country;

    constructor(pa: PostalAddress) 
    {
        this.id = pa.id;
        this.streetName = pa.streetName;
        this.citySubdivisionName = pa.citySubdivisionName;
        this.cityName = pa.cityName;
        this.countrySubentity = pa.countrySubentity;
        this.district = pa.district;
        this.country = pa.country;
    }
}
