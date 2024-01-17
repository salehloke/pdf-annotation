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


export async function annotateFormPage1(pdfDoc, isMuslim) {
  try {
    // Load the existing PDF
    // const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const form = pdfDoc.getForm()
    const formData = {
      policyOwner: ''
    }

    const policyOwner = form.getTextField('policyOwner')

    policyOwner.setText('Anrsif binrty fasrmsfu')
    if(isMuslim){
      form.getCheckBox(`isMuslim`).check()
    } else{
      form.getCheckBox(`isMuslim`).uncheck()
    }
    console.log(policyOwner)


    return form
  } catch (error) {
    console.error("Error modifying and saving PDFs:", error);
  }
}

// const inputPath = './shared/pdf-samples/unsigned-nomination-form.pdf';
// const signatureImagePath = './shared/signature-png/signature1_type1.png';
// // const inputPath = '../../shared/pdf-samples/unsigned-nomination-form.pdf';
// const outputFolder = './shared/scenario-1';
// const count = 10;

// console.log('start')
// category1_scenario6(inputPath, outputFolder, count);
