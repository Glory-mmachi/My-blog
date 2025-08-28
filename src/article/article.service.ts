import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { ResponseArticleDto } from './dto/response-article.dto';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<ResponseArticleDto[]> {
    return await this.prisma.articles.findMany();
  }
  async findById(id: string): Promise<ResponseArticleDto> {
    const article = await this.prisma.articles.findUnique({ where: { id } });
    if (!article) {
      throw new NotFoundException(`Article with ID ${id} not found`);
    }
    return article;
  }

  async createArticle(
    createArticleDto: CreateArticleDto,
  ): Promise<ResponseArticleDto> {
    const existingArticle = await this.prisma.articles.findUnique({
      where: { title: createArticleDto.title },
    });

    if (existingArticle) {
      throw new ConflictException(
        `Article with this title: ${createArticleDto.title} already exists`,
      );
    }
    const article = await this.prisma.articles.create({
      data: {
        ...createArticleDto,
      },
    });
    return new ResponseArticleDto(article);
  }
  async updateArticle(
    id: string,
    createArticleDto: CreateArticleDto,
  ): Promise<ResponseArticleDto> {
    const article = await this.prisma.articles.findUnique({ where: { id } });
    if (!article) {
      throw new NotFoundException(`Article with ID ${id} not found`);
    }
    return await this.prisma.articles.update({
      where: { id },
      data: createArticleDto,
    });
  }

  async deleteArticle(id: string): Promise<string> {
    try {
      await this.prisma.articles.delete({ where: { id } });
      return `Article deleted!`;
    } catch (error) {
      console.error(error);
      throw new NotFoundException(`Article with ID ${id} not found`);
    }
  }
}
