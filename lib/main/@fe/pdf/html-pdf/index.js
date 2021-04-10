"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlPdf = void 0;
const lodash_1 = require("lodash");
const utils_1 = require("@fe/utils");
const puppeteer_1 = require("puppeteer");
class HtmlPdf {
    constructor(options) {
        this.utils = new utils_1.HtmlPdfUtils;
        this.options = this.parseOptions(options);
    }
    parseOptions(options) {
        const { inputBody, inputPath, outputPath, renderDelay, launchOptions, include = [], } = options;
        const legacyOptions = options.options || {};
        const pdf = lodash_1.pickBy(options.pdf || {
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
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            this.browser = yield puppeteer_1.launch(Object.assign({ headless: true }, this.options.launchOptions));
            this.page = yield this.browser.newPage();
            if (this.options.body) {
                yield this.page.setContent(this.options.body, {
                    waitUntil: 'load',
                });
            }
            yield this.includeAssets();
            if (this.options.renderDelay) {
                yield this.page.waitForTimeout(this.options.renderDelay);
            }
            return this.page;
        });
    }
    build() {
        return __awaiter(this, void 0, void 0, function* () {
            const buf = yield this.page.pdf(this.options.pdf);
            if (!this.options.pdf.path) {
                return buf;
            }
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.browser.close();
        });
    }
}
exports.HtmlPdf = HtmlPdf;
//# sourceMappingURL=index.js.map