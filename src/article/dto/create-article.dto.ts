import { IsString, MaxLength, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export const TITLE_MAX_LENGTH = 200;
export const CONTENT_MAX_LENGTH = 2000;

export class CreateArticleDto {
  @ApiProperty({
    description: 'Article name',
    example: 'My First blog',
    maxLength: TITLE_MAX_LENGTH,
  })
  @IsString()
  @IsNotEmpty({ message: 'Title cannot be empty' })
  @MaxLength(TITLE_MAX_LENGTH, { message: 'Title is too long' })
  title: string;

  @ApiProperty({
    description: 'Article content',
    example: 'This is the content of my first blog',
    maxLength: CONTENT_MAX_LENGTH,
  })
  @IsString()
  @IsNotEmpty({ message: 'Content cannot be empty' })
  @MaxLength(CONTENT_MAX_LENGTH, { message: 'Content is too long' })
  content: string;
}
