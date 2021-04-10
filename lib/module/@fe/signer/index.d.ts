import { SignatureConfig, Signed } from '@fe/common/exchange';
import { Signer } from '@fe/common/abstract';
export declare class XMLSigner implements Signer {
    private crypto;
    private utils;
    private algorithm;
    private _config;
    constructor();
    get config(): SignatureConfig;
    set config(_config: SignatureConfig);
    private configOpenSSL;
    private getCertificate;
    private getCertificatePassword;
    private getCertificateDetail;
    private getSignNode;
    xml(doc: string): Promise<Signed>;
}
