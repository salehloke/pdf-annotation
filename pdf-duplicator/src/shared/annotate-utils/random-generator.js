import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { promises as fs } from "fs";
import { faker } from '@faker-js/faker';

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

export async function generatePersonData(isMuslim) {
  try {

    const isMale = faker.datatype.boolean()
    let fullName = await nameGenerator(isMale, isMuslim)
    
    


    const yearRandom = faker.number.int({max:2000, min:1957})
    const yearIDStr = `${yearRandom}`
    const yearID = yearIDStr.slice(2,4)
    const monthRandom = faker.number.int({max:12, min:1})
    const monthID = monthRandom <10 ? '0'+monthRandom : monthRandom
    const dayRandom = faker.number.int({max:28, min:1})
    const dayID = dayRandom <10 ? '0'+dayRandom : dayRandom

    const midIDNumber = faker.number.int({max:99, min:10})
    const lastIDNumber = faker.number.int({max:9999, min:1000})
    const id = `${yearID}${monthID}${dayID}-${midIDNumber}M-${lastIDNumber}X`
    const nationality = 'Malaysia'

    // Address
    const street = faker.location.streetAddress({useFullAddress:true})
    const state = faker.location.state()
    const zipcode = faker.location.zipCode('#####')

    const personData = {
      name: fullName,
      isMarried: false,
      isMuslim: isMuslim,
      isSingle: true,
      isNoChild: true,
      isMarried: false,
      isWidow: false,
      isDivorced: false,
      gender: isMale ? 'male' : 'female',
      IDNumber: id,
      dateOfBirth: `${dayRandom}/${monthID}/${yearRandom}`,
      nationality: nationality,
      occupation: faker.person.jobTitle(),
      nameOfEmployer: faker.company.name(),
      relationshipToPolicyOwner: 'Family',
      natureOfBusiness: 'technology',
      banksName: 'Maybank',
      share: '20%',
      savingsAccountNumber: `${faker.finance.accountNumber()}`,
      mailingAddress: `${street}, \n ${state}, \n ${zipcode}`,
      residentialAddress: `${street}, \n ${state}, \n ${zipcode}`,
      contactNumberHome: faker.phone.number(),
      contactNumberMobile: faker.phone.number(),
      contactNumberOffice: faker.phone.number(),
      purposeOfNomination: 'N/A' 
    }

    return personData
  } catch (error) {
  }
}

export async function generateFormData(isMuslim){

  const policyOwnerObj = await generatePersonData(isMuslim)
  const nominee1 = await generatePersonData(isMuslim)
  const nominee2 = await generatePersonData(isMuslim)
  const nominee3 = await generatePersonData(isMuslim)
  const trustee1 = await generatePersonData(isMuslim)
  const trustee2 = await generatePersonData(isMuslim)
  
  const formData = {
      
    policyNo: faker.phone.imei(),
    policyOwner: policyOwnerObj.name,
    policyOwnerICNo: policyOwnerObj.IDNumber,
    isNonMuslim: !policyOwnerObj.isMuslim,
    isMuslim: policyOwnerObj.isMuslim,
    isNoChild: policyOwnerObj.isNoChild,
    isHavingChild: !policyOwnerObj.isNoChild,
    isSingle: policyOwnerObj.isSingle,
    isMarried: policyOwnerObj.isMarried,
    isDivorced: policyOwnerObj.isDivorced,
    isWidow: policyOwnerObj.isWidow,

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
    nominee1_savingsAccountNumber: nominee1.savingsAccountNumber,
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
    nominee2_savingsAccountNumber: nominee2.savingsAccountNumber,
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
    nominee3_savingsAccountNumber: nominee3.savingsAccountNumber,

    nominee3_mailingAddress: nominee3.mailingAddress,

    nominee3_residentialAddress: nominee3.residentialAddress,
    nominee3_contactNumberHome: nominee3.contactNumberHome,
    nominee3_contactNumberOffice: nominee3.contactNumberOffice,
    nominee3_contactNumberMobile: nominee3.contactNumberMobile,
    nominee3_purposeOfNomination: nominee3.purposeOfNomination,


    trustee1_name: trustee1.name,
    trustee1_gender: trustee1.gender,
    trustee1_IDDesc: 'IC',
    trustee1_idDescription: 'IC',
    trustee1_idNumber: trustee1.IDNumber,
    trustee1_newIcNumber: trustee1.IDNumber,
    trustee1_dateOfBirth: trustee1.dateOfBirth,
    trustee1_nationality: trustee1.nationality,
    trustee1_occupation: trustee1.occupation,
    trustee1_nameOfEmployer: trustee1.nameOfEmployer,
    trustee1_natureOfBusiness: trustee1.natureOfBusiness,
    trustee1_relationshipToPolicyOwner: trustee1.relationshipToPolicyOwner,
    trustee1_banksName: trustee1.banksName, // 
    trustee1_share: trustee1.share,
    trustee1_savingsAccountNumber: trustee1.savingsAccountNumber,
    trustee1_mailingAddress: trustee1.mailingAddress,
    trustee1_residentialAddress: trustee1.residentialAddress,
    trustee1_contactNumberHome: trustee1.contactNumberHome,
    trustee1_contactNumberOffice: trustee1.contactNumberOffice,
    trustee1_contactNumberMobile: trustee1.contactNumberMobile,
    trustee1_reasonForAppointmentOfTrustee: trustee1.purposeOfNomination,

    trustee2_name: trustee2.name,
    trustee2_gender: trustee2.gender,
    trustee2_IDDesc: 'IC',
    trustee2_IDDescription: 'IC',
    trustee2_idNumber: trustee2.IDNumber,
    trustee2_newIcNumber: trustee2.IDNumber,
    trustee2_dateOfBirth: trustee2.dateOfBirth,
    trustee2_nationality: trustee2.nationality,
    trustee2_occupation: trustee2.occupation,
    trustee2_nameOfEmployer: trustee2.nameOfEmployer,
    trustee2_natureOfBusiness: trustee2.natureOfBusiness,
    trustee2_relationshipToPolicyOwner: trustee2.relationshipToPolicyOwner,
    trustee2_banksName: trustee2.banksName, // 
    trustee2_share: trustee2.share,
    trustee2_savingsAccountNumber: trustee2.savingsAccountNumber,
    trustee2_mailingAddress: trustee2.mailingAddress,
    trustee2_residentialAddress: trustee2.residentialAddress,
    trustee2_contactNumberHome: trustee2.contactNumberHome,
    trustee2_contactNumberOffice: trustee2.contactNumberOffice,
    trustee2_contactNumberMobile: trustee2.contactNumberMobile,
    trustee2_reasonForAppointmentOfTrustee: trustee2.purposeOfNomination,
  }
  return formData
}

