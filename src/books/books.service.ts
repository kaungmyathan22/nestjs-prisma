import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) { }

  create (createBookDto: Prisma.BooksCreateInput) {
    return this.prisma.books.create({ data: createBookDto });
  }

  findAll () {
    return this.prisma.books.findMany();
  }

  findOne (booksWhereUniqueInput: Prisma.BooksWhereUniqueInput) {
    return this.prisma.books.findUnique({ where: booksWhereUniqueInput });
  }

  update (
    where: Prisma.BooksWhereUniqueInput,
    updateBookDto: Prisma.BooksUpdateInput,
  ) {
    return this.prisma.books.update({
      where,
      data: updateBookDto,
    });
  }

  remove (id: number) {
    return this.prisma.books.delete({ where: { id } });
  }
}
