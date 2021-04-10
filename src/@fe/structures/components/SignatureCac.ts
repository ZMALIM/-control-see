import { XMLElement, XMLChild } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';
import { SignatoryParty } from './SignatoryParty';
import { DigitalSignatureAttachment } from './DigitalSignatureAttachment';
import { PartyIdentification } from './PartyIdentification';
import { PartyName } from './PartyName';
import { ExternalReference } from './ExternalReference';

const { CAC, CBC } = prefix;

@XMLElement({ root: CAC })
export class SignatureCac 
{
    private _id?: string;
    private _signatoryParty?: SignatoryParty;
    private _digitalSignatureAttachment?: DigitalSignatureAttachment;

    @XMLChild({ namespace: CBC, name: 'ID' })
    get id(): string 
    {
        return this._id;
    }

    set id(id: string) {
        this._id = id;
    }

    @XMLChild({ namespace: CAC, name: 'SignatoryParty' })
    get signatoryParty(): SignatoryParty 
    {
        return this._signatoryParty;
    }

    set signatoryParty(signatoryParty: SignatoryParty)
    {
        this._signatoryParty = signatoryParty;
    }

    @XMLChild({ namespace: CAC, name: 'DigitalSignatureAttachment' })
    get digitalSignatureAttachment(): DigitalSignatureAttachment 
    {
        return this._digitalSignatureAttachment;
    }

    set digitalSignatureAttachment(digitalSignatureAttachment: DigitalSignatureAttachment) 
    {
        this._digitalSignatureAttachment = digitalSignatureAttachment;
    }

    constructor(sc: SignatureCac) 
    {
        this.id = sc.id;
        this.signatoryParty = sc.signatoryParty;
        this.digitalSignatureAttachment = sc.digitalSignatureAttachment;
    }
}
