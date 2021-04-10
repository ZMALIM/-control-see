import { XMLElement, XMLChild} from 'xml-serializer-ts';
import { IdentificationCode } from './IdentificationCode';
import { prefix } from '@fe/common/constants';

const { CAC, CBC } = prefix;

@XMLElement({ root: CAC })
export class Country 
{
    @XMLChild({ namespace: CBC, name: 'IdentificationCode' })
    public identificationCode?: IdentificationCode;

    constructor(country: Country) 
    {
        this.identificationCode = country.identificationCode;
    }
}
