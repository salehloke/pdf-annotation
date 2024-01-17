import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { promises as fs } from "fs";

// page functions
import { rotatePage } from "./rotate-page.js";
import { signTrustee1 } from "./sign-trustee1.js";
import { signTrustee2 } from "./sign-trustee2.js";
import { signPolicyHolder } from "./sign-policyholder.js";
import { signWitness } from "./sign-witness.js";
import { signUniversalCoordinates } from "./sign-universal-coordinate.js";

// Folder functions
import { createFolderIfNotExists } from "./create-folder.js";
import { compressFolder } from "./compress-folder.js";
import { GLOBAL_CONFIG } from "./signature-config.js";

const signatureImagesArr = GLOBAL_CONFIG.SIGNATURE_IMAGES_ARR;

export async function dynamicTestCaseGenerator(categoryNum, scenarioNum, count) {
  try {

    const formType1 = GLOBAL_CONFIG.NON_MUSLIM_NOMINATION_WITH_DATA;
    const formType2 = GLOBAL_CONFIG.MUSLIM_NOMINATION_WITH_DATA;
    const formType3 = GLOBAL_CONFIG.UNSIGNED_MANUAL_SCANNED_PORTRAIT_NO_DATA; // empty form
    const formType4 = GLOBAL_CONFIG.UNSIGNED_DIGITAL_FORM_PORTRAIT_NO_DATA;
    const formType5 = GLOBAL_CONFIG.UNSIGNED_DIGITAL_FORM_PORTRAIT_NO_DATA_AUTOFILL; // using digital unsigned 

    const caseName = `category${categoryNum}-scenario${scenarioNum}`;
    const categoryObj = GLOBAL_CONFIG.category[categoryNum - 1] // because starts with 0
    const scenarioObj = GLOBAL_CONFIG.scenario[scenarioNum - 1] // because starts with 0

    const isMuslim = categoryObj.isMuslim
    const isDigital = categoryObj.isDigital

    const isSignatureOfTrustee1 = scenarioObj.signatureOfTrustee1
    const isSignatureOfTrustee2 = scenarioObj.signatureOfTrustee2
    const isSignatureOfWitness = scenarioObj.signatureOfWitness
    const isSignatureOfPolicyHolder = scenarioObj.signatureOfPolicyHolder
    const rotationAngle = scenarioObj.pageRotation

    const outputFolder = `./shared/${caseName}`;
    let pdfInputPath = formType5.pdfPath


    // Check if the file exists
    await fs.access(pdfInputPath);

    // Read the existing PDF
    const existingPdfBytes = await fs.readFile(pdfInputPath);
    let signatureCount = 0;

    for (let i = 1; i <= count; i++) {
      // Load the existing PDF
      const pdfDoc = await PDFDocument.load(existingPdfBytes);

      // Modify the PDF - for example, add a text annotation to the first page
      const pages = pdfDoc.getPages();
      const signaturePage = pages[4];
      const { width, height } = signaturePage.getSize();

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

      /**
       * signature Section
       */
      if (isSignatureOfTrustee1) {
        await signTrustee1(
          signaturePage,
          signatureImagesArr[signatureCount].imagePath,
          pdfDoc
        );
      }

      if (isSignatureOfTrustee2) {
        await signTrustee2(
          signaturePage,
          signatureImagesArr[signatureCount].imagePath,
          pdfDoc
        );
      }

      if (isSignatureOfWitness) {
        await signWitness(
          signaturePage,
          signatureImagesArr[signatureCount].imagePath,
          pdfDoc
        );
      }

      if (isSignatureOfPolicyHolder) {
        await signPolicyHolder(
          signaturePage,
          signatureImagesArr[signatureCount].imagePath,
          pdfDoc
        );
      }
      /** end of signature section */

      /**
       * rotation Section
       */
      if(rotationAngle > 0){
         await rotatePage(signaturePage, rotationAngle, pdfDoc);
      }
      /** end of rotation section */

      /** SAVING FILE SECTION */

      // Save the modified PDF with a different name
      const outputFileName = `${caseName}-no${i}.pdf`;
      createFolderIfNotExists(outputFolder);
      // createFolderIfNotExists('./shared/compressed')
      const outputPath = `${outputFolder}/${outputFileName}`;
      
      const modifiedPdfBytes = await pdfDoc.save();
      await fs.writeFile(outputPath, modifiedPdfBytes);
      /** end of SAVING FILE SECTION */
      
    }
    // await compressFolder(outputFolder, `./shared/compressed/${caseName}.zip`);
  } catch (error) {
    console.error("Error modifying and saving PDFs:", error);
  }
}
