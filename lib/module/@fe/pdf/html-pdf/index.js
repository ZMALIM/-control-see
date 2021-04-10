import { pickBy } from 'lodash';
import { HtmlPdfUtils } from '@fe/utils';
import { launch } from 'puppeteer';
export class HtmlPdf {
    constructor(options) {
        this.utils = new HtmlPdfUtils;
        this.options = this.parseOptions(options);
    }
    parseOptions(options) {
        const { inputBody, inputPath, outputPath, renderDelay, launchOptions, include = [], } = options;
        const legacyOptions = options.options || {};
        const pdf = pickBy(options.pdf || {
            landscape: legacyOptions.landscape,
            format: legacyOptions.pageSize,
            printBackground: legacyOptions.printBackground,
        });
        if (!pdf.path && outputPath) {
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
    includeAssets() {
        const includePromises = this.options.include.map(({ type, filePath }) => {
            if (type === 'js') {
                return this.page.addScriptTag({
                    path: filePath,
                });
            }
            if (type === 'css') {
                return this.page.addStyleTag({
                    path: filePath,
                });
            }
        });
        return Promise.all(includePromises);
    }
    async start() {
        this.browser = await launch({
            headless: true,
            ...this.options.launchOptions
        });
        this.page = await this.browser.newPage();
        if (this.options.body) {
            await this.page.setContent(this.options.body, {
                waitUntil: 'load',
            });
        }
        await this.includeAssets();
        if (this.options.renderDelay) {
            await this.page.waitForTimeout(this.options.renderDelay);
        }
        return this.page;
    }
    async build() {
        const buf = await this.page.pdf(this.options.pdf);
        if (!this.options.pdf.path) {
            return buf;
        }
    }
    async close() {
        await this.browser.close();
    }
}
//# sourceMappingURL=index.js.map