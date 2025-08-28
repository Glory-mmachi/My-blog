import { ApiProperty } from '@nestjs/swagger';

export class ResponseArticleDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;

  constructor(partial: Partial<ResponseArticleDto>) {
    Object.assign(this, partial);
  }
}
