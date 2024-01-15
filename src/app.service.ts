import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prsima.service';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {
  constructor() {}

  getHello(): string {
    return 'Hello World!';
  }
}
