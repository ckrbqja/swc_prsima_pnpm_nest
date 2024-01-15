import { Module } from '@nestjs/common';
import { HeloService } from './helo.service';
import { HeloController } from './helo.controller';
import { PrismaService } from '../prisma/prsima.service';

@Module({
  controllers: [HeloController],
  providers: [HeloService, PrismaService],
})
export class HeloModule {}
