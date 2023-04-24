import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000); // 포트 연결
}
bootstrap();

// Main.ts가 app.js같은 세팅 파일