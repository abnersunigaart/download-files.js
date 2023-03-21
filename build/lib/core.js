"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadFilesHandler = void 0;
function downloadFilesHandler(req, res) {
    if (!req.body.filesURLs || !req.body.filesURLs.length) {
        throw Error("Invalid value for filesURLs");
    }
}
exports.downloadFilesHandler = downloadFilesHandler;
