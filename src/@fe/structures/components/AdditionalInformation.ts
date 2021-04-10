import { AdditionalMonetaryTotal } from './AdditionalMonetaryTotal';
import { AdditionalProperty } from './AdditionalProperty';
import { SunatEmbededDespatchAdvice } from './SunatEmbededDespatchAdvice';
import { SunatCosts } from './SunatCosts';
import { SunatTransaction } from './SunatTransaction';

export class AdditionalInformation 
{
    private _additionalMonetaryTotals?: AdditionalMonetaryTotal[];
    private _additionalProperties?: AdditionalProperty[];
    private _sunatEmbededDespatchAdvice?: SunatEmbededDespatchAdvice;
    private _sunatCosts?: SunatCosts;
    private _sunatTransaction?: SunatTransaction;

    get additionalMonetaryTotals(): AdditionalMonetaryTotal[] 
    {
        return this._additionalMonetaryTotals;
    }

    set additionalMonetaryTotals(additionalMonetaryTotals: AdditionalMonetaryTotal[]) 
    {
        this._additionalMonetaryTotals = additionalMonetaryTotals;
    }

    get additionalProperties(): AdditionalProperty[] 
    {
        return this._additionalProperties;
    }

    set additionalProperties(additionalProperties: AdditionalProperty[]) 
    {
        this._additionalProperties = additionalProperties;
    }

    get sunatEmbededDespatchAdvice(): SunatEmbededDespatchAdvice 
    {
        return this._sunatEmbededDespatchAdvice;
    }

    set sunatEmbededDespatchAdvice(sunatEmbededDespatchAdvice: SunatEmbededDespatchAdvice) 
    {
        this._sunatEmbededDespatchAdvice = sunatEmbededDespatchAdvice;
    }

    get sunatCosts(): SunatCosts 
    {
        return this._sunatCosts;
    }

    set sunatCosts(sunatCosts: SunatCosts) 
    {
        this._sunatCosts = sunatCosts;
    }

    get sunatTransaction(): SunatTransaction 
    {
        return this._sunatTransaction;
    }

    set sunatTransaction(sunatTransaction: SunatTransaction) 
    {
        this._sunatTransaction = sunatTransaction;
    }

    constructor() 
    {
        this.additionalMonetaryTotals = new Array<AdditionalMonetaryTotal>();
        this.additionalProperties = new Array<AdditionalProperty>();
        this.sunatEmbededDespatchAdvice = new SunatEmbededDespatchAdvice();
        this.sunatTransaction = new SunatTransaction();
        this.sunatCosts = new SunatCosts();
    }
}
