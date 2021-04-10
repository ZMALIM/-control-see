import { XMLElement, XMLChild } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';
import { PayableAmount } from './PayableAmount';
import { AllowanceChargeReasonCode } from './AllowanceChargeReasonCode';

const { CAC, CBC } = prefix;

@XMLElement({ root: CAC })
export class AllowanceCharge 
{
    @XMLChild({ namespace: CBC, name: 'ChargeIndicator' })
    public chargeIndicator?: string;

    @XMLChild({ namespace: CBC, name: 'AllowanceChargeReasonCode' })
    public allowanceChargeReasonCode?: AllowanceChargeReasonCode;

    @XMLChild({ namespace: CBC, name: 'MultiplierFactorNumeric' })
    public multiplierFactorNumeric?: string;

    @XMLChild({ namespace: CBC, name: 'Amount' })
    public amount?: PayableAmount;
    
    @XMLChild({ namespace: CBC, name: 'BaseAmount' })
    public baseAmount?: PayableAmount;

    constructor(ac: AllowanceCharge) 
    {
        this.chargeIndicator = ac.chargeIndicator;
        this.allowanceChargeReasonCode = ac.allowanceChargeReasonCode;
        this.multiplierFactorNumeric = ac.multiplierFactorNumeric;
        this.amount = ac.amount;
        this.baseAmount = ac.baseAmount;
    }
}
