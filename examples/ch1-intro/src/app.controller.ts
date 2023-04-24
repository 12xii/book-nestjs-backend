import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service'; // ExpressJS의 Controller와 비슷한 개념의 AppService

@Controller() // 데코레이터 활용
export class AppController { // 클래스 기반
  constructor(private readonly appService: AppService) {} // 생성자?

  @Get()
  getHello(): string {
    return this.appService.getHello(); // appService의 getHello 함수 실행
  }
}

// NestJS의 Controller는 ExpressJS의 Router와 비슷한 역할!
