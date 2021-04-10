import { SignatoryParty } from './SignatoryParty';
import { DigitalSignatureAttachment } from './DigitalSignatureAttachment';
export declare class SignatureCac {
    private _id?;
    private _signatoryParty?;
    private _digitalSignatureAttachment?;
    get id(): string;
    set id(id: string);
    get signatoryParty(): SignatoryParty;
    set signatoryParty(signatoryParty: SignatoryParty);
    get digitalSignatureAttachment(): DigitalSignatureAttachment;
    set digitalSignatureAttachment(digitalSignatureAttachment: DigitalSignatureAttachment);
    constructor(sc: SignatureCac);
}
