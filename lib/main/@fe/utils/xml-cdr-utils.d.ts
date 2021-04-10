import { CDR } from '@fe/common/exchange';
export declare class XmlUtilsCDR {
    private xmlCdr;
    constructor(xml: string);
    private get applicationResponseNode();
    private get hashNode();
    private get responseNode();
    private get statusNode();
    private get hashCDR();
    private get date();
    private get code();
    private get referenceID();
    private get description();
    private get status();
    get reponseCDR(): CDR;
}
