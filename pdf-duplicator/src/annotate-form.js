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
    
    const policyOwnerObj = await generatePersonData(true)
    const nominee1 = await generatePersonData(true)
    const formData =  {
      policyNo: faker.phone.imei(),
      policyOwner: policyOwnerObj.name + policyOwnerObj.name,
      policyOwnerICNo: policyOwnerObj.IDNumber,
      isNoChild: policyOwnerObj.isNotHavingChild,
      isSingle: policyOwnerObj.isSingle,
      nominee1_name: nominee1.name,
      nominee1_gender: nominee1.gender,
      nominee1_IDDesc: 'IC',
      nominee1_IDNumber: nominee1.IDNumber
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
    /** NOMINEE 1 */
    const nominee1_name = form.getTextField('nominee1_name')
    nominee1_name.enableMultiline()
    const nominee1_gender = form.getTextField('nominee1_gender')
    const nominee1_IDDesc = form.getTextField('nominee1_IDDesc')
    const nominee1_IDNumber = form.getTextField('nominee1_IDNumber')


    const nominee2_name = form.getTextField('nominee2_name')
    nominee2_name.enableMultiline()

    const nominee2_gender = form.getTextField('nominee2_gender')
    // ----------------


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

    // SET PAGE 2
    nominee1_name.setText(formData.nominee1_name)
    nominee1_gender.setText(formData.nominee1_gender)
    nominee1_IDDesc.setText(formData.nominee1_IDDesc)
    nominee1_IDNumber.setText(formData.nominee1_IDNumber)
    
    nominee2_name.setText(formData.nominee2_name)
    nominee2_gender.setText(formData.nominee2_gender)

    return form
  } catch (error) {
    console.error("Error modifying and saving PDFs:", error);
  }
}



export async function generatePersonData(isMale) {
  try {
    let name1
    let name2
    if(isMale){
       name1 = faker.person.fullName( {
        sex: 'male'
      })

       name2 = faker.person.fullName( {
        sex: 'male'
      })
    }
    else{{
       name1 = faker.person.fullName( {
        sex: 'female'
      })

       name2 = faker.person.fullName( {
        sex: 'female'
      })

    }}
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

    const personData = {
      name: name1 + ' Bin ' + name2,
      isMarried: false,
      isSingle: true,
      isNoChild: true,
      gender: isMale ? 'male' : 'female',
      IDNumber: id
    }

    console.log(personData)
    return personData
  } catch (error) {
  }
}

