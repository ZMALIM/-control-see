import { PDFOptions } from 'puppeteer';

export class ParseOptions 
{
    public body: any;
    public pdf: Partial<PDFOptions>;
    public launchOptions: any;
    public include: any[];
    public renderDelay: any;
}