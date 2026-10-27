import { Body, Controller, Get, Post } from '@nestjs/common';
import { PollsService } from './polls.service.js';
import { CreatePollDto } from './dto/create-poll.dto.js';

@Controller('polls')
export class PollsController {
  constructor(private readonly pollsService: PollsService) {}

  @Post()
  create(@Body() body: CreatePollDto) {
    this.pollsService.create(body.title, body.description);
  }

  @Get()
  findAll() {
    return this.pollsService.findAll();
  }
}
