import { Injectable } from '@nestjs/common';
import { CreateHeloDto } from './dto/create-helo.dto';
import { UpdateHeloDto } from './dto/update-helo.dto';
import { PrismaService } from '../prisma/prsima.service';

@Injectable()
export class HeloService {
  async;

  constructor(private readonly prisma: PrismaService) {}

  async create(createHeloDto: CreateHeloDto) {
    return 'This action adds a new helo';
  }

  async findAll() {
    const data = await this.prisma.user.findMany({
      include: {
        host_user: true,
      },
    });

    const filter = data.filter((d) => d.host_user.length != 0);
    console.log(filter);
    return `This action returns all helo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} helo`;
  }

  update(id: number, updateHeloDto: UpdateHeloDto) {
    return `This action updates a #${id} helo`;
  }

  remove(id: number) {
    return `This action removes a #${id} helo`;
  }
}
