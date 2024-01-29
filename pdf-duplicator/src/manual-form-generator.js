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

const signatureImagesArr = GLOBAL_CONFIG.SIGNATURE_IMAGES_ARR;

export async function manualFormGenerator(
  pdfPath,
  categoryNum,
  scenarioNum,
  count
) {
  try {

    const caseName = `manual-form-${categoryNum}-scenario${scenarioNum}`;
    const categoryObj = GLOBAL_CONFIG.category[4 - 1]; // because starts with 0
    const scenarioObj = GLOBAL_CONFIG.scenario[scenarioNum - 1]; // because starts with 0

    const isMuslim = categoryObj.isMuslim;
    const isDigital = categoryObj.isDigital;

    const isSignatureOfTrustee1 = scenarioObj.signatureOfTrustee1;
    const isSignatureOfTrustee2 = scenarioObj.signatureOfTrustee2;
    const isSignatureOfWitness = scenarioObj.signatureOfWitness;
    const isSignatureOfPolicyHolder = scenarioObj.signatureOfPolicyHolder;
    const rotationAngle = scenarioObj.pageRotation;

    const outputFolder = `./shared/${caseName}`;
    // const outputFolder = `\\\\filestore.maybank-my.mbb.dir\\maybank-my\\Data Strategy and Governance\\_shared with other departments\\EtiqaPlus\\shared\\${caseName}`;
    let pdfInputPath = pdfPath;

    // Check if the file exists
    await fs.access(pdfInputPath);

    // Read the existing PDF
    const existingPdfBytes = await fs.readFile(pdfInputPath);
    let signatureCount = 0;

    for (let i = 1; i <= count; i++) {
      // Load the existing PDF
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      
      const formData = await generateFormData(isMuslim)
      // await annotateForm(pdfDoc, isMuslim, formData);

      // Modify the PDF - for example, add a text annotation to the first page
      const pages = pdfDoc.getPages();
      pages.forEach(async (page,index) => {
        
        const signaturePage = page;
        // const signaturePage = pages[4];
        const { width, height } = signaturePage.getSize();
        
        
        /**
         * signature Section
        */
       if (isSignatureOfTrustee1 ) {
         await drawRandomSignatureTrustee1(signaturePage,140,570,0.3)
         // await signTrustee1(signaturePage, imagePath, pdfDoc);
         // console.log("imagePath trustee1", imagePath);
        }
        
        if (isSignatureOfTrustee2 ) {
          await drawRandomSignatureTrustee2(signaturePage, 375, 570, 0.3)
          // await signTrustee2(signaturePage, imagePath, pdfDoc);
          // console.log("imagePath trustee2", imagePath);
        }
        
        if (isSignatureOfWitness) {
          await drawRandomSignatureWitness(signaturePage, 140, 490, 0.3)
          // console.log("imagePath witness", imagePath);
        }
        
        if (isSignatureOfPolicyHolder) {
          await drawRandomSignaturePolicyholder(signaturePage,375, 490, 0.3)
          // await signPolicyHolder(signaturePage, imagePath, pdfDoc);
          // console.log("imagePath policyholder", imagePath);
        }
        /** end of signature section */
        
        /**
         * rotation Section
        */
      });
       if (rotationAngle > 0) {
        await rotatePage(signaturePage, rotationAngle, pdfDoc);
      }
      /** end of rotation section */

      /** SAVING FILE SECTION */

      // Save the modified PDF with a different name
      const outputFileName = `${caseName}-no${i}.pdf`;
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


