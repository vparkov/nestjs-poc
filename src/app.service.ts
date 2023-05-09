import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('AppService.getHello()');
    return 'Hello World!!!';
  }

  getHello2(): string {
    console.log('AppService.getHello2()');
    return 'Hello World2!!!';
  }
}
