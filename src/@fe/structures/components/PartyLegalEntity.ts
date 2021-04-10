import { XMLElement, XMLChild} from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';
import { RegistrationAddress } from './RegistrationAddress';

const { CAC, CBC } = prefix;

@XMLElement({ root: CAC })
export class PartyLegalEntity 
{
    @XMLChild({ namespace: CBC, name: 'RegistrationName' })
    public registrationName?: string;

    @XMLChild({ namespace: CAC, name: 'RegistrationAddress' })
    public registrationAddress?: RegistrationAddress;

    constructor(ple: PartyLegalEntity) 
    {
        this.registrationName = ple.registrationName;
        this.registrationAddress = ple.registrationAddress;
    }
}
