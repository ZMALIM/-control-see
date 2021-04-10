import * as moment from 'moment';


export class CpeUtils
{
    constructor()
    {
    }

        /**
     * @description
     * 
     * Normalizar en un objeto
     * @param itemObj 
     */
    public formatInObj(itemObj): any
    {
        for (let prop in itemObj)
        {
            if (!itemObj.hasOwnProperty(prop))
            {
                continue;
            }

            const value = itemObj[prop];

            if (value instanceof Date)
            {
                itemObj[prop] = moment(value).format('DD/MM/YYYY hh:mm a');
            }

            if (prop === 'fechaEmision')
            {
                itemObj[prop] = moment(value).format('DD/MM/YYYY hh:mm a');
            }

            if (typeof value === 'number')
            {
                itemObj[prop] = this.formatAmount(value);
            }
            else if (Array.isArray(value))
            {
                this.formatInArray(value);
            }

            if (typeof value === 'object')
            {
                this.formatInObj(value);
            }
        }

        return itemObj;
    }

    /**
     * @description
     * 
     * Normalizar valores en
     * un Arreglo
     * @param {any} arr 
     */
    private formatInArray(arr): void
    {
        for (let value of arr)
        {
            if (typeof value === 'number')
            {
               value = this.formatAmount(value);
            }

            if (value instanceof Date)
            {
                value = moment(value).format('DD/MM/YYYY hh:mm a');
            }

            if (typeof value === 'object')
            {
                this.formatInObj(value);
            }
        }
    }

    /**
     * @description
     * 
     * Formato Monto Con Dos 
     * Decimales
     * @param {number} amount 
     */
    private formatAmount(amount: number): string 
    {
        if (typeof amount !== 'number')
        {
            return;
        }
        return amount.toFixed(2);
    }
}