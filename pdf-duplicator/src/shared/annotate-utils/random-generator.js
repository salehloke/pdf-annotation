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

    // Address
    const street = faker.location.streetAddress({useFullAddress:true})
    const state = faker.location.state()
    const zipcode = faker.location.zipCode('#####')

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
      natureOfBusiness: 'technology',
      banksName: 'Maybank',
      share: '20%',
      mailingAddress: `${street}, /n ${state}, /n ${zipcode}`,
      residentialAddress: `${street}, /n ${state}, /n ${zipcode}`,
      contactNumberHome: faker.phone.number(),
      contactNumberMobile: faker.phone.number(),
      contactNumberOffice: faker.phone.number(),
      purposeOfNomination: 'N/A' 
    }

    return personData
  } catch (error) {
  }
}

