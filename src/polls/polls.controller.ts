import { Body, Controller, Get, Post } from '@nestjs/common';
import { PollsService } from './polls.service.js';

@Controller('polls')
export class PollsController {
  constructor(private readonly pollsService: PollsService) {}

  @Post()
  create(@Body('title') title: string, @Body('description') description: string) {
    this.pollsService.create(title, description);
  }

  @Get()
  findAll() {
    return this.pollsService.findAll();
  }
}
