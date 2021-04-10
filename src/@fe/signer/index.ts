import { Crypto } from 'node-webcrypto-ossl';
import {
    Parse,
    SignedXml,
    Application,
    KeyInfo,
    KeyInfoX509Data,
    Reference,
    X509Certificate,
} from 'xmldsigjs';
import { SignatureConfig, Signed } from '@fe/common/exchange';
import { Namespaces } from '@fe/common/constants';
import { Signer } from '@fe/common/abstract';
import { Utils } from '@fe/utils';
import { Convert } from 'xml-core';
import { Certificate } from '@fe/signer/certificate';
import { Algorithm } from '@fe/signer/algorithm';
import * as pem from 'pem-promise';
import * as fs from 'fs';

export class XMLSigner implements Signer 
{
    private crypto: Crypto;
    private utils: Utils;
    private algorithm: Algorithm;
    private _config: SignatureConfig;

    constructor() 
    {
        this.utils = new Utils();
        this.algorithm = new Algorithm();
        this._config = new SignatureConfig();
        this.crypto = new Crypto();
        Application.setEngine('OpenSSL', this.crypto);
        this.algorithm.name = 'RSASSA-PKCS1-v1_5';
        this.algorithm.hash = 'SHA-256';
    }

    /**
     * @description 
     * Establecer paramentros de configuracion 
     * para posteriormente firmar el Xml
     * @public [ConfigFirma]
     * @class [ConfigFirma]
     *
     */
    public get config(): SignatureConfig 
    {
        return this._config;
    }

    /**
     * @description 
     * Establecer paramentros de configuracion 
     * para posteriormente firmar el Xml
     * @public [ConfigFirma]
     * @class [ConfigFirma]
     *
     */
    public set config(_config: SignatureConfig) 
    {
        this._config = _config;
    }

    private configOpenSSL(): void 
    {
        pem.config({
            pathOpenSSL: this.config.openSSL,
        });
    }

    /**
     * @description Lee Un certificado en formado [.PFX]
     * @param certificate {string}
     * @return certificado {Certificate}
     *
     */
    private async getCertificate(): Promise<Certificate> 
    {
        const certificado = fs.readFileSync(this.config.certificate);
        this.configOpenSSL();
        return await pem.readPkcs12(certificado, { p12Password: this.config.certificatePassword });
    }

    /**
     * @description Obtiene La clave del certificado en formato [CryptoKey]
     * @param Certificado {Certificate}
     * @return clave certificado {CryptoKey}
     *
     */
    private async getCertificatePassword(): Promise<CryptoKey> 
    {
        const { key } = await this.getCertificate();
        return await this.crypto.subtle.importKey('pkcs8', this.utils.crytoKey(key), this.algorithm, false, ['sign']);
    }

    /**
     * @description Obtiene el cuerpo del certificado
     * @param Certificado {Certificate}
     * @return cuerpo del certificado {Body}
     *
     */
    private async getCertificateDetail(): Promise<string> 
    {
        const { cert } = await this.getCertificate();
        return this.utils.formatCert(cert);
    }

    /**
     * @description Obtiene el nodo [ExtensionContent] del Documento Xml
     * @description para posteriormente agregar la Firma
     * @return ExtensionContent {Element}
     */
    private getSignNode(xmlDocument: Document): Element 
    {
       return xmlDocument.getElementsByTagNameNS(Namespaces.ext, 'ExtensionContent').item(0);
    }

    /**
     * @description Firma el documento Xml
     * @ejemplo [Factura][Boleta][NotaCredito][NotaDebito]
     * @param {string} doc
     * @return XmlFirmado {RFirma}
     */
    public async xml(doc: string): Promise<Signed> 
    {
        const sign = new  Signed();
        try {
            const xmlDocument = Parse(doc);

            if(!fs.existsSync(this.config.certificate))
            {
                throw new Error('No Existe Certificado Digital.')
            }

            if(!this.getSignNode(xmlDocument))
            {
                throw new Error('No se pudo encontrar el nodo ExtensionContent en el XML')
            }

            if(!xmlDocument.hasChildNodes())
            {
                throw new Error('Documento XML esta vació');
            }
            
            const signNode = xmlDocument.getElementsByTagNameNS(Namespaces.ext, 'ExtensionContent').item(0);
            const x509Certificate = new X509Certificate(Buffer.from(await this.getCertificateDetail(), 'base64'));
            const signedXml = new SignedXml(xmlDocument);
            const xmlSignature = signedXml.XmlSignature;
            const signature =  await signedXml.Sign(this.algorithm, await this.getCertificatePassword(), xmlDocument, {
                id: 'SINGATURE',
                references: [
                    {
                        hash: 'SHA-256',
                        uri: '',
                        transforms: ['enveloped'],
                    },
                ],
            });

            const keyInfo = new KeyInfo();
            const x509Data = new KeyInfoX509Data(new Uint8Array(Buffer.from(await this.getCertificateDetail(), 'base64')));

            x509Data.AddSubjectName(x509Certificate.Subject);
            keyInfo.Add(x509Data);
            xmlSignature.KeyInfo = keyInfo;
            xmlSignature.Id = 'SignatureSP'; 

            const reference = new Reference('ds:SignedInfo');
            if (reference.DigestValue !== null) 
            {
                xmlSignature.SignedInfo.References.Map((ref) => {
                    sign.hash = Convert.ToBase64(ref.DigestValue);
                });
                sign.signatureValue = Convert.ToBase64(signedXml.Signature);
            }
            signNode.appendChild(signature.GetXml());
            sign.xmlDocument = new XMLSerializer().serializeToString(xmlDocument);
            sign.success = true;
            return sign;
        } catch (e) {
            sign.success = false;
            sign.message = e.toString();
            sign.origin = 'firma';
            throw sign;
        }
    }
}
