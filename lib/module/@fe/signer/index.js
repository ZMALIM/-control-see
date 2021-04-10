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
exports.XMLSigner = void 0;
const node_webcrypto_ossl_1 = require("node-webcrypto-ossl");
const xmldsigjs_1 = require("xmldsigjs");
const exchange_1 = require("@fe/common/exchange");
const constants_1 = require("@fe/common/constants");
const utils_1 = require("@fe/utils");
const xml_core_1 = require("xml-core");
const algorithm_1 = require("@fe/signer/algorithm");
const pem = require("pem-promise");
const fs = require("fs");
class XMLSigner {
    constructor() {
        this.utils = new utils_1.Utils();
        this.algorithm = new algorithm_1.Algorithm();
        this._config = new exchange_1.SignatureConfig();
        this.crypto = new node_webcrypto_ossl_1.Crypto();
        xmldsigjs_1.Application.setEngine('OpenSSL', this.crypto);
        this.algorithm.name = 'RSASSA-PKCS1-v1_5';
        this.algorithm.hash = 'SHA-256';
    }
    get config() {
        return this._config;
    }
    set config(_config) {
        this._config = _config;
    }
    configOpenSSL() {
        pem.config({
            pathOpenSSL: this.config.openSSL,
        });
    }
    getCertificate() {
        return __awaiter(this, void 0, void 0, function* () {
            const certificado = fs.readFileSync(this.config.certificate);
            this.configOpenSSL();
            return yield pem.readPkcs12(certificado, { p12Password: this.config.certificatePassword });
        });
    }
    getCertificatePassword() {
        return __awaiter(this, void 0, void 0, function* () {
            const { key } = yield this.getCertificate();
            return yield this.crypto.subtle.importKey('pkcs8', this.utils.crytoKey(key), this.algorithm, false, ['sign']);
        });
    }
    getCertificateDetail() {
        return __awaiter(this, void 0, void 0, function* () {
            const { cert } = yield this.getCertificate();
            return this.utils.formatCert(cert);
        });
    }
    getSignNode(xmlDocument) {
        return xmlDocument.getElementsByTagNameNS(constants_1.Namespaces.ext, 'ExtensionContent').item(0);
    }
    xml(doc) {
        return __awaiter(this, void 0, void 0, function* () {
            const sign = new exchange_1.Signed();
            try {
                const xmlDocument = xmldsigjs_1.Parse(doc);
                if (!fs.existsSync(this.config.certificate)) {
                    throw new Error('No Existe Certificado Digital.');
                }
                if (!this.getSignNode(xmlDocument)) {
                    throw new Error('No se pudo encontrar el nodo ExtensionContent en el XML');
                }
                if (!xmlDocument.hasChildNodes()) {
                    throw new Error('Documento XML esta vació');
                }
                const signNode = xmlDocument.getElementsByTagNameNS(constants_1.Namespaces.ext, 'ExtensionContent').item(0);
                const x509Certificate = new xmldsigjs_1.X509Certificate(Buffer.from(yield this.getCertificateDetail(), 'base64'));
                const signedXml = new xmldsigjs_1.SignedXml(xmlDocument);
                const xmlSignature = signedXml.XmlSignature;
                const signature = yield signedXml.Sign(this.algorithm, yield this.getCertificatePassword(), xmlDocument, {
                    id: 'SINGATURE',
                    references: [
                        {
                            hash: 'SHA-256',
                            uri: '',
                            transforms: ['enveloped'],
                        },
                    ],
                });
                const keyInfo = new xmldsigjs_1.KeyInfo();
                const x509Data = new xmldsigjs_1.KeyInfoX509Data(new Uint8Array(Buffer.from(yield this.getCertificateDetail(), 'base64')));
                x509Data.AddSubjectName(x509Certificate.Subject);
                keyInfo.Add(x509Data);
                xmlSignature.KeyInfo = keyInfo;
                xmlSignature.Id = 'SignatureSP';
                const reference = new xmldsigjs_1.Reference('ds:SignedInfo');
                if (reference.DigestValue !== null) {
                    xmlSignature.SignedInfo.References.Map((ref) => {
                        sign.hash = xml_core_1.Convert.ToBase64(ref.DigestValue);
                    });
                    sign.signatureValue = xml_core_1.Convert.ToBase64(signedXml.Signature);
                }
                signNode.appendChild(signature.GetXml());
                sign.xmlDocument = new XMLSerializer().serializeToString(xmlDocument);
                sign.success = true;
                return sign;
            }
            catch (e) {
                sign.success = false;
                sign.message = e.toString();
                sign.origin = 'firma';
                throw sign;
            }
        });
    }
}
exports.XMLSigner = XMLSigner;
//# sourceMappingURL=index.js.map