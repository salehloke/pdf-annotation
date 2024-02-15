import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Fake data generator')
    .setDescription('Building Fake data generator for testing')
    .setVersion('1.0')
    .addTag('Faker')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  console.log('Swagger hosted at:', 'localhost:3000/api')
  await app.listen(3501);
}
bootstrap();
