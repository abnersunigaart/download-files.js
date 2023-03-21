"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("./core");
describe("Download files handler", () => {
    it("should throw an error if filesURLs are not provided", () => {
        const req = { body: {} };
        const res = {};
        expect(() => {
            (0, core_1.downloadFilesHandler)(req, res);
        }).toThrow(Error("Invalid value for filesURLs"));
    });
});
