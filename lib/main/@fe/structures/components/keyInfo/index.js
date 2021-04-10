"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyInfo = void 0;
const KeyInfo_1 = require("./KeyInfo");
const X509Data_1 = require("./X509Data");
const jsontoxml = require("jsontoxml");
const forge = require("node-forge");
class KeyInfo {
    constructor(certificate) {
        if (Buffer.isBuffer(certificate)) {
            certificate = certificate.toString('ascii');
        }
        if (certificate == null || typeof certificate !== 'string') {
            throw new Error('CertificatePEM debe ser un certificado válido en formato PEM');
        }
        this.certificate = certificate;
    }
    getSubjectName(certObj) {
        let subjectFields = [];
        const fields = ['CN', 'OU', 'O', 'L', 'ST', 'C'];
        if (certObj.subject) {
            subjectFields = fields.reduce((subjects, fieldName) => {
                const certAttr = certObj.subject.getField(fieldName);
                if (certAttr) {
                    subjects.push(`${fieldName}=${certAttr.value}`);
                }
                return subjects;
            }, []);
        }
        return Array.isArray(subjectFields) ? subjectFields.join(',') : '';
    }
    getKeyInfo(key, prefix) {
        const certBodyInB64 = forge.util.encode64(forge.pem.decode(this.certificate)[0].body);
        const certObj = forge.pki.certificateFromPem(this.certificate);
        prefix = prefix || '';
        const keyInfo = new KeyInfo_1.KeyInfo({
            X509Data: new X509Data_1.X509Data({
                X509SubjectName: this.getSubjectName(certObj),
                X509Certificate: certBodyInB64,
            }),
        });
        return jsontoxml(keyInfo).toString();
    }
    getKey() {
        return this.certificate;
    }
}
exports.KeyInfo = KeyInfo;
//# sourceMappingURL=index.js.map