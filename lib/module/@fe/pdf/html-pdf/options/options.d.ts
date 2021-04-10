/// <reference types="node" />
import { PDFOptions, LaunchOptions } from 'puppeteer';
export declare class HtmlPdfOptions {
    inputPath?: string;
    inputBody?: string | Buffer;
    outputPath?: string;
    include?: Array<Object | string>;
    renderDelay?: number;
    pdf?: Partial<PDFOptions>;
    launchOptions?: LaunchOptions;
    options?: any;
}
