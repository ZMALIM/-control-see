export declare class HtmlPdfUtils {
    constructor();
    convertPath(filePath: string): string;
    getTemplateFilePath({ templatePath, template }: {
        templatePath: any;
        template?: string;
    }): string;
    readBodyOrFile(body: any, filePath: any): string;
    convertIncludes(includes: any[]): any[];
}
