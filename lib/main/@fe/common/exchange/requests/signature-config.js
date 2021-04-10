"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignatureConfig = void 0;
class SignatureConfig {
    get certificate() {
        return this._certificate;
    }
    set certificate(_certificate) {
        this._certificate = _certificate;
    }
    get certificatePassword() {
        return this._certificatePassword;
    }
    set certificatePassword(_certificatePassword) {
        this._certificatePassword = _certificatePassword;
    }
    get openSSL() {
        return this._openSSL;
    }
    set openSSL(_openSSL) {
        this._openSSL = _openSSL;
    }
}
exports.SignatureConfig = SignatureConfig;
//# sourceMappingURL=signature-config.js.map