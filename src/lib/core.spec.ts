import { downloadFilesHandler } from "./core";

describe("Download files handler", () => {
  it("should throw an error if filesURLs are not provided", () => {
    const req: any = { body: {} };
    const res: any = {};
    expect(() => {
      downloadFilesHandler(req, res);
    }).toThrow(Error("Invalid value for filesURLs"));
  });
});
