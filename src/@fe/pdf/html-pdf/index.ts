import { pickBy } from 'lodash';
import { HtmlPdfUtils } from '@fe/utils';
import { HtmlPdfOptions, ParseOptions } from '@fe/pdf/html-pdf/options';
import { Browser, ElementHandle, launch, Page } from 'puppeteer';

// https://medium.com/@fmoessle/use-html-and-puppeteer-to-create-pdfs-in-node-js-566dbaf9d9ca
export class HtmlPdf 
{
    private options: ParseOptions;
    private utils: HtmlPdfUtils;
    private page: Page;
    private browser: Browser;

    constructor(options: HtmlPdfOptions) 
    {
        this.utils = new HtmlPdfUtils;
        this.options = this.parseOptions(options);
    }

    private parseOptions(options: HtmlPdfOptions): ParseOptions
    {
        const {
            inputBody,
            inputPath,
            outputPath,
            renderDelay,
            launchOptions,
            include = [],
        } = options;

        const legacyOptions = options.options || {};

        const pdf = pickBy(
            options.pdf || {
                landscape: legacyOptions.landscape,
                format: legacyOptions.pageSize,
                printBackground: legacyOptions.printBackground,
            },
        );

        if (!pdf.path && outputPath) 
        {
            pdf.path = this.utils.convertPath(outputPath);
        }
        
        const body = this.utils.readBodyOrFile(inputBody, inputPath);

        return {
            body,
            pdf,
            launchOptions,
            include: this.utils.convertIncludes(include),
            renderDelay,
        };
    }

    private includeAssets(): Promise<ElementHandle<Element>[]>
    {
        const includePromises = this.options.include.map(({ type, filePath }) => {
            if (type === 'js') 
            {
                return this.page.addScriptTag({
                    path: filePath,
                });
            }

            if (type === 'css') 
            {
                return this.page.addStyleTag({
                    path: filePath,
                });
            }
        });

        return Promise.all(includePromises);
    }

    public async start() 
    {
        this.browser = await launch({
            headless: true,
            ...this.options.launchOptions
        });

        this.page = await this.browser.newPage();

        if (this.options.body)
        {
            await this.page.setContent(this.options.body, {
                waitUntil: 'load',
            });
        }

        await this.includeAssets();

        if (this.options.renderDelay) 
        {
            await this.page.waitForTimeout(this.options.renderDelay);
        }

        return this.page;
    }

    public async build(): Promise<Buffer>
    {
        const buf = await this.page.pdf(this.options.pdf);

        if (!this.options.pdf.path) 
        {
            return buf;
        }
    }

    public async close() 
    {
        await this.browser.close();
    }
}