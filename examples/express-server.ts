import express from "express";
import archiver from "archiver";
import path from "path";
import fs from "fs";
import https from "https";

const app = express();

app.get("/", (req, res) => {
  const url1 = "https://images.unsplash.com/photo-1679000631940-4fab43b817d7";
  const url2 = "https://images.unsplash.com/photo-1679048978024-d8d7737d3920";
  const url3 = "https://images.unsplash.com/photo-1678653300319-01c12f3fe137";

  const urls = [url1, url2, url3];

  const archive = archiver("zip");

  archive.on("error", function (err) {
    console.error(`Archive error: ${err}`);
    res.status(500).send({ error: err.message });
  });

  archive.on("end", function () {
    console.log("Archive wrote %d bytes", archive.pointer());
  });

  archive.on("progress", (v) => {
    console.log(`${v.entries.processed}/${urls.length}`);
  });

  res.attachment("out.zip");

  archive.pipe(res);

  urls.forEach((url, index) => {
    const req = https.get(url, { timeout: 10000 }, (res) => {
      console.log(`New response from ${url}`);
      archive.append(res, { name: `file${index + 1}.jpeg` });
      finalize();
    });
    req.on("error", (err) => {
      console.error(`Request error: ${err.message}`);
    });
  });

  let count = 0;
  function finalize() {
    if (++count === urls.length) {
      archive.finalize();
    }
  }
});

app.listen(3000);
