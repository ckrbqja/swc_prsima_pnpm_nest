import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeloModule } from './helo/helo.module';
import { PrismaService } from './prisma/prsima.service';

@Module({
  imports: [HeloModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
