import { ErrorWS } from '@fe/common/exchange';
export declare class Utils {
    processed(code: string): boolean;
    formatCert(certFile: any): any;
    crytoKey(certFile: any): ArrayBufferLike;
    b64ToBinary(base64: any): Uint8Array;
    errorWS(error: any): ErrorWS;
}
