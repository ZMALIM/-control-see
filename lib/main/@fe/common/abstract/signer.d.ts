import { SignatureConfig, Signed } from '@fe/common/exchange';
export declare abstract class Signer {
    config: SignatureConfig;
    abstract xml(xmlDocument: string): Promise<Signed>;
}
