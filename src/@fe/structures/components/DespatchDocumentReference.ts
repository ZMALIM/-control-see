import { XMLElement, XMLChild} from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';
import { DocumentTypeCode } from './DocumentTypeCode';

const { CAC, CBC } = prefix;

@XMLElement({ root: CAC })
export class DespatchDocumentReference 
{
    @XMLChild({ namespace: CBC, name: 'ID' })
    public id?: string;

    @XMLChild({ namespace: CBC, name: 'DocumentTypeCode' })
    public documentTypeCode?: DocumentTypeCode;

    constructor(ddr) 
    {
        this.id = ddr.id;
        this.documentTypeCode = ddr.documentTypeCode;
    }
}
