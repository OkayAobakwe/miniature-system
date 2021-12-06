import 'dotenv/config'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.PORT

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);

  console.log(`Server started at http://localhost:${port}`)
}
bootstrap();
