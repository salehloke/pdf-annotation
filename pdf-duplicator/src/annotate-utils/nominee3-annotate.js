import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { promises as fs } from "fs";
import { faker } from '@faker-js/faker';

// page functions
import { rotatePage } from "../rotate-page.js";
import { signTrustee1 } from "../signature-utils/sign-trustee1.js";
import { signTrustee2 } from "../signature-utils/sign-trustee2.js";
import { signPolicyHolder } from "../signature-utils/sign-policyholder.js";
import { signWitness } from "../signature-utils/sign-witness.js";
import { signUniversalCoordinates } from "../signature-utils/sign-universal-coordinate.js";
import { generatePersonData,nameGenerator } from "./random-generator.js";
// Folder functions
import { createFolderIfNotExists } from "../create-folder.js";
import { compressFolder } from "../compress-folder.js";
import { GLOBAL_CONFIG } from "../signature-config.js";

const signatureImagesArr = GLOBAL_CONFIG.SIGNATURE_IMAGES_ARR;



export async function anotateNominee3(form,formData) {
  try {
    const nominee3 = await generatePersonData()
 
    // page2
    /** NOMINEE 1 */
    const nominee3_name = form.getTextField('nominee3_name')
    nominee3_name.enableMultiline()
    const nominee3_gender = form.getTextField('nominee3_gender')
    const nominee3_IDDesc = form.getTextField('nominee3_IDDesc')
    const nominee3_IDNumber = form.getTextField('nominee3_IDNumber')
    const nominee3_newIcNo = form.getTextField('nominee3_newIcNo')
    const nominee3_dateOfBirth = form.getTextField('nominee3_dateOfBirth')
    const nominee3_nationality = form.getTextField('nominee3_nationality')
    const nominee3_occupation = form.getTextField('nominee3_occupation')
    const nominee3_nameOfEmployer = form.getTextField('nominee3_nameOfEmployer')
    const nominee3_natureOfBusiness = form.getTextField('nominee3_natureOfBusiness')
    const nominee3_relationshipToPolicyOwner = form.getTextField('nominee3_relationshipToPolicyOwner')
    const nominee3_banksName = form.getTextField('nominee3_banksName')
    const nominee3_mailingAddress = form.getTextField('nominee3_mailingAddress')
    const nominee3_residentialAddress = form.getTextField('nominee3_residentialAddress')
    const nominee3_contactNumberHome = form.getTextField('nominee3_contactNumberHome')
    const nominee3_contactNumberOffice = form.getTextField('nominee3_contactNumberOffice')
    const nominee3_contactNumberMobile = form.getTextField('nominee3_contactNumberMobile')
    const nominee3_purposeOfNomination = form.getTextField('nominee3_purposeOfNomination')

    // ----------------


    nominee3_name.setText(formData.nominee3_name)
    nominee3_gender.setText(formData.nominee3_gender)
    nominee3_IDDesc.setText(formData.nominee3_IDDesc)
    nominee3_IDNumber.setText(formData.nominee3_IDNumber)
    nominee3_newIcNo.setText(formData.nominee3_newIcNo)
    nominee3_dateOfBirth.setText(formData.nominee3_dateOfBirth)
    nominee3_nationality.setText(formData.nominee3_nationality)
    nominee3_occupation.setText(formData.nominee3_occupation)
    nominee3_nameOfEmployer.setText(formData.nominee3_nameOfEmployer)
    nominee3_natureOfBusiness.setText(formData.nominee3_natureOfBusiness)
    nominee3_relationshipToPolicyOwner.setText(formData.nominee3_relationshipToPolicyOwner)
    nominee3_banksName.setText(formData.nominee3_banksName)
    nominee3_share.setText(formData.nominee3_share)
    nominee3_mailingAddress.setText(formData.nominee3_mailingAddress)
    nominee3_residentialAddress.setText(formData.nominee3_residentialAddress)
    nominee3_contactNumberHome.setText(formData.nominee3_contactNumberHome)
    nominee3_contactNumberOffice.setText(formData.nominee3_contactNumberOffice)
    nominee3_contactNumberMobile.setText(formData.nominee3_contactNumberMobile)
    nominee3_purposeOfNomination.setText(formData.nominee3_purposeOfNomination)

    console.log('nominee3_annotated', formData.nominee3_name)
  } catch (error) {
  }
}

