export class PdfConfig
{
    public template: string;
    public css: string[]; 

    constructor()
    {
        this.template = './templates/cpe';
        this.css = ['./templates/cpe/css/style.css'];
    }
}