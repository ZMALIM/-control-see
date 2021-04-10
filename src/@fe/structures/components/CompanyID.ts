import { XMLElement, XMLAttribute, XMLText} from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';

const { CBC } = prefix;

@XMLElement({ root: CBC })
export class CompanyID 
{
    @XMLAttribute({ name: '' })
    public schemeID?: string;

    @XMLAttribute({ name: '' })
    public schemeName?: string;

    @XMLAttribute({ name: '' })
    public schemeAgencyName?: string;

    @XMLAttribute({ name: '' })
    public schemeURI?: string;

    @XMLText({ name: '' })
    public value: string;

    constructor(companyID: CompanyID) 
    {
        this.schemeID = companyID.schemeID;
        this.schemeName = companyID.schemeName;
        this.schemeAgencyName = companyID.schemeAgencyName;
        this.schemeURI = companyID.schemeURI;
        this.value = companyID.value;
    }
}
