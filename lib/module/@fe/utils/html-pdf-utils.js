import { toString, isPlainObject } from 'lodash';
import * as fs from 'fs';
import * as path from 'path';
export class HtmlPdfUtils {
    constructor() {
    }
    convertPath(filePath) {
        if (path.isAbsolute(filePath))
            return filePath;
        return path.join(process.cwd(), filePath);
    }
    getTemplateFilePath({ templatePath, template = "html5bp" }) {
        if (templatePath)
            return templatePath;
        return path.resolve(path.join(__dirname, "..", "templates", template));
    }
    readBodyOrFile(body, filePath) {
        if (body) {
            return toString(body);
        }
        if (!filePath) {
            return;
        }
        if (fs.statSync(filePath).isDirectory()) {
            return;
        }
        return fs.readFileSync(this.convertPath(filePath), "utf-8");
    }
    convertIncludes(includes) {
        if (!includes || !Array.isArray(includes))
            return [];
        return includes.map((include) => {
            if (typeof include === "string") {
                return {
                    type: path.extname(include).replace(".", ""),
                    filePath: include,
                };
            }
            if (isPlainObject(include)) {
                return include;
            }
        });
    }
}
//# sourceMappingURL=html-pdf-utils.js.map