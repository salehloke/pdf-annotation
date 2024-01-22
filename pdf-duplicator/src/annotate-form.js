import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { promises as fs } from "fs";
import { faker } from '@faker-js/faker';

// page functions
import { rotatePage } from "./rotate-page.js";
import { signTrustee1 } from "./signature-utils/sign-trustee1.js";
import { signTrustee2 } from "./signature-utils/sign-trustee2.js";
import { signPolicyHolder } from "./signature-utils/sign-policyholder.js";
import { signWitness } from "./signature-utils/sign-witness.js";
import { signUniversalCoordinates } from "./signature-utils/sign-universal-coordinate.js";

// annotate utils
import { anotateNominee3 } from "./annotate-utils/nominee3-annotate.js";
import { anotateNominee22 } from "./annotate-utils/nominee2-annotate.js";
import { anotateNomineeDynamic } from "./annotate-utils/nominee-dynamic-annotate.js";
import { generatePersonData } from "./annotate-utils/random-generator.js";
// Folder functions
import { createFolderIfNotExists } from "./create-folder.js";
import { compressFolder } from "./compress-folder.js";
import { GLOBAL_CONFIG } from "./signature-config.js";

const signatureImagesArr = GLOBAL_CONFIG.SIGNATURE_IMAGES_ARR;


export async function annotateFormPage1(pdfDoc, isMuslimForm) {
  try {
    // Load the existing PDF
    // const pdfDoc = await PDFDocument.load(existingPdfBytes);

    const form = pdfDoc.getForm()
    
    const policyOwnerObj = await generatePersonData()
    const nominee1 = await generatePersonData()
    const nominee2 = await generatePersonData()
    const nominee3 = await generatePersonData()

    const formData = {
      
      policyNo: faker.phone.imei(),
      policyOwner: policyOwnerObj.name,
      policyOwnerICNo: policyOwnerObj.IDNumber,
      isNoChild: policyOwnerObj.isNoChild,
      isSingle: policyOwnerObj.isSingle,

      nominee1_name: nominee1.name,
      nominee1_gender: nominee1.gender,
      nominee1_IDDesc: 'IC',
      nominee1_IDNumber: nominee1.IDNumber,
      nominee1_newIcNo: nominee1.IDNumber,
      nominee1_dateOfBirth: nominee1.dateOfBirth,
      nominee1_nationality: nominee1.nationality,
      nominee1_occupation: nominee1.occupation,
      nominee1_nameOfEmployer: nominee1.nameOfEmployer,
      nominee1_natureOfBusiness: nominee1.natureOfBusiness,
      nominee1_relationshipToPolicyOwner: nominee1.relationshipToPolicyOwner,
      nominee1_banksName: nominee1.banksName, // 
      nominee1_share: nominee1.share,
      nominee1_mailingAddress: nominee1.mailingAddress,
      nominee1_residentialAddress: nominee1.residentialAddress,
      nominee1_contactNumberHome: nominee1.contactNumberHome,
      nominee1_contactNumberOffice: nominee1.contactNumberOffice,
      nominee1_contactNumberMobile: nominee1.contactNumberMobile,
      nominee1_purposeOfNomination: nominee1.purposeOfNomination,

      nominee2_name: nominee2.name,
      nominee2_gender: nominee2.gender,
      nominee2_IDDesc: 'IC',
      nominee2_IDNumber: nominee2.IDNumber,
      nominee2_newIcNo: nominee2.IDNumber,
      nominee2_dateOfBirth: nominee2.dateOfBirth,
      nominee2_nationality: nominee2.nationality,
      nominee2_occupation: nominee2.occupation,
      nominee2_nameOfEmployer: nominee2.nameOfEmployer,
      nominee2_natureOfBusiness: nominee2.natureOfBusiness,
      nominee2_relationshipToPolicyOwner: nominee2.relationshipToPolicyOwner,
      nominee2_banksName: nominee2.banksName, // 
      nominee2_share: nominee2.share,
      nominee2_mailingAddress: nominee2.mailingAddress,
      nominee2_residentialAddress: nominee2.residentialAddress,
      nominee2_contactNumberHome: nominee2.contactNumberHome,
      nominee2_contactNumberOffice: nominee2.contactNumberOffice,
      nominee2_contactNumberMobile: nominee2.contactNumberMobile,
      nominee2_purposeOfNomination: nominee2.purposeOfNomination,

      nominee3_name: nominee3.name,
      nominee3_gender: nominee3.gender,
      nominee3_IDDesc: 'IC',
      nominee3_IDNumber: nominee3.IDNumber,
      nominee3_newIcNo: nominee3.IDNumber,
      nominee3_dateOfBirth: nominee3.dateOfBirth,
      nominee3_nationality: nominee3.nationality,
      nominee3_occupation: nominee3.occupation,
      nominee3_nameOfEmployer: nominee3.nameOfEmployer,
      nominee3_natureOfBusiness: nominee3.natureOfBusiness,
      nominee3_relationshipToPolicyOwner: nominee3.relationshipToPolicyOwner,
      nominee3_banksName: nominee3.banksName, // 
      nominee3_share: nominee3.share,
      nominee3_mailingAddress: nominee3.mailingAddress,

      nominee3_residentialAddress: nominee3.residentialAddress,
      nominee3_contactNumberHome: nominee3.contactNumberHome,
      nominee3_contactNumberOffice: nominee3.contactNumberOffice,
      nominee3_contactNumberMobile: nominee3.contactNumberMobile,
      nominee3_purposeOfNomination: nominee3.purposeOfNomination,
    }

    // console.log('formData:', formData)

    // page1
    const policyNo = form.getTextField('policyNo')
    const policyOwner = form.getTextField('policyOwner')
    const policyOwnerICNo = form.getTextField('policyOwnerICNo')
    policyOwner.enableMultiline()
    const isNonMuslim = form.getCheckBox('isNonMuslim')
    const isMuslim = form.getCheckBox('isMuslim')
    const isSingle = form.getCheckBox('isSingle')
    const isNoChild = form.getCheckBox('isNoChild')
    const isHavingChild = form.getCheckBox('isHavingChild')
    // -----------------
    policyNo.setText(formData.policyNo)
    policyOwner.setText(formData.policyOwner)
    policyOwnerICNo.setText(formData.policyOwnerICNo)
    isSingle.check()
    isNoChild.check()
    if(isMuslimForm){
      isMuslim.check()
    } else{
      isNonMuslim.check()
    }

    // page2
    // await anotateNominee1(form, formData)
    // await anotateNomineeDynamic(1,form, formData)
    await anotateNomineeDynamic(1,form, formData)
    // await anotateNomineeDynamic(3,form, formData)
    // await anotateNominee22(form, formData)
    // await anotateNominee3(form, formData)

    // 
    
    // SET PAGE 1


    return form
  } catch (error) {
    console.error("Error modifying and saving PDFs:", error);
  }
}




export async function anotateNominee1(form,formData) {
  try {
    console.log('annotate nominee1')
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

    
  } catch (error) {
  }
}



export async function anotateNominee2(form,formData) {
  try {
 
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
    return formData.nominee2_name
  } catch (error) {
  }
}