import { XMLElement, XMLChild} from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';
import { UblExtension } from './UblExtension';

const { EXT } = prefix;

@XMLElement({ root: EXT })
export class UblExtensions 
{
    @XMLChild({ namespace: EXT, name: 'UBLExtension' })
    public ublExtension: UblExtension;

    // @XMLChild({ namespace: EXT, name: 'UBLExtension2' })
    // public ublExtension2: UblExtension;
    
    constructor() 
    {
        this.ublExtension = new UblExtension();
        // this.ublExtension2 = new UblExtension();
    }
}
