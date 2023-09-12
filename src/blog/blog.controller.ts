import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { BlogDto } from './dto/blog.dto';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}
  // get
  @HttpCode(200)
  @Get()
  async getAll() {
    return this.blogService.getAllBlog();
  }
  // post
  @HttpCode(201)
  @Post('create')
  @UsePipes(ValidationPipe)
  async create(@Body() dto: BlogDto) {
    return this.blogService.create(dto);
  }
  // getById
  @HttpCode(200)
  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.blogService.getById(id);
  }
  // update
  @HttpCode(200)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: BlogDto) {
    return this.blogService.update(id, dto);
  }
  // delete
  @HttpCode(200)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.blogService.delete(id);
  }
}
