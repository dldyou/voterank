import { Module } from '@nestjs/common';
import { PollsService } from './polls.service.js';
import { PollsController } from './polls.controller.js';

@Module({
  providers: [PollsService],
  controllers: [PollsController]
})
export class PollsModule {}
