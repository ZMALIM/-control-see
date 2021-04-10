export class PDocument {
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
//# sourceMappingURL=document.js.map