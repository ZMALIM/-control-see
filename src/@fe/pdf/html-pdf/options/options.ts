import { PDFOptions, LaunchOptions } from 'puppeteer';

export class HtmlPdfOptions 
{
    /**
     * Type: String Required: true
     * Path to the input HTML
     */
    public inputPath?: string;

    /**
     * Type: String or Buffer
     * Path to the input html as a String, or Buffer. If specified this will override inputPath.
     */
    public inputBody?: string | Buffer;

    /**
     * Type: String
     * Path to the output pdf file.
     */
    public outputPath?: string;

    /**
     * Type: Array<Object|String>
     * An array of strings or objects containing a type of ['css', 'js'] and a filePath pointing to the asset.
     */
    public include?: Array<Object | string>;

    /**
     * Type: Number Default value: 0 
     * Delay in milli-seconds before rendering the PDF (give HTML and CSS a chance to load)
     */
    public renderDelay?: number = 0;

    /**
     * Type: Object 
     * This object will be passed directly to puppeteer. The options pupperter
     */
    public pdf?: Partial<PDFOptions>;

    /**
     * Type: Object
     * This object will be passed directly to puppeteer.
     */
    public launchOptions?: LaunchOptions;

    /**
     * See options.pdf above for pdf options. 
     * Since some of these options are 
     * converted over to work with puppeteer, 
     * this is automatically done if 
     * options.pdf is left empty.
     */
    public options?: any;
}