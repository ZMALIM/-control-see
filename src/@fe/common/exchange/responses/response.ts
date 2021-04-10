import { XML } from './xml';
import { CDR } from './cdr';
import { PDF } from './pdf';
import { ZIP } from './zip';

export class Response
{
    public zip: ZIP;
    public pdf: PDF;
    public xml: XML;
    public cdr: CDR;
}