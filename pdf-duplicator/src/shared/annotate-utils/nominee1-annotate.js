import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { promises as fs } from "fs";
import { faker } from '@faker-js/faker';

// page functions
import { signTrustee1 } from "../shared/signature-utils/sign-trustee1.js";
import { signTrustee2 } from "../shared/signature-utils/sign-trustee2.js";
import { signPolicyHolder } from "../shared/signature-utils/sign-policyholder.js";
import { signWitness } from "../shared/signature-utils/sign-witness.js";
import { signUniversalCoordinates } from "../shared/signature-utils/sign-universal-coordinate.js";

// Folder functions
import { GLOBAL_CONFIG } from "../../signature-config";

const signatureImagesArr = GLOBAL_CONFIG.SIGNATURE_IMAGES_ARR;



export async function anotateNominee1(form,formData) {
  try {
    const nominee1 = await generatePersonData()
 
    // page2
    /** NOMINEE 1 */
    const nominee1_name = form.getTextField('nominee1_name')
    nominee1_name.enableMultiline()
    const nominee1_gender = form.getTextField('nominee1_gender')
    const nominee1_IDDesc = form.getTextField('nominee1_IDDesc')
    const nominee1_IDNumber = form.getTextField('nominee1_IDNumber')
    const nominee1_newIcNo = form.getTextField('nominee1_newIcNo')
    const nominee1_dateOfBirth = form.getTextField('nominee1_dateOfBirth')
    const nominee1_nationality = form.getTextField('nominee1_nationality')
    const nominee1_occupation = form.getTextField('nominee1_occupation')
    const nominee1_nameOfEmployer = form.getTextField('nominee1_nameOfEmployer')
    const nominee1_natureOfBusiness = form.getTextField('nominee1_natureOfBusiness')
    const nominee1_relationshipToPolicyOwner = form.getTextField('nominee1_relationshipToPolicyOwner')
    const nominee1_banksName = form.getTextField('nominee1_banksName')
    const nominee1_mailingAddress = form.getTextField('nominee1_mailingAddress')
    const nominee1_residentialAddress = form.getTextField('nominee1_residentialAddress')
    const nominee1_contactNumberHome = form.getTextField('nominee1_contactNumberHome')
    const nominee1_contactNumberOffice = form.getTextField('nominee1_contactNumberOffice')
    const nominee1_contactNumberMobile = form.getTextField('nominee1_contactNumberMobile')
    const nominee1_purposeOfNomination = form.getTextField('nominee1_purposeOfNomination')

    // ----------------


    nominee1_name.setText(formData.nominee1_name)
    nominee1_gender.setText(formData.nominee1_gender)
    nominee1_IDDesc.setText(formData.nominee1_IDDesc)
    nominee1_IDNumber.setText(formData.nominee1_IDNumber)
    nominee1_newIcNo.setText(formData.nominee1_newIcNo)
    nominee1_dateOfBirth.setText(formData.nominee1_dateOfBirth)
    nominee1_nationality.setText(formData.nominee1_nationality)
    nominee1_occupation.setText(formData.nominee1_occupation)
    nominee1_nameOfEmployer.setText(formData.nominee1_nameOfEmployer)
    nominee1_natureOfBusiness.setText(formData.nominee1_natureOfBusiness)
    nominee1_relationshipToPolicyOwner.setText(formData.nominee1_relationshipToPolicyOwner)
    nominee1_banksName.setText(formData.nominee1_banksName)
    nominee1_share.setText(formData.nominee1_share)
    nominee1_mailingAddress.setText(formData.nominee1_mailingAddress)
    nominee1_residentialAddress.setText(formData.nominee1_residentialAddress)
    nominee1_contactNumberHome.setText(formData.nominee1_contactNumberHome)
    nominee1_contactNumberOffice.setText(formData.nominee1_contactNumberOffice)
    nominee1_contactNumberMobile.setText(formData.nominee1_contactNumberMobile)
    nominee1_purposeOfNomination.setText(formData.nominee1_purposeOfNomination)
    console.log('nominee1_annotated', formData.nominee1_name)
  } catch (error) {
  }
}

