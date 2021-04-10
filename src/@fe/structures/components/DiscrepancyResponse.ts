import { XMLElement, XMLChild } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';

const { CAC, CBC } = prefix;

@XMLElement({ root: CAC })
export class DiscrepancyResponse 
{
    private _referenceId?: string;
    private _responseCode?: string;
    private _description?: string;

    @XMLChild({ namespace: CBC, name: 'ReferenceID' })
    get referenceID(): string 
    {
        return this._referenceId;
    }

    set referenceID(referenceId: string) 
    {
        this._referenceId = referenceId;
    }

    @XMLChild({ namespace: CBC, name: 'ResponseCode' })
    get responseCode(): string {
        return this._responseCode;
    }

    set responseCode(responseCode: string) 
    {
        this._responseCode = responseCode;
    }

    @XMLChild({ namespace: CBC, name: 'Description' })
    get description(): string 
    {
        return this._description;
    }

    set description(description: string) 
    {
        this._description = description;
    }

    constructor(dr?: DiscrepancyResponse) 
    {
        this.referenceID = dr.referenceID;
        this.responseCode = dr.responseCode;
        this.description = dr.description;
    }

    // public Equals(other: DiscrepancyResponse): boolean {
    //     if (this.referenceId) {
    //         return false;
    //     }
    //     return this.referenceId === other.referenceId;
    // }

    // public GetHashCode(): number {
    //     if (this.referenceId) {
    //         return this.GetHashCode();
    //     }
    // }
}
