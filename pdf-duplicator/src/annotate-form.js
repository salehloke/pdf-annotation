import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { promises as fs } from "fs";
import { faker } from "@faker-js/faker";

// page functions

// annotate utils
import { anotateNomineeDynamic } from "./shared/annotate-utils/nominee-dynamic-annotate.js";
import { annotateTrustee } from "./shared/annotate-utils/trustee-annotate.js";
import { signaturePageAnnotate } from "./shared/annotate-utils/signature-page-annotate.js";
import {
  generatePersonData,
  generateFormData
} from "./shared/annotate-utils/random-generator.js";
// Folder functions

export async function annotateForm(pdfDoc, isMuslimForm, formData) {
  try {
    // Load the existing PDF
    // const pdfDoc = await PDFDocument.load(existingPdfBytes);

    const form = pdfDoc.getForm();

    const policyNo = form.getTextField("policyNo");
    const policyOwner = form.getTextField("policyOwner");
    const policyOwnerICNo = form.getTextField("policyOwnerICNo");
    policyOwner.enableMultiline();
    const isNonMuslim = form.getCheckBox("isNonMuslim");
    const isMuslim = form.getCheckBox("isMuslim");
    const isSingle = form.getCheckBox("isSingle");
    const isNoChild = form.getCheckBox("isNoChild");
    const isHavingChild = form.getCheckBox("isHavingChild");
    // -----------------
    policyNo.setText(formData.policyNo);
    policyOwner.setText(formData.policyOwner);
    policyOwnerICNo.setText(formData.policyOwnerICNo);
    isSingle.check();
    isNoChild.check();
    if (isMuslimForm) {
      // MUSLIM
      isMuslim.check();
    } else {
      // NON-MUSLIM
    await annotateTrustee(1, form, formData);
    await annotateTrustee(2, form, formData);
      isNonMuslim.check();
    }
  
    await anotateNomineeDynamic(1, form, formData);
    await anotateNomineeDynamic(2, form, formData);
    await anotateNomineeDynamic(3, form, formData);


    await signaturePageAnnotate(1, form, formData);
    await signaturePageAnnotate(2, form, formData);

    //

    // SET PAGE 1

    return form;
  } catch (error) {
    console.error("Error modifying and saving PDFs:", error);
  }
}
