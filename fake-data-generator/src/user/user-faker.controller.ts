/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { UserFakerService } from './user-faker.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('user')
export class UserFakerController { 
    constructor(
        private userFaker : UserFakerService
    ){

    }
  @Get()
  @ApiOperation({
    summary: 'Generate a Faker new user',
    description: 'Generate signature. It Takes boolean as the parameter for the desired signature',
  })
  getFakeRegisterNewUser(): any {
    return this.userFaker.generateFakeRegisterNewUser();
  }
}


