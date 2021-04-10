import { PdfConfig, PdfSerializer } from '@fe/common/exchange';
import { CPE } from '@fe/common/models';

export abstract class PdfBuilder
{
    /**
     * @description
     * Configurar Generador de Pdf
     * Configurar Con Parametros desde Enviroment
     * @returns {SignatureConfig}
     */
    public config: PdfConfig

    /**
     * @description
     * Genera Pdf de 
     * Documento Electronico
     */
    public abstract generate(document: CPE): Promise<PdfSerializer>;
}