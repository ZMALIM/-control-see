/// <reference types="node" />
import { HtmlPdfOptions } from '@fe/pdf/html-pdf/options';
import { Page } from 'puppeteer';
export declare class HtmlPdf {
    private options;
    private utils;
    private page;
    private browser;
    constructor(options: HtmlPdfOptions);
    private parseOptions;
    private includeAssets;
    start(): Promise<Page>;
    build(): Promise<Buffer>;
    close(): Promise<void>;
}
