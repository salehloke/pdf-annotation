import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { promises as fs } from "fs";

// page functions
import { rotatePage } from "./shared/annotate-utils/rotate-page.js";
import { signTrustee1 } from "./shared/signature-utils/sign-trustee1.js";
import { signTrustee2 } from "./shared/signature-utils/sign-trustee2.js";
import { signPolicyHolder } from "./shared/signature-utils/sign-policyholder.js";
import { signWitness } from "./shared/signature-utils/sign-witness.js";
import { signUniversalCoordinates } from "./shared/signature-utils/sign-universal-coordinate.js";
import { annotateForm } from "./annotate-form.js";
import { generateFormData } from "./shared/annotate-utils/random-generator.js";

// Folder functions
import { createFolderIfNotExists } from "./shared/file-utils/create-folder.js";
import { compressFolder } from "./shared/file-utils/compress-folder.js";
import { GLOBAL_CONFIG, dummyFormData } from "./signature-config.js";

const signatureImagesArr = GLOBAL_CONFIG.SIGNATURE_IMAGES_ARR;

export async function dynamicTestCaseGenerator(
  categoryNum,
  scenarioNum,
  count
) {
  try {
    const formType1 = GLOBAL_CONFIG.NON_MUSLIM_NOMINATION_WITH_DATA;
    const formType2 = GLOBAL_CONFIG.MUSLIM_NOMINATION_WITH_DATA;
    const formType3 = GLOBAL_CONFIG.UNSIGNED_MANUAL_SCANNED_PORTRAIT_NO_DATA; // empty form
    const formType4 = GLOBAL_CONFIG.UNSIGNED_DIGITAL_FORM_PORTRAIT_NO_DATA;
    const formType5 =
      GLOBAL_CONFIG.UNSIGNED_DIGITAL_FORM_PORTRAIT_NO_DATA_AUTOFILL; // using digital unsigned

    const caseName = `category${categoryNum}-scenario${scenarioNum}`;
    const categoryObj = GLOBAL_CONFIG.category[categoryNum - 1]; // because starts with 0
    const scenarioObj = GLOBAL_CONFIG.scenario[scenarioNum - 1]; // because starts with 0

    const isMuslim = categoryObj.isMuslim;
    const isDigital = categoryObj.isDigital;

    const isSignatureOfTrustee1 = scenarioObj.signatureOfTrustee1;
    const isSignatureOfTrustee2 = scenarioObj.signatureOfTrustee2;
    const isSignatureOfWitness = scenarioObj.signatureOfWitness;
    const isSignatureOfPolicyHolder = scenarioObj.signatureOfPolicyHolder;
    const rotationAngle = scenarioObj.pageRotation;

    const outputFolder = `./shared/${caseName}`;
    let pdfInputPath = formType5.pdfPath;

    // Check if the file exists
    await fs.access(pdfInputPath);

    // Read the existing PDF
    const existingPdfBytes = await fs.readFile(pdfInputPath);
    let signatureCount = 0;

    for (let i = 1; i <= count; i++) {
      // Load the existing PDF
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      
      const formData = await generateFormData()
      await annotateForm(pdfDoc, isMuslim, formData);

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
        var randomNumber = Math.floor(Math.random() * 57) + 1;
        const imagePath =
          "./shared/signature-png/person_" + randomNumber + ".png";
        await signTrustee1(signaturePage, imagePath, pdfDoc);
        // console.log("imagePath trustee1", imagePath);
      }

      if (isSignatureOfTrustee2) {
        var randomNumber = Math.floor(Math.random() * 57) + 1;
        const imagePath =
          "./shared/signature-png/person_" + randomNumber + ".png";
        await signTrustee2(signaturePage, imagePath, pdfDoc);
        // console.log("imagePath trustee2", imagePath);
      }

      if (isSignatureOfWitness) {
        var randomNumber = Math.floor(Math.random() * 57) + 1;
        const imagePath =
          "./shared/signature-png/person_" + randomNumber + ".png";
        await signWitness(signaturePage, imagePath, pdfDoc);
        // console.log("imagePath witness", imagePath);
      }

      if (isSignatureOfPolicyHolder) {
        var randomNumber = Math.floor(Math.random() * 57) + 1;
        const imagePath =
          "./shared/signature-png/person_" + randomNumber + ".png";
        await signPolicyHolder(signaturePage, imagePath, pdfDoc);
        // console.log("imagePath policyholder", imagePath);
      }
      /** end of signature section */

      /**
       * rotation Section
       */
      if (rotationAngle > 0) {
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


