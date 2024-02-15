import { UserFakerService } from './user/user-faker.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserFakerController } from './user/user-faker.controller';

@Module({
  imports: [],
  controllers: [AppController, UserFakerController],
  providers: [
    UserFakerService, AppService],
})
export class AppModule { }
