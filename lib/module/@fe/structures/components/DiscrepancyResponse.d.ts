export declare class DiscrepancyResponse {
    private _referenceId?;
    private _responseCode?;
    private _description?;
    get referenceID(): string;
    set referenceID(referenceId: string);
    get responseCode(): string;
    set responseCode(responseCode: string);
    get description(): string;
    set description(description: string);
    constructor(dr?: DiscrepancyResponse);
}
