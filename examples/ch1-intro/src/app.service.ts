import { Injectable } from '@nestjs/common'; // ??

@Injectable()
export class AppService {
  getHello(): string { // TypeScript활용 함수 선언
    return 'Hello World!';
  }
}
