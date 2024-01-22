import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { promises as fs } from "fs";

// page functions
import { rotatePage } from "../rotate-page.js";
import { signTrustee1 } from "../signature-utils/sign-trustee1.js";
import { signTrustee2 } from "../signature-utils/sign-trustee2.js";
import { signPolicyHolder } from "../signature-utils/sign-policyholder.js";
import { signWitness } from "../signature-utils/sign-witness.js";
import { signUniversalCoordinates } from "../signature-utils/sign-universal-coordinate.js";

// Folder functions
import { createFolderIfNotExists } from "../create-folder.js";
import { compressFolder } from "../compress-folder.js";
import { GLOBAL_CONFIG } from "../signature-config.js";

const signatureImagesArr = GLOBAL_CONFIG.SIGNATURE_IMAGES_ARR;



export async function anotateTrustee(numberOfTrustee,form,formData) {
  try {
    console.log(`trustee${numberOfTrustee}`)
    console.log(`trustee${numberOfTrustee}_annotated`, formData[`trustee${numberOfTrustee}_name`])
    // page2
    /** TRUSTEE 1 */
    const trustee1_name = form.getTextField(`trustee${numberOfTrustee}_name`)
    trustee1_name.enableMultiline()
    const trustee1_gender = form.getTextField(`trustee${numberOfTrustee}_gender`)
    const trustee1_IDDesc = form.getTextField(`trustee${numberOfTrustee}_IDDesc`)
    const trustee1_IDNumber = form.getTextField(`trustee${numberOfTrustee}_IDNumber`)
    const trustee1_newIcNo = form.getTextField(`trustee${numberOfTrustee}_newIcNo`)
    const trustee1_dateOfBirth = form.getTextField(`trustee${numberOfTrustee}_dateOfBirth`)
    const trustee1_nationality = form.getTextField(`trustee${numberOfTrustee}_nationality`)
    const trustee1_occupation = form.getTextField(`trustee${numberOfTrustee}_occupation`)
    const trustee1_nameOfEmployer = form.getTextField(`trustee${numberOfTrustee}_nameOfEmployer`)
    const trustee1_natureOfBusiness = form.getTextField(`trustee${numberOfTrustee}_natureOfBusiness`)
    const trustee1_relationshipToPolicyOwner = form.getTextField(`trustee${numberOfTrustee}_relationshipToPolicyOwner`)
    const trustee1_banksName = form.getTextField(`trustee${numberOfTrustee}_banksName`)
    const trustee1_mailingAddress = form.getTextField(`trustee${numberOfTrustee}_mailingAddress`)
    const trustee1_residentialAddress = form.getTextField(`trustee${numberOfTrustee}_residentialAddress`)
    const trustee1_contactNumberHome = form.getTextField(`trustee${numberOfTrustee}_contactNumberHome`)
    const trustee1_contactNumberOffice = form.getTextField(`trustee${numberOfTrustee}_contactNumberOffice`)
    const trustee1_contactNumberMobile = form.getTextField(`trustee${numberOfTrustee}_contactNumberMobile`)
    const trustee1_purposeOfNomination = form.getTextField(`trustee${numberOfTrustee}_purposeOfNomination`)

    // ----------------


    trustee1_name.setText(formData[`trustee${numberOfTrustee}_name`])
    trustee1_gender.setText(formData[`trustee${numberOfTrustee}_gender`])
    trustee1_IDDesc.setText(formData[`trustee${numberOfTrustee}_IDDesc`])
    trustee1_IDNumber.setText(formData[`trustee${numberOfTrustee}_IDNumber`])
    trustee1_newIcNo.setText(formData[`trustee${numberOfTrustee}_newIcNo`])
    trustee1_dateOfBirth.setText(formData[`trustee${numberOfTrustee}_dateOfBirth`])
    trustee1_nationality.setText(formData[`trustee${numberOfTrustee}_nationality`])
    trustee1_occupation.setText(formData[`trustee${numberOfTrustee}_occupation`])
    trustee1_nameOfEmployer.setText(formData[`trustee${numberOfTrustee}_nameOfEmployer`])
    trustee1_natureOfBusiness.setText(formData[`trustee${numberOfTrustee}_natureOfBusiness`])
    trustee1_relationshipToPolicyOwner.setText(formData[`trustee${numberOfTrustee}_relationshipToPolicyOwner`])
    trustee1_banksName.setText(formData[`trustee${numberOfTrustee}_banksName`])
    trustee1_share.setText(formData[`trustee${numberOfTrustee}_share`])
    trustee1_mailingAddress.setText(formData[`trustee${numberOfTrustee}_mailingAddress`])
    trustee1_residentialAddress.setText(formData[`trustee${numberOfTrustee}_residentialAddress`])
    trustee1_contactNumberHome.setText(formData[`trustee${numberOfTrustee}_contactNumberHome`])
    trustee1_contactNumberOffice.setText(formData[`trustee${numberOfTrustee}_contactNumberOffice`])
    trustee1_contactNumberMobile.setText(formData[`trustee${numberOfTrustee}_contactNumberMobile`])
    trustee1_purposeOfNomination.setText(formData[`trustee${numberOfTrustee}_purposeOfNomination`])
  } catch (error) {
  }
}

