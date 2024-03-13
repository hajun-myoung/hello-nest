import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello DENVER!';
  }

  getHi(): string {
    return 'Hi Denver';
  }
}
