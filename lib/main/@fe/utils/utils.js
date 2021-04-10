"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
class Utils {
    processed(code) {
        let status = true;
        if (code === '0' || code === '99') {
            status = true;
        }
        else if (code === '98') {
            status = false;
        }
        return status;
    }
    formatCert(certFile) {
        return certFile
            .replace(/-----(BEGIN|END)[\w\d\s]+-----/g, '')
            .replace(/[\r\n]/g, '');
    }
    crytoKey(certFile) {
        certFile = this.formatCert(certFile);
        return new Uint8Array(Buffer.from(certFile, 'base64')).buffer;
    }
    b64ToBinary(base64) {
        const raw = atob(base64);
        const rawLength = raw.length;
        const array = new Uint8Array(new ArrayBuffer(rawLength));
        for (let i = 0; i < rawLength; i++) {
            array[i] = raw.charCodeAt(i);
        }
        return array;
    }
    errorWS(error) {
        const { root: { Envelope: { Body: { Fault } } } } = error;
        return {
            code: Fault.detail ? Fault.faultstring : Fault.faultcode,
            description: Fault.detail ? Fault.detail.message : Fault.faultstring,
        };
    }
}
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map