import { SignatureConfig, Signed } from '@fe/common/exchange';

export abstract class Signer
{
    /**
     * @description
     * Configurar Firmador de Xml
     * Configurar Con Parametros desde Enviroment
     * @returns {SignatureConfig}
     */
    public config: SignatureConfig;
    
    /**
     * @description
     * Firma Documento Xml
     * Serializado y Generado
     * @param {string} xmlDocument
     * @returns {Signed} 
     */
    public abstract xml(xmlDocument: string): Promise<Signed>;
}
