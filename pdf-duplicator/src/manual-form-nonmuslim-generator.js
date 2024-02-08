
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
import { drawRandomSignatureWitness } from "./shared/signature-utils/random-witness-sign.js";
import { drawRandomSignaturePolicyholder } from "./shared/signature-utils/random-policyholder-sign.js";
import { drawRandomSignatureTrustee1 } from "./shared/signature-utils/random-trustee1-sign.js";
import { drawRandomSignatureTrustee2 } from "./shared/signature-utils/random-trustee2-sign.js";
import { drawRandomSignature } from "./shared/signature-utils/draw-random-signature.js";

const signatureImagesArr = GLOBAL_CONFIG.SIGNATURE_IMAGES_ARR;

export async function manualFormNonMuslimGenerator(
  pdfPath,
  categoryNum,
  scenarioNum,
  pageCount,
  pdfCount
) {
  try {
    const formType5 =
      GLOBAL_CONFIG.SIGNATURE_PAGE_ONLY; // using digital unsigned

    const caseName = `manualForm-nonmuslim-scenario${scenarioNum}`;
    const categoryObj = GLOBAL_CONFIG.category[4 - 1]; // because starts with 0
    const scenarioObj = GLOBAL_CONFIG.scenario[scenarioNum - 1]; // because starts with 0

    const isMuslim = true;
    const isDigital = false;

    const isSignatureOfTrustee1 = scenarioObj.signatureOfTrustee1;
    const isSignatureOfTrustee2 = scenarioObj.signatureOfTrustee2;
    const isSignatureOfWitness = scenarioObj.signatureOfWitness;
    const isSignatureOfPolicyHolder = scenarioObj.signatureOfPolicyHolder;
    const rotationAngle = scenarioObj.pageRotation;

    const outputFolder = `./shared/sample-output/non-muslim/${caseName}`;
    // const outputFolder = `\\\\filestore.maybank-my.mbb.dir\\maybank-my\\Data Strategy and Governance\\_shared with other departments\\EtiqaPlus\\shared\\${caseName}`;
    let pdfInputPath = pdfPath;

    // Check if the file exists
    await fs.access(pdfInputPath);

    // Read the existing PDF
    const existingPdfBytes = await fs.readFile(pdfInputPath);

    for (let i = 1; i <= pdfCount; i++) {
      // Load the existing PDF
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const duplicatePageCount = pageCount
      const newPDFDoc = await pageDuplicator(pdfDoc, duplicatePageCount)
      const pages = newPDFDoc.getPages();

      for (let index = 0; index <= pages.length; index++) {

        const signaturePage = pages[index];
        // console.log('page:', index, pdfCount, 'pages:', pages.length)
        /**
         * signature Section
         */
        if (isSignatureOfTrustee1) {
          // type 6
          if(categoryNum===6){
            await drawRandomSignature(signaturePage, 170, 330, 0.25)
          }else{
            await drawRandomSignature(signaturePage, 170, 570, 0.25)
          }


          // type 7
          // await drawRandomSignature(signaturePage, 170, 635, 0.25)
          // await drawRandomSignature(signaturePage, 170, 570, 0.25)
        }

        if (isSignatureOfTrustee2) {
          // type 6

          if(categoryNum===6){
            await drawRandomSignature(signaturePage, 170, 450, 0.25)
          }else{
            await drawRandomSignature(signaturePage, 345, 570, 0.25)
          }

          // type 7
          // await drawRandomSignature(signaturePage, 120, 450, 0.25)
          // await drawRandomSignatureTrustee2(signaturePage, 130, 450, 0.25)
          // await drawRandomSignature(signaturePage, 350, 570, 0.25)
        }

        if (isSignatureOfWitness) {
          // type 6

          if(categoryNum===6){
            // await drawRandomSignature(signaturePage, 170, 450, 0.25)
            await drawRandomSignature(signaturePage, 230, 300, 0.25)
          }else{
            // await drawRandomSignature(signaturePage, 230, 300, 0.25)
            
            // type 7
            await drawRandomSignature(signaturePage, 170, 490,0.25)
          }
          // await drawRandomSignature(signaturePage, 170, 490, 0.25)

        }

        if (isSignatureOfPolicyHolder) {
          // type 6
          
          if(categoryNum===6){
            await drawRandomSignature(signaturePage, 230, 450, 0.25)
          }else{
            // type 7
            await drawRandomSignature(signaturePage, 345, 490, 0.25)
          }
          
        }
        /** end of signature section */
      }


      /**
       * rotation Section
       */
      if (rotationAngle > 0) {
        await rotatePage(signaturePage, rotationAngle, pdfDoc);
      }
      /** end of rotation section */

      /** SAVING FILE SECTION */

      // Save the modified PDF with a different name
      const outputFileName = `${caseName}-no${categoryNum}.pdf`;
      await createFolderIfNotExists(outputFolder);
      // createFolderIfNotExists('./shared/compressed')
      const outputPath = `${outputFolder}/${outputFileName}`;

      const modifiedPdfBytes = await pdfDoc.save();

      await fs.writeFile(outputPath, modifiedPdfBytes);
      console.log(`Generated: ${outputFileName}`)
      /** end of SAVING FILE SECTION */
    }
    // await createFolderIfNotExists(`./shared/compressed/`);

    // await compressFolder(outputFolder, `./shared/compressed/${caseName}.zip`,`${caseName}.zip`);
  } catch (error) {
    console.error("Error modifying and saving PDFs:", error);
  }
}




export async function pageDuplicator(pdfDoc, count) {

  const newPDFDoc = await PDFDocument.create();
  const pages = pdfDoc.getPages();
  const signaturePage = pages[0];
  for (let index = 0; index <= count - pages.length; index++) {

    // Load the existing PDF
    const [signPageCopied] = await pdfDoc.copyPages(pdfDoc, [0])

    // Modify the PDF - for example, add a text annotation to the first page
    // const [secondDonorPage] = await pdfDoc.copyPages(secondDonorPdfDoc, [742])

    pdfDoc.addPage(signPageCopied)
    // pdfDoc.insertPage(0, secondDonorPage)



    const pdfBytes = await pdfDoc.save()
  }

  return pdfDoc
}