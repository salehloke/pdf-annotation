import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { promises as fs } from "fs";
import { faker } from '@faker-js/faker';

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
    
    const policyOwnerObj = await generatePersonData()
    const nominee1 = await generatePersonData()
    const formData =  {
      policyNo: faker.phone.imei(),
      policyOwner: policyOwnerObj.name,
      policyOwnerICNo: policyOwnerObj.IDNumber,
      isNoChild: policyOwnerObj.isNotHavingChild,
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
    }

    // page1
    const policyNo = form.getTextField('policyNo')
    const policyOwner = form.getTextField('policyOwner')
    const policyOwnerICNo = form.getTextField('policyOwnerICNo')
    policyOwner.enableMultiline()
    const isNonMuslim = form.getCheckBox('isNonMuslim')
    const isMuslim = form.getCheckBox('isMuslim')
    const isSingle = form.getCheckBox('isSingle')
    const isNoChild = form.getCheckBox('isNoChild')
    // -----------------

    // page2
    anotateNominee1(form, formData)
    
    
    // SET PAGE 1
    policyNo.setText(formData.policyNo)
    policyOwner.setText(formData.policyOwner)
    policyOwnerICNo.setText(formData.policyOwnerICNo)
    isSingle.check()
    isNoChild.check()
    if(isMuslim){
      isMuslim.check()
    } else{
      isNonMuslim.check()
    }


    return form
  } catch (error) {
    console.error("Error modifying and saving PDFs:", error);
  }
}

export async function nameGenerator(isMale, isMuslim){
  let name1
  let name2
  let fullName
  if(isMale){
     name1 = faker.person.fullName( {
      sex: 'male'
    })

     name2 = faker.person.fullName( {
      sex: 'male'
    })
    if(isMuslim){
      fullName = name1 + ' Bin ' + name2
    } else {
      fullName = name1 + ' ' + name2
    }
  }
  else{{
     name1 = faker.person.fullName( {
      sex: 'female'
    })

     name2 = faker.person.fullName( {
      sex: 'female'
    })

    if(isMuslim){
      fullName = name1 + ' Binti ' + name2
    } else {
      fullName = name1 + ' ' + name2
    }

  }}

  return fullName
}


export async function generatePersonData() {
  try {

    const isMale = faker.datatype.boolean()
    let fullName = await nameGenerator(isMale, false)
    


    const yearRandom = faker.number.int({max:2000, min:1957})
    const yearIDStr = `${yearRandom}`
    const yearID = yearIDStr.slice(1,3)
    const monthRandom = faker.number.int({max:12, min:1})
    const monthID = monthRandom <10 ? '0'+monthRandom : monthRandom
    const dayRandom = faker.number.int({max:28, min:1})
    const dayID = dayRandom <10 ? '0'+dayRandom : dayRandom

    const midIDNumber = faker.number.int({max:99, min:10})
    const lastIDNumber = faker.number.int({max:9999, min:1000})
    const id = `${yearID}${monthID}${dayID}-${midIDNumber}-${lastIDNumber}`
    const nationality = 'Malaysia'

    const personData = {
      name: fullName,
      isMarried: false,
      isSingle: true,
      isNoChild: true,
      gender: isMale ? 'male' : 'female',
      IDNumber: id,
      dateOfBirth: `${dayRandom}/${monthID}/${yearRandom}`,
      nationality: nationality,
      occupation: faker.person.jobTitle(),
      nameOfEmployer: faker.company.name(),
      relationshipToPolicyOwner: 'Family',
      natureOfBusiness: 'technology'
    }

    console.log(personData)
    return personData
  } catch (error) {
  }
}



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
    return personData
  } catch (error) {
  }
}

