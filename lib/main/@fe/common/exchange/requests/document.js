"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PDocument = void 0;
class PDocument {
    get fileName() {
        return this._fileName;
    }
    set fileName(_fileName) {
        this._fileName = _fileName;
    }
    get zip() {
        return this._zip;
    }
    set zip(_zip) {
        this._zip = _zip.concat('.zip');
    }
}
exports.PDocument = PDocument;
//# sourceMappingURL=document.js.map