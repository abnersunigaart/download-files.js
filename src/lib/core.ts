import express from "express";
export function downloadFilesHandler(
  req: express.Request,
  res: express.Response
) {
  if (!req.body.filesURLs || !req.body.filesURLs.length) {
    throw Error("Invalid value for filesURLs");
  }
}
