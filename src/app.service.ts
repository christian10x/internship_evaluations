import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  welcome(): { message: string } {
    return {
      message: 'Welcome to the API Xpedition Trainee UTP',
    };
  }
}
