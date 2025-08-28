import { IsString, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export const TITLE_MIN_LENGTH = 3;
export const TITLE_MAX_LENGTH = 200;
export const CONTENT_MIN_LENGTH = 10;
export const CONTENT_MAX_LENGTH = 2000;

export class CreateArticleDto {
  @ApiProperty({
    description: 'Article name',
    example: 'My First blog',
    minLength: TITLE_MIN_LENGTH,
    maxLength: TITLE_MAX_LENGTH,
  })
  @IsString()
  @MinLength(TITLE_MIN_LENGTH, { message: 'Title is too short' })
  @MaxLength(TITLE_MAX_LENGTH, { message: 'Title is too long' })
  title: string;

  @ApiProperty({
    description: 'Article content',
    example: 'This is the content of my first blog',
    minLength: CONTENT_MIN_LENGTH,
    maxLength: CONTENT_MAX_LENGTH,
  })
  @IsString()
  @MinLength(CONTENT_MIN_LENGTH, { message: 'Content is too short' })
  @MaxLength(CONTENT_MAX_LENGTH, { message: 'Content is too long' })
  content: string;
}
