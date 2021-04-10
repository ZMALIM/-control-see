export declare class XmlUtils {
    private xml;
    constructor(xml: string);
    convertCDataXml(): Document;
    private get nodeHash();
    private getHash;
    get hash(): string;
}
