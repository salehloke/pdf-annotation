/*
https://docs.nestjs.com/providers#services
*/

import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import { format } from 'path';

export async function icGenerator(){

    const yearRandom = faker.number.int({max:2000, min:1957})
    const yearIDStr = `${yearRandom}`
    const yearID = yearIDStr.slice(2,4)
    const monthRandom = faker.number.int({max:12, min:1})
    const monthID = monthRandom <10 ? '0'+monthRandom : monthRandom
    const dayRandom = faker.number.int({max:28, min:1})
    const dayID = dayRandom <10 ? '0'+dayRandom : dayRandom

    const midIDNumber = faker.number.int({max:99, min:10})
    const lastIDNumber = faker.number.int({max:9999, min:1000})
    const icNo = `${yearID}${monthID}${dayID}-${midIDNumber}-${lastIDNumber}`

    return icNo

  }


@Injectable()
export class UserFakerService {

   async generateFakeRegisterNewUser(){
    
        const data = {
            "username": await faker.internet.userName(),
            "email": await faker.internet.email(),
            "fullName": await faker.person.fullName(),
            "idType": "NRIC",
            "idNo": await icGenerator(),
            "countryCode": "+60",
            "phoneNo": await faker.phone.number(),
            "password": "123456",
            "secretWord": "smile",
            "activePolicyNo": null,
            "staffId": null
          }

        return data

    }
}
