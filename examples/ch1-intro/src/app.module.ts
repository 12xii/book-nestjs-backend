import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [], // ?
  controllers: [AppController], // 컨트롤러 연결
  providers: [AppService], // 프로바이더 연결
})
export class AppModule {}
