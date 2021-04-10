import { XML } from './xml';
import { CDR } from './cdr';
import { PDF } from './pdf';
import { ZIP } from './zip';
export declare class Response {
    zip: ZIP;
    pdf: PDF;
    xml: XML;
    cdr: CDR;
}
