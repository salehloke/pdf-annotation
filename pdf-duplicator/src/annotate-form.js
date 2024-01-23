import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { promises as fs } from "fs";
import { faker } from '@faker-js/faker';

// page functions
import { signTrustee1 } from "./shared/signature-utils/sign-trustee1.js";
import { signTrustee2 } from "./shared/signature-utils/sign-trustee2.js";
import { signPolicyHolder } from "./shared/signature-utils/sign-policyholder.js";
import { signWitness } from "./shared/signature-utils/sign-witness.js";
import { signUniversalCoordinates } from "./shared/signature-utils/sign-universal-coordinate.js";

// annotate utils
import { anotateNomineeDynamic } from "./shared/annotate-utils/nominee-dynamic-annotate.js";
import { annotateTrustee } from "./shared/annotate-utils/trustee-annotate.js";
import { signaturePageAnnotate } from "./shared/annotate-utils/signature-page-annotate.js";
import { generatePersonData } from "./shared/annotate-utils/random-generator.js";
// Folder functions
import { GLOBAL_CONFIG } from "./signature-config.js";

export async function generateFormData(){

  const policyOwnerObj = await generatePersonData()
  const nominee1 = await generatePersonData()
  const nominee2 = await generatePersonData()
  const nominee3 = await generatePersonData()
  const trustee1 = await generatePersonData()
  const trustee2 = await generatePersonData()
  
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


    trustee1_name: trustee1.name,
    trustee1_gender: trustee1.gender,
    trustee1_IDDesc: 'IC',
    trustee1_IDNumber: trustee1.IDNumber,
    trustee1_newIcNo: trustee1.IDNumber,
    trustee1_dateOfBirth: trustee1.dateOfBirth,
    trustee1_nationality: trustee1.nationality,
    trustee1_occupation: trustee1.occupation,
    trustee1_nameOfEmployer: trustee1.nameOfEmployer,
    trustee1_natureOfBusiness: trustee1.natureOfBusiness,
    trustee1_relationshipToPolicyOwner: trustee1.relationshipToPolicyOwner,
    trustee1_banksName: trustee1.banksName, // 
    trustee1_share: trustee1.share,
    trustee1_mailingAddress: trustee1.mailingAddress,
    trustee1_residentialAddress: trustee1.residentialAddress,
    trustee1_contactNumberHome: trustee1.contactNumberHome,
    trustee1_contactNumberOffice: trustee1.contactNumberOffice,
    trustee1_contactNumberMobile: trustee1.contactNumberMobile,
    trustee1_purposeOfNomination: trustee1.purposeOfNomination,

    trustee2_name: trustee2.name,
    trustee2_gender: trustee2.gender,
    trustee2_IDDesc: 'IC',
    trustee2_IDNumber: trustee2.IDNumber,
    trustee2_newIcNo: trustee2.IDNumber,
    trustee2_dateOfBirth: trustee2.dateOfBirth,
    trustee2_nationality: trustee2.nationality,
    trustee2_occupation: trustee2.occupation,
    trustee2_nameOfEmployer: trustee2.nameOfEmployer,
    trustee2_natureOfBusiness: trustee2.natureOfBusiness,
    trustee2_relationshipToPolicyOwner: trustee2.relationshipToPolicyOwner,
    trustee2_banksName: trustee2.banksName, // 
    trustee2_share: trustee2.share,
    trustee2_mailingAddress: trustee2.mailingAddress,
    trustee2_residentialAddress: trustee2.residentialAddress,
    trustee2_contactNumberHome: trustee2.contactNumberHome,
    trustee2_contactNumberOffice: trustee2.contactNumberOffice,
    trustee2_contactNumberMobile: trustee2.contactNumberMobile,
    trustee2_purposeOfNomination: trustee2.purposeOfNomination,
  }
  return formData
}

export async function annotateFormPage1(pdfDoc, isMuslimForm, formData) {
  try {
    // Load the existing PDF
    // const pdfDoc = await PDFDocument.load(existingPdfBytes);

    const form = pdfDoc.getForm()

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
    const numberOfNominee = 1
    // const nominee_mailingAddress = form.getTextField(`nominee${numberOfNominee}_mailingAddress`)
    // nominee_mailingAddress.setText(formData[`nominee${numberOfNominee}_mailingAddress`])

    // await anotateNominee1(form, formData)
    // await anotateNomineeDynamic(1,form, formData)
    await anotateNomineeDynamic(1,form, formData)
    await anotateNomineeDynamic(2,form, formData)
    await anotateNomineeDynamic(3,form, formData)

    await annotateTrustee(1,form, formData)
    await annotateTrustee(2,form, formData)

    await signaturePageAnnotate(form, formData)

    // 
    
    // SET PAGE 1


    return form
  } catch (error) {
    console.error("Error modifying and saving PDFs:", error);
  }
}



