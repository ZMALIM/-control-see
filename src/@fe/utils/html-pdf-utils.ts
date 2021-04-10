
import { toString, isPlainObject } from 'lodash';
import * as fs from 'fs';
import * as path from 'path';

export class HtmlPdfUtils 
{
    /**
     * @constructor
     */
    constructor()
    {
    }

    public convertPath(filePath: string): string 
    {
        if (path.isAbsolute(filePath)) return filePath
        return path.join(process.cwd(), filePath)
    }

    public getTemplateFilePath({ templatePath, template = "html5bp" }): string 
    {
        if (templatePath) return templatePath
        return path.resolve(path.join(__dirname, "..", "templates", template))
    }

    public readBodyOrFile(body, filePath): string 
    {
        if (body) 
        {
            return toString(body)
        }

        if (!filePath) 
        {
            return
        }

        if (fs.statSync(filePath).isDirectory()) 
        {
            return
        }

        return fs.readFileSync(this.convertPath(filePath), "utf-8")
    }

    public convertIncludes(includes: any[]): any[]
    {
        if (!includes || !Array.isArray(includes)) return [];

        return includes.map((include) => {
            if (typeof include === "string") 
            {
                return {
                    type: path.extname(include).replace(".", ""),
                    filePath: include,
                }
            }

            if (isPlainObject(include)) 
            {
                return include
            }
        });
    }
}