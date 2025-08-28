import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { ResponseArticleDto } from './dto/response-article.dto';
import { ArticleService } from './article.service';
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  /**
   * Retrieve all articles from the database
   * @returns A list of all articles
   */
  @ApiOperation({ summary: 'Retrieve all articles from the database' })
  @ApiResponse({
    status: 200,
    description: 'Articles successfully retrived',
    type: ResponseArticleDto,
  })
  @Get()
  async findAll(): Promise<ResponseArticleDto[]> {
    return await this.articleService.findAll();
  }

  /**
   * Retrieve a specific article by its unique identifier.
   *
   * @param id - The unique identifier of the article
   * @returns The article object if found
   */
  @ApiOperation({
    summary: 'Retrieve a specific article by its unique identifier',
  })
  @ApiResponse({
    status: 200,
    description: 'Article successfully retrieved',
    type: ResponseArticleDto,
  })
  @ApiBadRequestResponse({ description: 'Invalid ID' })
  @Get(':id')
  async findArticle(@Param('id') id: string): Promise<ResponseArticleDto> {
    return await this.articleService.findById(id);
  }

  /**
   * Creates a new article
   * @param  createArticleDto new article data
   * @returns Created article response
   */
  @ApiOperation({
    summary: 'Create a new article',
  })
  @ApiResponse({
    status: 201,
    description: 'Article successfully created',
    type: ResponseArticleDto,
  })
  @ApiBadRequestResponse({
    description: 'Invaild',
  })
  @Post()
  async createArticle(
    @Body() createArticleDto: CreateArticleDto,
  ): Promise<ResponseArticleDto> {
    return await this.articleService.createArticle(createArticleDto);
  }

  /**
   * Updates an existing article by ID.
   * @param id - Article ID
   * @param createArticleDto - Updated article data
   * @returns Updated article
   */

  @ApiOperation({
    summary: 'Update an existing article completely',
  })
  @ApiResponse({
    status: 200,
    description: 'Article successfully updated',
    type: ResponseArticleDto,
  })
  @ApiBadRequestResponse({
    description: 'Invalid input data',
  })
  @Put(':id')
  async updateArticle(
    @Param('id') id: string,
    @Body() createArticleDto: CreateArticleDto,
  ): Promise<ResponseArticleDto> {
    return await this.articleService.updateArticle(id, createArticleDto);
  }

  /**
   * Remove an article from the database using its ID.
   * @param {string} id - The unique identifier of the article to delete.
   * @returns Successful message.
   */
  @ApiOperation({
    summary: 'Remove an article from the database using its ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Article Deleted',
    type: ResponseArticleDto,
  })
  @ApiBadRequestResponse({
    description: 'Invalid ID format',
  })
  @Delete(':id')
  async deleteArticle(@Param('id') id: string): Promise<string> {
    return await this.articleService.deleteArticle(id);
  }
}
