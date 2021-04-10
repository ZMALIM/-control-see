import { XMLElement, XMLAttribute, XMLText} from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';

const { CBC } = prefix;

@XMLElement({ root: CBC })
export class AllowanceChargeReasonCode 
{
    @XMLAttribute({ name: '' })
    public listAgencyName?: string;

    @XMLAttribute({ name: '' })
    public listName?: string;

    @XMLAttribute({ name: '' })
    public listURI?: string;

    @XMLText({ name: '' })
    public value: string;

    constructor(atc: AllowanceChargeReasonCode) 
    {
        this.listAgencyName = atc.listAgencyName || 'PE:SUNAT';
        this.listName = atc.listName || 'Cargo/descuento';
        this.listURI = atc.listURI || 'urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo53';
        this.value = atc.value;
    }
}
