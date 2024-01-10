const express = require("express");
const app = express();
const port = 3000;

const mammoth = require("mammoth");
const pdf = require("html-pdf");
const PizZip = require("pizzip");
var fs = require("fs");
var path = require("path");
var Docxtemplater = require("docxtemplater");

app.get("/generate-pdf", (req, res) => {
  //Load the docx file as a binary
  var content = fs.readFileSync(
    path.resolve(__dirname, "nomination_form.docx"),
    "binary"
  );

  var zip = new PizZip(content);

  var doc = new Docxtemplater();
  doc.loadZip(zip);

  // Set data to replace placeholders in the template
  const data = {
    participantName: "John",
    certificateNo: "A123456"
    // Add other data as needed
  };

  // Perform the templating process
  doc.setData(data);

  try {
    // render the document ie replace the variables
    doc.render();
  } catch (error) {
    var e = {
      message: error.message,
      name: error.name,
      stack: error.stack,
      properties: error.properties
    };
    console.log(JSON.stringify({ error: e }));
    throw error;
  }

  var buf = doc.getZip().generate({ type: "nodebuffer" });

  // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
  fs.writeFileSync(path.resolve(__dirname, "nomination_form.docx"), buf);

  const docxConverter = require("docx-pdf");

  docxConverter("./nomination_form.docx", "./output.pdf", (err, result) => {
    console.log("result....", result);
    if (err) console.log(err);
    else console.log(result); // writes to file for us
  });

  console.log("docx converted");

  res.download(
    path.resolve(__dirname, "output.pdf"),
    "generated-output.pdf",
    (err) => {
      if (err) {
        return err;
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
