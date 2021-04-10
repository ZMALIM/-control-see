import { AdditionalMonetaryTotal } from './AdditionalMonetaryTotal';
import { AdditionalProperty } from './AdditionalProperty';
import { SunatEmbededDespatchAdvice } from './SunatEmbededDespatchAdvice';
import { SunatCosts } from './SunatCosts';
import { SunatTransaction } from './SunatTransaction';
export declare class AdditionalInformation {
    private _additionalMonetaryTotals?;
    private _additionalProperties?;
    private _sunatEmbededDespatchAdvice?;
    private _sunatCosts?;
    private _sunatTransaction?;
    get additionalMonetaryTotals(): AdditionalMonetaryTotal[];
    set additionalMonetaryTotals(additionalMonetaryTotals: AdditionalMonetaryTotal[]);
    get additionalProperties(): AdditionalProperty[];
    set additionalProperties(additionalProperties: AdditionalProperty[]);
    get sunatEmbededDespatchAdvice(): SunatEmbededDespatchAdvice;
    set sunatEmbededDespatchAdvice(sunatEmbededDespatchAdvice: SunatEmbededDespatchAdvice);
    get sunatCosts(): SunatCosts;
    set sunatCosts(sunatCosts: SunatCosts);
    get sunatTransaction(): SunatTransaction;
    set sunatTransaction(sunatTransaction: SunatTransaction);
    constructor();
}
