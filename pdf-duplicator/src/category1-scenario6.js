import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { promises as fs } from "fs";
import { rotatePage } from "./rotate-page.js";
import { signTrustee1 } from "./sign-trustee1.js";
import { signTrustee2 } from "./sign-trustee2.js";
import { signPolicyHolder } from "./sign-policyholder.js";
import { signWitness } from "./sign-witness.js";
import { createFolderIfNotExists } from "./create-folder.js";
import { compressFolder } from "./compress-folder.js";
import { GLOBAL_CONFIG } from "./signature-config.js";

const signatureImagesArr = GLOBAL_CONFIG.SIGNATURE_IMAGES_ARR;

export async function category1_scenario6(inputPath, description, count) {
  try {
    const caseName = `${description}-category1-scenario6`;
    const outputFolder = `./shared/${caseName}`;

    // Check if the file exists
    await fs.access(inputPath);

    // Read the existing PDF
    const existingPdfBytes = await fs.readFile(inputPath);
    let signatureCount = 0;

    for (let i = 1; i <= count; i++) {
      // Load the existing PDF
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      // Modify the PDF - for example, add a text annotation to the first page
      const pages = pdfDoc.getPages();
      const signaturePage = pages[4];
      const { width, height } = signaturePage.getSize();
      const textContent = `Modified with Node.js - Version ${i}`;

      const signatureFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
      signatureCount = i + 1 > signatureImagesArr.length ? signatureCount : i;
      const iterate =
        signatureCount === 0 ? signatureCount + 1 : signatureCount;
      if (i + 1 > signatureImagesArr.length) {
        signatureCount + 1;
      } else {
        signatureCount = i;
      }
      const signatureImagePath = signatureImagesArr[signatureCount].imagePath;
      // Add a signature image
      // const signatureImageBytes = await fs.readFile(signatureImagePath);
      // const signatureImage = await pdfDoc.embedPng(signatureImageBytes);
      // const imageWidth = 100; // Adjust the width of the signature image as needed
      // const imageHeight = (imageWidth / signatureImage.width) * signatureImage.height;
      console.log(
        `width:${width}, Height: ${height}, signatureCount: ${signatureCount}`
      );

      const signatureTrustee1 = await signTrustee1(
        signaturePage,
        signatureImagesArr[signatureCount].imagePath,
        pdfDoc
      );
      const signatureTrustee2 = await signTrustee2(
        signaturePage,
        signatureImagesArr[signatureCount].imagePath,
        pdfDoc
      );
      const signaturePolicyHolder = await signPolicyHolder(
        signaturePage,
        signatureImagesArr[signatureCount].imagePath,
        pdfDoc
      );
      const signatureWitness = await signWitness(
        signaturePage,
        signatureImagesArr[signatureCount].imagePath,
        pdfDoc
      );
      const rotatedPage = await rotatePage(signaturePage, 0, pdfDoc);

      // Save the modified PDF with a different name
      const outputFileName = `${caseName}-no${i}.pdf`;
      createFolderIfNotExists(outputFolder);
      // createFolderIfNotExists('./shared/compressed')
      const outputPath = `${outputFolder}/${outputFileName}`;

      const modifiedPdfBytes = await pdfDoc.save();
      await fs.writeFile(outputPath, modifiedPdfBytes);
      // console.log(
      //   `PDF ${i} successfully modified and saved as ${outputFileName}`
      // );
    }
    // await compressFolder(outputFolder, `./shared/compressed/${caseName}.zip`);
  } catch (error) {
    console.error("Error modifying and saving PDFs:", error);
  }
}
