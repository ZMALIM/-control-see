import { ExternalReference } from './ExternalReference';
export declare class DigitalSignatureAttachment {
    private _externalReference?;
    get externalReference(): ExternalReference;
    set externalReference(externalReference: ExternalReference);
    constructor(dsa: DigitalSignatureAttachment);
}
