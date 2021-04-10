import { Comun } from './comun';

export class Signed extends Comun 
{
    public xmlDocument?: string;
    public hash?: string;
    public signatureValue?: string;
}
