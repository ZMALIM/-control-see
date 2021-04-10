export declare class KeyInfo {
    certificate: any;
    constructor(certificate: any);
    getSubjectName(certObj: any): string;
    getKeyInfo(key: any, prefix: any): any;
    getKey(): any;
}
