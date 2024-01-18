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

// Folder functions
import { createFolderIfNotExists } from "../create-folder.js";
import { compressFolder } from "../compress-folder.js";
import { GLOBAL_CONFIG } from "../signature-config.js";

const signatureImagesArr = GLOBAL_CONFIG.SIGNATURE_IMAGES_ARR;



export async function anotateNominee2(form,formData) {
  try {
    const nominee2 = await generatePersonData()
 
    // page2
    /** NOMINEE 1 */
    const nominee2_name = form.getTextField('nominee2_name')
    nominee2_name.enableMultiline()
    const nominee2_gender = form.getTextField('nominee2_gender')
    const nominee2_IDDesc = form.getTextField('nominee2_IDDesc')
    const nominee2_IDNumber = form.getTextField('nominee2_IDNumber')
    const nominee2_newIcNo = form.getTextField('nominee2_newIcNo')
    const nominee2_dateOfBirth = form.getTextField('nominee2_dateOfBirth')
    const nominee2_nationality = form.getTextField('nominee2_nationality')
    const nominee2_occupation = form.getTextField('nominee2_occupation')
    const nominee2_nameOfEmployer = form.getTextField('nominee2_nameOfEmployer')
    const nominee2_natureOfBusiness = form.getTextField('nominee2_natureOfBusiness')
    const nominee2_relationshipToPolicyOwner = form.getTextField('nominee2_relationshipToPolicyOwner')
    const nominee2_banksName = form.getTextField('nominee2_banksName')
    const nominee2_mailingAddress = form.getTextField('nominee2_mailingAddress')
    const nominee2_residentialAddress = form.getTextField('nominee2_residentialAddress')
    const nominee2_contactNumberHome = form.getTextField('nominee2_contactNumberHome')
    const nominee2_contactNumberOffice = form.getTextField('nominee2_contactNumberOffice')
    const nominee2_contactNumberMobile = form.getTextField('nominee2_contactNumberMobile')
    const nominee2_purposeOfNomination = form.getTextField('nominee2_purposeOfNomination')

    // ----------------


    nominee2_name.setText(formData.nominee2_name)
    nominee2_gender.setText(formData.nominee2_gender)
    nominee2_IDDesc.setText(formData.nominee2_IDDesc)
    nominee2_IDNumber.setText(formData.nominee2_IDNumber)
    nominee2_newIcNo.setText(formData.nominee2_newIcNo)
    nominee2_dateOfBirth.setText(formData.nominee2_dateOfBirth)
    nominee2_nationality.setText(formData.nominee2_nationality)
    nominee2_occupation.setText(formData.nominee2_occupation)
    nominee2_nameOfEmployer.setText(formData.nominee2_nameOfEmployer)
    nominee2_natureOfBusiness.setText(formData.nominee2_natureOfBusiness)
    nominee2_relationshipToPolicyOwner.setText(formData.nominee2_relationshipToPolicyOwner)
    nominee2_banksName.setText(formData.nominee2_banksName)
    nominee2_share.setText(formData.nominee2_share)
    nominee2_mailingAddress.setText(formData.nominee2_mailingAddress)
    nominee2_residentialAddress.setText(formData.nominee2_residentialAddress)
    nominee2_contactNumberHome.setText(formData.nominee2_contactNumberHome)
    nominee2_contactNumberOffice.setText(formData.nominee2_contactNumberOffice)
    nominee2_contactNumberMobile.setText(formData.nominee2_contactNumberMobile)
    nominee2_purposeOfNomination.setText(formData.nominee2_purposeOfNomination)
    return personData
  } catch (error) {
  }
}

